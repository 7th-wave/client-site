 
<template>
  <div
    class="
      account
      sm:px-2
      pr-4
      2xl:max-w-8xl
      w-full
      py-4
      relative
      lg:py-16
      bg-gray-100
      font-inter
      mx-auto
    "
  >
    <div class="lg:hidden">
      <Navbar />
    </div>
    <div class="py-0 pb-2 sm:py-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="sm:text-4xl text-2xl font-medium">My Account</h1>
    </div>
    <div>
      <div class="flex items-start space-x-4 w-full">
        <div class="lg:col-span-2">
          <div class="hidden lg:block">
            <Menu />
          </div>
        </div>
        <div class="mt-5 lg:mt-0 lg:col-span-5 w-full">
          <Account :is-admin="false" :is-edit="true" v-if="isLoaded" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import Account from "@/components/Forms/Account";
import { useStore } from "vuex";
import { onMounted, ref } from "@vue/runtime-core";
export default {
  components: {
    Account,
    Menu,
    Navbar,
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