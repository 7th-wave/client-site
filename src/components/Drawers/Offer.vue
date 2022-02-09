<template>
  <Disclosure as="div" class="mb-6" v-slot="{ open }">
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
          Offer
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
          Date:
          <span class="mx-2 text-base font-normal text-gray-500">{{
            offerDate
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
      
      
      <div class="mt-5 flex items-center lg:flex" >
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
            {{data.amount}}
            <span
              class="mx-2 text-base font-normal font-opensans text-gray-400"
            >
              ({{offerDolar}})
            </span>
          </div>
        </div>
      </div>
      <div class="mt-3 flex items-baseline md:block lg:flex">
        <div class="flex items-baseline text-base font-bold text-gray-500">
          <span class="mr-2">Offer Ends:</span>
          <count-down
                  v-if="data.status != 'ended' && data.status != 'sold'"
                  :timestamp="data.expiring_date"
                />
          <span v-else class="mx-2 text-base font-normal text-black">
            Sold
          </span>
        </div>
      </div>
      <div v-if="data.status == 'active'" class="pt-8 flex just-center -mb-3">
        <button
          type="button"
          @click="showAcceptOfferConfirmation"
          :class="[
            'inline-flex items-center text-center uppercase px-4 w-full py-2 border border-gray-400 shadow-sm text-md font-medium rounded-md ',
            'justify-center focus:outline-none',
            'text-sm leading-5 font-medium',
            'hover:bg-gray-100',
          ]"
        >
          ACCEPT
        </button>
      </div>
      
     
      <div v-if="data.status == 'active'" class="pt-8 flex just-center">
        <button
          type="button"
          @click="showRejectOfferConfirmation"
          :class="[
            'inline-flex items-center text-center uppercase px-4 w-full py-2 border border-gray-400 shadow-sm text-md font-medium rounded-md text-white',
            'justify-center focus:outline-none',
            'text-sm leading-5 font-medium',
            'bg-gray-900 hover:bg-black',
          ]"
        >
          REJECT
        </button>
      </div>

      <div v-if="accept" class="pt-8 -mb-3">
        <span>Are your sure you want to accept this offer?</span>
        
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
            @click="doAccept"
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

      <div v-if="reject" class="pt-8 -mb-3">
        <span>Are your sure you want to reject this offer?</span>
        
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
            @click="doReject"
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
import { computed, onMounted } from "@vue/runtime-core";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import USDC from '../Shared/USDC.vue'
import CountDown from '@/components/Shared/CountDown.vue'
import moment from 'moment';
import axios from 'axios';

const buttonColor = {
  sold: "bg-gray-400 ",
  selected: "bg-gray-900 hover:bg-black",
  "for sale": "text-white hover:text-white border-green-400 bg-green-400",
};

export default {
  props: ["offer", 'clientRef', 'address'],
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
    USDC,
    CountDown
  },
  setup(props) {
    const open = ref(false);
    const store = useStore();
    const { offer } = toRefs(props);
    const route = useRoute();
    const nftRef = ref(route.params.artid);
    const reject = ref(false);
    const accept = ref(false)
    const data = ref({
      from: '',
      fromAddress: '',
      amount: 0,
      currency: '',
      date: '',
      status: '',
      by: '',
      expiring_date: ''
    });

    const offerDolar = ref('');

    const countDownData = ref({
      day: "",
      hour: "",
      minute: "",
      second: "",
    });

    const offerDate = computed(() => {
      moment.locale('en-US');
      const date = moment(data.value.date);
      return date.format("L");
    });

    const offerDolarCalc = async () => {
      if (data.value.currency == 'eth') {

        const request = await axios.get(
          "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USDC&api_key=0aec04c83ee62053aac51c4c380d7ac28faf2224a683e948de42f3b10182b9b6"
        );

       
            
        offerDolar.value = request.data.USD * data.value.amount;

      } else {

        offerDolar.value = '$'+data.value.amount;

      }

    };

    const getDetail = async (value) => {
      await store.dispatch('offerStore/getOffer', {offerRef: value});
      const currentData = store.getters['offerStore/offer'];
      data.value = currentData.data();

      await offerDolarCalc();


      //const client = await db.getClientByBlockChain(data.value.fromAddress);
      
    };

    const doReject = () => {
      reject.value = false;
      store.dispatch('offerStore/reject', {offerRef: offer.value, nftRef: nftRef.value});
      data.value.status = 'rejected';
    }

    const doAccept = () => {
      accept.value = false;
      store.dispatch('auctionStore/accept', {offerRef: offer.value, nftRef: nftRef.value});
      data.value.status = 'accepted';
    }

    const showRejectOfferConfirmation = () => {
      reject.value = true;
    }

    const showAcceptOfferConfirmation = () => {
      accept.value = true;
    }

    const cancelProccess = () => {
      reject.value = false;
      accept.value = false;
    }


    onMounted(async () => {
      await getDetail(offer.value);
    });

    return {
      open,
      data,
      buttonColor,
      countDownData,
      showRejectOfferConfirmation,
      showAcceptOfferConfirmation,
      doReject,
      doAccept,
      offerDate,
      offerDolar,
      reject,
      accept,
      cancelProccess
    };
  },
};
</script>
