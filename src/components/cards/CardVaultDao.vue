<template>
  <div class="w-full rounded-md shadow-md p-4 bg-white font-inter space-y-4">
    <span class="text-base font-medium text-gray-900">Submit a proposal</span>
    <div class="flex flex-col items-start space-y-1">
      <span class="text-sm text-black font-normal"
        >As a fraction owner you can submit a proposal. A 10% approval is needed to make it an official onchain votable proposal</span
      >
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Submit a Proposal</label
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
          SUBMIT YOUR PROPOSAL
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