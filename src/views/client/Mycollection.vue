 
<template>
<div class="account sm:px-2 px-2  py-4 lg:py-16 relative bg-gray-100 max-w-7xl mx-auto font-inter">
  <div class="lg:hidden">
    <Navbar :type="'customer'" />
  </div>
  <div class="py-0 pb-4 sm:pt-2 md:pb-6 md:pt-2 lg:pt-0 lg:pb-8 text-center">
    <h1 class="text-4xl font-semibold">{{data.title}}</h1>
  </div>
  <div>
    <div class="lg:grid lg:grid-cols-7 lg:gap-6 rounded-lg ">
      <div class="lg:col-span-2">
        
        <div class="hidden lg:block">
          <Menubar />
        </div>
        <div class="lg:mt-3 bg-white w-full mx-auto sm:max-w-lg md:max-w-lg lg:w-full">
          <img :src="data.imageUrl" class="w-full" alt="">
        </div>
      </div>
      <div class="lg:col-span-5">
          <div class="relative bg-white py-5 sm:py-24 lg:pt-8 lg:pb-8">
            <div class="relative">
              <div class=" mx-auto max-w-md px-8 sm:max-w-3xl sm:px-6 lg:px-12">
                  <Artist />
              </div>
            
            </div>
          </div>
      </div>
    </div>
    <div class="bg-gray-200 flex px-8 mt-6 lg:py-4 rounded-md  justify-center">
      <h2 class="text-2xl lg:mx-12 lg:mt-0 lg:py-0 mx-1 font-medium py-4 mt-4 text-gray-900 sm:text-2xl">
        Auctions
      </h2>
    </div>
    <div class="lg:pb-4 px-4 sm:px-2 lg:py-4 py-4 md:grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-w-full  xl:grid-cols-4 min-w-full flex flex-col-reverse justify-start items-start">
            <div class="md:col-span-1 md:col-span-1 w-full pb-2  ">    
                <div class="bg-white rounded-lg">
                    <div class="max-w-7xl mx-auto py-4 px-4 sm:py-2 sm:px-6 lg:px-4">
                      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                        <dl v-for="auction in auctions" :key="auction.id" class="mt-6 auction divide-y divide-gray-200">
                          <component 
                            v-bind:is="auction.component" 
                            :token_id="nft.blockchainId"
                            :ipfs="nft.ipfs"
                          ></component>
                        </dl>
                      </div>
                    </div>
                </div>
             </div>
             <div class="md:col-span-1 md:col-span-1 w-full pb-2  ">    
                <div class="bg-white rounded-lg">
                    <div class="max-w-7xl mx-auto py-4 px-4 sm:py-2 sm:px-6 lg:px-4">
                      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                        <dl v-for="auction in auctions" :key="auction.id" class="mt-6 auction divide-y divide-gray-200">
                          <component 
                            v-bind:is="auction.component" 
                            :token_id="nft.blockchainId"
                            :ipfs="nft.ipfs"
                          ></component>
                        </dl>
                      </div>
                    </div>
                </div>
             </div>
            <div class="md:col-span-1 md:col-span-1 w-full pb-2  ">    
                <div class="bg-white rounded-lg">
                    <div class="max-w-7xl mx-auto py-4 px-4 sm:py-2 sm:px-6 lg:px-4">
                      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                        <dl v-for="auction in auctions" :key="auction.id" class="mt-6 auction divide-y divide-gray-200">
                          <component 
                            v-bind:is="auction.component" 
                            :token_id="nft.blockchainId"
                            :ipfs="nft.ipfs"
                          ></component>
                        </dl>
                      </div>
                    </div>
                </div>
             </div>
             <!-- specs -->
             <div class="md:col-span-1 w-full pb-2">
                <div class="bg-white rounded-lg">
                  <div class="max-w-7xl mx-auto  ">
                    <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                      <dl class="bg-teal-400 h-48  flex flex-wrap content-center justify-center">
                        <a href="#" @click.prevent="create_auction = true">
                          <img src="/images/plus_circle.svg" class="mx-auto" alt="">
                        </a>
                      </dl>
                 
                    </div>
                  </div>
                </div>
             </div>
    </div>
    <!-- stats -->
  </div>
 
 </div>
 <div class="pb-4 px-2">
  <NFTBox />
 </div>


 <!-- Create Auction  -->
 <TransitionRoot as="template" :show="create_auction">
    <Dialog as="div" static class="fixed  z-10 inset-0 overflow-y-auto" @close="create_auction = false" :open="create_auction">
      <div class="flex  items-end justify-center min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="  sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-lg  w-full sm:p-6">
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button type="button" class="bg-white rounded-md text-teal-400 hover:text-teal-400 focus:outline-none" @click="create_auction = false">
                <span class="sr-only">Close</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="sm:flex sm:items-start">
               
              <div class="mt-3 text-center sm:mt-0   sm:text-left">
                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                  Create Auction
                </DialogTitle>
                 
              </div>
             
            </div>
            <div class="mt-4 lg:mt-8">
                <div class="mt-3 sm:mt-0 sm:text-left">
                 <div>
                    <label for="price" class="block text-sm font-medium text-gray-700">Starting Price</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span class="text-gray-500 sm:text-sm ">
                          <MenuIcon class="h-5 w-4 text-gray-500" aria-hidden="true" />
                        </span>
                      </div>
                      <input type="text" name="price" id="price" class="focus:ring-gray-200 focus:border-gray-200 block w-full pl-8 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" />
                      <div class="absolute inset-y-0 right-0 flex items-center">
                        <label for="currency" class="sr-only">Currency</label>
                        <select id="currency" name="currency" class="focus:ring-gray-200 focus:border-gray-200 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                          <option>ETH</option>
                          <option>BTC</option>
                          <option>UST</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <label for="price" class="block text-sm font-medium text-gray-700">Minimum Price</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span class="text-gray-500 sm:text-sm">
                          $
                        </span>
                      </div>
                      <input type="text" name="price" id="price" class="focus:ring-gray-200 focus:border-gray-200 block w-full pl-8 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" />
                      <div class="absolute inset-y-0 right-0 flex items-center">
                        <label for="currency" class="sr-only">Currency</label>
                        <select id="currency" name="currency" class="focus:ring-gray-200 focus:border-gray-200 h-full py-0 pl-2 pr-8 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                          <option>USD</option>
                          <option>CAD</option>
                          <option>EUR</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <label for="price" class="block text-sm font-medium text-gray-700">Minimum Price Increment</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span class="text-gray-500 sm:text-sm">
                          $
                        </span>
                      </div>
                      <input type="text" name="price" id="price" class="focus:ring-gray-200 focus:border-gray-200 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" />
                      <div class="absolute inset-y-0 right-0 flex items-center">
                        <label for="currency" class="sr-only">Currency</label>
                        <select id="currency" name="currency" class="focus:ring-gray-200 focus:border-gray-200 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                          <option>USD</option>
                          <option>CAD</option>
                          <option>EUR</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:flex md:justify-between ">
                    <div class="">
                      <label for="email" class="block text-sm font-medium text-gray-700">Auction Date Starts</label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <CalendarIcon  class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input type="date" name="email" id="email" class="focus:ring-gray-200 focus:border-gray-200 block lg:w-56 w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" />
                      </div>
                    </div>
                     <div class=" ">
                      <label for="email" class="block text-sm font-medium text-gray-700">Auction Date End</label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <CalendarIcon  class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input type="date" name="email" id="email" class="focus:ring-gray-200 focus:border-gray-200 block lg:w-56 w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 md:flex md:justify-between">
                    <div class="">
                      <label for="email" class="block text-sm font-medium text-gray-700">Auction Time Starts</label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <ClockIcon   class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input type="time" name="email" id="email" class="focus:ring-gray-200 w-full lg:w-56 focus:border-gray-200 block pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" />
                      </div>
                    </div>
                     <div class="">
                      <label for="email" class="block text-sm font-medium text-gray-700">Auction Time End</label>
                      <div class="mt-1 relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <ClockIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <input type="time" name="email" id="email" class="focus:ring-gray-200 focus:border-gray-200 block lg:w-56 w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
       
            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse border-t border-gray-300 pt-5">
              <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-400 text-base font-medium text-white hover:bg-teal-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm" @click="create_auction = false">
                Create
              </button>
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-500 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm" @click="create_auction = false">
                Cancel
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<style scoped>
.auction:nth-child(4), .auction:nth-child(3)  {
 margin-top: 0!important;
 }
