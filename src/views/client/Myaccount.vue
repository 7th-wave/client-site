 
<template>
  <account-layout>
    <div class="xl:hidden">
      <Navbar />
    </div>
    <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="sm:text-4xl text-2xl font-medium">My Account</h1>
    </div>
    <div>
      <div class=" xl:grid xl:grid-cols-7 xl:gap-8 sm:m-auto">
        <div class="sm:col-span-2 hidden xl:block">
            <Menu />
        </div>
        <div class="mt-5 lg:mt-0 lg:col-span-5 w-full">
          <Account :is-admin="false" :is-edit="true" v-if="isLoaded" />
        </div>
      </div>
    </div>
  </account-layout>
</template>
<script>
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import Account from "@/components/Forms/Account";
import { useStore } from "vuex";
import { onMounted, ref } from "@vue/runtime-core";
import AccountLayout from '../../components/Layouts/AccountLayout.vue';
export default {
  components: {
    Account,
    Menu,
    Navbar,
    AccountLayout,
  },
  setup() {
    const store = useStore();
    const isLoaded = ref(false);

    onMounted(async () => {
      const user = store.getters["user/getUser"];
      if (user) isLoaded.value = true;
    });

    return {
      isLoaded,
    };
  },
};
</script>