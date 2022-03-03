<template>
<div class="pt-3">
  <label for="email" class="block text-sm font-medium text-gray-700">{{label}}</label>
  <div class="mt-1">
    <input 
      :type="type" 
      :name="name" 
      :id="name" 
      class="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md" 
      :placeholder="placeholder" 
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</div>
</template>
<script>
 
export default {
  components: {},
  props: ['label', 'type', 'name', 'placeholder'],
  setup() {
  
    return {}
  },
}
</script>