</style>
<script>
import Menubar from '@/components/Layouts/Menu.vue'
import Navbar from '@/components/Layouts/Navbar_mobile.vue'
import Artist from '@/components/Forms/Artist'
import { ref } from 'vue'
import { MenuIcon, XIcon, CalendarIcon } from '@heroicons/vue/outline'
import { ClockIcon } from '@heroicons/vue/solid'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import Blockchain from '@/components/Drawers/Blockchain_data'
import Trading from '@/components/Drawers/Trading_view'
import Bids from '@/components/Drawers/Bids'
import Auction from '@/components/Drawers/Auction_creation'
import NFTBox from '@/components/NFTBox'
// import { Menu, MenuButton } from '@headlessui/vue'
// @ is an alias to /src

const data = {
    title: 'Cuco',
    collection: 'Mario Sanchez',
    sub_title: 'Origin + NFT',
    Dimensions: '18x11',
    medium: 'Intagalo',
    description: 'This carved painting comes with a NFT proof of ownership on the blockchain',
    imageUrl: '/images/art-3.jpg',
    link: '#',
    
 }

const auctions = [
  {id: 1, component: <Auction />, class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 self-start xl:order-1 lg:order-2 order-3"},
  {id: 2, component: <Bids />, class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 self-start order-2"},
  {id: 3, component: <Trading />, class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 xl:order-3 lg:order-1 order-1"},
  {id: 3, component: <Blockchain />, class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 xl:order-3 lg:order-1 order-1"},
]
 
export default {
  components: {
      Artist,
      MenuIcon,
      ClockIcon,
      CalendarIcon,
      Menubar,
      Navbar,
      XIcon,
      Dialog,
      DialogOverlay,
      DialogTitle,
      TransitionChild,
      TransitionRoot,
      Blockchain,
      Trading,
      Auction,
      Bids,
      NFTBox,
      
  },
  setup() {
    const open = ref(false)
    const main_open = ref(true)
    const create_auction = ref(false)
    return {
      open,
      data,
      main_open,
      auctions,
      create_auction
    }
  },
}
</script>
