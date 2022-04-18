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
            type="number"
            name="pay"
            v-model="pay"
            id="pay"
            class="
              shadow-sm
              focus:ring-primary-500 focus:border-primary-500
              block
              w-full
              sm:text-sm
              border-gray-300
              rounded-md
            "
            @keyup="calculate"
            placeholder="10,000"
          />

          <div class="flex items-center space-x-2">
            <DropDown :Myitems="Items" Myplaceholder="USDC" @on:selected="changeModel" />
              <USDC v-if="currency == 'USDC'" />
              <ETH v-if="currency == 'ETH'" />
              <Tether v-if="currency == 'USDT'" />

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
              type="number"
              name="receive"
              v-model="receive"
              id="receive"
              class="
                shadow-sm
                focus:ring-primary-500 focus:border-primary-500
                block
                w-full
                sm:text-sm
                border-gray-300
                rounded-md
              "
              placeholder="10,000"
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
          @click="buy"
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
    <ConfirmOrder ref="ConfirmOrder" :show="showConfirmation" />
  </div>
</template>



<script>
import { EyeIcon, RefreshIcon, ShareIcon } from "@heroicons/vue/solid";
import ConnectWallet from "../../components/Modals/ConnectWallet";
import ConfirmOrder from "../../components/Modals/ConfirmOrder";
import DropDown from "@/components/Drawers/DropDown.vue";
import USDC from '../Shared/USDC.vue';
import ETH from '../Shared/ETH.vue';
import Tether from '../Shared/Tether.vue';
import { computed, ref } from '@vue/reactivity';
import axios from 'axios';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';


export default {
  components: {
    EyeIcon,
    RefreshIcon,
    ShareIcon,
    ConnectWallet,
    ConfirmOrder,
    DropDown,
    USDC,
    ETH,
    Tether
  },
  emits: ['on:login'],
  setup(props, {emit}) {

    const store = useStore();

    const showConfirmation = ref(false);
    const pay = ref(0);
    const receive = ref(0);
    const currency = ref('USDC');
    const ethUsd = ref(0);
    const Items = ref([
        { id: 1, name: "ETH" },
        { id: 2, name: "BTC" },
        { id: 3, name: "USDC" },
        { id: 3, name: "USDT" },
      ]);

    const user = computed(() => store.getters['user/getUser']);

    const getEthUsdValue = async () => {
       const request = await axios.get(
          "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USDC&api_key=0aec04c83ee62053aac51c4c380d7ac28faf2224a683e948de42f3b10182b9b6"
        );
        ethUsd.value = request.data.USDC;
    }

    const changeModel = (event) => {
        currency.value = event.data.name;
    }

    const calculate = () => {
      let factor = 1;
      if (currency.value == 'ETH') {
        factor = ethUsd.value; 
      }
      receive.value = pay.value * factor;
    }

    const buy = () => {
      console.log(user.value);
      if (!user.value.dbRef) {
        emit('on:login');
      } else {
        showConfirmation.value = true;
      }
    }

    onMounted(() => {
      getEthUsdValue();
    })

    return {
      changeModel,
      pay,
      receive,
      currency,
      calculate,
      Items,
      ethUsd,
      buy,
      showConfirmation
    }
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
  },
};
</script>