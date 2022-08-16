<template>
  <Switch
    v-model="enabled"
    :class="enabled ? 'bg-primary-200' : 'bg-primary-900'"
    class="relative inline-flex h-6 w-11 items-center rounded-full"
  >
    <span class="sr-only">{{label}}</span>
    <span
      :class="enabled ? 'translate-x-6' : 'translate-x-1'"
      class="inline-block h-4 w-4 transform rounded-full bg-white"
    />
  </Switch>
</template>

<script setup>
  import { ref, defineProps, defineEmits, watch, toRefs } from 'vue'
  import { Switch } from '@headlessui/vue'

  const emit = defineEmits(['on:selected']);

  const props = defineProps({
    label: String,
    });

    const { label } = toRefs(props);


  const enabled = ref(false)

  watch(enabled, (value) => {
    console.log(value);
    emit('on:selected', value)
    })
</script>