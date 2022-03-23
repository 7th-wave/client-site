<template>
  <div class="w-full space-y-7 flex flex-col items-start">
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
        space-y-4
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
              focus:ring-primary-500 focus:border-primary-500
              block
              w-full
              sm:text-sm
              border-gray-300
              rounded-md
            "
            placeholder="you@example.com"
          />

          <div class="flex items-center space-x-2">
            <DropDown :Myitems="Items" Myplaceholder="USDC" />
            <div class="w-9 h-9 rounded-full flex bg-gray-200" style="background: #26A17B;">
              <svg class=" m-auto" width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.842 12.0468V12.0443C14.708 12.0541 14.017 12.0955 12.4752 12.0955C11.2443 12.0955 10.3778 12.0589 10.0731 12.0443V12.048C5.33458 11.8396 1.79777 11.0145 1.79777 10.0273C1.79777 9.04131 5.33458 8.21622 10.0731 8.00416V11.2265C10.3826 11.2485 11.2699 11.3009 12.496 11.3009C13.967 11.3009 14.7043 11.2399 14.842 11.2278V8.00659C19.5708 8.21744 23.0991 9.04253 23.0991 10.0273C23.0991 11.0145 19.5708 11.8371 14.842 12.0468V12.0468ZM14.842 7.67144V4.78788H21.4404V0.390625H3.47477V4.78788H10.0731V7.67022C4.71058 7.91641 0.677734 8.97916 0.677734 10.2515C0.677734 11.5239 4.71058 12.5854 10.0731 12.8328V22.0734H14.842V12.8304C20.196 12.5842 24.2191 11.5227 24.2191 10.2515C24.2191 8.98038 20.196 7.91885 14.842 7.67144" fill="white"/>
</svg>

            </div>
          </div>
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
                focus:ring-primary-500 focus:border-primary-500
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
        <div class="space-y-2 pt-5 flex flex-col items-center">
          <label for="email" class="block text-sm font-medium text-gray-700">{{
            getParams == "cvman" ? "CVMAN" : "NIKE"
          }}</label>
          <div class="w-9 h-9 rounded-full overflow-hidden bg-gray-500">
            <img
              class="w-full h-full object-cover"
              :src="
                getParams == 'cvman'
                  ? '/images/sneakers/caveman.png'
                  : '/images/sneakers/01.png'
              "
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="w-full h-px bg-gray-200"></div>
      <div class="w-full py-3">
        <button
          @click="Buy"
          class="
            w-full
            py-2
            text-center text-base text-white
            font-medium font-inter
            bg-primary-500
            rounded-md
          "
        >
          REVIEW MY ORDER
        </button>
      </div>
    </div>

    <ConnectWallet ref="ConnectWallet" @ConfirmOrder="ConfirmOrder" />
    <ConfirmOrder ref="ConfirmOrder" />
  </div>
</template>



<script>
import { EyeIcon, RefreshIcon, ShareIcon } from "@heroicons/vue/solid";
import ConnectWallet from "../../components/Modals/ConnectWallet";
import ConfirmOrder from "../../components/Modals/ConfirmOrder";
import DropDown from "@/components/Drawers/DropDown.vue";

export default {
  components: {
    EyeIcon,
    RefreshIcon,
    ShareIcon,
    ConnectWallet,
    ConfirmOrder,
    DropDown,
  },
  data() {
    return {
      Items: [
        { id: 1, name: "ETH" },
        { id: 2, name: "BTC" },
        { id: 3, name: "USDC" },
        { id: 3, name: "USDT" },
      ],
    };
  },
  computed: {
    getParams() {
      return this.$route.params.id;
    },
  },
  methods: {
    ConfirmOrder() {
      this.$refs.ConnectWallet.open = false;
      this.$refs.ConfirmOrder.open = true;
    },
    Buy() {
      this.$refs.ConnectWallet.open = true;
      setTimeout(() => {
        document.getElementsByTagName("html")[0].style.overflow = "auto";
        document.getElementsByTagName("html")[0].style.padding = "0";
      }, 100);
    },
  },
};
</script>