<template>
  <div class="artist font-inter h-screen">
    <div class="relative bg-white py-8 sm:py-24 lg:py-8">
      <div class="relative">
        <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h1 class="mt-8 text-4xl leading-10 font-medium text-black tracking-tight sm:text-4xl">
            MNFT MIAMI
          </h1>  

          <p class="mt-6">CIRKOL is the first membership club of its kind.<br /><br /> CIRKOL blends decentralized technology with our innate desire to connect with people in the physical world.<br /><br /> Our experienced team has prepared a proprietary pro forma for the purposes of acquisition and redevelopment of a hotel and beach club in Miami, Florida. Once the project treasury goal is achieved, we will begin to act on these development goals and ultimately offer prime access to utilize incredible on - property amenities to our mNFT(membership Non Fungible Token) holders.mNFT holders will also have the opportunity to buy and resell rNFTs(reservation Non Fungible Tokens) that operate as a decentralized booking platform for the hotel and beach club.<br /> Our first collection features artwork from Miami artist, Manfred Delgado, and is limited to an exclusive 5500 mNFTs minted using our proprietary marketplace.</p>           
        </div>
        
      </div>
    </div>
    <div class="pb-20 pt-6 white bg-white">
      <div v-if="isLoading" class="box-border max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto before:box-inherit after:box-inherit">
          <section
            v-for="index in 12"
            :key="index"
            class="relative rounded-lg mx-3 mb-8 md:mx-0 md:mb-5 md:mt-0"
          >
            <div
              class="content-center"
            >
              <nft-skeleton />
              
            </div>
          </section>
        </div>
       <div class="box-border max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto before:box-inherit after:box-inherit" ref="scrollComponent" v-else>
          <section
            v-for="art in data.gallery"
            :key="art.id"
            class="relative rounded-lg mx-3 mb-8 md:mx-0 md:mb-5 md:mt-0"
          >
            <div
              class="content-center"
              :class="{ 'flex flex-nowrap h-48': art.id == 1 }"
            >
              <router-link :to="artLink(art)" class="cursor-pointer">
              <nft-item :nft="art" :price="price" :amount="amount"  />
              </router-link>
              
            </div>
          </section>
        </div>
        
    </div>
    
  </div>
</template>


<script>
// @ is an alias to /src
//import Gallery from '@/components/Gallery/Gallery';
import NftItem from '@/components/Shared/NftItem.vue';
//import { useRoute } from 'vue-router';
import { computed, ref } from '@vue/reactivity';
import { onMounted, onUnmounted } from '@vue/runtime-core';
import { getNftsByCollection } from '../../firebase/nfts';
import { storage } from "../../firebase/firebase";
import NftSkeleton from '@/components/Shared/NftSkeleton.vue';
import { getWhiteList } from '../../blockchain/index';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

//import { useStore } from 'vuex';

 /* const data = {
    artist: 'Mario Sanchez',
    title: 'Mario Sanchez Collection',
    artist_name: 'Mario Sanchez',
    bio_title: 'Mario Sanchez October 7th, 1908 - April 28th, 2005',
    bio: 'Critically acclaimed as the most important Cuban American Folk Artist of the 20th Century he received one-man exhibitions in major museums from New York’s American Folk Art & Museum of the City of New York, Bacardi Museum & Cuba’s National Museum of Fine Art. His work resides in the Smithsonian, Whitney & American Folk Art Museums. His motto was "One Race, the Human Race". He believed in the Great American Dream with a humorous twist.  Mario Sanchez passion was depicting the people of Key West & Tampa.  His unique technique of sketches & intaglios of Florida & Cuba treasured history involve the humanistic values of a rich cultural community filled with the traditions of immigrants of diverse geographic and ethnic origins. ',
    img: '/images/art-7.jpg',

 } */

 
export default {
  components: {
    //Gallery
   NftItem,
    NftSkeleton

  },
  emits: ['on:connect'],
  setup(props, {emit}) {
    const route = useRoute();
    const connect = computed(() => route.params.connect);


    const store = useStore();
    //const collectionRef = route.params.ref;
    const addr = computed(() => store.getters['blockchain/getCurrentAddress']);
    const instance = computed(() => store.getters['blockchain/getInstance']);

    const price = ref(null);
    const amount = ref(null);

    //const storage = firebase.storage();
    const currentPage = ref(1);
    const scrollComponent = ref();
    const data = ref({
      title: 'Collection Name',
      artist: 'Manfred',
      artist_name: 'Manfred',
      bio_title: 'This is the bio',
      bio: 'This is the bio',
      img: './images/mocks/nfts/img_01.jpg',
      gallery: []
    });
    const isLoading = ref(true);

    const getData = async () => {    
      
      

      
      const gallery = await getNftsByCollection(process.env.VUE_APP_CATEGORY, currentPage.value);

      data.value.gallery = await Promise.all(gallery.map(async (item) => {
        
          const data = {
            id: item.dbRef,
            title: item.title,
            href: "/admin/artwork/" + item.collection + "/" + item.dbRef,
            size: item.size,
            category: 'mnft-miami',
            collection: item.collection,
            imageUrl: await getFullImageURL(item.imageUrl),
            isMinted: item.isMinted,
            mintinPrice: item.mintinPrice
          };


         return data;
        
      }))

      // doc.data() is never undefined for query doc snapshots
      data.value.artist_name = 'MNFT-MIAMI';
      data.value.title =  'MNFT-MIAMI';
      data.value.bio_title = 'MNFT-MIAMI';
      data.value.lastName = 'MNFT-MIAMI';
      data.value.bio = 'MNFT-MIAMI';

      isLoading.value = false;

        
    }

    const getFullImageURL = async (item) => {
      if (item) {
        var storageRef = storage.ref();
        const imageUrl = await storageRef.child(item).getDownloadURL();

        return imageUrl;
      }
    };

    const getMore = async () => {
      currentPage.value++;
      const gallery = await getNftsByCollection(process.env.VUE_APP_CATEGORY, currentPage.value);
      const newItems = await Promise.all(gallery.map(async (item) => {
        
          const data = {
            id: item.dbRef,
            title: item.title,
            href: "/admin/artwork/" + item.collection + "/" + item.dbRef,
            size: item.size,
            category: 'mnft-miami',
            price: item.mintinPrice,
            collection: item.collection,
            imageUrl: await getFullImageURL(item.imageUrl),
          };

         return data;
        
      }))
      data.value.gallery.push(...newItems)
    }

    const handleScroll = async() => {
      let element = scrollComponent.value
      if (element.getBoundingClientRect().bottom < window.innerHeight) {
        await getMore();
      }
    } 

    const artLink = (artwork) => {
      return "/artwork/" + artwork.collection + "/" + artwork.id;
    };

    onMounted(async() => {
      await store.dispatch('blockchain/initWallets');
      await store.dispatch('blockchain/getBlockChain');
      if (addr.value) {
        const mintValues = await getWhiteList(instance.value, addr.value);
        price.value = mintValues.price;
        amount.value = mintValues.amount;
      }
      await getData();
      window.addEventListener("scroll", handleScroll)
    });

    onUnmounted(async() => {
       window.removeEventListener("scroll", handleScroll)
       if (connect.value) {
        emit('on:login');
       }
    });

    return {
      // navigation,
      // features,
     
      data,
      getMore,
      scrollComponent,
      artLink,
      isLoading,
      price,
      amount
      // footerNavigation,
      
    }
  },
}
</script>