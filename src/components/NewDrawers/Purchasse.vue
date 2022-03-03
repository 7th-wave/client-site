<template>
  <div
    class="w-full bg-white rounded-md shadow-md   h-full p-4 font-inter  ease-in-out duration-300"
    :class="{'max-h-14':!open,'max-h-80':open}"
  >
    <div class="flex items-center justify-between w-full cursor-pointer" @click=" open = !open">
      <span class="text-lg text-primary-200 font-medium">Nike Collection</span>
      <IconChevron :class="{ top: !open }" class="ease-in-out duration-300" />
    </div>
    <div class="flex flex-col items-start w-full space-y-2  ease-in-out duration-300" :class="{'hidden':!open}">
      <div class="flex items-center space-x-1">
        <span class="text-sm text-black font-semibold">Date:</span>
        <span class="text-sm font-normal text-black">02/25/2020</span>
      </div>
      <div class="flex flex-col items-start space-y-1">
        <span class="text-gray-500 text-xs">YOU PAID</span>
        <p class="text-sm text-black font-normal">
          5,000.00 <span class="font-semibold"> USDT</span>
        </p>
        <span class="text-gray-500 text-xs">≈ $5,000.00</span>
      </div>
      <div class="w-full h-px bg-gray-300"></div>
      <div class="flex flex-col items-start space-y-1">
        <span class="text-gray-500 text-xs">YOU RECEIVE</span>
        <p class="text-sm text-black font-normal">
          10,000.00 <span class="font-semibold"> NIKE</span>
        </p>
      </div>
      <div class="w-full flex flex-col items-start space-y-3">
        <div class="flex items-center space-x-2 w-full">
          <span
            class="
              text-xs text-gray-500
              font-normal font-inter
              whitespace-nowrap
            "
            >Gas + Fees</span
          >
          <div class="w-full h-px bg-gray-300"></div>
          <span
            class="
              text-xs text-gray-500
              font-normal font-inter
              whitespace-nowrap
            "
            >≈ $47.08</span
          >
        </div>
        <div class="flex items-center space-x-2 w-full">
          <span
            class="
              text-xs text-gray-500
              font-normal font-inter
              whitespace-nowrap
            "
            >Total</span
          >
          <div class="w-full h-px bg-gray-300"></div>
          <span
            class="
              text-xs text-gray-500
              font-normal font-inter
              whitespace-nowrap
            "
            >≈ 10,047.08 DAI</span
          >
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import IconChevron from "../Icons/IconChevron .vue";

export default {
    data(){
        return {
           open: true,
        }
    },
  components: {
    IconChevron,
  },
};
</script>


<style scoped>
.top {
  transform: rotate(180deg);
}
</style>