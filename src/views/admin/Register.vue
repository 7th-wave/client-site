<template>
  <div
    class="account sm:px-2   py-4 relative lg:py-16 bg-gray-100 font-inter max-w-7xl mx-auto"
  >
    <div class="lg:hidden">
      <Navbar :type="'admin'" />
    </div>
    <div class="py-0 pb-2 sm:py-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="text-4xl font-medium">Registration</h1>
    </div>
    <div>
      <div class="lg:grid lg:grid-cols-7 lg:gap-6 rounded-lg ">
        <div class="lg:col-span-1">
          <div class="hidden lg:block"></div>
        </div>
        <div class="mt-5 lg:mt-0 lg:col-span-7">
          <Account :is-admin="true" v-if="isLoaded" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Layouts/Navbar_mobile.vue";
import Account from "@/components/Forms/Account";
import { useRoute } from 'vue-router';
import { onMounted, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  components: {
    Account,
    Navbar,
  },
  setup() {

    const store = useStore();
    const route = useRoute();
    const uuid = route.params.uuid;
    const isLoaded = ref(false);
    
    onMounted(async () => {
      await store.dispatch('admin/getAdmin', {uuid: uuid});

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
    };
  },
};
</script>
