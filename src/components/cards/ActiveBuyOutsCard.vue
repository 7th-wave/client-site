<template>
  <div class="w-full rounded-md shadow-md p-4 bg-white font-inter space-y-4">
    <span class="text-base font-medium text-gray-900">Active Buyouts</span>
    <div class="flex flex-col items-start space-y-1">
      <span class="text-sm text-black font-normal"
        >As a fraction owner you can vote to approve buyouts. A 51% approval is needed.</span
      >
    </div>
    <div
      class="w-full border-2 rounded-md flex lg:flex-row flex-col lg:border-r-0"
    >
      <div class="lg:w-28 w-full flex flex-col items-start lg:border-r-2 lg:border-b-0 border-b-2 p-4">
        <span class="text-base text-gray-500 font-inter whitespace-nowrap">{{
          getParams == "cvman" ? "NFT" : "NFTs"
        }}</span>
        <span class="text-black font-inter text-2xl">
          {{ getParams == "cvman" ? "1" : "6" }}
        </span>
      </div>
      <div class="lg:w-28 w-full flex flex-col items-start lg:border-r-2 lg:border-b-0 border-b-2  p-4">
        <span class="text-base text-gray-500 font-inter whitespace-nowrap"
          >Fractions</span
        >
        <span class="text-black font-inter text-2xl"
          >{{ getParams == "cvman" ? "100M" : "2M" }}
        </span>
      </div>
      <div class="lg:w-40 w-full flex flex-col items-start lg:border-r-2 lg:border-b-0 border-b-2 p-4">
        <span class="text-base text-gray-500 font-inter whitespace-nowrap"
          >Unique Owners</span
        >
        <span class="text-black font-inter text-2xl whitespace-nowrap"
          >1000
        </span>
      </div>
      <div class="lg:w-40 w-full flex flex-col items-start lg:border-r-2 lg:border-b-0 border-b-2 p-4">
        <span class="text-base text-gray-500 font-inter whitespace-nowrap"
          >Buyout Offer</span
        >
        <span class="text-black font-inter text-2xl">49% </span>
        <span class="text-sm text-gray-500 font-inter whitespace-nowrap"
          >$2M {{ getParams == "cvman" ? "CVMAN" : "NIKE" }}</span
        >
      </div>
      <div class="w-full flex flex-col items-start lg:border-r-2 p-4">
        <span class="text-base text-gray-500 font-inter whitespace-nowrap"
          >Implied Vault Valuation</span
        >
        <span class="text-black font-inter text-2xl whitespace-nowrap">
          {{ getParams == "cvman" ? "≈ $ 10,000,000.00" : "≈ $ 2,000,000.00" }}
        </span>
        <span class="text-sm text-gray-500 font-inter whitespace-nowrap"
          >≈ $1 / {{ getParams == "cvman" ? "CVMAN" : "NIKE" }}</span
        >
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