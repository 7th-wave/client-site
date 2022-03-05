 
<template>
<div class="account sm:px-2 px-2 py-4 lg:py-16 relative bg-gray-100 2xl:max-w-8xl w-full mx-auto font-inter">
    <div class="lg:hidden">
      <Navbar :type="'customer'" />
    </div>
    <div class="py-0 pb-6 sm:pt-2 sm:pb-6 lg:pt-0 lg:pb-8 text-center">
      <h1 class="text-4xl font-medium">My Bids</h1>
    </div>
    <div>
      <div class="lg:grid lg:grid-cols-7 lg:gap-6 rounded-lg ">
        <div class="lg:col-span-2">
          
          <div class="hidden lg:block">
            <Menubar />
          </div>
        
        </div>
        <div class="lg:col-span-5">
          <div class="bg-gray-200 flex px-8 py-4 rounded-t-lg justify-center">
            <h2 class="text-2xl lg:mx-12 mx-1 font-medium m-0 text-black sm:text-2xl">
              Active Bid
            </h2>
          </div>  
          <div class="lg:pb-4 lg:py-4 py-4 grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 min-w-full flex flex-col-reverse justify-start items-start">
              <!-- blockchain data -->
            <div class="md:col-span-1 " v-for="bid in activeBids" :key="bid.auctionId" >    
              <div class="bg-white rounded-lg">
                  <div class="max-w-7xl mx-auto py-4 px-4 sm:py-2 sm:px-6 lg:px-4">
                    <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                        <dl v-for="card in bids" :key="card.id" class="mt-6 card divide-y divide-gray-200">
                          <component 
                            v-bind:is="card.component"
                            :auction="bid.auctionId" 
                            :token_id="bid.blockchainId"
                            :ipfs="bid.ipfs"
                          ></component>
                        </dl>
                    </div>
                  </div>
              </div>
            </div>

          </div>
          <p v-if="activeBids.length == 0" class="text-center">There are no Active Bids</p>
        </div>
      </div>
      <div class="bg-gray-200 flex px-8 mt-4 py-4 rounded-t-lg justify-center">
        <h2 class="text-2xl lg:mx-12 mx-1 font-medium m-0 text-block sm:text-2xl">
          Closed Bid
        </h2>
      </div>
      <div class="lg:pb-4 lg:py-4 py-4 grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-w-full flex flex-col-reverse justify-start items-start" >
        <div class="md:col-span-1 " v-for="bid in closedBids" :key="bid.auctionId" >    
          <div class="bg-white rounded-lg">
              <div class="max-w-7xl mx-auto py-4 px-4 sm:py-2 sm:px-6 lg:px-4">
                <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    <dl v-for="card in bids" :key="card.id" class="mt-6 card divide-y divide-gray-200">
                      <component 
                        v-bind:is="card.component"
                        :auction="bid.auctionId" 
                        :token_id="bid.blockchainId"
                        :ipfs="bid.ipfs"
                      ></component>
                    </dl>
                </div>
              </div>
          </div>
        </div>
      </div>
      <p v-if="closedBids.length == 0" class="text-center">There are no Closed Bids</p>
    </div>
  </div>

</template>
<style scoped>
.card:nth-child(4), .card:nth-child(3)  {
 margin-top: 0!important;
 }
</style>
<script>
import Menubar from '@/components/Layouts/Menu.vue'
import Navbar from '@/components/Layouts/Navbar_mobile.vue'
import {  onMounted, ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon, MenuIcon } from '@heroicons/vue/outline'
import Blockchain from '@/components/Drawers/Blockchain_data'
import Trading from '@/components/Drawers/Trading_view'
import Bids from '@/components/Drawers/Bids'
import Active_bid from '@/components/Drawers/Active_bid'
import Auction from '@/components/Drawers/Auction_creation'
import { useStore } from 'vuex'
import { db } from '../../firebase/firebase'

 const bids = [
  {id: 1, component: <Active_bid />, class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 self-start xl:order-1 lg:order-2 order-3"},
  {id: 2, component: <Bids />, class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 self-start order-2"},
  // {id: 3, component: <Trading />, class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 xl:order-3 lg:order-1 order-1"},
  {id: 3, component: <Blockchain />, class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 xl:order-3 lg:order-1 order-1"},
]
export default {
  components: {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      ChevronDownIcon,
      Menubar,
      Navbar,
      MenuIcon,
      Blockchain,
      Trading,
      Auction,
      Bids,
      Active_bid,
    
  },
  setup() {
    const open = ref(false)

    const store = useStore();
    const activeBids = ref([])
    const closedBids = ref([])
    const userNfts = ref([])

    const getData = async () => {
      const address = store.getters['blockchain/getCurrentAddress'];
      console.log(address)
      try {
        const myBids = await db.collection('bids')
        .where('fromAddress', '==', address)
        .get()

        myBids.docs.map(async (doc) => {
          const data = doc.data()
          const response = await db.collection("auctions").doc(data.auctionId).get();
            const findBid = activeBids.value.find((el) => el.auctionId === data.auctionId)
            const findClosedBid = closedBids.value.find((el) => el.auctionId === data.auctionId)
            function pushToBidArray() {
              if(response.data().status != 'sold' && response.data().status != 'ended') {
                activeBids.value.push(data)
              } else {
                closedBids.value.push(data)
              }
            }

            if(!findClosedBid) {
              if(!findBid) {
                pushToBidArray()
              }
            } else {
              if(!findClosedBid) {
                pushToBidArray()
              }
            }
        })
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(async () => {
      await getData();
    });
    
    return {
      open,
      bids,
      activeBids,
      userNfts,
      closedBids,
    }
  },
}
</script>
