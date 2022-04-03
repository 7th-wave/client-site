<template>
  <account-layout>
    <div class="xl:hidden">
      <Navbar />
    </div>
    <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="sm:text-4xl text-2xl font-medium">My NFT Assets</h1>
    </div>
    <div>
       <div class=" xl:grid xl:grid-cols-7 xl:gap-8 sm:m-auto">
        <div class="sm:col-span-2 hidden xl:block">
          <Menu />
        </div>
        <div
          class="mt-5 md:mt-0 lg:col-span-5 grid md:grid-cols-2 grid-cols-1 gap-4 w-full"
        >
          <div v-for="(Nft, index, key) in nfts"
            :key="key" >
            <create-nft-button v-if="!index" @click="addNft">
              <template #subtitle>
                <span
                  class="text-sm font-inter font-medium text-primary-500 cursor-pointer"
                  >{{ nfts.length }} NFTs</span
                >
              </template>
              <template #title>
              <span class="text-gray-900 text-xl font-semibold font-inter">Mint an NFT</span>
            </template>
            </create-nft-button>
          <NftCard
            v-if="index && Nft"
            @click="goDetails(Nft.id)"
          >
            <template #image>
              <img class="w-full h-full object-cover" :src="Nft.image" alt="" />
            </template>
            <template #badge>
              <div
                class="bg-white py-1 px-2 rounded-3xl absolute top-3 right-3 flex items-center space-x-1.5"
              >
                <div>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10.4258" cy="10.5" r="10" fill="#1ACE99" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.23802 6.54959C6.61428 6.51735 8.77936 5.61072 10.4261 4.13684C12.0728 5.61072 14.2379 6.51735 16.6142 6.54959C16.7005 7.06364 16.7454 7.59172 16.7454 8.1303C16.7454 12.2575 14.1077 15.7686 10.4261 17.0698C6.74451 15.7686 4.10681 12.2575 4.10681 8.1303C4.10681 7.59172 4.15173 7.06364 4.23802 6.54959ZM13.5029 9.62729C13.8935 9.23677 13.8935 8.6036 13.5029 8.21308C13.1124 7.82255 12.4793 7.82255 12.0887 8.21308L9.63619 10.6656L8.76347 9.7929C8.37295 9.40238 7.73979 9.40238 7.34926 9.7929C6.95874 10.1834 6.95874 10.8166 7.34926 11.2071L8.92908 12.7869C9.11662 12.9745 9.37097 13.0798 9.63619 13.0798C9.90141 13.0798 10.1558 12.9745 10.3433 12.7869L13.5029 9.62729Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span
                  class="text-sm font-medium font-inter text-gray-900 text-center"
                  >{{ Nft.badge }}</span
                >
              </div>
            </template>
            <template #subtitle>
              <span
                class="text-sm font-inter font-medium text-primary-500 cursor-pointer"
                >{{ Nft.title }}</span
              >
            </template>
            <template #title>
              <span class="text-gray-900 text-xl font-semibold font-inter">{{
                Nft.name
              }}</span>
            </template>
          </NftCard>
          </div>
        </div>
      </div>
    </div>
  </account-layout>
</template>

<script>
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import NftCard from "@/components/cards/NftCard.vue";
import AccountLayout from '@/components/Layouts/AccountLayout.vue';
import CreateNftButton from '@/components/cards/CreateNftButton.vue';
import MoralisFactory from '../../moralis';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
// import GalleryClient from "@/components/Gallery/GalleryClient.vue";
// import { ref, computed } from "vue";
// import { useStore } from "vuex";
// import { getClientByBlockChain } from '../../firebase/firebase';
// @ is an alias to /src
export default {
  components: {
    // GalleryClient,
    Menu,
    Navbar,
    NftCard,
    AccountLayout,
    CreateNftButton,
  },
  setup() {
    const artworks = ref([]);

    const nfts = ref([
        {
         id: 0
        },
        {
          id: "1",
          name: "The caveman, ca. 2008",
          image: "/images/sneakers/caveman.png",
          title: "Fine Art Collection",
          badge: "NIKE",
        },
        {
          id: "2",
          name: "SneakRs",
          image: "/images/sneakers/01.png",
          title: "Sneakers Collection",
          badge: "NIKE",
        },
        {
          id: "3",
          name: "Nike Waffle Sneakers",
          image: "/images/sneakers/06.png",
          title: "Sneakers Collection",
          badge: "NIKE",
        },
      ]);
    

    const store = useStore();
    const router = useRouter();
    const moralisInstance = MoralisFactory.getInstance();

    const addNft = () => {
      router.push('/nft-create');
    }

    const currentAddress = computed(
  		() => store.getters["blockchain/getCurrentAddress"]
  	);

    const getData = async () => {

      //const client = await getClientByBlockChain(currentAddress.value);
      //console.log(client)

      //artworks.value = client.data.nfts;
      // await db
      //   .collection("clients")
      //   .where("metamask", "==", store.state.blockchain.currentAddress)
      //   .get()
      //   .then((querySnapshot) => {
      //     querySnapshot.forEach((doc) => {
      //       // doc.data() is never undefined for query doc snapshots

      //       artworks.value = doc.data().nfts;
      //     });
      //   });

      const bc = store.getters['blockchain/getCurrentAddress'];

      const testnetNFTs = await moralisInstance.Web3API.account.getNFTs({ chain: "rinkeby", address: bc });
      const results = testnetNFTs.result;


      nfts.value = results.map(item => {
          const metadata = JSON.parse(item.metadata);
          if (metadata) {
            const nft = {
              block_number: item.token_id,
              name: metadata.name,
              image: metadata.image,
              title: metadata.name,
              badge: "NIKE",
            }

            return nft;
          }
      })  
    };

    const goDetails = (id) => {
      router.push({
        name: "CollectionDetails",
        params: {
          id: id,
        },
      });
    }

    onMounted(async () => {
      //await getData();
    });

    return {
      artworks,
      currentAddress,
      addNft,
      goDetails,
      getData,
      nfts
    };
  },
};
</script>
