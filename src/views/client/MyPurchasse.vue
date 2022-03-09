<template>
  <div
    class="
      account
      sm:px-8
      py-4
      sm:py-4
      lg:py-16
      relative
      mx-auto
      bg-gray-100 2xl:max-w-8xl w-full
      font-inter
    "
  >
    <div class="lg:hidden">
      <Navbar :type="'customer'" />
    </div>
    <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="text-4xl font-medium">Your {{ getParams == 'FineArt' ? 'CVMAN' : 'NIKE'}} Purchasse History</h1>
    </div>
    <div>
      <div class="lg:grid lg:grid-cols-7 lg:gap-6 rounded-lg">
        <div class="lg:col-span-2 ">
          <Menu />
        </div>
        <div class="mt-5 md:mt-0 lg:col-span-5 grid lg:grid-cols-3 grid-cols-1 gap-4">
          <Purchasse  v-for=" n in 3" :key="n"/>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
<script>
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar_mobile.vue";
import Purchasse from "@/components/Drawers/Purchasse.vue";
// @ is an alias to /src
export default {
  components: {
    Purchasse,
    Menu,
    Navbar,
  },
  computed:{
    getParams(){
      return this.$route.params.id;
    }
  },
 

};
</script>
