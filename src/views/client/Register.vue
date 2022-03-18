 
<template>
<div class="account sm:px-2   py-4 relative lg:py-16 bg-gray-100 font-inter 2xl:max-w-8xl w-full mx-auto">
  <div class="lg:hidden">
    <Navbar :type="'customer'" />
  </div>
  <div class="py-0 pb-2 sm:py-4 lg:pt-0 lg:pb-8 text-center">
    <h1 class="sm:text-4xl text-2xl font-medium">Registration</h1>
  </div>
  <div>
    <div class="lg:grid lg:grid-cols-7 lg:gap-6 rounded-lg ">
      <div class="lg:col-span-2">
        <div class="hidden lg:block">
          <Menu />
        </div>
      </div>
      <div class="mt-5 lg:mt-0 lg:col-span-5">
        <Account :is-admin="false" :is-edit="false" v-if="isLoaded" />
      </div>
    </div>
  </div>
</div>
  
</template>
<script>
  import Menu from '@/components/Layouts/Menu.vue'
  import Navbar from '@/components/Layouts/Navbar_mobile.vue'
  import Account from '@/components/Forms/Account'
  //import { useStore } from 'vuex';
  //import { useRouter } from 'vue-router';
  import {ref } from '@vue/runtime-core'
  export default {
  components: {
    Account,
    Menu,
    Navbar

  },
  setup() {
    const isLoaded = ref(true);

    return {
      isLoaded
    }
  },
}
 
</script>