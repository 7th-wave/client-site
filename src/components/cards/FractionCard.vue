<template>
    <div class=" w-full bg-white p-4 shadow-md rounded-md space-y-4">
          <div class=" w-full flex justify-between items-center">
            <span class=" text-xl font-inter font-medium text-gray-900">{Vault Name} {Vault Ticker} Fraction Data</span>
            <div class=" py-2 px-4 rounded-md shadow-sm bg-white flex items-center cursor-pointer border-2" v-if="goDown" @click="gotoVaults">
              <span class=" font-inter text-sm  text-gray-700 font-medium">VIEW VAULT ASSETS</span>
              <ArrowDownIcon class=" w-5 h-3" />
            </div>
          </div>
          <div class=" w-full border-2 rounded-md flex lg:flex-row flex-col   lg:border-r-0">
            <div class=" w-28 flex flex-col items-start lg:border-r-2   p-4 ">
              <span class=" text-base text-gray-500 font-inter whitespace-nowrap">Fractions</span>
              <span class=" text-black font-inter text-2xl">2M </span>
            </div>
             <div class=" w-40 flex flex-col items-start lg:border-r-2  p-4">
              <span class=" text-base text-gray-500 font-inter whitespace-nowrap">Uique Owners</span>
              <span class=" text-black font-inter text-2xl whitespace-nowrap">2530 </span>
            </div>
             <div class=" w-48 flex flex-col items-start lg:border-r-2  p-4">
              <span class=" text-base text-gray-500 font-inter whitespace-nowrap">Collectable Supply</span>
              <span class=" text-black font-inter text-2xl">49% </span>
              <span class=" text-sm text-gray-500 font-inter whitespace-nowrap">980,000 NIKE</span>
            </div>
             <div class=" w-full flex flex-col items-start lg:border-r-2  p-4">
              <span class=" text-base text-gray-500 font-inter whitespace-nowrap">Implied Vault Valuation</span>
              <span class=" text-black font-inter text-2xl whitespace-nowrap">≈ $ 2,000,000.00 </span>
               <span class=" text-sm text-gray-500 font-inter whitespace-nowrap">≈ $1 / NIKE</span>

            </div>
          </div>
           <div class=" w-52 py-2 px-4 rounded-md shadow-sm bg-white flex items-center cursor-pointer border-2 space-x-2">
              <span class=" font-inter text-sm  text-gray-700 font-medium whitespace-nowrap">VIEW ON ETHER SCAN</span>
              <DatabaseIcon class=" w-4 h-4" />
            </div>
        </div>
</template>


<script>
import {ArrowDownIcon,DatabaseIcon} from "@heroicons/vue/solid";

export default {
    props: {
        goDown: {
            type: Boolean,
            default: true
        }
    },
    components: {ArrowDownIcon,DatabaseIcon},
    methods:{
      gotoVaults(){
        //scroll down 
        window.scrollTo({
          top:2400,
          behavior: 'smooth'
        });

      }
    }
}
</script>