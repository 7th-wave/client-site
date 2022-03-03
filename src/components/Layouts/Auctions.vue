<template>
    <div class="" v-if="showAuctions">
      <div class="flex px-8 mt-4 lg:py-4 rounded-md justify-center">
        <h2
          class="
            text-2xl
            lg:mx-12 lg:mt-0 lg:py-0
            mx-1
            font-medium
            py-4
            lg:py-2
            mt-4
            text-gray-900
            sm:text-2xl
          "
        >
          Auctions
        </h2>
      </div>
      <div
        class="
          lg:pb-4 lg:px-12 lg:py-4
          md:grid
          grid-cols-1
          gap-3
          px-2
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          min-w-full
          xl:grid-cols-4
          flex flex-col-reverse
          justify-start
          items-start
        "
      >
        <!-- blockchain data -->
        <div
          v-for="auction in nft.auctions"
          v-bind:key="auction"
          class="md:col-span-1 md:col-span-1 w-full pb-2"
        >
          <div class="bg-white rounded-lg">
            <div class="max-w-7xl mx-auto py-4 px-4 sm:py-2 sm:px-6 lg:px-4">
              <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                <dl
                  v-for="card in cards"
                  :key="card.id"
                  class="mt-6 card divide-y divide-gray-200"
                >
                  <component
                    v-bind:is="card.component"
                    :token_id="nft.blockchainId"
                    :ipfs="nft.ipfs"
                    :auction="auction"
                    :auctions="nft.auctions"
                  ></component>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <!-- specs -->
        <div class="md:col-span-1 w-full pb-2" v-if="!noNewAuction">
          <div class="bg-white rounded-lg">
            <div class="max-w-7xl mx-auto">
              <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                <dl
                  class="
                    bg-primary-400
                    h-48
                    flex flex-wrap
                    content-center
                    justify-center
                  "
                >
                  <a href="#" @click.prevent="showCreateActionModal()">
                    <img src="/images/plus_circle.svg" class="mx-auto" alt="" />
                  </a>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

        <create-auction :nft-ref="nftRef" :blockchain-id="nft.blockchainId" @on:auction_created="pushAuctionToNft()" :create_auction="showAuctionModal" @on:close="onClose()"></create-auction>

    </div>
</template>
<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import CreateAuction from '../Forms/CreateAuction.vue';
import { ref, toRefs } from '@vue/reactivity';
import { db } from "../../firebase/firebase";

import { ChevronDownIcon, CalendarIcon } from "@heroicons/vue/outline";
import Trading from "@/components/Drawers/Trading_view";
import Bids from "@/components/Drawers/Bids";
import Blockchain from "@/components/Drawers/Blockchain_data";
import Auction from "@/components/Drawers/Auction_creation";
import { onMounted } from '@vue/runtime-core';

const cards = [
  {
    id: 1,
    component: <Auction />,
    class:
      "xl:w-full lg:w-6/12 w-full px-2 pb-2 self-start xl:order-1 lg:order-2 order-3",
  },
  {
    id: 2,
    component: <Bids />,
    class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 self-start order-2",
  },
  {
    id: 3,
    component: <Trading />,
    class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 xl:order-3 lg:order-1 order-1",
  },
  {
    id: 3,
    component: <Blockchain />,
    class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 xl:order-3 lg:order-1 order-1",
  },
];

export default {
    components: {
        CreateAuction,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronDownIcon,
        CalendarIcon,
        Blockchain,
        Trading,
        Auction,
        Bids,
    },
    props: ['nftRef', 'showAuctions', 'nft', 'noNewAuction'],
    setup(props) {

        let { nft, nftRef} = toRefs(props);

        const showAuctionModal = ref(false);

        const showCreateActionModal = () => {
            console.log('showform');
            showAuctionModal.value = true;
        }

        const onClose = () => {
            showAuctionModal.value = false;
        }

        const pushAuctionToNft = async (event) => {
            let auctionsUp = nft.value.auctions || [];
            auctionsUp.push(event);

            await db.collection("nfts").doc(nftRef.value).update({
                auctions: auctionsUp,
            });

            showAuctionModal.value = false;
        }

        onMounted(() => {
            console.log(props.showAuctions);
        })

        return {
            pushAuctionToNft,
            showAuctionModal,
            showCreateActionModal,
            onClose,
            cards
        }
    }
}
</script>