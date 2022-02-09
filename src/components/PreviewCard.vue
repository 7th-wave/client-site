<template>
<div class="px-3 xl:card lg:card w-full flex flex-col bg-white rounded-xl">
  <div class="relative pt-6 px-6 pb-4 mb-5 -mx-3 md:px-8 border-b border-gray-300">
    <h3 class="text-2xl text-center font-medium text-black heading-8">Original Pegged NFT</h3>
  </div>

  <div class="flex flex-wrap lg:mx-4 mx-1 pb-4">
    <!-- preview -->
    <div class="h-max flex items-start lg:w-5/12 md:w-5/12 w-full lg:pb-0 pb-4">
      <img src="/images/art-1.jpg" alt="" />
    </div>
    
    <div class="relative flex flex-col md:justify-between justify-start md:pl-4 pl-0 h-full md:w-7/12 w-full">
      <div class="relative">
        <p class="text-2xl font-medium text-black leading-8">Shuffling Sam</p>
        <div class="mt-1 flex">
          <div class="mx-1 text-sm font-medium text-teal-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg> 
          </div>
          <div class="flex items-baseline text-base font-normal text-black leading-6">
            238 QR views
          </div>
        </div>
        <div class="relative py-2">
          <div class="absolute inset-0 flex md:max-w-5xl y-8 m-auto items-center" aria-hidden="true">
            <div class="w-full border-b border-gray-300"></div>
          </div>
        </div>
        <div class="relative mt-2 flex items-baseline md:block lg:flex">
            <!-- class="relative flex items-baseline text-2xl font-semibold font-opensans text-black" -->
          <div 
            class="relative grid grid-cols-12 items-baseline text-2xl font-semibold font-opensans text-black"
          >
            <USDC />
            <div class="flex col-span-11 items-baseline">
              228.61 
              <!-- <span class="mx-2 text-sm font-medium text-gray-500 font-opensans"> ($450,000.00) </span> -->
            </div>
          </div>
        </div>
        <div class="mt-4 flex items-baseline md:block lg:flex">
          <div class="flex flex-wrap items-baseline text-base font-bold text-gray-500">
            Auction End:
            <div>
              <span class="md:mx-2 ml-1 text-base font-normal text-gray-500"> <span class="text-black text-base">123</span>days | <span class="text-black text-base">13</span>min | <span class="text-black text-base">06</span>sec</span>
            </div>
          </div>
        </div>
        <div class="mt-5 flex items-baseline md:block lg:flex">
          <div class="flex items-baseline text-base font-bold text-gray-500">
            Artist: 
            <span class="mx-2 text-base font-normal text-teal-400"> Mario Sanchez</span>
          </div>
        </div>
        <div class="mt-1 flex items-baseline md:block lg:flex">
          <div class="flex items-baseline text-base font-bold text-gray-500">
            Dimensions: 
            <span class="mx-2 text-base font-normal text-gray-500"> 18" x 11"</span>
          </div>
        </div>
        <div class="mt-1 flex items-baseline md:block lg:flex">
          <div class="flex items-baseline text-base font-bold text-gray-500">
            Medium: 
            <span class="mx-2 text-base font-normal text-gray-500">Intaglio</span>
          </div>
        </div>  
        <div class="mt-1 flex items-baseline md:block lg:flex">
          <div class="flex items-baseline text-base font-bold text-gray-500">
            Owner: 
            <span class="mx-2 text-base font-normal text-gray-500">N/A</span>
          </div>
        </div>  
        <div class="mt-1 flex items-baseline md:block lg:flex">
          <div class="flex items-baseline text-base font-bold text-gray-500">
            NFT: 
            <span class="mx-2 text-base font-normal text-gray-500">Original</span>
          </div>
        </div>  
      </div>

      <!-- button view original -->
      <div class="pt-4 lg:pb-0 pb-4 rounded-bl-2xl rounded-br-2xl">
        <a 
          href="/artwork" 
          type="button"
          :class="[
          'flex items-center justify-center text-center uppercase w-full focus:outline-none',
          'lg:px-12 px-4 py-2',
          'border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
          ]" 
        >        
          <ArrowNarrowLeftIcon  class="h-5 w-5 mr-2" aria-hidden="true" />
          View original  
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add the lines below */
@layer utilities {
  @variants responsive {
    .card {
      width: 630px !important;
    }
  }
}
</style>

<script>
import { 
  ArrowNarrowLeftIcon, 
} from '@heroicons/vue/outline'
import USDC from './Shared/USDC.vue'
export default {
  components: {
    ArrowNarrowLeftIcon,
    USDC,
  },
  setup() {
    
  },
}
</script>