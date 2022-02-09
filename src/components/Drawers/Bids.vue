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
        <span class="font-medium text-black uppercase"> Bids </span>
        <span class="ml-6 h-7 flex items-center">
          <ChevronDownIcon
            :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']"
            aria-hidden="true"
          />
        </span>
      </DisclosureButton>
    </dt>
    <div v-if="bids && bids.length > 0">
      <DisclosurePanel
        v-for="(item, index) in bids"
        :key="index"
        as="dd"
        :class="[index % 2 == 0 && 'bg-gray-100']"
        class="mt-2 pr-4 rounded-sm px-2 py-2"
      >
        <bid :bid="item" @on:withdraw="withdrawFunds"></bid>
      </DisclosurePanel>
    </div>
    <div v-else>
      <DisclosurePanel
        as="dd"
        class="mt-2 pr-4 rounded-sm px-2 py-2 bg-gray-50"
      >
        <div class="mt-1 flex items-baseline md:block lg:flex">
          <div class="flex items-baseline text-base text-gray-500">

            This auction is not active or does not have bids at the moment.
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
import Bid from '../Shared/Bid.vue';
import { withdraw } from '../../blockchain/index';
//import moment from "moment";

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
    Bid,
  },
  props: ["auction", "update"],
  setup(props) {

    const open = ref(false);

    const bids = ref([]);

    const { auction, update } = toRefs(props);

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

    watch(auction, async () => {
      await getData();
    });

    watch(update, async () => {
      console.log(update);
      await getData();
    });

    const getData = async () => {
      const bidsNew = [];
      if(auction.value)
        try {
          const result = await db.collection('bids')
            .where('auctionId', '==', auction.value)
            .get()
    
            result.docs.map((doc) => {
              const data = {
                id: doc.id,
                data: doc.data()
              }
              bidsNew.push(data)
            })
            bidsNew.sort((a, b) => {
              const dateA = new Date(a.data.date).getTime();
              const dateB = new Date(b.data.date).getTime();
              return dateB - dateA;
            }); 

            bids.value = bidsNew;

        } catch (error) {
          bids.value = [];
          console.log(error)
        }
    };

    const withdrawFunds = async () => {
        await withdraw(auction.value);
    }

    onMounted(async () => {
      const request = await Axios.get(
        "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=0aec04c83ee62053aac51c4c380d7ac28faf2224a683e948de42f3b10182b9b6"
      );
      convertPrice = request.data.USD;

      await getData();
    });
    return {
      open,
      bids,
      timestamp,
      currencyConversion,
      withdrawFunds
    };
  },
};
</script>
