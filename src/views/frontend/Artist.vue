<template>
  <div class="artist font-inter">
    <div class="relative bg-gray-100 py-8 sm:py-24 lg:py-8">
      <div class="relative">
        <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p class="mt-8 text-4xl font-inter leading-10 font-medium text-black tracking-tight sm:text-4xl">
            GB Miami
          </p>             
        </div>
        
      </div>
    </div>
    <div class="pb-20 pt-6 white bg-gray-100">
       <div class="box-border max-w-7xl mx-auto before:box-inherit after:box-inherit">
          <Gallery :gallery="data.gallery" :src="'front'" />
        </div>
    </div>
    
  </div>
</template>


<script>
// @ is an alias to /src
import Gallery from '@/components/Gallery/Gallery';
//import { useRoute } from 'vue-router';
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { getNftsByCollection } from '../../firebase/nfts'
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
    Gallery
   

  },
  setup() {
    //const route = useRoute();
    //const store = useStore();
    //const collectionRef = route.params.ref;

    //const storage = firebase.storage();
    const data = ref({
      title: 'Collection Name',
      artist: 'Manfred',
      artist_name: 'Manfred',
      bio_title: 'This is the bio',
      bio: 'This is the bio',
      img: './images/mocks/nfts/img_01.jpg',
      gallery: []
    })

    const getData = async () => {      
      
      data.value.gallery = await getNftsByCollection(process.env.VUE_APP_CATEGORY);

      // doc.data() is never undefined for query doc snapshots
      data.value.artist_name = 'GB-MIAMI';
      data.value.title =  'GB-MIAMI';
      data.value.bio_title = 'GB-MIAMI';
      data.value.lastName = 'GB-MIAMI';
      data.value.bio = 'GB-MIAMI';
        
    }

    onMounted(async() => {
      await getData();
    });

    return {
      // navigation,
      // features,
     
      data,
      // footerNavigation,
      
    }
  },
}
</script>
