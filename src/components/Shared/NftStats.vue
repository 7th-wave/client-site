<template>
  <div
    class="
      inline-flex
      items-center
      justify-center
      w-full
      h-16
      border-t border-gray-200
    "
  >
    <div class="flex items-center justify-center flex-1 h-20 p-3">
      <div class="inline-flex flex-col items-start justify-start">
        <p class="text-sm leading-tight text-gray-500">Price</p>
        <div class="inline-flex items-end justify-start">
          <div class="flex space-x-2 items-end justify-start">
            <p class="text-lg font-semibold leading-normal">{{ nft.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-0.5 h-full bg-gray-200" />
    <div class="flex items-center justify-center flex-1 h-20 p-3">
      <div class="inline-flex flex-col items-start justify-start">
        <p class="text-sm leading-tight text-gray-500">Status</p>
        <div class="inline-flex space-x-4 items-end justify-start">
          <div class="flex space-x-2 items-end justify-start">
            <p class="text-lg font-semibold leading-normal">{{ nft.status }}</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  props: ['nft'],
  setup() {
    const route = useRoute();
    const getParams = computed(() => route.params.id);

    return {
      getParams
    };
  },
};
</script>