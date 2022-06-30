<template>
  <LightBox
    :images="imageUrl"
    :visible="visibleLightBox"
    @on:close="visibleLightBox = false"
    v-if="imageUrl"
  />
  <div
    class="
      w-full
      lg:max-w-5xl
      pt-8
      mx-auto
      font-inter
      flex flex-col
      lg:flex-row lg:space-x-5
    "
  >
    <div class="w-full" v-if="isLoaded">
      <img
        :src="imageUrl"
        class="w-full object-cover rounded-md shadow-md overflow-hidden mb-3"
        alt=""
      />
      <Spec
        @on:login="emitsLogin"
        :nft="{ ...nft, artistName }"
        @on:info="placebid_note = true"
        :auctionref="auctionref"
        :auction="auction"
        @on:placedBid="placedBid"
        :nftRef="nftRef"
      />
    </div>
    <div class="w-full flex items-start flex-col space-y-2" v-if="isLoaded">
      <div
        class="
          w-full
          rounded-md
          bg-white
          shadow-md
          p-4
          flex flex-col
          items-start
          space-y-4
        "
      >
        <span class="text-xl font-semibold text-gray-900">{{ nft.title }}</span>
        <p class="text-left text-lg font-normal text-black">
          <Markdown :source="description" :linkify="true" :html="true" />
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div
          class="
            col-span-1
            w-full
            bg-white
            rounded-md
            shadow-md
            flex
            items-center
            space-x-2
            p-4
          "
          v-for="(item, index) of nft.attributes"
          :key="index"
        >
          <span class="text-lg text-gray-500 font-semibold uppercase"
            >{{ item.name }}:</span
          >
          <span class="text-lg text-gray-900 font-normal">{{
            item.value
          }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="detail bg-gray-100 font-inter">
    <div
      class="
        flex
        md:flex-nowrap
        flex-wrap
        md:px-6
        lg:px-12
        px-2
        pb-3
        mt-10
        justify-between
        items-center
      "
    >
      <div class="w-full md:pl-2">
        <div class="flex justify-between">
          <div
            class="
              flex flex-nowrap
              md:px-2
              px-0
              justify-between
              md:w-1/4
              lg:w-1/4
              w-full
            "
          >
            <a class="w-full flex" v-if="nft.qrViews">
              <span class="sr-only">Views</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-primary-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span
                class="
                  w-max
                  text-base
                  leading-6
                  font-normal font-inter
                  text-black
                "
                >{{ nft.qrViews }} QR views</span
              >
            </a>
            <div class="w-full justify-end flex"></div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        lg:pb-4 lg:pt-2
        sm:py-0 sm:px-6
        lg:px-12
        md:grid
        grid-cols-1
        gap-2
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        min-w-full
        flex flex-col-reverse
        justify-start
        items-start
      "
    >
      <div
        class="
          flex flex-wrap
          justify-end
          items-start
          xl:grid xl:grid-cols-3 xl:gap-1 xl:col-span-3
          lg:col-span-2 lg:row-span-1
          gap-2
        "
      >
        <div v-for="card in cards" :key="card.id" :class="card.class">
          <div class="bg-white rounded-lg">
            <div class="min-w-7xl mx-auto py-4 px-4 sm:py-2 sm:px-6 lg:px-4">
              <div class="min-w-3xl mx-auto divide-y-2 divide-gray-200">
                <dl class="space-y-6 divide-y divide-gray-200">
                  <component
                    v-bind:is="card.component"
                    :token_id="nft.blockchainId"
                    :ipfs="nft.ipfs"
                    :auction="auctionref"
                    :auctions="nft.auctions"
                    :update="updateData"
                    :offers="nft.offers"
                    :nft-ref="nftRef"
                    :nft="nft"
                  ></component>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- stats -->
    <NFTBox @on:open="nft_modal = true" />
  </div>

  <!-- Place Bid note -->
  <TransitionRoot as="template" :show="nft_modal">
    <Dialog
      as="div"
      static
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="nft_modal = false"
      :open="nft_modal"
    >
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-2
          pb-20
          text-center
          sm:block sm:p-0
        "
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>
        <span
          class="sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="
              inline-block
              align-bottom
              bg-white
              rounded-lg
              px-4
              pt-5
              pb-4
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle
              lg:max-w-sm
              w-full
              sm:p-6
            "
          >
            <div class="sm:flex sm:items-start justify-center">
              <div class="mt-3 text-center sm:mt-0 sm:text-center">
                <DialogTitle
                  as="h3"
                  class="text-lg leading-6 font-medium text-gray-900"
                >
                  Generic
                </DialogTitle>
              </div>
            </div>
            <div class="mt-5 sm:mt-4">Content</div>

            <div class="mt-5 sm:mt-4">
              <button
                type="button"
                class="
                  mt-3
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-gray-200
                  shadow-sm
                  px-4
                  py-2
                  bg-white
                  text-base
                  font-medium
                  text-gray-700
                  hover:bg-gray-50 hover:text-gray-900
                  focus:outline-none
                  sm:mt-0 sm:w-full sm:text-sm
                "
                @click="nft_modal = false"
              >
                Ok
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

  <!-- Place Bid note -->
  <TransitionRoot as="template" :show="placebid_note">
    <Dialog
      as="div"
      static
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="placebid_note = false"
      :open="placebid_note"
    >
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-2
          pb-20
          text-center
          sm:block sm:p-0
        "
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="
              inline-block
              align-bottom
              bg-white
              rounded-lg
              px-4
              pt-5
              pb-4
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle
              lg:max-w-sm
              w-full
              sm:p-6
            "
          >
            <div class="sm:flex sm:items-start justify-center">
              <div class="mt-3 text-center sm:mt-0 sm:text-center">
                <DialogTitle
                  as="h3"
                  class="text-lg leading-6 font-medium text-gray-900"
                >
                  Placing a Bid
                </DialogTitle>
              </div>
            </div>
            <div class="mt-5 sm:mt-4 font-medium text-center text-gray-500">
              The Highest Bidder will win the item at the end of the auction.
              Auctions are placed in WETH which are a 1:1 equivalent with ETH.
              <br />
              <br />
              WETH allows you to place multiple bids with the same funds
              simultaneously. As soon as one of your bids is won, other auctions
              will be automatically cancel if using the same funds.
            </div>

            <div class="mt-5 sm:mt-4">
              <button
                type="button"
                class="
                  mt-3
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-gray-200
                  shadow-sm
                  px-4
                  py-2
                  bg-white
                  text-base
                  font-medium
                  text-gray-700
                  hover:bg-gray-50 hover:text-gray-900
                  focus:outline-none
                  sm:mt-0 sm:w-full sm:text-sm
                "
                @click="placebid_note = false"
              >
                Ok
              </button>
            </div>
          </div>
        </TransitionChild>
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
    .card {
      width: 400px;
    }

    .img-max-height {
      max-height: 564px;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { computed, onMounted, ref } from "vue";
import { XIcon } from "@heroicons/vue/outline";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import Blockchain from "@/components/Drawers/Blockchain_data";
import Trading from "@/components/Drawers/Trading_view";
import Spec from "@/components/Spec";
import Bids from "@/components/Drawers/Bids";
import OffersCard from "@/components/Drawers/OffersCard";
import NFTBox from "@/components/NFTBox";
import LightBox from "../../components/Layouts/LightBox.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import { storage } from "../../firebase/firebase";
//import Share from "../../components/Modals/Share.vue";
import { getNft } from "../../firebase/nfts";

import Markdown from "vue3-markdown-it";

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
    Spec,
    Blockchain,
    Trading,
    Bids,
    NFTBox,
    LightBox,
    //Share,
    Markdown,
  },
  emits: ["on:login"],
  setup(props, { emit }) {
    const open = ref(false);
    const placebid_note = ref(false);
    const nft_modal = ref(false);
    const login_modal = ref(false);
    const place_bid = ref(false);
    const visibleLightBox = ref(false);
    const isLoaded = ref(false);

    const route = useRoute();
    const store = useStore();
    //const collectionRef = route.params.collection;
    const nftRef = ref(route.params.ref);

    const cards = ref([]);

    const bid = ref(0);

    const description = ref("");

    const nft = ref({
      title: "",
      collection: "",
      sub_title: "",
      dimension: "",
      medium: "",
      description: "",
      imageUrl: "",
      link: "",
      qrCodeImage: "",
      ipfs: "",
      metadataIpfs: "",
      isMinted: false,
      blockchainId: 0,
      blockChainOwner: "",
      attributes: [],
      auctions: [],
    });
    const auction = computed(() => store.state.auctionStore.auction);
    const currentAddress = computed(
      () => store.getters["blockchain/getCurrentAddress"]
    );
    const isOwner = computed(
      () => nft.value.blockChainOwner == currentAddress.value
    );
    const auctionref = ref();

    const artistName = ref("");

    const imageUrl = ref("");
    const updateData = ref(false);

    const getFullImageURL = async (item) => {
      var storageRef = storage.ref();
      imageUrl.value = await storageRef.child(item).getDownloadURL();
    };

    const getData = async () => {
      //await store.dispatch("collection/loadCollection", collectionRef);
      artistName.value = "GB MIAMI"; //store.getters["collection/getName"];

      nft.value = await getNft(nftRef.value);
      isLoaded.value = true;

      description.value = nft.value.description.replace(/\\n/g, "<br />");

      if (nft.value.auctions.length > 0) {
        const lastAuction = nft.value.auctions[nft.value.auctions.length - 1];
        if (lastAuction.status == "active") {
          auctionref.value = nft.value.auctions[nft.value.auctions.length - 1];
          await store.dispatch("auctionStore/getAuction", auctionref.value);

          cards.value.push({
            id: 3,
            component: <Bids />,
            class:
              "xl:w-full lg:w-6/12 w-full pb-2 xl:order-3 lg:order-1 order-1",
          });
        }
      }

      if (
        nft.value.offers &&
        nft.value.offers.length > 0 &&
        currentAddress.value
      ) {
        cards.value.push({
          id: 4,
          component: <OffersCard />,
          class:
            "xl:w-full lg:w-6/12 w-full pb-2 xl:order-3 lg:order-1 order-1",
        });
      }

      getFullImageURL(nft.value.imageUrl);
    };

    onMounted(async () => {
      await getData();
    });

    const showModal = () => {
      visibleLightBox.value = true;
    };

    const refresh = () => {
      return location.reload();
    };

    const placedBid = () => {
      updateData.value = true;
      setTimeout(() => (updateData.value = false), 1000);
    };

    const emitsLogin = () => {
      emit("on:login");
    };

    return {
      nft,
      cards,
      artistName,
      auction,
      auctionref,
      open,
      placebid_note,
      nft_modal,
      login_modal,
      place_bid,
      showModal,
      visibleLightBox,
      refresh,
      imageUrl,
      bid,
      placedBid,
      updateData,
      nftRef,
      isOwner,
      isLoaded,
      emitsLogin,
      description,
    };
  },
};
</script>
