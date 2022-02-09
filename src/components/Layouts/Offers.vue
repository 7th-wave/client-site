<template>
    <div class="" v-if="showOffers && nft.offers.length > 0">
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
          Offers
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
          v-for="offer in nft.offers"
          v-bind:key="offer"
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
                    :offer="offer"
                    :client-ref="clientRef"
                    :address="address"
                  ></component>
                </dl>
              </div>
            </div>
          </div>
        </div>

  
      </div>


    </div>
</template>
<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

import { ChevronDownIcon, CalendarIcon } from "@heroicons/vue/outline";
import Trading from "@/components/Drawers/Trading_view";
import Blockchain from "@/components/Drawers/Blockchain_data";
import Offer from "@/components/Drawers/Offer";

const cards = [
  {
    id: 1,
    component: <Offer />,
    class:
      "xl:w-full lg:w-6/12 w-full px-2 pb-2 self-start xl:order-1 lg:order-2 order-3",
  },
];

export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        ChevronDownIcon,
        CalendarIcon,
        Blockchain,
        Trading,
        Offer,
    },
    props: ['nftRef', 'showOffers', 'nft', 'clientRef', 'address'],
    setup() {


        return {
            cards
        }
    }
}
</script>