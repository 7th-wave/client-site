<template>
  <section
    v-for="art in artwork"
    :key="art.id"
    class="relative rounded-lg mx-3 mb-8 md:mx-0 md:mb-5 md:mt-0"
  >
    <div
      class="content-center"
      :class="{ 'flex flex-nowrap h-48': art.id == 1 }"
    >
      <router-link :to="artLink(art)" class="cursor-pointer">
       <nft-item :nft="art" />
      </router-link>
      
    </div>
  </section>
</template>

<script>
import { ref, toRefs } from "@vue/reactivity";
import { db, storage } from "../../firebase/firebase";
import { onMounted, watch } from "@vue/runtime-core";
//import { useRoute } from "vue-router";
//import GalleryItem from './GalleryItem.vue';
import NftItem from "../Shared/NftItem.vue";

export default {
  components: { NftItem },
  /* {
    id: 6,
    title: 'Tub of Yellowtails',
    href: '/artwork',
    client_url: '/admin/artist_detail',
    size: '18 × 11',
    category: 'Intaglio',
    imageUrl:
      '/images/art-5.jpg',
  }, */

  props: ["src", "gallery"],
  setup(props) {
    //const route = useRoute();
    const collectionRef = 'gb-miami';

    const artwork = ref([]);
    const { gallery } = toRefs(props); 

    let nftRef = "";

    const getNftDetail = async (values) => {

      if (props.src == "admin") {
        artwork.value.push(newArtwork);
      }

      for (let nft of values) {
        
          const data = {
            id: nft.dbRef,
            title: nft.title,
            href: "/admin/artwork/" + collectionRef + "/" + nft.dbRef,
            size: nft.size,
            category: 'gb-miami',
            imageUrl: await getFullImageURL(nft.imageUrl),
          };

          artwork.value.push(data);
        
      }
    };

    watch(gallery, (value) => {
      artwork.value = [];
      getNftDetail(value);
    });

    const newArtwork = {
      id: 1,
      title: "add",
      href: "/admin/artwork/" + collectionRef + "/" + nftRef,
      size: "",
      category: "",
      imageUrl: "/images/plus_circle.svg",
    };

    const getFullImageURL = async (item) => {
      if (item) {
        var storageRef = storage.ref();
        const imageUrl = await storageRef.child(item).getDownloadURL();

        return imageUrl;
      }
    };

    const artLink = (artwork) => {
      if (props.src == "admin") {
        return "/admin/artwork/" + collectionRef + "/" + artwork.id;
      } else {
        return "/artwork/" + collectionRef + "/" + artwork.id;
      }
    };

    onMounted(async () => {
      console.log(db);
      console.log(storage);
      console.log(collectionRef);
      await getNftDetail(gallery.value);
    });

    return {
      artwork,
      artLink,
    };
  },
};
</script>
<style scoped>
.break-inside {
  break-inside: avoid;
}
</style>