<template>
  <div v-if="task" class="flex flex-col gap-1.5 border-b border-outline-gray-1 bg-surface-gray-1/40 px-5 py-3 transition-colors">
    <div class="flex items-center justify-between gap-2">
      <span class="text-xs font-semibold uppercase tracking-wider text-ink-gray-5">{{ __('Next step') }}</span>
      <FollowUpActions :task="task" @change="emit('change')" />
    </div>
    <button
      type="button"
      class="flex items-center justify-between gap-3 text-left p-1.5 -mx-1.5 rounded-lg hover:bg-surface-gray-2/70 transition-colors group"
      @click="emit('open', task)"
    >
      <span class="min-w-0 truncate text-base font-medium text-ink-gray-9 group-hover:text-ink-gray-9">
        {{ task.title }}
      </span>
      <Tooltip :text="formatTaskDue(task, 'long')">
        <span
          class="shrink-0 whitespace-nowrap text-xs font-medium leading-5 px-2 py-0.5 rounded-full"
          :class="isTaskOverdue(task) ? 'bg-red-50 text-red-600 ring-1 ring-red-200' : 'bg-surface-gray-2 text-ink-gray-6'"
        >
          {{ formatTaskDue(task) }}
        </span>
      </Tooltip>
    </button>
  </div>
</template>
<script setup>
import FollowUpActions from '@/components/FollowUp/FollowUpActions.vue'
import { formatTaskDue, isTaskOverdue, nextFollowUp } from '@/utils/task'
import { Tooltip } from 'frappe-ui'
import { computed } from 'vue'

const props = defineProps({
  tasks: { type: Array, default: () => [] },
})

const emit = defineEmits(['open', 'change'])

const task = computed(() => nextFollowUp(props.tasks))
</script>
