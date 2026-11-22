import { io } from 'socket.io-client'
import { getCachedListResource, getCachedResource } from 'frappe-ui'

export function initSocket() {
  if (
    import.meta.env.DEV ||
    typeof window === 'undefined' ||
    typeof window.boot === 'undefined' ||
    Boolean(window.__crmStandalone) ||
    !window.site_name
  ) {
    const handlers = {}
    const mockSocket = {
      on(event, fn) {
        handlers[event] = handlers[event] || []
        handlers[event].push(fn)
        return this
      },
      off(event, fn) {
        if (!handlers[event]) return this
        handlers[event] = handlers[event].filter((h) => h !== fn)
        return this
      },
      emit(event, data) {
        ;(handlers[event] || []).forEach((fn) => {
          try {
            fn(data)
          } catch (e) {
            console.warn('[MockSocket] handler error:', e)
          }
        })
        return this
      },
    }
    mockSocket.io = mockSocket
    return mockSocket
  }

  let socketio_port = window.socketio_port || 9000
  let host = window.location.hostname
  let siteName = window.site_name
  let port = window.location.port ? `:${socketio_port}` : ''
  let protocol = port ? 'http' : 'https'
  let url = `${protocol}://${host}${port}/${siteName}`

  let socket = io(url, {
    withCredentials: true,
    // Retry for good, with growing random gaps, so open tabs don't all
    // reconnect at the same moment while the server is slow.
    reconnectionDelay: 2000,
    reconnectionDelayMax: 30000,
    randomizationFactor: 0.5,
  })
  socket.on('refetch_resource', (data) => {
    if (data.cache_key) {
      let resource =
        getCachedResource(data.cache_key) ||
        getCachedListResource(data.cache_key)
      if (resource) {
        resource.reload()
      }
    }
  })
  return socket
}
