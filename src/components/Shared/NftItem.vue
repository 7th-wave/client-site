<template>
  <div class="rounded-lg overflow-hidden shadow-lg w-full  relative" :class="bg">
    <slot name="badge" />
    <div class="slider relative">
      
          <img @click="goToDetails"
            class="w-full"
            :src="nft.imageUrl"
          />
      
    </div>

    <div class="content w-full pt-6 bg-white" @click="goToDetails">
      <div class="data w-full">
        
        <h2 class="w-full text-xl font-semibold leading-8 text-gray-900 px-6">
          {{ nft.title }}
        </h2>
        <div class="h-6" />
        <stats :nft="nft"  />
      </div>
    </div>
  </div>
</template>
<script>


import Stats from "./NftStats.vue";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
// import { useRouter } from 'vue-router'

export default {
  props: ["nft", "bg", "badgecolor", "url", 'showArrows', 'create'],

  components: {
    Stats,
  },

  setup(props) {

    const router = useRouter();

    // const router = useRouter()
    onMounted(() => {
      console.log(props.value);
    });


    const goToDetails = () => {
      if (props.vault.status == 'minted') {
        router.push(props.url);
      } else if (props.vault.status == 'applied' || props.vault.status == 'pending') {
        router.push('/vault/create/step/2/'+props.vault.dbRef);
      } else if (props.vault.status == 'approved') {
        router.push('/vault/create/step/3/'+props.vault.dbRef);
      }
    }

    return {
      goToDetails
    };
  },
};
</script>