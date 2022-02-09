<template v-if="data.status == 'delete'">
  <Disclosure as="div" class="" v-slot="{ open }">
    <dt class="text-lg">
      <DisclosureButton
        class="
          text-left
          w-full
          flex
          justify-between
          items-start
          text-gray-400
          focus:outline-none
        "
      >
        <span class="font-medium text-black text-lg uppercase">
          Artwork Current Sale
        </span>
        <span class="ml-6 h-7 flex items-center">
          <ChevronDownIcon
            :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']"
            aria-hidden="true"
          />
        </span>
      </DisclosureButton>
    </dt>
    <DisclosurePanel as="dd" class="mt-2 rounded-sm px-2 py-2">
      <div class="mt-1 flex items-baseline md:block lg:flex">
        <div class="flex items-baseline text-base font-bold text-gray-500">
          By:
          <span class="mx-2 text-base font-normal text-gray-500">{{
            data.from
          }}</span>
        </div>
      </div>
      
      <div class="mt-1 flex items-baseline md:block lg:flex">
        <div class="flex items-baseline text-base font-bold text-gray-500">
          Status:
          <span class="mx-2 text-base font-normal text-gray-500">{{
            data.status.toUpperCase()
          }}</span>
        </div>
      </div>
      <div class="mt-1 flex items-baseline md:block lg:flex">
        <div class="flex items-baseline text-base font-bold text-gray-500">
          Sold to:
          <span class="mx-2 text-base font-normal text-gray-500">{{
            data.soldToAddress ? data.soldToAddress.replace(data.soldToAddress.substring(8,data.soldToAddress.length - 3), "****") : "N/A"
          }}</span>
        </div>
      </div>
      <div class="mt-1 flex items-center lg:flex" v-if="data.wonPrice">
        <div class="flex items-center text-base font-bold text-gray-500">
          Sold Price:
        </div>
        <div class="mt-1 flex items-center lg:flex">
          <div class="mx-1 text-sm font-medium text-gray-500">
            <USDC size="5" />
          </div>
          <div
            class="
              flex
              items-center
              text-base
              font-opensans font-md
              text-black
            "
          >
            {{data.wonPrice}}
          </div>
        </div>
      </div>
      <div class="mt-5 flex items-center lg:flex" v-if="data.wonPrice">
        <div class="mt-1 flex items-center lg:flex font-opensans">
          <div class="mx-1 text-sm font-medium text-gray-400">
            <USDC size="5" />
          </div>
          <div
            class="
              flex
              items-center
              text-xl
              font-opensans font-semibold
              text-black
            "
          >
            {{data.wonPrice}}
            <!-- <span
              class="mx-2 text-base font-normal font-opensans text-gray-400"
            >
              ($450,000.00)
            </span> -->
          </div>
        </div>
      </div>
      <div class="mt-3 flex items-baseline md:block lg:flex">
        <div class="flex items-baseline text-base font-bold text-gray-500">
          <span class="mr-2">Sale Expires in:</span>
          <count-down
                  v-if="data.status != 'ended' && data.status != 'sold'"
                  :timestamp="data.expiring_date"
                />
          <span v-else class="mx-2 text-base font-normal text-black">
            Sold
          </span>
        </div>
      </div>
      
   
      <div v-if="data.status == 'active'" class="pt-8 flex just-center">
        <button
          type="button"
          @click="showCancelConfirmation"
          :class="[
            'inline-flex items-center text-center uppercase px-4 w-full py-2 border border-gray-400 shadow-sm text-md font-medium rounded-md text-white',
            'justify-center focus:outline-none',
            'text-sm leading-5 font-medium',
            'bg-gray-900 hover:bg-black',
          ]"
        >
          CANCEL SALE
        </button>
      </div>
      <div v-if="cancelSale" class="pt-8 -mb-3">
        <span>Are your sure you want to cancel this sale?</span>
        
        <div class="pt-8 flex just-center -mb-3">

          <button
            type="button"
            @click="cancelProccess"
            :class="[
              'inline-flex items-center text-center uppercase mx-2 px-4 w-full py-2 border border-gray-400 shadow-sm text-md font-medium rounded-md ',
              'justify-center focus:outline-none',
              'text-sm leading-5 font-medium',
              'hover:bg-gray-100',
            ]"
          >
            CANCEL
          </button>
          <button
            type="button"
            @click="deleteStatus"
            :class="[
              'inline-flex items-center text-center uppercase mx-2 px-4 w-full py-2 border border-gray-400 shadow-sm text-md font-medium rounded-md text-white',
              'justify-center focus:outline-none',
              'text-sm leading-5 font-medium',
              'bg-gray-900 hover:bg-black',
            ]"
          >
            YES
          </button>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { ref, toRefs } from "vue";
import { db } from "../../firebase/firebase";
import { onMounted } from "@vue/runtime-core";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";
//import { useRoute } from "vue-router";
import { useStore } from "vuex";
import USDC from '../Shared/USDC.vue'
import CountDown from '@/components/Shared/CountDown.vue'
//import {cancelSale} from '../../blockchain/index';

const buttonColor = {
  sold: "bg-gray-400 ",
  selected: "bg-gray-900 hover:bg-black",
  "for sale": "text-white hover:text-white border-green-400 bg-green-400",
};

export default {
  props: ["sale"],
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
    USDC,
    CountDown
  },
  setup(props, {emit}) {
    const open = ref(false);
    const store = useStore();
    const { sale } = toRefs(props);
    //const route = useRoute();
    //const nftRef = ref(route.params.artid);
    const finishing = ref(false);
    const data = ref({
      from: '',
      fromAddress: '',
      total: 0,
      currency: '',
			exp_date: null,
			exp_period: '',
			nft: '',
      status: '',
      soldTo: null,
      soldToAddress: null,
      transactionHash: null
    });
    const countDownData = ref({
      day: "",
      hour: "",
      minute: "",
      second: "",
    });

    const cancelSale = ref(false);
    const showCancelConfirmation = () => {
      cancelSale.value = true;
    }

    const getDetail = async (value) => {
      const currentData = await db.collection("sales").doc(value).get();
      data.value = currentData.data();
    };

    const deleteStatus = async () => {
        try {
          console.log(sale.value);
          await store.dispatch("saleStore/cancel", {saleRef: sale.value});
          data.value.status = 'canceled';
          cancelSale.value = false;
          emit('on:saleCanceled');

          store.dispatch("NotificationStore/setMessage", {
            message: "Sale Canceled successfuly.",
            type: "success",
          });

      } catch (error) {

        store.dispatch("NotificationStore/setMessage", {
          message: 'An error occurred',
          type: "error",
        });
      }
      
    };

    const cancelProccess = () => {
      cancelSale.value = false;
    }

    onMounted(async () => {
      await getDetail(sale.value);
    });

    return {
      open,
      data,
      buttonColor,
      deleteStatus,
      countDownData,
      finishing,
      cancelSale,
      cancelProccess,
      showCancelConfirmation
    };
  },
};
</script>
