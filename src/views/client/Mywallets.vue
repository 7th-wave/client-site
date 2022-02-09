 
<template>
<div class="account sm:px-2 py-4 lg:py-16 relative bg-gray-100 max-w-7xl mx-auto font-inter ">
  <div class="lg:hidden">
    <navbar :type="'customer'" />
  </div>
  <div class="py-0 sm:py-2  lg:pt-0 lg:pb-8 text-center">
    <h1 class="text-4xl font-normal">My Wallets</h1>
  </div>
  <div>
    <div class="lg:grid lg:grid-cols-7 lg:gap-6">
      <div class="hidden lg:col-span-2 lg:block" >
        <Menu />
      </div>
      <div class="mt-5 lg:mt-0 lg:col-span-5 bg-white p-4 lg:p-8 rounded-lg">
         <ul role="list" class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          <li class="relative">
            <div class="group block w-full aspect-w-10 aspect-h-7 bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-teal-500 overflow-hidden">
              <a @click.prevent="doMetaMaskLogin()">
              <img src="/images/wallet1.jpg" alt="" class="object-cover pointer-events-none group-hover:opacity-75 w-full" />
             </a>
            </div>

              <div v-if="currentProvider == 'metamask'">
                <p class="mt-2 block text-teal-400 text-center text-md uppercase font-medium truncate pointer-events-none">CONNECTED</p>
                <a href="#" @click.prevent="doMetaMaskLogin()" class="focus:outline-none flex justify-center">
                  <p class="block text-teal-400 text-center font-medium text-md  pointer-events-none">{{ currentAddress.replace(currentAddress.substring(8,currentAddress.length - 3), "****") }}</p>
                </a>
              </div>
              <div v-else class="text-center mt-6">
                <a
                  class="py-3 px-5 border border-teal-400 hover:bg-teal-400 hover:text-white rounded-md" 
                  href="https://metamask.io/download.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  donwload
                </a>
              </div>
          </li>
          <li  class="relative">
            <div class="group block w-full aspect-w-10 aspect-h-7      bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-teal-500 overflow-hidden">
              <a href="#" @click.prevent="doFortmaticLogin()">
              <img src="/images/wallet2.jpg" alt="" class="object-cover pointer-events-none group-hover:opacity-75 w-full" />
             </a>
            </div>
             <div v-if="currentProvider == 'fortmatic'">
                <p class="mt-2 block text-teal-400 text-center text-md uppercase font-medium truncate pointer-events-none">CONNECTED</p>
                <a href="#" @click.prevent="doFortmaticLogin()" class="focus:outline-none flex justify-center">
                  <p class="block text-teal-400 text-center font-medium text-md  pointer-events-none">{{ currentAddress.replace(currentAddress.substring(8,currentAddress.length - 3), "****") }}</p>
                </a>
              </div>
          </li>
          <li  class="relative">
            <div class="group block w-full aspect-w-10 aspect-h-7  bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-teal-500 overflow-hidden">
              <a @click.prevent="doPortisLogin()">
              <img src="/images/wallet3.jpg" alt="" class="object-cover pointer-events-none group-hover:opacity-75 w-full" />
             </a>
            </div>
             <div v-if="currentProvider == 'portis'">
                <p class="mt-2 block text-teal-400 text-center text-md uppercase font-medium truncate pointer-events-none">CONNECTED</p>
                <a href="#" @click.prevent="doPortisLogin()" class="focus:outline-none flex justify-center">
                  <p class="block text-teal-400 text-center font-medium text-md  pointer-events-none">{{ currentAddress.replace(currentAddress.substring(8,currentAddress.length - 3), "****") }}</p>
                </a>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
 </div>

 
</template>
 
<script>
import Menu from '@/components/Layouts/Menu.vue'
import Navbar from '@/components/Layouts/Navbar_mobile.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import Fortmatic from 'fortmatic'
import Portis from "@portis/web3";

export default {
   components: {
     Menu,
     Navbar
  },

  setup() {
    const fm = new Fortmatic('pk_test_74DE84F478732B84');
    const portis = new Portis('a8b095a1-4da6-49ab-8073-9a8bddaf8a85', 'rinkeby');
    const store = useStore();
    const currentAddress = computed(() => store.getters['blockchain/getCurrentAddress']);
    const currentProvider = computed(() => store.getters['blockchain/getCurrentProvider']);

    const doFortmaticLogin = async () => {
      if(currentProvider.value !== 'fortmatic') {
        return await store.dispatch('blockchain/new', {type: 'fortmatic'});
      }
      return fm.user.deposit()
    }

    const doPortisLogin = async () => {
      if(currentProvider.value !== 'portis') {
        return await store.dispatch('blockchain/new', {type: 'portis'});
      }
      return portis.showPortis();
    }

    const doMetaMaskLogin = async () => {
      if(currentProvider.value !== 'metamask') {
        return await store.dispatch('blockchain/new', {type: 'metamask'});
      }
    }

    return {
      currentAddress,
      currentProvider,
      doFortmaticLogin,
      doPortisLogin,
      doMetaMaskLogin,
    }
  },
}
</script>
