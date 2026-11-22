<template>
  <div class="flex h-screen w-screen overflow-hidden bg-surface-gray-1 overscroll-none">
    <AppSidebar />
    <div class="flex-1 flex flex-col h-full min-w-0 overflow-hidden bg-surface-gray-1 overscroll-none">
      <AppHeader />
      <main class="flex-1 min-h-0 overflow-y-auto bg-surface-gray-1 flex flex-col overscroll-none">
        <slot />
      </main>
    </div>
    <GlobalModals />
  </div>
</template>
<script setup>
import AppSidebar from '@/components/Layouts/AppSidebar.vue'
import AppHeader from '@/components/Layouts/AppHeader.vue'
import GlobalModals from '@/components/Modals/GlobalModals.vue'
import { availabilityStore } from '@/stores/availability'

// listen for status changes from the start, not only once a picker opens
availabilityStore()
</script>
