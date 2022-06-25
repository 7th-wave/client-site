<template>
  <account-layout>
    <div class="xl:hidden">
      <Navbar />
    </div>
    <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="sm:text-4xl text-2xl font-medium">NFT Mint New Asset(s)</h1>
    </div>
    <div class="space-y-2">
      <div class="xl:grid xl:grid-cols-7 xl:gap-8 sm:m-auto">
        <div class="sm:col-span-2 hidden xl:block">
          <Menu />
        </div>
        <div class="sm:col-span-5 space-y-2">
          <div class="space-y-4 w-full">
            <div class="w-full font-inter grid lg:grid-cols-2 gap-5">
              <div
                class="
                  w-full
                  
                  img-container
                "
              >
                <img
                  :src="imageUrl"
                  class="
                    w-full
                    object-cover
                    rounded-md
                    shadow-md
                    overflow-hidden
                    mb-3
                  "
                  alt=""
                />
              </div>
              <div
                class="w-full flex items-start flex-col space-y-2"
                v-if="isLoaded"
              >
                <div
                  class="
                    w-full
                    rounded-md
                    bg-white
                    shadow-md
                    py-4
                    px-2
                    flex flex-col
                    items-start
                    space-y-4
                  "
                >
                  <span class="text-xl font-semibold text-gray-900">{{
                    nft.title
                  }}</span>
                  <p class="text-left text-lg font-normal text-black">
                    <Markdown
                      :source="description"
                      :linkify="true"
                      :html="true"
                    />
                  </p>
                </div>
                <div
                  class="
                    w-full
                    bg-white
                    rounded-md
                    shadow-md
                    flex
                    items-center
                    space-x-2
                    px-2
                    py-2
                  "
                  v-for="(item, index) of nft.attributes"
                  :key="index"
                >
                  <span class="text-lg text-gray-500 font-semibold"
                    >{{ item.name }}:</span
                  >
                  <span class="text-lg text-gray-900 font-normal">{{
                    item.value
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MintsInfosCards />
    </div>
  </account-layout>
</template>



<script>
//import Steps from "@/components/Drawers/Steps.vue";

import MintsInfosCards from "@/components/cards/MintsInfosCards.vue";
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import AccountLayout from "../../components/Layouts/AccountLayout.vue";

import { useRoute } from "vue-router";
import { useStore } from "vuex";

import { storage } from "../../firebase/firebase";
//import Share from "../../components/Modals/Share.vue";
import { getNft } from '../../firebase/nfts';

import Markdown from 'vue3-markdown-it';
import { computed, onMounted, ref } from "vue";

export default {
  components: {
    Menu,
    Navbar,
    //Steps,
    MintsInfosCards,
    AccountLayout,
    Markdown
  },
  setup(props, {emit}) {
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
    const nftRef = ref(route.params.id);

    const cards = ref([
    ]);

    const bid = ref(0);

    const description = ref('');

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
      artistName.value = 'GB MIAMI' //store.getters["collection/getName"];

      nft.value = await getNft(nftRef.value);
      isLoaded.value = true;

      description.value = nft.value.description.replace(/\\n/g, '<br />');

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
      emit('on:login');
    }

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
      description
    };
  },
};
</script>
