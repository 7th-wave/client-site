<template>
  <div
    class="
      account
      px-4
      py-4
      sm:py-4
      lg:py-16
      relative
      mx-auto
      bg-gray-100
      2xl:max-w-8xl
      w-full
      font-inter
    "
  >
    <div class="lg:hidden">
      <Navbar />
    </div>
    <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="text-4xl font-medium">Asset NFT Fractionalization</h1>
    </div>
    <div class="space-y-2">
      <div class=" flex
        xl:flex-row
        lg:items-start lg:space-x-4
        w-full
        lg:space-y-0
        flex-col
        items-start
        space-y-4">
        <div class="lg:col-span-2 hidden xl:block">
          <Menu />
        </div>
        <div class="sm:col-span-5 space-y-2">
        
          <Step1 v-if="step == 1" @nextStep="nextStep" />
          <Step2 v-if="step == 2" @nextStep="nextStep" />
          <Step3 v-if="step == 3" :isminted="minted" />
          <Step4   v-if="step == 4" />
        </div>
      </div>
      <div class="space-y-2" v-if="step != 1 & step != 2">
        <MintsInfosCards  />
       
        <MintCard @isminted="isminted" @nextStep="nextStep"   :cardtype="step != 4 ? 'mint' :  'edit'" v-show="!minted" />
        <Feed v-show="!minted" />
       
      </div>
    </div>
  </div>
</template>



<script>
import Step1 from "@/components/Forms/Fractionalization/Step_1.vue";
import Step2 from "@/components/Forms/Fractionalization/Step_2.vue";
import Step3 from "@/components/Forms/Fractionalization/Step_3.vue";
import Step4 from "@/components/Forms/Fractionalization/Step_4.vue";

import MintsInfosCards from "@/components/cards/MintsInfosCards.vue";
import MintCard from "@/components/cards/MintCard.vue";
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import Feed from "@/components/Drawers/Feed.vue";

export default {
  components: {
    Step1,
    Step2,
    Step4,
    Menu,
    Navbar,
    Step3,
    MintsInfosCards,
    MintCard,
    Feed,
  },
  data() {
    return {
      step: 1,
      minted:false,
    };
  },
  methods:{
    isminted(){
      this.minted = true
    },
    nextStep(){
      this.step++
    }
  },
  created() {
    
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 78) {
        if (this.step < 4) {
          this.step++;
          console.log(this.step);
        }
      }
      if (e.keyCode == 66) {
        if (this.step > 1) {
          this.step--;
        }
      }
    });
  },
};
</script>
