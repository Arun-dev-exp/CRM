<template>
  <div class="flex items-center border-b border-outline-gray-1 bg-surface-base pr-5 min-h-[46px] transition-colors">
    <div id="app-header" class="flex-1"></div>
    <div class="flex items-center justify-center">
      <CallUI />
    </div>
  </div>
</template>

<script setup>
import CallUI from '@/components/Telephony/CallUI.vue'
</script>
