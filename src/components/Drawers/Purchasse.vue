<template>
  <div
    class="
      w-full
      bg-white
      rounded-md
      shadow-md
      h-full
      p-4
      font-inter
      ease-in-out
      duration-300  
    "
    :class="{'max-h-14':!open,'max-h-96':open}"
  >
    <div
      class="flex items-center justify-between w-full cursor-pointer"
      @click="open = !open"
    >
      <span class="text-lg text-primary-200 font-medium">Nike Collection</span>
      <IconChevron :class="{ top: !open }" class="ease-in-out duration-300" />
    </div>
    <div
      class="
        flex flex-col
        items-start
        w-full
        space-y-2
        ease-in-out
        duration-300
      "
      :class="{ hidden: !open }"
    >
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
          10,000.00 <span class="font-semibold"> {{getParams == 'FineArt' ? 'CVMAN' : 'NIKE'}}</span>
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
      <div class="w-full h-px bg-gray-300"></div>
      <div class="w-full flex flex-col items-start space-y-3">
        <span class="text-sm text-gray-500 font-normal">ONCHAIN RECORD</span>
        <div class="flex items-center space-x-4">
          <span class="text-xs text-gray-500 font-normal">Txn Hash</span>
          <span class="text-primary-500 font-medium text-base"
            >0xb56....671f774d257c6</span
          >
          <div class=" cursor-pointer">
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00895 6.55485V15.8882C6.00895 17.1768 7.05362 18.2215 8.34228 18.2215H15.3423M6.00895 6.55485V4.22152C6.00895 2.93285 7.05362 1.88818 8.34228 1.88818H13.6924C14.0018 1.88818 14.2985 2.0111 14.5173 2.22989L19.6672 7.37981C19.886 7.5986 20.0089 7.89535 20.0089 8.20477V15.8882C20.0089 17.1768 18.9643 18.2215 17.6756 18.2215H15.3423M6.00895 6.55485H3.34229C2.23772 6.55485 1.34229 7.45028 1.34229 8.55485V20.5548C1.34229 21.8435 2.38695 22.8882 3.67562 22.8882H13.3423C14.4469 22.8882 15.3423 21.9928 15.3423 20.8882V18.2215"
                stroke="#049AFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import IconChevron from "../Icons/IconChevron .vue";

export default {
  data() {
    return {
      open: true,
    };
  },
  components: {
    IconChevron,
  },
  computed:{
     getParams(){
      return this.$route.params.id;
    }
  }
};
</script>


<style scoped>
.top {
  transform: rotate(180deg);
}
</style>