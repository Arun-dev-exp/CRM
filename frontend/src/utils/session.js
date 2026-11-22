export function getSessionUser() {
  const cookies =
    typeof document !== 'undefined' && document.cookie
      ? new URLSearchParams(document.cookie.split('; ').join('&'))
      : null
  const user = cookies?.get('user_id')
  if (user && user !== 'Guest') {
    return user
  }
  if (
    import.meta.env.DEV ||
    typeof window === 'undefined' ||
    typeof window.boot === 'undefined' ||
    import.meta.env.VITE_STANDALONE === 'true' ||
    Boolean(typeof window !== 'undefined' && window.__crmStandalone)
  ) {
    return 'Administrator'
  }
  return null
}
