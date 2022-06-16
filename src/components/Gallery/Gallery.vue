<template>
  <section
    v-for="art in artwork"
    :key="art.id"
    class="relative rounded-lg break-inside mx-3 mb-8 md:mx-0 md:mb-5 md:mt-0"
  >
    <div
      class="content-center"
      :class="{ 'flex h-48': art.id == 1 }"
    >
      <!-- <router-link :to="artLink(art)"
        class="
          absolute
          inset-0
          px-4
          z-10
          bg-white
          text-center
          flex flex-col
          items-center
          justify-center
          opacity-0
          hover:opacity-100
          bg-opacity-90
          duration-100
        "
      >
        <h1
          class="text-2xl font-semibold tracking-wider uppercase text-primary-400"
        >
          {{ art.title }}
        </h1>
        <p class="mt-1 uppercase font-medium text-lg">{{ art.size }}</p>
        <p class="uppercase font-medium text-lg mt-5" v-if="art.id !== 1">
          {{ art.category }}
        </p>
      </router-link>
      <img :src="art.imageUrl" class="mx-auto" alt="" /> -->
      <gallery-item :nft="art" />
    </div>
  </section>
</template>

<script>
import { ref, toRefs } from "@vue/reactivity";
import { db, storage } from "../../firebase/firebase";
import { onMounted, watch } from "@vue/runtime-core";
import { getNfts } from '../../firebase/nfts';
import { useRoute } from "vue-router";
import GalleryItem from './GalleryItem.vue';

export default {
  components: { GalleryItem },
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
    const route = useRoute();
    const collectionRef = route.params.ref;

    const artwork = ref([]);
    const { gallery } = toRefs(props);

    let nftRef = "";

    const getNftDetail = async (values) => {
      if (props.src == "admin") {
        artwork.value.push(newArtwork);
      }

      for (nftRef of values) {
        const currentData = await getNfts();
        if (currentData.data()) {
          const data = {
            id: nftRef,
            title: currentData.data().title,
            href: "/admin/artwork/" + collectionRef + "/" + nftRef,
            size: currentData.data().size,
            category: currentData.data().category
              ? currentData.data().category.join(", ")
              : "",
            imageUrl: await getFullImageURL(currentData.data().imageUrl),
          };

          artwork.value.push(data);
        } else {
          console.log(nftRef);
        }
      }
    };

    watch(gallery, (value) => {
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
      console.log(item);
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