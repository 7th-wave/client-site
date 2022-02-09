<template>
  <div class="artist font-inter">
    <div class="relative bg-gray-100 py-8 sm:py-24 lg:py-8">
      <div class="relative">
        <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p class="mt-8 text-4xl font-inter leading-10 font-medium text-black tracking-tight sm:text-4xl">
            {{data.title}} Collection
          </p>             
        </div>
        
      </div>
    </div>
    <div class="pb-20 pt-6 white bg-gray-100">
       <div class="box-border max-w-7xl mx-auto md:masonry before:box-inherit after:box-inherit">
          <Gallery :gallery="data.gallery" :src="'front'" />
        </div>
    </div>
    <div class="relative bg-white py-16 sm:py-24 lg:py-16">
      <div class="relative">
        <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 class="text-xl leading-7 font-inter font-semibold tracking-wider ">{{data.bio_title}}</h2>
          <p class="mt-5 mx-auto max-w-6xl font-inter font-normal leading-7 text-xl" v-html="data.bio.replace(/\n/g, '<br>\n')">
          </p>
        </div>
        
      </div>
    </div>
  </div>
</template>
 <style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add the lines below */
@layer utilities {
  @variants responsive {
    .masonry {
      column-count: 3;
      column-gap: 1.25em;
    }
    .break-inside {
      break-inside: avoid;
    }
  }
}
</style>


<script>
// @ is an alias to /src
import Gallery from '@/components/Gallery/Gallery';
import { useRoute } from 'vue-router';
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';

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
    const route = useRoute();
    const store = useStore();
    const collectionRef = route.params.ref;

    //const storage = firebase.storage();
    const data = ref({
      title: '',
      artist: '',
      artist_name: '',
      bio_title: '',
      bio: '',
      img: '',
      gallery: []
    })

    const getData = async () => {      
      await store.dispatch('collection/loadCollection', collectionRef);
      console.log(store.getters['collection/getName']);

      // doc.data() is never undefined for query doc snapshots
      data.value.artist_name = store.state.collection.artistName;
      data.value.title =  store.state.collection.title;
      data.value.bio_title = store.state.collection.artistBioTitle;
      data.value.lastName = store.state.collection.lastName;
      data.value.bio = store.state.collection.artistBio;
      data.value.gallery = store.state.collection.gallery;
        
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
