<template>
  <account-layout>
    <div class="lg:hidden">
      <Navbar />
    </div>
    <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="sm:text-4xl text-2xl font-medium">
        Your {{ getParams == "FineArt" ? "CVMAN" : "NIKE" }} Purchasse History
      </h1>
    </div>
    <div>
      <div class="flex items-start space-x-4 w-full rounded-lg">
        <div class="xl:col-span-2 hidden xl:block">
          <Menu />
        </div>
        <div
          class="mt-5 md:mt-0 lg:col-span-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full"
        >
          <Purchasse v-for="n in 3" :key="n" type="NIKE" />
        </div>
      </div>
    </div>
  </account-layout>
</template>
<style scoped></style>
<script>
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import Purchasse from "@/components/Drawers/Purchasse.vue";
import AccountLayout from "../../components/Layouts/AccountLayout.vue";
// @ is an alias to /src
export default {
  components: {
    Purchasse,
    Menu,
    Navbar,
    AccountLayout,
  },
  computed: {
    getParams() {
      return this.$route.params.id;
    },
  },
};
</script>
