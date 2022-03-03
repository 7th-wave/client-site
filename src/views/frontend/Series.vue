<template>
  <div class="artist font-inter">
    
      <div class="relative bg-gray-100 py-8 sm:py-24 lg:py-16">
        <div class="relative">
          <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p class="mt-2 text-4xl font-medium font-inter leading-10 text-black tracking-tight sm:text-4xl">
              Shuffling Sam - NFT Series
            </p>
          </div>
        </div>
      </div>
      <div class="relative bg-gray-500 py-4 sm:py-8 lg:pt-4">
        <div class="relative">
          <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <p class=" text-2xl font-medium leading-8 text-white tracking-tight sm:text-2xl">
                NFT Series
            </p>             
          </div>
          <div class="relative py-4">
            <div class="absolute inset-0 flex md:max-w-5xl y-8 m-auto items-center" aria-hidden="true">
              <div class="w-full border-t border-white" />
            </div>
          </div>
          <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <p class="mt-2 text-xl font-medium mx-4 leading-8 text-white tracking-tight sm:text-2xl">
                Each NFT Serie includes a numbered physical print (9" X 5.5")
            </p>             
          </div>
        <!-- status -->
          <div  class=" mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-6xl">
            <NFT />
          </div>

          <div class="text-center mx-auto max-w-md py-4 px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <p class="mt-2 text-xl font-normal text-white tracking-tight sm:text-xl">
                Select one or more NFT Serie to purchase
            </p>             
          </div>
          <!-- fileter & sort -->
          <div class="text-center flex flex-wrap mx-auto md:flex-row flex-col justify-center max-full py-4 px-4 sm:px-6 lg:px-8">
            <div class="pl-0 pr-0 md:mr-4 mr-0">
              <span class="relative z-0 flex lg:justify-items-start justify-items-stretch shadow-sm rounded-lg p-0.5 bg-gray-100">
                <button 
                  type="button"
                  v-for="(entry,index) in filterList"
                  :key="index"
                  :value="entry"
                  :item="entry"
                  @click="
                    filter = entry;
                    active = index;
                  "
                  :class="[
                    entry == filter ? 'bg-gray-100' : 'border border-gray-300 bg-white',
                    'relative lg:w-max md:w-max w-full flex items-stretch justify-center px-12 py-2',
                    'text-sm font-medium text-gray-700 focus:z-10 focus:outline-none rounded-lg',
                  ]"
                >
                  {{entry}}
                </button>
              </span>
            </div>
            
          
            <div class="pl-0 pr-0 ">
              <div class="flex items-center justify-center">
                  <select 
                    id="location" 
                    name="sort_by" 
                    class=" text-gray-700 w-full pl-3 pr-10 py-2.5 text-sm leading-5 font-medium border-gray-300 focus:outline-none focus:border-gray-500 sm:text-sm rounded-md"
                  >
                  <option selected = "">Sort by: Series Order</option>
                  <option>Bundle Series</option>
                  <option>Price (Low - High)</option>
                  <option>Price (High - Low)</option>
                </select>
              </div>
            </div>
          </div>
          <!-- End fileter & sort -->
          
          <!-- series -->
          <div  class="flex flex-col mx-auto max-w-md px-4 my-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl ">
            <dl class="mt-5 grid grid-cols-1 lg:gap-5 gap-3 sm:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4">
              <div 
                v-for="(item, index) in list" 
                :key="index" 
                :item="item"
                :class="[
                  'relative bg-white pt-5 px-4 pb-8 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden',
                  (item.status == 'selected')?'bg-primary-50 w-full':'bg-white w-full',
                  item.status !== 'sold' ? 'cursor-pointer' : 'cursor-not-allowed',
                ]"
                v-on:click="
                  updateCard = item;
                "
              >
                <dt class="flex justify-between">
                  <p class="text-lg font-medium text-black leading-6">{{ item.count }}</p>
                  <img v-bind:src="(buttonIcon[item.status])" alt="">
                </dt>
                
                <dd class="mt-6">
                  <p class="text-md font-bold text-gray-500">
                    Owner:
                  </p>
                  <p class="text-md font-bold  text-primary-400">
                    {{ item.owner }}
                  </p>
                  <p class="text-md font-bold text-gray-500">
                    Token ID:
                  </p>
                  <p class="text-md font-boldm  text-primary-400">
                    {{ item.token_id}}
                  </p>
                </dd>
                
                <dd class="mt-6 flex mb-2 h-6 items-center md:block lg:flex">
                  <div class="h-6 w-6 mr-2">
                    <USDC size="2" />
                  </div>
                  <div class="flex items-baseline text-lg font-semibold black">
                    2.3 <span class="text-gray-500 sm:ml-2 font-medium ml-2 text-base"> USDC</span>
                  </div>
                </dd>
                
                <div>
                  <!-- <p class="mx-2 text-sm  font-normal text-gray-500"> (${{item.price}} USD) </p> -->
                </div>

                <div class="pt-8 flex just-center">
                  <button 
                    type="button" 
                    :class="[
                      'inline-flex items-center text-center uppercase px-4 w-full py-2 border border-gray-400 shadow-sm text-md font-medium rounded-md text-white',
                      'justify-center focus:outline-none',
                      'text-sm leading-5 font-medium',
                      item.status !== 'sold' ? 'cursor-pointer' : 'cursor-not-allowed',
                      buttonColor[item.status]
                    ]"
                    v-bind:disabled="item.status == 'sold'"
                  >
                    {{item.status}}
                  </button>
                </div>
              </div>
            </dl>

            <div class="mt-4 flex self-end md:w-max w-full">
              <button 
                type="button" 
                :class="[
                  'flex items-center text-center w-full uppercase justify-center focus:outline-none text-base leading-6 font-medium rounded-md',
                  'px-16 py-3',
                  'border border-gray-400 shadow-sm text-gray-700 bg-white hover:bg-gray-50'
                ]"
                v-on:click="showTotal = showTotal + 5"
                v-if="showTotal < originalList.length"
              >
              load more
              </button>
            </div>
          </div>
          
        <!-- End series -->
        </div>
      </div>
      <section class="mt-4 max-w-7xl mx-auto relative z-10 pb-8 lg:pb-8 lg:px-6 lg:px-8" aria-labelledby="contact-heading">
        <h2 class="sr-only" id="contact-heading">Original Pegged NFT</h2>
        <!-- <div class="xl:grid grid-cols-1 gap-y-20 md:grid-cols-5 md:gap-y-0 md:gap-x-16"> -->
        <div class="flex justify-between">
          <PreviewCard />
        </div>

      </section>  

      <!-- Banner -->
      <div v-if="arrSelected.length && showBanner" class="fixed bottom-0 inset-x-0 pb-0 z-10">
        <div class="mx-auto px-0">
          <div class="relative sm:py-8 py-4 bg-white min-h-36 sm:px-8 px-0 shadow-lg">
            <div class="flex flex-col md:flex-row lg:flex-row items-center xl:justify-between flex-wrap">
              <div 
                class="flex sm:px-0 px-4 sm lg:w-8/12 md:w-8/12 sm:pt-0 pt-3 w-full flex-col items-start justify-between flex-wrap"
              >
              <!-- title -->
                <div class="flex items-center md:mb-0 mb-2">
                  <p class="flex font-medium text-primary truncate">
                    <span class="text-primary-400 mr-0.5"> {{arrSelected.length}} </span> SELECTED <img class="ml-2" src="/images/selected_icon.svg" alt="">
                  </p>
                </div>
                <!-- series -->
                <div class="w-full sm:grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 hidden mt-4">
                  <div 
                    v-for="item in arrSelected" 
                    :key="item.token_id" 
                    class="flex items-baseline px-2 py-0.5 text-sm xl:text-lg font-semibold black col-span-1"
                  >
                    {{item.count}} <span class="text-gray-500 ml-1 xl:ml-2 font-medium text-sm">{{item.amount}} USDC</span>
                  </div>
                </div>
                <span class=":pt-0 pt-2 h-px w-full border-b sm:border-0 border-gray-200 "></span>
              </div>

              <div 
                class="sm:px-0 px-4 sm:pt-0 pt-3 mt-2 flex flex-col items-stretch justify-between h-max lg:w-3/12 md:w-max w-full"
              >
                <div 
                  class="flex flex-wrap items-center sm:justify-start justify-between text-lg xl:text-lg font-semibold black"
                >
                  <span class="flex items-center">
                    <USDC size="2" color="#222" />
                    {{totalAmount.toFixed(2)}}
                  </span> 
                  <!-- <p class="mx-2 text-sm font-normal text-gray-500"> (${{totalPrice.toFixed(2)}} USD) </p> -->
                </div>
                <div class="mt-6 w-full grid grid-cols-4">
                  <button 
                    type="button" 
                    v-on:click="login_modal = true"
                    :class="[
                      'inline-flex justify-center col-span-3 w-full items-center text-center uppercase text-md font-medium rounded-md text-white',
                      'px-8 py-2',
                      'focus:outline-none border border-gray-400 shadow-sm',
                      'text-sm leading-5 font-medium cursor-pointer',
                      'text-white hover:text-white hover:bg-primary-500 border-primary-400 bg-primary-400'
                    ]"
                  >
                    BUY NOW
                  </button>
                  <div class="mt-2 text-primary-400 justify-self-center">
                      <button class="focus:outline-none" @click="nft_modal = true">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div v-if="arrSelected.length && !showBanner" class="fixed inset-x-0 bottom-0 z-10">
        <div class="bg-green-200">
          <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div class="flex items-center text-green-600 justify-between flex-wrap">
              <div class="w-0 flex-1 flex items-center">
                <p class="ml-3 font-medium truncate">
                  You have some boxes selected!
                </p>
              </div>
              <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button 
                  @click="showBanner = true"
                  type="button" 
                  class="-mr-1 flex p-2 rounded-md focus:outline-none"
                >
                  Open Box
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

    <!-- Place Bid note -->
