import { reactive } from 'vue'

const nothing = () => null

export const AccountForm = nothing
export const MessageInput = nothing
export const MessageList = nothing
export const TemplateContent = nothing
export const TemplateForm = nothing
export const TemplatePreview = nothing

export function useMessages() {
  return reactive({
    messages: [],
    loading: false,
    error: null,
    reload() {},
    react() {},
    setReplyTo() {},
  })
}

export function useAccount() {
  return reactive({ doc: {}, loading: false })
}

export function useTemplate() {
  return reactive({ doc: {}, loading: false })
}

export function useTemplates() {
  return reactive({ templates: [], loading: false })
}

export function useAppendToggle() {
  return {}
}

export function serverErrorMessage() {
  return ''
}
