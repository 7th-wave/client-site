<template>
  <Disclosure as="div" class="py-6" v-slot="{ open }">
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
        <span class="font-medium text-black uppercase"> Offers </span>
        <span class="ml-6 h-7 flex items-center">
          <ChevronDownIcon
            :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']"
            aria-hidden="true"
          />
        </span>
      </DisclosureButton>
    </dt>
    <div v-if="localOffers && localOffers.length > 0">
      <DisclosurePanel
        v-for="(item, index) in localOffers"
        :key="index"
        as="dd"
        :class="[index % 2 == 0 && 'bg-gray-100']"
        class="mt-2 pr-4 rounded-sm px-2 py-2"
      >
        <offer-item :offer="item" @on:cancel="cancelOffer" :nft="localNft"></offer-item>
      </DisclosurePanel>
    </div>
    <div v-else>
      <DisclosurePanel
        as="dd"
        class="mt-2 pr-4 rounded-sm px-2 py-2 bg-gray-50"
      >
        <div class="mt-1 flex items-baseline md:block lg:flex">
          <div class="flex items-baseline text-base text-gray-500">

            This auction is not active or does not have offers at the moment.
          </div>
        </div>
      </DisclosurePanel>
    </div>
  </Disclosure>
</template>

<script>
import { ref, onMounted, toRefs, watch } from "vue";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { 
  ChevronDownIcon,
} from "@heroicons/vue/outline";
import Axios from "axios";
import { db } from "@/firebase/firebase";
import OfferItem from '../Shared/OfferItem.vue';
//import { cancelOffer } from '../../blockchain/index';
//import moment from "moment";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
    OfferItem,
  },
  props: ["offers", "nftRef", "update", "nft"],
  setup(props) {

    const open = ref(false);

    const { offers, update } = toRefs(props);
    const localOffers = ref([]);
    const localNft = ref();

    watch(props.nft, (val) => {
      console.log('nft->', val);
      localNft.value = val;
    })

    let convertPrice = 0;

    const timestamp = (date) => {
      const time = new Date(date).getTime();
      return time;
    };

    const formater = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const currencyConversion = (data) => {
      return formater.format(convertPrice * data);
    };

    watch(offers, async () => {
      await getData();
    });

    watch(update, async () => {
      console.log(update);
      await getData();
    });

    const getData = async () => {
      const offersNew = [];
      
      for(let offer of offers.value) {
        try {
          const result = await db.collection('offers')
            .doc(offer)
            .get()
    
            offersNew.push(result.data());

        } catch (error) {
          offers.value = [];
          console.log(error)
        }
      }

      offersNew.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      }); 

      console.log(offersNew);

      localOffers.value = offersNew;
    };

    const cancelOffer = async() => {

    }

    onMounted(async () => {
      const request = await Axios.get(
        "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=0aec04c83ee62053aac51c4c380d7ac28faf2224a683e948de42f3b10182b9b6"
      );
      convertPrice = request.data.USD;

      localNft.value = props.nft;

      await getData();
    });
    return {
      open,
      localOffers,
      timestamp,
      currencyConversion,
      cancelOffer,
      localNft
    };
  },
};
</script>
