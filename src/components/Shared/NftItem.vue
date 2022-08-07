<template>
  <div class=" overflow-hidden w-full relative" :class="bg">
    <slot name="badge" />
    <div class="slider relative rounded-lg overflow-hidden">
      <img v-lazy="nft.imageUrl" @click="goToDetails" class="w-full h-full object-cover transition-all duration-300 transform scale-100 hover:scale-110" />
    </div>

    <div class="content w-full py-6 bg-white" @click="goToDetails">
      <div class="data w-full flex items-center justify-between">
        <h2 class="w-full text-xl my-0 font-inter leading-8 text-primary-900">
          {{ nft.title }}
        </h2>
        <div class="flex items-center justify-end " v-if="!nft.isMinted">
          <ETHalt /> <h1 class="ml-2 my-0 text-xl font-inter  text-gray-900 text-right">{{ price }}</h1>
        </div>
        <div class="flex items-center my-0 leading-8 justify-end font-inter text-xl" v-if="nft.isMinted">
          Minted
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import Stats from "./NftStats.vue";
import { onMounted, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import ETHalt from "./ETHalt.vue";

// import { useRouter } from 'vue-router'

export default {
  props: ["nft", "bg", "badgecolor", "url", "showArrows", "create", 'price', 'amount'],

  components: {
    //Stats,
    ETHalt
  },

  setup(props) {
    const router = useRouter();

    const currentPrice = ref(props.nft.price);

    // const router = useRouter()
    onMounted(() => {
      console.log(props.value);
      if (props.amount ) {
        currentPrice.value = props.price;
      }
    });

    const goToDetails = () => {
      if (props.vault.status == "minted") {
        router.push(props.url);
      } else if (
        props.vault.status == "applied" ||
        props.vault.status == "pending"
      ) {
        router.push("/vault/create/step/2/" + props.vault.dbRef);
      } else if (props.vault.status == "approved") {
        router.push("/vault/create/step/3/" + props.vault.dbRef);
      }
    };

    return {
      goToDetails,
    };
  },
};
</script>