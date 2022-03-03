<template>
    <div class="mx-auto max-w-md px-4 max-w-full sm:px-6 lg:px-8 lg:max-w-7xl font-inter">
        <Listbox as="div" v-model="selected">
        <ListboxLabel class="sr-only">
            Change published status
        </ListboxLabel>
        <div class="relative">
            <div class="inline-flex shadow-sm rounded-md divide-x divide-primary-600">
            <div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-primary-600">
                <ListboxButton class="relative inline-flex items-center text-gray-400 bg-white p-2 rounded-md text-sm font-medium hover:bg-gray-100 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-100">
                <span class="sr-only">Change published status</span>
                <MenuIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </ListboxButton>
            </div>
            </div>
            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <ListboxOptions class="origin-top-left absolute z-10  mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <ListboxOption  >
                <li class="text-gray-900 cursor-default select-none relative p-4 text-sm">
                    <div class="flex flex-col">
                    <div class="flex justify-between">
                        <router-link to="/my-account">
                            <p v-if="$route.name === '/my-account'" class="text-base text-gray-900  font-bold"> My Account</p>  
                            <p v-else class="text-base text-gray-900 font-medium"> My Account</p>  

                            
                        </router-link>
                    </div>
                    </div>
                </li>
                <li class="text-gray-900', 'cursor-default select-none relative p-4 text-sm">
                    <div class="flex flex-col">
                    <div class="flex justify-between">
                        <router-link to="/my_collections">
                             <p v-if="$route.name === '/My_collections'" class="text-base text-gray-900  font-bold"> My Collection</p>  
                            <p v-else class="text-base text-gray-900 font-medium"> My Collection</p>  
                        </router-link>
                    </div>
                    </div>
                </li>
                <li class="text-gray-900', 'cursor-default select-none relative p-4 text-sm">
                    <div class="flex flex-col">
                    <div class="flex justify-between">
                        <router-link to="/my_wallets">
                             <p v-if="$route.name === '/My_wallets'" class="text-base text-gray-900  font-bold"> My Wallets</p>  
                            <p v-else class="text-base text-gray-900 font-medium"> My Wallets</p>  
                        </router-link>
                    </div>
                    </div>
                </li>
                <li class="text-gray-900', 'cursor-default select-none relative p-4 text-sm">
                    <div class="flex flex-col">
                    <div class="flex justify-between">
                        <router-link to="/my_bids">
                             <p v-if="$route.name === '/My_bids'" class="text-base text-gray-900  font-bold"> My Bids</p>  
                            <p v-else class="text-base text-gray-900 font-medium"> My Bids</p>  
                        </router-link>
                    </div>
                    </div>
                </li>
               
                <li class="text-gray-900', 'cursor-default select-none relative p-4 text-sm  bg-gray-600">
                    <div class="flex justify-between">
                        <div class="flex">
                            <div>
                                 <router-link :to="'/my-account/'+currentAddress">
                                    <img class="inline-block h-10 w-10 rounded-full" src="/images/avatar.png" alt="" />
                                </router-link>
                            </div>
                            <div class="ml-3">
                                 <router-link :to="'/my-account/'+currentAddress">
                                    <p class="text-md font-medium text-white group-hover:text-gray-100">
                                        Client
                                    </p>
                                    <p class="text-xs font-medium text-white group-hover:text-gray-100">
                                        client@clientemail.com
                                    </p>
                                </router-link>
                                
                            </div>
                        </div>
                    
                        <div class="self-center	" >
                            <router-link to="/">
                                <LockClosedIcon class="w-8 h-8 rounded-full p-1 bg-white inline-block text-gray-600" />
                            </router-link>
                        </div>
                    </div>
                </li>
                </ListboxOption>
                
            </ListboxOptions>
            </transition>
        </div>
        </Listbox>
        
    </div>
</template>
<script>
// @ is an alias to /src
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import {  MenuIcon,LockClosedIcon } from '@heroicons/vue/solid'
import { useStore } from 'vuex'
import { computed, defineComponent, ref } from 'vue'

 
 
export default defineComponent ({
  components: {
    LockClosedIcon,
     Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    
    MenuIcon,
  },
  props: ['type'],
  setup(props) {

    const store = useStore();
    const selected = ref();
    
    const currentAddress = computed(() => {
        if (props.type == 'customer') {
            return store.getters['blockchain/getCurrentAddress'];
        } else {
            return '';
        }
    });
  
    return {
        currentAddress,
        selected
    }
  },
})
</script>