<script lang="ts" setup>
const {
  modelValue,
  type = 'text',
  placeholder,
  label
} = $defineProps<{
  modelValue: string
  label: string
  placeholder: string
  type?: string
}>()

const emits = defineEmits<{
  (event: 'update:modelValue', data: unknown): void
}>()
</script>

<template>
  <div>
    <label
      :for="label"
      v-if="label"
      class="block pl-3 ml-px text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>
    <input
      :type="type"
      :name="label"
      :value="modelValue"
      :placeholder="placeholder"
      @input="(event:Event) => emits('update:modelValue', (event.target as HTMLInputElement).value)"
      class="block px-4 py-2 w-full border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  </div>
</template>
