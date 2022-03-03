<template>
  <div class="sm:w-max w-full flex justify-center">
    <div class="mt-1 w-11/12 sm:w-full relative rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input 
        type="text" 
        name="search" 
        id="search" 
        class="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" 
        placeholder="Search"
        v-on:keyup="$emit('on:change', $event)"
      />
    </div>
  </div>
</template>

<script>
import { SearchIcon } from '@heroicons/vue/outline'

export default {
  components: {
    SearchIcon,
  },
}
</script>