<template>
  <div class="w-full space-y-5 flex flex-col items-start">
    <div class="w-full flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <EyeIcon class="w-5 h-4 text-primary-500 cursor-pointer" />
        <span class="text-base text-black font-normal font-inter"
          >238 QR VIEWS</span
        >
      </div>
      <div class="flex space-x-2 items-center">
        <RefreshIcon class="w-5 h-4 text-primary-500 cursor-pointer" />
        <ShareIcon class="w-5 h-4 text-primary-500 cursor-pointer" />
      </div>
    </div>
    <div
      class="
        w-full
        bg-white
        rounded-md
        shadow-md
        p-4
        flex flex-col
        items-start
        space-y-6
      "
    >
      <span class="text-lg font-semibold text-gray-900 font-inter"
        >BUY FRACTIONS</span
      >
      <div class="space-y-2 pt-5 w-full">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >You Pay</label
        >
        <div class="flex items-center space-x-2 w-full">
          <input
            type="text"
            name="pay"
            value="10,000.00"
            id="email"
            class="
              shadow-sm
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              sm:text-sm
              border-gray-300
              rounded-md
            "
            placeholder="you@example.com"
          />
          <select
            id="location"
            name="location"
            class="
              block
              w-24
              pl-3
              pr-10
              py-2
              text-base
              border-gray-300
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
              sm:text-sm
              rounded-md
            "
          >
            <option value="ETH">ETH</option>
            <option value="BTC">BTC</option>
            <option value="USDC">USDC</option>
            <option value="USDT" selected>USDT</option>
          </select>
        </div>
      </div>
      <div class="w-full h-px bg-gray-200"></div>
      <div class="flex items-center w-full space-x-4">
        <div class="space-y-2 pt-5 w-full">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >You Receive</label
          >
          <div class="flex items-center space-x-2 w-full">
            <input
              type="text"
              name="receive"
              value="10,000.00"
              id="text"
              class="
                shadow-sm
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                sm:text-sm
                border-gray-300
                rounded-md
              "
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div class="space-y-2 pt-5">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >NIKE</label
          >
          <div class="w-8 h-8 rounded-full overflow-hidden bg-gray-500">
            <img
              class="w-full h-full object-cover"
              src="https://static8.depositphotos.com/1016682/1065/i/600/depositphotos_10655332-stock-photo-nike-logo.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="w-full h-px bg-gray-200"></div>
      <button @click="Buy" class=" w-full py-2 text-center text-base text-white font-medium font-inter bg-primary-500 rounded-md">REVIEW MY ORDER</button>
    </div>

    <ConnectWallet ref="ConnectWallet" @ConfirmOrder="ConfirmOrder" />
    <ConfirmOrder ref="ConfirmOrder" />
  </div>
</template>



<script>
import { EyeIcon, RefreshIcon, ShareIcon } from "@heroicons/vue/solid";
import ConnectWallet from "../../components/Modals/ConnectWallet";
import ConfirmOrder from "../../components/Modals/ConfirmOrder";
export default {
  components: { EyeIcon, RefreshIcon, ShareIcon,ConnectWallet,ConfirmOrder},
  data(){
      return {
      }
  },
  methods:{
      ConfirmOrder(){
         this.$refs.ConnectWallet.open = false;
         this.$refs.ConfirmOrder.open = true;
      },
      Buy(){
            this.$refs.ConnectWallet.open = true;
            setTimeout(() => {
                            document.getElementsByTagName('html')[0].style.overflow = 'auto';
                            document.getElementsByTagName('html')[0].style.padding = '0';
            }, 100);
      }
  }
};
</script>