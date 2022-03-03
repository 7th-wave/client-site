<template>
<Disclosure as="div" class="mb-6" v-slot="{ open }">
    <dt class="text-lg">
        <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none">
        <span class="font-medium text-primary-400 text-lg ">
            {{data.nftName || 'No Name'}}
        </span>
        <span class="ml-6 h-7 flex items-center">
            <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
        </span>
        </DisclosureButton>
    </dt>
    <DisclosurePanel as="dd" class="mt-2 rounded-sm py-2">
        <div class="flex items-baseline md:block lg:flex">
            <div class="flex items-baseline text-base font-bold text-gray-500">
                By: 
                <span class="mx-2 text-base font-normal text-gray-500">{{data.by || 'N/A'}}</span>
            </div>
        </div>  
        <div class="flex items-baseline md:block lg:flex">
            <div class="flex items-baseline text-base font-bold text-gray-500">
                Date: 
                <span class="mx-2 text-base font-normal text-gray-500">{{data.dateEnd}}</span>
            </div>
        </div>  
        <div class="flex items-baseline md:block lg:flex">
            <div class="flex items-baseline text-base font-bold text-gray-500">
                Status: 
                <span class="mx-2 text-base font-normal text-gray-500 capitalize">{{data.status}}</span>
            </div>
        </div>  
        <div class="flex items-baseline md:block lg:flex">
            <div class="flex items-baseline text-base font-bold text-gray-500">
                Won by:
                 
                <span class="mx-2 text-base font-normal text-gray-500">{{data.wonBy.replace(data.wonBy.substring(5,data.wonBy.length - 3), "****") || 'N/A'}}</span>
            </div>
        </div>  
        <div class="flex items-baseline md:block lg:flex">
            <div class="flex items-baseline text-base font-bold text-gray-500">
                Won Price: 
                <span class="mx-2 text-base font-normal text-gray-500">{{data.wonPrice || 'N/A'}}</span>
            </div>
        </div>
        <div class="mt-5 flex items-baseline md:block lg:flex">
            <div class="mt-1 flex items-center md:block lg:flex font-opensans">
                <div class="mx-1 text-sm font-medium text-gray-400">
                    <USDC size="5" />
                </div>
            <div class="md:flex items-center text-xl font-opensans font-semibold text-black">
                {{data.amount || 'N/A'}}
            </div>
        </div>
        
        </div>
        <div class="mt-3 flex items-baseline md:block lg:flex">
            <div class="flex items-baseline text-sm font-bold text-gray-500">
                <span class="mr-1">Auction End:</span> 
                <count-down
                    :timestamp="timestamp(data.date)"
                    :placed="true"
                    v-if="data.status != 'ended' && data.status != 'sold'"
                />
                <span v-else class="capitalize">{{data.status}}</span>
            </div>
        </div>  
        
        <div v-if="data.status != 'ended' && data.status != 'sold'" class=" mt-5 rounded-bl-2xl rounded-br-2xl md:px-2 flex">
            <div class="w-full">
                <button type="button" @click="login_modal=true" class=" w-full inline-flex items-center text-center uppercase  w-md py-2 border border-black shadow-sm text-md font-medium rounded-md text-white bg-black justify-center focus:outline-none">
                cancel bid
                </button>
            </div>
            <div class="ml-4 mt-2 text-primary-400">
                <button @click="placebid_note=true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
        </div>
    </DisclosurePanel>
</Disclosure>
</template>


<script>

import { onMounted, ref, toRefs } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/outline'

import USDC from '../Shared/USDC.vue'
import { db } from '../../firebase/firebase'
import CountDown from '../Shared/CountDown.vue'
import { useStore } from 'vuex'
 
export default {
  components: {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      ChevronDownIcon,
      USDC,
    CountDown
  },
  props: ['auction'],
  setup(props) {
    const { auction } = toRefs(props)
    const store = useStore();
    const open = ref(false);

    const data = ref({
      by: "",
      startingPrice: 0,
      startingPriceCoin: "",
      minimumPrice: 0,
      minimumPriceCoin: "",
      minimumPriceIncrement: 0,
      minimumPriceIncrementCoin: "",
      status: "",
      date: "",
      wonBy: "",
      wonPrice: "",
      bids: [],
      nftName: '',
      amount: 0,
    });

    const getActiveBid = async (auctionRef) => {
        const address = store.getters['blockchain/getCurrentAddress'];
        console.log(address)
        try {
          const result = await db.collection('bids')
            .where('auctionId', '==', auctionRef)
            .get()
            const bidsNew = []
    
            result.docs.map((doc) => bidsNew.push(doc.data()))
            const auxBids = bidsNew.sort((a, b) => {
              return b.amount - a.amount;
            }); 

            return auxBids.find((el) => el.fromAddress === address)
        } catch (error) {
          console.log(error)
        }
    }

    const getAuctionData = async (auctionRef) => {
      try {
        const response = await db.collection("auctions").doc(auctionRef).get();
        const resNFT = await db.collection("nfts").doc(response.data().nftRef).get();
        const resCollection = await db.collection("collections").doc(resNFT.data().collection).get();
        data.value = response.data()
        data.value.nftName = resNFT.data().title
        data.value.by = resCollection.data().artistName

        const activeBid = await getActiveBid(auctionRef)
        if(activeBid) {
            data.value.date = activeBid.date; 
            data.value.amount = activeBid.amount; 
        }

      } catch (error) {
        console.log(error)
      }
      return null
    }

    const timestamp = (date) => {
      const time = new Date(date).getTime();
      return time;
    };

    onMounted(async () => {
        await getAuctionData(auction.value)
    })

    return {
      open,
      data,
      timestamp,
    }
  },
}
</script>
