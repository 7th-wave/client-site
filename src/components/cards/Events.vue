<template>
    <div class=" w-full rounded-md bg-white shadow-md flex flex-col items-start py-4 px-4 space-y-4">
        <div class=" w-full flex items-center justify-between">
            <span class=" text-lg font-inter font-medium text-black">Events</span>
            <div class=" cursor-pointer">
                <ChevronDownIcon class=" h-6 w-6 text-gray-400" />
            </div>
        </div>
        <div class=" w-full p-2 bg-gray-100 flex flex-col items-start space-y-1  ">
            <div class=" flex items-center space-x-1.5">
                <span class=" text-gray-900 font-bold text-base font-inter">Event:</span>
                <span class=" text-gray-900 font-normal text-base font-inter"> Reserve changed</span>
            </div>
             <div class=" flex items-center space-x-1.5">
                <span class=" text-gray-900 font-bold text-base font-inter">By:</span>
                <span class=" text-primary-500 font-semibold text-base font-inter"> 0xaBF1...395d</span>
            </div >
             <div class=" flex items-center space-x-1.5">
                <span class=" text-gray-900 font-bold text-base font-inter">Price:</span>
                <span class=" text-gray-900 font-normal text-base font-inter">Ξ 50,000</span>
                <span class=" text-gray-500  font-sm text-base font-inter">≈ $124,052,210.07</span>
            </div>
             <div class=" flex items-center space-x-1.5">
                <span class=" text-gray-900 font-bold text-base font-inter">Placed:</span>
                <span class=" text-gray-900 font-normal text-base font-inter">Jul 25, 2021 at 7:56 PM</span>
            </div>
             <div class=" flex items-center space-x-1.5">
                <span class=" text-gray-900 font-bold text-base font-inter">Status:</span>
                <span class=" text-gray-900 font-normal text-base font-inter">Approved</span>
            </div>
        </div>
         <div class=" w-full p-2 bg-white flex flex-col items-start space-y-1  ">
            <div class=" flex items-center space-x-1.5">
                <span class=" text-gray-900 font-bold text-base font-inter">Event:</span>
                <span class=" text-gray-900 font-normal text-base font-inter"> Reserve changed</span>
            </div>
             <div class=" flex items-center space-x-1.5">
                <span class=" text-gray-900 font-bold text-base font-inter">By:</span>
                <span class=" text-primary-500 font-semibold text-base font-inter"> 0xaBF1...395d</span>
            </div >
             <div class=" flex items-center space-x-1.5">
                <span class=" text-gray-900 font-bold text-base font-inter">Price:</span>
                <span class=" text-gray-900 font-normal text-base font-inter">Ξ 50,000</span>
                <span class=" text-gray-500  font-sm text-base font-inter">≈ $124,052,210.07</span>
            </div>
             <div class=" flex items-center space-x-1.5">
                <span class=" text-gray-900 font-bold text-base font-inter">Placed:</span>
                <span class=" text-gray-900 font-normal text-base font-inter">Jul 25, 2021 at 7:56 PM</span>
            </div>
             <div class=" flex items-center space-x-1.5">
                <span class=" text-gray-900 font-bold text-base font-inter">Status:</span>
                <span class=" text-gray-900 font-normal text-base font-inter">Approved</span>
            </div>
        </div>
         <div class=" w-full p-2 bg-gray-100 flex flex-col items-start space-y-1  ">
            <div class=" flex items-center space-x-1.5">
                <span class=" text-gray-900 font-bold text-base font-inter">Event:</span>
                <span class=" text-gray-900 font-normal text-base font-inter"> Reserve changed</span>
            </div>
             <div class=" flex items-center space-x-1.5">
                <span class=" text-gray-900 font-bold text-base font-inter">By:</span>
                <span class=" text-primary-500 font-semibold text-base font-inter"> 0xaBF1...395d</span>
            </div >
             <div class=" flex items-center space-x-1.5">
                <span class=" text-gray-900 font-bold text-base font-inter">Price:</span>
                <span class=" text-gray-900 font-normal text-base font-inter">Ξ 50,000</span>
                <span class=" text-gray-500  font-sm text-base font-inter">≈ $124,052,210.07</span>
            </div>
             <div class=" flex items-center space-x-1.5">
                <span class=" text-gray-900 font-bold text-base font-inter">Placed:</span>
                <span class=" text-gray-900 font-normal text-base font-inter">Jul 25, 2021 at 7:56 PM</span>
            </div>
             <div class=" flex items-center space-x-1.5">
                <span class=" text-gray-900 font-bold text-base font-inter">Status:</span>
                <span class=" text-gray-900 font-normal text-base font-inter">Approved</span>
            </div>
        </div>
    </div>
</template>


<script>
import {ChevronDownIcon} from "@heroicons/vue/solid"
export default {
        components: {ChevronDownIcon},
}
</script>