<TransitionRoot as="template" :show="nft_modal">
  <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" @close="nft_modal = false" :open="nft_modal">
    <div class="flex items-end justify-center min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <span class="  sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:max-w-sm  w-full sm:p-6">
          <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4 focus:outline-none">
            <button type="button" class="bg-white rounded-md text-gray-400 focus:outline-none" @click="nft_modal = false">
              <span class="sr-only">Close</span>
              <XIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="sm:flex sm:items-start justify-center">
          
            <div class="mt-3 text-center sm:mt-0  sm:text-center">
              <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                Generic
              </DialogTitle>
                
            </div>
            
          </div>
          <div class="mt-5 sm:mt-4">
              Content
          </div>
      
          <div class="mt-5 sm:mt-4 ">
              
            <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-200 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:outline-none sm:mt-0 sm:w-full sm:text-sm" @click="nft_modal = false">
              Ok
            </button>
          </div>
        </div>
      </TransitionChild>
    </div>
  </Dialog>
</TransitionRoot>

<!-- login modal -->
  <TransitionRoot as="template" :show="login_modal">
    <Dialog as="div" @close="login_modal = false">
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
            <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div class="inline-block w-full max-w-4xl align-middle bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-max sm:w-full sm:p-6">
              <div class="w-full mt-5 sm:mt-4 flex">
                  <a href="#" class="w-1/3 mx-2" @click.prevent="doMetaMaskLogin()">
                      <img src="/images/wallet1.jpg" alt="">
                  </a>
                  <a href="#" class="w-1/3 mx-2" @click.prevent="doFortmaticLogin()">
                    <img src="/images/wallet2.jpg"  alt="">
                  </a>
                  <a href="#" class="w-1/3 mx-2" @click.prevent="doPortisLogin()">
                    <img src="/images/wallet3.jpg"  alt="">
                  </a>
              </div>       
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add the lines below */
@layer utilities {
  @variants responsive {
    .masonry {
      column-count: 3;
      column-gap: 1.5em;
    }
    .break-inside {
      break-inside: avoid;
    }
  }
}
</style>

