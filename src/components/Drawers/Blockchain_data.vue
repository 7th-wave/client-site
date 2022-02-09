<template>
    <Disclosure as="div" class="py-6" v-slot="{ open }">
        <dt class="text-lg">
            <DisclosureButton class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none">
            <span class="font-medium text-black text-lg uppercase">
                Blockchain Data
            </span>
            <span class="ml-6 h-7 flex items-center">
                <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
            </span>
            </DisclosureButton>
        </dt>
        <DisclosurePanel as="dd" class="mt-2 rounded-sm px-2 py-2">
            <div class="mt-1 flex items-baseline md:block lg:flex">
            <div class="flex items-baseline text-base font-bold text-gray-500">
                Contract: 
                <span class="mx-2 text-base font-normal text-gray-500">Green Gallery</span>
            </div>
            </div>  
            <div class="mt-1 flex items-baseline md:block lg:flex">
            <div class="flex items-baseline text-base font-bold text-gray-500">
                Token ID: 
                <span class="mx-2 text-base font-normal">{{data.token_id || 'N/A'}}</span>
            </div>
            </div>  
            <div class="mt-1 flex items-baseline md:block lg:flex">
            <div class="flex items-baseline text-base font-bold text-gray-500 overflow-hidden">
                IPFS: 
                <a 
                    class="mx-2 text-base font-normal text-teal-400 hover:text-teal-400" 
                    :href="data.ipfs"
                    target="_blank"
                >{{data.ipfs ? data.ipfs.replace(data.ipfs.substring(0,data.ipfs.length - 6), "****") : 'N/A'}}</a>
            </div>
            </div>  
        </DisclosurePanel>
    </Disclosure>
</template>


<script>

import { onMounted, ref, toRefs, watch } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon, } from '@heroicons/vue/outline'
import { db } from '../../firebase/firebase'
  
 
export default {
  components: {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      ChevronDownIcon,


  },
  props: ['token_id', 'ipfs', 'auction'],
  setup(props) {
    const open = ref(false)
    const data = ref({
        token_id: '',
        ipfs: ''
    })

    const { token_id, ipfs, auction } =  toRefs(props)

    watch(token_id, function(val) { data.value.token_id = val })
    watch(ipfs, function(val) { data.value.ipfs = val })
 
    onMounted(async function() {
        try {
            const response = await db.collection("auctions").doc(auction.value).get();
            const resNFT = await db.collection("nfts").doc(response.data().nftRef).get();
            const {blockchainId, ipfs} = resNFT.data()
            data.value = { token_id: blockchainId, ipfs: ipfs }
            
        } catch (error) {
            console.log(error)
        }
    })

    return {
      open,
      data
    }
  },
}
</script>
