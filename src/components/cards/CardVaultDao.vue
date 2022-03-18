<template>
  <div class="w-full rounded-md shadow-md p-4 bg-white font-inter space-y-4">
    <span class="text-base font-medium text-gray-900">Vault DAO</span>
    <div class="flex flex-col items-start space-y-1">
      <span class="text-sm text-black font-normal"
        >As a fraction owner you can set a reserve price to allow an auction to
        take place</span
      >
      <span class="text-sm text-black font-normal"
        >An auction for this vault is only possible if reserve prices have been
        set by owners who collectively hold more than 50% of the total fraction
        supply.</span
      >
      <span class="text-sm text-black font-normal"
        >A reserve price is the minimum price needed for a complete vault
        buyout. Set a price you'd be willing to sell all the contents of this
        vault for through an auction.</span
      >
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Set a reserve price</label
      >
      <div class="mt-1 flex lg:flex-row flex-col items-start space-y-2 lg:space-y-0 lg:items-center lg:space-x-2">
        <input
          type="text"
          name="price"
          id="price"
          class="
            shadow-sm
            focus:ring-indigo-500 focus:border-indigo-500
            block
            w-full
            sm:text-sm
            border-gray-300
            rounded-md
          "
          :placeholder="getParams == 'cvman' ? '200,000.00' : '100,000.00'"
        />
        <button
          class="
            bg-black
            px-6
            py-2
            whitespace-nowrap
            rounded-md
            text-white text-base
            font-inter font-medium
          "
        >
          SUBMIT RESERVE PRICE
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import {  useRoute } from "vue-router";

export default {
  setup(){
    const route = useRoute();
    const getParams = computed(() => route.params.id);
    return {
      getParams
    };
  }
}
</script>