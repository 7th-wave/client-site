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
      bg-gray-100
      font-inter
    "
  >
    <div class="lg:hidden">
      <Navbar />
    </div>
     <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="text-4xl font-medium">Asset NFT Fractionalization</h1>
    </div>
    <div>
      <div class="lg:grid lg:grid-cols-7 lg:gap-6 rounded-lg">
        <div class="lg:col-span-2 hidden lg:block">
          <Menu />
        </div>
        <div class=" sm:col-span-5 space-y-2">
            <Steps />
            <Step1 />
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Step1 from '@/components/Forms/Fractionalization/Step_1.vue'
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import Steps from '@/components/Drawers/Steps.vue'
export default {
    components:{
        Step1,
        Menu,
        Navbar,
        Steps
    },
}
</script>
