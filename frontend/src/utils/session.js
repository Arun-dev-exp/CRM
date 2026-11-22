export function getSessionUser() {
  const cookies = new URLSearchParams(document.cookie.split('; ').join('&'))
  const user = cookies.get('user_id')
  if (user && user !== 'Guest') {
    return user
  }
  if (import.meta.env.DEV) {
    return 'Administrator'
  }
  return null
}
