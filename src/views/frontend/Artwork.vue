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
    <div class="w-full px-4" v-if="isLoaded">
      <img
        :src="imageUrl"
        class="w-full object-cover rounded-md shadow-md overflow-hidden mb-3"
        alt=""
        v-if="imageUrl"
      />
      <Skeletor v-else height="502" />
      
    </div>
    <div class="w-full flex items-start flex-col justify-between space-y-2" v-if="isLoaded">
      <div
        class="
          w-full
          flex flex-col
          items-start
          space-y-4
        "
      >
        <span class="text-4xl font-normal text-gray-900 mt-4 lg:mt-0 px-4">{{ nft.title }}</span>
        
      </div>
      <div class="w-full px-4 grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div
          class="
            col-span-2
            lg:col-span-1
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
          :class="{'col-span-2': index+1 == nft.attributes.length}"
        >
          <span class="text-base text-gray-500 font-semibold uppercase" 
            >{{ item.name }}:</span
          >
          <span class="text-base text-gray-900 font-normal">{{
            item.value
          }}</span>
        </div>
      </div>
      <div class="w-full">
      <Spec
        @on:login="emitsLogin"
        :nft="{ ...nft, artistName }"
        @on:info="placebid_note = true"
        :auctionref="auctionref"
        :auction="auction"
        @on:placedBid="placedBid"
        :nftRef="nftRef"
        :price="currentPrice"
        :amount="currentAmount"
      />
      </div>
    </div>
  </div>
  <div class="detail max-w-7xl mt-12 mx-auto font-inter" v-if="nft.isMinted">
    <MintsInfosCards :nft="nft"  />

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
import { computed, onMounted, reactive, ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import Spec from "@/components/Spec";
import OffersCard from "@/components/Drawers/OffersCard";
import LightBox from "../../components/Layouts/LightBox.vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import { storage } from "../../firebase/firebase";
//import Share from "../../components/Modals/Share.vue";
import { getNft } from "../../firebase/nfts";

import MintsInfosCards from '@/components/cards/MintsInfosCards.vue';
import { Skeletor } from 'vue-skeletor';
import { getWhiteList } from '../../blockchain/index';


export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    Spec,
    LightBox,
    //Share,
    MintsInfosCards,
    Skeletor
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
    const currentPrice = ref();
    const currentAmount = ref();

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
    
    const imgObj = reactive({
        src: '',
        error: './images/loaging_image_big.png',
        loading: './images/loaging_image_big.png'
      });

    const auction = computed(() => store.state.auctionStore.auction);
    const currentAddress = computed(
      () => store.getters["blockchain/getCurrentAddress"]
    );
    const instance = computed(() => store.getters['blockchain/getInstance']);

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
      imgObj.src = imageUrl.value;
    };

    const getData = async () => {
      store.dispatch("NotificationStore/TOGGLE_LOADING");

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
      store.dispatch("NotificationStore/TOGGLE_LOADING");
    };

    onMounted(async () => {
      //await store.dispatch('blockchain/initWallets');
      //await store.dispatch('blockchain/getBlockChain');
      if (currentAddress.value) {
        const mintValues = await getWhiteList(instance.value, currentAddress.value);
        currentPrice.value = parseFloat(mintValues.price);
        currentAmount.value = parseInt(mintValues.amount);
      }
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
      imgObj,
      currentPrice,
      currentAmount
    };
  },
};
</script>