<script>
import NFT from '@/components/PeggedNFTBox'
import PreviewCard from '@/components/PreviewCard'
import { computed, onMounted, ref, watch } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import USDC from '../../components/Shared/USDC.vue'

const buttonColor = {
  sold: 'bg-gray-400 hover:bg-primary-500',
  selected: 'bg-gray-900 hover:bg-black',
  'for sale': 'text-white hover:text-white hover:bg-green-500 border-green-400 bg-green-400',
}

const buttonIcon = {
  selected: '/images/selected_icon.svg',
  'for sale': '/images/sale_icon.svg'
}

const options = [
  {id: 1,name: 'Series Order'},
  {id: 2,name: 'Bundle Series'},
  {id: 3,name: 'Price (Low - High)'},
  {id: 4,name: 'Price (High - Low)'},
]

export default {
  components: {
    // PreviewCard,
    PreviewCard,
    NFT,
    Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot,
    USDC
    // XIcon
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },
  setup() {
    const showBanner = ref(true)
    const nft_modal = ref(false)
    const login_modal = ref(false);
    const router = useRouter();
    const store = useStore();

    const originalList = ref([
      { 
        id: 1,
        count: Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), 
        price: (Math.random() * 999999).toFixed(2),
        status: 'for sale'
      },
      { 
        id: 2,
        count: Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), 
        price: (Math.random() * 999999).toFixed(2),
        status: 'for sale'
         },
      { 
        id: 3,
        count: Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), 
        price: (Math.random() * 999999).toFixed(2),
        status: 'for sale'
         },
      { 
        id: 4,
        count: Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), 
        price: (Math.random() * 999999).toFixed(2),
        status: 'for sale'
         },
      { 
        id: 5,
        count: Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), 
        price: (Math.random() * 999999).toFixed(2),
        status: 'for sale'
         },
      { 
        id: 6,
        count: Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), 
        price: (Math.random() * 999999).toFixed(2),
        status: 'for sale'
         },
      { 
        id: 7,
        count: Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), 
        price: (Math.random() * 999999).toFixed(2),
        status: 'for sale'
      },
      { 
        id: 8,
        count: Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), 
        price: (Math.random() * 999999).toFixed(2),
        status: 'for sale'
      },
      { 
        id: 9,
        count:Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), 
        price: (Math.random() * 999999).toFixed(2), 
        status: 'for sale'
      },
      { 
        id: 10,
        count:Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), 
        price: (Math.random() * 999999).toFixed(2), 
        status: 'for sale'
      },
      { 
        id: 11,
        count:Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), price: (Math.random() * 999999).toFixed(2), status: 'for sale'
      },
      { 
        id: 12,
        count:Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), price: (Math.random() * 999999).toFixed(2), status: 'for sale'
      },
      { 
        id: 13,
        count:Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), price: (Math.random() * 999999).toFixed(2), status: 'for sale'
      },
      { 
        id: 14,
        count:Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), price: (Math.random() * 999999).toFixed(2), status: 'for sale'
      },
      { 
        id: 15,
        count:Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), price: (Math.random() * 999999).toFixed(2), status: 'for sale'
      },
      { 
        id: 16,
        count:Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), price: (Math.random() * 999999).toFixed(2), status: 'for sale'
      },
      { 
        id: 17,
        count:Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), price: (Math.random() * 999999).toFixed(2), status: 'for sale'
      },
      { 
        id: 18,
        count:Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), price: (Math.random() * 999999).toFixed(2), status: 'for sale'
      },
      { 
        id: 19,
        count:Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), price: (Math.random() * 999999).toFixed(2), status: 'for sale'
      },
      { 
        id: 20,
        count:Math.floor(Math.random() * 99) + '/100',
        owner:'0x495...7b5f',
        token_id: '6257595451',
        amount: (Math.random() * 9).toFixed(2), price: (Math.random() * 999999).toFixed(2), status: 'for sale'
      },
    ])

    const filterList = ref(['For Sale','View All'])

    const filter = ref('View All')
    const updateCard = ref({})
    const arrSelected = ref([])
    const totalPrice = ref(0)
    const totalAmount = ref(0)
    const showTotal = ref(10)
    const list = ref([])
    const currentAddress = computed(() => store.getters['blockchain/getCurrentAddress'])
    const login = ref(false);

    onMounted(function() {
      list.value = originalList.value.filter((item, index) => {
        return index < showTotal.value
      })

    })

    watch(showTotal, function(val) {
      list.value = originalList.value.filter((item, index) => {
        return index < val
      })
    })

    watch(filter, function(val) {
      if(val == 'View All') {
        list.value = originalList.value.filter((item, index) => {
          return index < showTotal.value
        })
      } else {
        list.value = originalList.value.filter((item, index) => {
          return item.status === 'for sale' && index < showTotal.value
        })
      }
      // list.value = val == 'View All' ? originalList.value : 
    })

    watch(updateCard, function(val) {
      if(val.status == 'sold') return
      const findCard = filter.value == 'View All' 
      ? originalList.value.find(card => card.id === val.id)
      : list.value.find(card => card.id === val.id)
      
      if(!findCard) return

      list.value = list.value.map((el) => {
        if(el.id === val.id) {
          if(el.status === 'selected'){
            arrSelected.value = arrSelected.value.filter((val) => val.id != el.id )
            totalPrice.value -= parseFloat(el.price)
            totalAmount.value -= parseFloat(el.amount)
            el.status = 'for sale'
          } else {
            arrSelected.value.push(el)
            totalPrice.value += parseFloat(el.price)
            totalAmount.value += parseFloat(el.amount)
            el.status = 'selected'
          }
        }
        return el
      })

      updateCard.value = {}
    })

    const goToMyAccount = () => {
      login_modal.value = false;
      router.push({
        name: 'MyAccount',
        params: {
          address: currentAddress.value
        }
      });
    }

    const doFortmaticLogin = async () => {
      login.value = true;
      await store.dispatch('blockchain/new', {type: 'fortmatic'});
      goToMyAccount();
    }

    const doPortisLogin = async () => {
      await store.dispatch('blockchain/new', {type: 'portis'});
      goToMyAccount();
    }

    const doMetaMaskLogin = async () => {
      await store.dispatch('blockchain/new', {type: 'metamask'});
      goToMyAccount();
    }

    return {
      login_modal,
      options,
      buttonColor,
      buttonIcon,
      showBanner,
      nft_modal,
      list,
      filterList,
      filter,
      updateCard,
      arrSelected,
      totalPrice,
      doFortmaticLogin,
      doPortisLogin,
      doMetaMaskLogin,
      totalAmount,
      originalList,
      showTotal
    }
  },
 
}
</script>
