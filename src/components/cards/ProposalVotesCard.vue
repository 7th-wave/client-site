<template>
  <div class="w-full rounded-md shadow-md p-4 bg-white font-inter space-y-4">
    <span class="text-base font-medium text-gray-900">Proposal Votes</span>
    <div class="flex flex-col items-start space-y-1">
      <span class="text-sm text-black font-normal"
        >As a fraction owner you can vote to approve proposals. A 10% approval is needed.</span
      >
      
    </div>
    <div class="w-full border-2 rounded-md flex lg:flex-row flex-col lg:border-r-0">

          <div class="w-full flex flex-col items-start lg:border-r-2 lg:border-b-0 border-b-2 p-4">
          <span class="text-base text-gray-500 font-inter whitespace-nowrap">Unique Owners</span>
          <span class="text-black font-inter text-2xl">
            {{ uniqueOwner }}
          </span>
          </div>
      
          <div class="w-full flex flex-col items-start lg:border-r-2 lg:border-b-0 border-b-2 p-4">
            <span class="text-base text-gray-500 font-inter whitespace-nowrap"
              >Voted No</span
            >
            <span class="text-black font-inter text-2xl">{{votedNo}}%</span>
            <span class="text-sm text-gray-500 font-inter whitespace-nowrap"
              >{{votedNoVotes}} Votes</span
            >
          </div>
          <div class="w-full flex flex-col items-start lg:border-r-2 lg:border-b-0 border-b-2 p-4">
            <span class="text-base text-gray-500 font-inter whitespace-nowrap"
              >Voted Yes</span
            >
            <span class="text-black font-inter text-2xl">{{votedYes}}%</span>
            <span class="text-sm text-gray-500 font-inter whitespace-nowrap"
              >{{votedYesVotes}} Votes</span
            >
          </div>
          <div class="w-full flex flex-col items-start lg:border-r-2 p-4">
            <span class="text-base text-gray-500 font-inter whitespace-nowrap"
              >Approve Proposal</span
            >
            <span class="text-sm text-gray-500 font-inter whitespace-nowrap"
              > <Button :btnStyle="'black'" :size="'default'" :class="'w-full'">vote onchain</Button> </span
            >
          </div>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import {  useRoute } from "vue-router";
import Button from '../Layouts/Button.vue';

export default {
  components: { Button },
  setup(){
    const route = useRoute();
    const getParams = computed(() => route.params.id);
    const uniqueOwner = computed(() => {
      if (route.params.id=='cvman'){
        return 1000
      } else if (route.params.id=='mjs'){
        return 2000
      } else{
        return 4000
      }

    });
    
    
    const votedNo = computed(() => {
      if (route.params.id=='cvman'){
        return 50.9
      } else if (route.params.id=='mjs'){
        return 60
      } else{
        return 70
      }

    });
    const votedNoVotes = computed(() => {
      if (route.params.id=='cvman'){
        return 5099
      } else if (route.params.id=='mjs'){
        return 6000
      } else{
        return 7000
      }

    });
    const votedYes = computed(() => {
      if (route.params.id=='cvman'){
        return 49
      } else if (route.params.id=='mjs'){
        return 40
      } else{
        return 30
      }

    });
    const votedYesVotes = computed(() => {
      if (route.params.id=='cvman'){
        return 5099
      } else if (route.params.id=='mjs'){
        return 4000
      } else{
        return 3000
      }

    });

    return {
      getParams,
      uniqueOwner,
      votedNo,
      votedNoVotes,
      votedYes,
      votedYesVotes,
    };
  }
}
</script>