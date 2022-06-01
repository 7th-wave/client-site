<template>
  <account-layout>
    <div class="xl:hidden">
      <Navbar />
    </div>
    <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="sm:text-4xl text-2xl font-medium">NFT Mint New Asset(s)</h1>
    </div>
    <div class="space-y-2">
      <div class=" xl:grid xl:grid-cols-7 xl:gap-8 sm:m-auto">
        <div class="sm:col-span-2 hidden xl:block">
          <Menu />
        </div>
        <div class="sm:col-span-5 space-y-2">
        
          <Step1 v-if="step == 1" @nextStep="nextStep"  />
          <Step2 v-if="step == 2" @nextStep="nextStep" :dbref="dbRef" />
          <Step3 v-if="step == 3" :mint-now="mint" :dbref="dbRef" @on:minted="minted = true"  />
          <Step4 v-if="step == 4" @fractionalize="fractionalize" :dbref="dbRef" />
        </div>
      </div>
      <div class="space-y-2" v-if="step != 1 & step != 2">
        <MintsInfosCards  />
       
        <MintCard @isminted="mintIt" @nextStep="nextStep" :cardtype="step != 4 ? 'mint' :  'edit'" v-show="!minted" />
        <Feed v-show="!minted" />
       
      </div>
    </div>
  </account-layout>
</template>



<script>
import Step1 from "@/components/Forms/NftCreation/Step_1.vue";
import Step2 from "@/components/Forms/NftCreation/Step_2.vue";
import Step3 from "@/components/Forms/NftCreation/Step_3.vue";
import Step4 from "@/components/Forms/NftCreation/Step_4.vue";

import MintsInfosCards from "@/components/cards/MintsInfosCards.vue";
import MintCard from "@/components/cards/MintCard.vue";
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import Feed from "@/components/Drawers/Feed.vue";
import AccountLayout from '../../components/Layouts/AccountLayout.vue';
import { getNft } from '../../firebase/nfts';


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
    AccountLayout,
  },
  data() {
    return {
      step: 1,
      minted:false,
      mint: false,
      dbRef: null,
      nft: null
    };
  },
  methods:{
    mintIt(){
      this.mint = true
    },
    nextStep(){
      this.step++
    },
    async nftLoad() {
      this.nft = await getNft(this.dbRef);
      this.minted = this.nft.isMinted
    }
  },
  mounted() {
    if (this.$route.params.step) {
      this.step = this.$route.params.step;
    }

    if (this.$route.params.dbref) {
      this.dbRef = this.$route.params.dbref;
    }

    this.nftLoad();
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
