 
<template>
<div class="home">
    <div class="relative bg-gray-100 py-4 sm:py-8 lg:pt-6 lg:pb-12 font-inter">
        <div class="relative">
            <Navbar :type="'admin'" />
          <div class="text-center mb-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p class="my-2 text-4xl font-medium text-black tracking-tight sm:text-4xl ">
              My Wallet
            </p>
          </div>
          <div class="mt-5 mx-5 lg:mt-0 lg:col-span-5 bg-white p-4 lg:p-8 rounded-lg">
            <ul role="list" class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              <li class="relative" >
                <div class="group block w-full aspect-w-10 aspect-h-7 bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-teal-500 overflow-hidden">
                  <a>
                  <img src="/images/wallet1.jpg" alt="" class="object-cover pointer-events-none group-hover:opacity-75 w-full" />
                </a>
                </div>

                  <div v-if="!currentAddress">
                    <a href="#" class="mt-2 block text-teal-400 text-center text-md uppercase font-bold" v-if="!connected" @click.prevent="connect">Connect!</a>
                  </div>

                  <div v-if="currentAddress">
                    <p class="mt-2 block text-teal-400 text-center text-md uppercase font-medium truncate pointer-events-none" v-if="connected">CONNECTED</p>
                    <a href="#" class="mt-2 block text-teal-400 text-center text-md uppercase font-bold" v-if="!connected" @click.prevent="connect">Connect!</a>
                    <a href="#" @click.prevent="copylink" class="focus:outline-none flex justify-center">
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
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
  </div>


 
</template>
 
<script>
import Navbar from '@/components/Layouts/Navbar.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
   components: {
     Navbar
  },

  setup() {
    
    const store = useStore();
    const currentAddress = computed(() => store.getters["admin/hasCurrentAddress"]);
    const connected = computed(() => store.getters["blockchain/isConnected"]);

    const copylink = () => {
      var Url = '0x495f97b53k0ll7u3f';
      Url.innerHTML = '0x495f97b53k0ll7u3f';
      Url.select();
      document.execCommand("copy");
    }

    const connect = async () => {

      if (!connected.value) {
        await store.dispatch('blockchain/connected');
        await store.dispatch('admin/connectToBlockChain');
      }

    }

    return {
      copylink,
      currentAddress,
      connect,
      connected
    }
  },
}
</script>
