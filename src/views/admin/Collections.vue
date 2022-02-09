<template>
  <div class="home">
    <div class="relative bg-gray-100 py-4 sm:py-8 lg:pt-6 lg:pb-12 font-inter">
        <div class="relative">
            <Navbar :type="'admin'"   />
          <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <p class="mt-2 text-4xl font-medium text-black tracking-tight sm:text-4xl">
                Collections
            </p>
          </div>
          <ArtistCollection :src="'create'" />
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
 import Navbar from '@/components/Layouts/Navbar.vue'
// import {  XIcon, LinkIcon  } from '@heroicons/vue/outline'
import ArtistCollection from '@/components/ArtistCollection.vue'

 
export default {
  components: {
    Navbar,
 
    ArtistCollection

  },
  setup() {

    
    
    return {
  
    }
  },
}
</script>
