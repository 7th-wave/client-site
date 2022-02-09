<template>
  <div
    class="
      account
      sm:px-2
      py-4
      sm:py-4
      lg:py-16
      relative
      max-w-7xl
      mx-auto
      bg-gray-100
      font-inter
    "
  >
    <div class="lg:hidden">
      <Navbar :type="'customer'" />
    </div>
    <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="text-4xl font-medium">My Collection</h1>
    </div>
    <div>
      <div class="lg:grid lg:grid-cols-7 lg:gap-6 rounded-lg">
        <div class="lg:col-span-2 hidden lg:block">
          <Menu />
        </div>
        <div class="mt-5 md:mt-0 lg:col-span-5">
          <div
            class="
              box-border
              max-w-7xl
              mx-auto
              md:masonry
              before:box-inherit
              after:box-inherit
            "
          >
            <GalleryClient :gallery="artworks" v-if="artworks.length > 0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add the lines below */
@layer utilities {
  @variants responsive {
    .masonry {
      column-count: 2;
      column-gap: 1.25em;
    }
    .break-inside {
      break-inside: avoid;
    }
  }
}
</style>
<script>
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar_mobile.vue";
import GalleryClient from "@/components/Gallery/GalleryClient.vue";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { getClientByBlockChain } from '../../firebase/firebase';
// @ is an alias to /src
export default {
  components: {
    GalleryClient,
    Menu,
    Navbar,
  },
  setup() {
    const artworks = ref([]);

    const store = useStore();

    const currentAddress = computed(
			() => store.getters["blockchain/getCurrentAddress"]
		);

    const getData = async () => {


      const client = await getClientByBlockChain(currentAddress.value);
      console.log(client)

      artworks.value = client.data.nfts;
      // await db
      //   .collection("clients")
      //   .where("metamask", "==", store.state.blockchain.currentAddress)
      //   .get()
      //   .then((querySnapshot) => {
      //     querySnapshot.forEach((doc) => {
      //       // doc.data() is never undefined for query doc snapshots

      //       artworks.value = doc.data().nfts;
      //     });
      //   });
    };
    onMounted(async () => {
      await getData();
    });
    return {
      artworks,
      currentAddress
    };
  },
};
</script>
