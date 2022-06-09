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

    const artwork = ref([
      {
        id: '001',
        title: 'title 01',
        href: "/admin/artwork/00A/001",
        size: 12,
        category: "",
        imageUrl: "./images/mocks/nfts/img_01.jpg",
      },
      {
        id: '002',
        title: 'title 02',
        href: "/admin/artwork/00A/001",
        size: 12,
        category: "",
        imageUrl: "./images/mocks/nfts/img_02.jpg",
      },{
        id: '003',
        title: 'title 03',
        href: "/admin/artwork/00A/003",
        size: 12,
        category: "",
        imageUrl: "./images/mocks/nfts/img_03.jpg",
      },{
        id: '004',
        title: 'title 04',
        href: "/admin/artwork/00A/004",
        size: 12,
        category: "",
        imageUrl: "./images/mocks/nfts/img_04.jpg",
      },{
        id: '005',
        title: 'title 05',
        href: "/admin/artwork/00A/005",
        size: 12,
        category: "",
        imageUrl: "./images/mocks/nfts/img_05.jpg",
      },{
        id: '006',
        title: 'title 06',
        href: "/admin/artwork/00A/006",
        size: 12,
        category: "",
        imageUrl: "./images/mocks/nfts/img_06.jpg",
      },{
        id: '007',
        title: 'title 07',
        href: "/admin/artwork/00A/007",
        size: 12,
        category: "",
        imageUrl: "./images/mocks/nfts/img_07.jpg",
      },{
        id: '007',
        title: 'title 07',
        href: "/admin/artwork/00A/007",
        size: 12,
        category: "",
        imageUrl: "./images/mocks/nfts/img_07.jpg",
      },{
        id: '008',
        title: 'title 08',
        href: "/admin/artwork/00A/008",
        size: 12,
        category: "",
        imageUrl: "./images/mocks/nfts/img_08.jpg",
      },{
        id: '009',
        title: 'title 09',
        href: "/admin/artwork/00A/009",
        size: 12,
        category: "",
        imageUrl: "./images/mocks/nfts/img_09.jpg",
      },{
        id: '010',
        title: 'title 10',
        href: "/admin/artwork/00A/010",
        size: 12,
        category: "",
        imageUrl: "./images/mocks/nfts/img_10.jpg",
      }
    ]);
    const { gallery } = toRefs(props);

    //let nftRef = "";

    const getNftDetail = async () => {
      /* if (props.src == "admin") {
        artwork.value.push(newArtwork);
      }

      for (nftRef of values) {
        const currentData = await db.collection("nfts").doc(nftRef).get();
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
      } */
    };

    watch(gallery, (value) => {
      getNftDetail(value);
    });

    /* const newArtwork = {
      id: 1,
      title: "add",
      href: "/admin/artwork/" + collectionRef + "/" + nftRef,
      size: "",
      category: "",
      imageUrl: "/images/plus_circle.svg",
    }; */

    /* const getFullImageURL = async (item) => {
      console.log(item);
      if (item) {
        var storageRef = storage.ref();
        const imageUrl = await storageRef.child(item).getDownloadURL();

        return imageUrl;
      }
    }; */

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