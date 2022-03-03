<template>
    <div class="" v-if="showSales">
      <div class="flex px-8 mt-4 lg:py-4 rounded-md justify-center">
        <h2
          class="
            text-2xl
            lg:mx-12 lg:mt-0
            mx-1
            font-medium
            py-4
            lg:py-2
            mt-4
            text-gray-900
            sm:text-2xl
          "
        >
          Active Sales
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
          v-for="sale in sales"
          v-bind:key="sale"
          class="md:col-span-1 w-full pb-2"
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
                    :sale="sale"
                    :auctions="nft.auctions"
                  ></component>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <!-- specs -->
        <div class="md:col-span-1 w-full pb-2" v-if="!dontCreateNewSales">
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
                  <a href="#" @click.prevent="showCreateSaleModal()">
                    <img src="/images/plus_circle.svg" class="mx-auto" alt="" />
                  </a>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <create-sale @on:sale="pushSaleToNft($event)" :nft-ref="nftRef" :nft="nft" :create_sale="showSaleModal" :client-ref="clientRef" :address="address" @on:close="onClose()"></create-sale>


    </div>
</template>
<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import CreateSale from '../Forms/CreateSale.vue';
import { ref, watch } from 'vue';

import { ChevronDownIcon, CalendarIcon } from "@heroicons/vue/outline";
import Trading from "@/components/Drawers/Trading_view";
import Blockchain from "@/components/Drawers/Blockchain_sale";
import Sale from "@/components/Drawers/Sale";
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';

const cards = [
  {
    id: 1,
    component: <Sale />,
    class:
      "xl:w-full lg:w-6/12 w-full px-2 pb-2 self-start xl:order-1 lg:order-2 order-3",
  },
  {
    id: 2,
    component: <Trading />,
    class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 xl:order-3 lg:order-1 order-1",
  },
  {
    id: 4,
    component: <Blockchain />,
    class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 xl:order-3 lg:order-1 order-1",
  },
];

export default {
    components: {
        CreateSale,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronDownIcon,
        CalendarIcon,
        Blockchain,
        Trading,
        Sale,
    },
    props: ['nftRef', 'showSales', 'nft', 'noNewSale', 'clientRef', 'address'],
    setup(props, {emit}) {

        const store = useStore();

        const showSaleModal = ref(false);

        const sales = ref([]);
        const dontCreateNewSales = ref(false);

        const showCreateSaleModal = () => {
            console.log('showform');
            showSaleModal.value = true;
        }

        const onClose = () => {
            showSaleModal.value = false;
        }

        const pushSaleToNft = async (event) => {
            console.log('sale ->', event)
            await store.dispatch("saleStore/createSale", event);
            const saleRef = store.getters['saleStore/saleRef'];
            sales.value.push(saleRef);
            showSaleModal.value = false;
            dontCreateNewSales.value = true;

            emit("on:placeOffer");

        }

        watch(() => props.nft.sales, (value) => {
          sales.value = [...value];
        })

        watch(() => props.noNewSale, (value) => {
          dontCreateNewSales.value = value;
        })

        onMounted(() => {
            console.log(props.noNewSale);
        })

        return {
            pushSaleToNft,
            showSaleModal,
            showCreateSaleModal,
            onClose,
            cards,
            sales,
            dontCreateNewSales
        }
    }
}
</script>