<template>
    <Disclosure as="div" class="py-6" v-slot="{ open }">
        <dt class="text-lg">
            <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none">
                <span class="font-medium text-lg text-black uppercase">
                    Trading history
                </span>
                <span class="ml-6 h-7 flex items-center">
                    <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                </span>
            </DisclosureButton>
        </dt>
        <DisclosurePanel as="dd" class="mt-2 rounded-sm py-2">
            <div v-if="arrAuctions && arrAuctions.length" class="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div>
                    <Menu as="div" class="relative inline-block text-right">
                        <div class="flex">
                            <span class="text-teal-400 mr-2">60 days</span>
                            <MenuButton class=" rounded-full flex items-center text-teal-400  ">
                            <span class="sr-only">Open options</span>
                            <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
                            </MenuButton>
                        </div>

                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div class="py-1">
                                    <MenuItem v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">7 days</a>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">30 days</a>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">60 days</a>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                    <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">1 year</a>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
                <div class="flex items-between text-md font-semibold text-gray-600" v-if="arrAuctions.length">
                    <div class="mx-1 text-sm font-medium text-gray-500">
                        <USDC color="#222" size="5" />
                    </div>
                    <div class="flex items-baseline font-opensans  text-base font-normal text-black">
                        {{arrAuctions[0].wonPrice}}
                    </div>
                </div>
            </div>  
            <div class="mt-1 flex items-baseline md:block lg:flex" v-if="arrAuctions && arrAuctions.length">
                <line-chart-alternate class="w-full .chart" :data="arrAuctions"></line-chart-alternate>
            </div>

            <div class="pr-4 rounded-sm px-2 py-2 bg-gray-50 w-full" v-if="!arrAuctions.length">
                <div class="mt-1 flex items-center justify-center text-center text-gray-500">
                    No trading data yet
                </div>
            </div>
            
        </DisclosurePanel> 

        <DisclosurePanel 
            as="dd" 
            v-for="(auction, index) in arrAuctions" :key="index" 
            :class="[
                'mt-2 pr-4 px-2 py-2',
                'rounded-sm',
                index % 2 !== 0 && 'bg-gray-50'
            ]"
        >
            <div class="mt-1 flex items-baseline md:block lg:flex">
                <div class="flex items-baseline text-base font-bold text-gray-500">
                    Event: 
                    <span class="mx-2 text-md font-normal text-gray-500">List  </span>
                    <span class="mx-2 text-md font-normal text-teal-600">{{auction.tx}}  </span>
                </div>
            </div>  
            <div class="mt-1 flex items-baseline md:block lg:flex">
                <div class="flex items-baseline text-base font-bold text-gray-500">
                    Price: 
                </div>
                <div class="mt-1 flex items-baseline md:block lg:flex">
                    <div class="mx-1 text-sm font-medium text-gray-500">
                        <USDC size="5" />
                    </div>
                    
                    <div class="flex items-baseline text-base font-opensans font-md text-black">
                        {{auction.wonPrice || 'N/A'}}
                    </div>
                </div>
            </div>
            
            <div class="mt-1 flex items-baseline md:block lg:flex">
                <div class="flex items-baseline text-base font-bold text-gray-500">
                    Placed:
                    <span class="mx-2 text-sm font-normal text-gray-500"> 
                        <span class="text-black text-base">{{getPlacedDate(auction.dateStarts, auction.timeStarts)}}</span>
                    </span>
                </div>
            </div>
            <div class="mt-1 flex items-baseline md:block lg:flex overflow-hidden">
                <div class="flex items-baseline text-base font-bold text-gray-500 overflow-hidden">
                    To: 
                    <span class="mx-2 text-base font-normal text-gray-500 overflow-hidden">
                        {{auction.wonBy.replace(auction.wonBy.substring(8,auction.wonBy.length - 3), "****") || 'N/A'}}
                    </span>
                </div>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>


<script>

import { onMounted, ref, toRefs, watch } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon} from '@heroicons/vue/outline'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import LineChartAlternate from '../Layouts/LineChartAlternate.vue'
import USDC from '../Shared/USDC.vue';
import { db } from '../../firebase/firebase.js'
import moment from 'moment';
 
export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronDownIcon,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        LineChartAlternate,
        USDC,
    },
    props: ['auctions'],
    setup(props) {
        const open = ref(false)
        const { auctions } = toRefs(props)
        const arrAuctions = ref([])

        async function getAuction(auctionRef) {
            try {
                const response = await db.collection("auctions").doc(auctionRef).get();
                if(response.data().status == 'ended') {
                    arrAuctions.value.push(response.data())
                    arrAuctions.value = arrAuctions.value.sort((a, b) => {
                        const dateA = moment(a.dateStarts + ' ' + a.timeStarts) 
                        const dateB = moment(b.dateStarts + ' ' + b.timeStarts) 
                        return dateA.diff(dateB);
                    })
                }


            } catch (error) {
                console.log(error)
            }
        }

        onMounted(function(){
            auctions.value.map((auctionRef)  => {
                getAuction(auctionRef)
            })
        })

        watch(auctions, function(val) {
            val.map((auctionRef)  => {
                getAuction(auctionRef)
            })
        })

        function getPlacedDate(day, time) {
            return (moment(day + ' ' + time).fromNow())
        }
        return {
            open,
            arrAuctions,
            getPlacedDate,
        }
    },
}
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add the lines below */
@layer utilities {
  @variants responsive {
    .chartjs-render-monitor {
        @apply w-full relative;
        height: 100px;
    }
  }
}

</style>
