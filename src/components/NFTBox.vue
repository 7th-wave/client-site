<template>
<div class="hidden mt-8 md:mx-auto sm:mx-0 px-4 p-8 lg:mt-8 lg:mb-8 lg:rounded-l-lg bg-gray-500 sm:max-w-7xl lg:mr-0 sm:px-6 lg:px-8 xl:w-7xl w-full">
  <div class="flex md:flex-row flex-wrap flex-column justify-between"> 
    <div class="flex items-center text-2xl font-medium leading-8 text-white">
      Shuffling Sam Pegged + NFT Series
      <span class="mx-2 text-sm font-medium text-primary-400 cursor-pointer" @click="openModal"> 
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>  
      </span>
    </div>

    <div class="flex justify-end md:max-w-3xl md:w-max sm:w-max w-full sm:w-full sm:flex hidden md:flex lg:max-w-7xl">
      <a 
        href="/series" 
        :class="[
          'flex justify-center text-center items-center text-sm uppercase w-full',
          'border border-gray-500  shadow-sm  leading-4 font-medium rounded-r-md rounded-l-lg text-gray-800 bg-white',
          'px-8 sm:px-4 w-md py-1',
        ]"
      >
        View Series
        <ArrowNarrowRightIcon  class="w-6 h-6 sm:ml-3 font-gray-600" />
      </a>
    </div>
  </div>
  
  <NFT />
  
  <div class="mt-4 justify-between items-baseline sm:hidden ">
    <a 
      href="/series" 
      :class="[
        'flex justify-center text-center items-center text-sm uppercase w-full',
        'border border-gray-500  shadow-sm  leading-4 font-medium rounded-r-md rounded-l-lg text-gray-800 bg-white',
        'px-8 w-md py-1',
      ]"
    >
      View Series
      <ArrowNarrowRightIcon  class="w-6 h-6 sm:ml-3 font-gray-600" />
    </a>
  </div>
</div>

</template>


<script>
import { ref } from 'vue'
import {  ArrowNarrowRightIcon } from '@heroicons/vue/outline'
import NFT from '@/components/PeggedNFTBox'
export default {
  components: {
    NFT,
    ArrowNarrowRightIcon,
  },
  props: [],
  setup(props, {emit}) {
    const openModal =() => {
      emit('on:open')
    }
    const open = ref(false)
    return {
      open,
      openModal
    }
  },
}
</script>
