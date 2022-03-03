<template>
  <section
    v-for="art in artwork"
    :key="art.id"
    class="relative rounded-lg break-inside mx-3 mb-8 md:mx-0 md:mb-5 md:mt-0"
  >
    <div
      class="bg-primary-400 content-center"
      :class="{ 'flex h-48': art.id == 1 }"
    >
      <router-link
        :to="artLink(art)"
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
      <img :src="art.imageUrl" class="mx-auto" alt="" />
    </div>
  </section>
</template>

<script>
import { ref, toRefs } from "@vue/reactivity";
import { db, storage } from "../../firebase/firebase";
import { onMounted, watch } from "@vue/runtime-core";

export default {
  props: ["src", "gallery"],
  setup(props) {
    const artwork = ref([]);
    const { gallery } = toRefs(props);

    let nftRef = "";

    onMounted(() => {
      getNftDetail(gallery.value)
    })

    const getNftDetail = async (values) => {
      console.log('values', values)
      for (nftRef of values) {
        const currentData = await db.collection("nfts").doc(nftRef).get();
        console.log(currentData.data());
        if (currentData.data()) {
          const data = {
            id: nftRef,
            title: currentData.data().title,
            href: "/my-collections/artwork/" + currentData.data().collection + "/" + nftRef,
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

    const getFullImageURL = async (item) => {
      console.log(item);
      if (item) {
        var storageRef = storage.ref();
        const imageUrl = await storageRef.child(item).getDownloadURL();

        return imageUrl;
      }
    };

    const artLink = (artwork) => {
      console.log(artwork);
      console.log("test");
      return artwork.href;
    };

    return {
      artwork,
      artLink,
    };
  },
};
</script>
