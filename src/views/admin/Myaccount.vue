 
<template>
<div class="home">
    <div class="relative bg-gray-100 py-4 sm:py-8 lg:pt-6 lg:pb-12 font-inter">
        <div class="relative">
            <Navbar :type="'admin'" v-if="isLoaded" />
          <div class="text-center mb-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <p class="my-2 text-4xl font-medium text-black tracking-tight sm:text-4xl ">
              My Account
            </p>
          </div>
          <Account :is-admin="true" :is-edit="true" v-if="isLoaded" />
        </div>
      </div>
  </div>
  
</template>
<script>
  import Navbar from '@/components/Layouts/Navbar.vue'
  import Account from '@/components/Forms/Account'
  import { useStore } from 'vuex'
  import { onMounted, ref } from '@vue/runtime-core'
  export default {
  components: {
    Account,
    Navbar

  },
  setup() {

    const store = useStore();
    const isLoaded = ref(false);

    onMounted(async() => {
      await store.dispatch('admin/getAdmin', {});

      const unsubscribe = store.subscribe((mutation) => {
        console.log(mutation.type);
        if (mutation.type == 'admin/setAdmin') {
          isLoaded.value = true;
          unsubscribe();

        }
      })
    })

    return {
      isLoaded
    }
  },
}
 
</script>