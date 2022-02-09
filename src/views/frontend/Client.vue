<template>
<div class="artist bg-gray-100 font-inter">
  
  <div class="relative font-inter py-8 sm:py-8 lg:py-8">
    <div class="relative">
      <Navbar />
      <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p class=" text-3xl font-semibold text-gray-900 tracking-tight sm:text-4xl">
          {{client.name}} Collection
        </p>             
      </div>


      <div class="bg-white my-8 px-3 py-8 flex items-center justify-center">
        <div class="flex flex-col items-center">
          <img 
            class="h-56 w-56 rounded-full mb-4" 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" 
            alt=""
          />
          @{{client.username}}

          <span class="text-gray-400">
            {{client.gallery.length}} Artwork
          </span>
        </div>
      </div>

      <div 
        :class="[
          'relative max-w-md sm:max-w-3xl lg:max-w-7xl',
          'mx-auto px-1 py-8 sm:px-6 lg:px-8',
        ]"
      >
        <div
         class="box-border max-w-7xl mx-auto md:masonry before:box-inherit after:box-inherit"
        >
          <gallery-client :src="'front'" :gallery="client.gallery" />
        </div>
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
      column-gap: 1.5em;
    }
    .break-inside {
      break-inside: avoid;
    }
  }
}
.card:nth-child(4), .card:nth-child(3)  {
 margin-top: 0!important;
 }
</style>

<script>
// @ is an alias to /src
import Navbar from '@/components/Layouts/Navbar.vue'
import { onMounted, ref } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { db } from '../../firebase/firebase';
// import GalleryClient from '../../components/Gallery/GalleryClient.vue';

export default {
  components: {
    Navbar,
    // GalleryClient,
  },
  setup() {
    const router = useRouter()
    const client = ref({
      name: '',
      username: '',
      gallery: [],
      avatar: '',
    })
    
    const loadClient = async () => {
      const { username } = router.currentRoute.value.params

       db.collection('clients').where("username", "==", username).get().then((querySnapshot) => {
         
         querySnapshot.forEach((doc) => {
           console.log(doc.data())
           const data = {
              id: doc.id,
              name: doc.data().firstName + ' ' + doc.data().lastName,
              avatar: doc.data().avatar,
              username: doc.data().username,
              gallery: doc.data().nfts || []
            };
              console.log(data)

            client.value = data;
          });
      });
    }

    onMounted(async function() {
      await loadClient()
    })


     return {
       client
     }
  },
}
</script>
