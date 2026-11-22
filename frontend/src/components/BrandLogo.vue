<template>
  <div
    v-if="brand?.logo && !imageFailed"
    class="flex items-center justify-center"
    v-bind="$attrs"
  >
    <img
      :src="brand.logo"
      class="h-full w-auto max-w-full object-contain"
      alt="CRM Logo"
      @error="imageFailed = true"
    />
  </div>
  <CRMLogo v-else class="size-8 shrink-0 rounded-4" v-bind="$attrs" />
</template>

<script setup>
import { ref, watch } from 'vue'
import CRMLogo from '@/components/Icons/CRMLogo.vue'

const brand = defineModel({ type: Object, default: () => ({}) })
const imageFailed = ref(false)

watch(
  () => brand.value?.logo,
  () => {
    imageFailed.value = false
  },
)
</script>
