import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createDialog } from './utils/dialogs'
import { initSocket } from './socket'
import router from './router'
import translationPlugin from './translation'
import App from './App.vue'

import {
  FrappeUI,
  Button,
  TextInput,
  FormControl,
  ErrorMessage,
  Dialog,
  Alert,
  Badge,
  setConfig,
  frappeRequest,
} from 'frappe-ui'

import { telemetryPlugin } from '@framework/ui/telemetry'
// injects the lucide SVG sprite into the DOM so the IconPicker and lucide Icons
// (used for view icons) can render from it
import { spritePlugin } from 'frappe-ui/experimental'

import {
  mockResourceFetcher,
  defaultDevBoot,
  installMockApiInterceptor,
} from './data/mockFetcher'

const isStandalone =
  import.meta.env.DEV ||
  typeof window === 'undefined' ||
  typeof window.boot === 'undefined' ||
  import.meta.env.VITE_STANDALONE === 'true'

if (isStandalone) {
  if (typeof window !== 'undefined') {
    window.__crmStandalone = true
  }
  if (typeof document !== 'undefined' && !document.cookie.includes('user_id=')) {
    document.cookie = 'user_id=Administrator; path=/'
  }
  installMockApiInterceptor()
}

let globalComponents = {
  Button,
  TextInput,
  FormControl,
  ErrorMessage,
  Dialog,
  Alert,
  Badge,
}

// create a pinia instance
let pinia = createPinia()

let app = createApp(App)

setConfig(
  'resourceFetcher',
  isStandalone ? mockResourceFetcher : frappeRequest,
)
app.use(FrappeUI)
app.use(spritePlugin)
app.use(pinia)
app.use(translationPlugin)
for (let key in globalComponents) {
  app.component(key, globalComponents[key])
}
app.use(telemetryPlugin, { app_name: 'crm' })

app.config.globalProperties.$dialog = createDialog

let socket
function mountCrmApp(values = {}) {
  const merged = { ...defaultDevBoot, ...values }
  for (let key in merged) {
    window[key] = merged[key]
  }
  socket = initSocket()
  app.config.globalProperties.$socket = socket
  // after the boot, so the first navigation sees it
  app.use(router)
  app.mount('#app')
}

if (isStandalone) {
  // Mount immediately with in-memory zero-API boot context
  mountCrmApp(defaultDevBoot)
  window.$dialog = createDialog
} else {
  socket = initSocket()
  app.config.globalProperties.$socket = socket
  app.use(router)
  app.mount('#app')
}
