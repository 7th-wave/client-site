<template>
  <div class="home font-inter py-4   w-full">
    <div class="relative  ">
      <div class="relative ">
        <div class=" w-full bg-gray-100">
           <div class="m-auto grid grid-cols-1 lg:grid-cols-6 gap-12 px-12  2xl:max-w-8xl 2xl:mx-auto  ">
          <div class="col-span-1 lg:col-span-2 flex flex-col justify-center">
            <h1 class="text-6xl leading-none font-inter font-semibold">
              <span class="text-primary-500">Mint</span> and
              <span class="text-secondary-500">Trade</span> <br />NFT Fractions
              of <br />Tangile Assets
            </h1>
            <p class="text-gray-500 mt-4 text-xl leading-7 font-normal">
              Fractional ownership of the world’s most sought after NFTs.
              Fractional reduces entry costs, increases access, and enables new
              communities.
            </p>

            <div class="flex mt-16">
              <div class="mr-4 w-full">
                <Button
                  :btn-style="'secondary'"
                  :size="'large'"
                  class="w-full"
                  @click="goCollections"
                  >Buy Fractions</Button
                >
              </div>
            </div>
          </div>
          <div class="col-span-1 lg:col-span-4 lg:pl-12 pb-6 pt-6">
            <CarouselCard ref="carouselCardRef" :interval="7000" :autoplay="false" height="500px" type="card" arrow="always" @change="changeHandle">
              <CarouselCardItem v-for="(vault, index) in vaults"
                :key="index" :name="`cc_${index}`">
                <vault-item  badgecolor="green" :vault="vault" />
              </CarouselCardItem>
            </CarouselCard>
            
          </div>
        </div>
        </div>
       

        <div class="pb-12 bg-white">
          <Title text="Featured Collections" />
          <swiper
            :slides-per-view="3.5"
            :space-between="20"
            :centeredSlides="true"
            :loop="true"
            :modules="modules"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="(category, index) in categories" :key="index" @click="goToDetails(category.id)">
              <div class="w-full p-2 flex items-center">
                <category-card @click="GoToCategory" :category="category">
                  <template #image>
                    <img
                      class="w-full h-full object-cover"
                      :src="'/images/categories/' + category.image"
                      alt=""
                    />
                  </template>

                  <template #subtitle>
                    <span
                      class="
                        text-sm
                        font-inter font-medium
                        text-primary-500
                        cursor-pointer
                      "
                      >{{ category.items }} items</span
                    >
                  </template>
                  <template #title>
                    <span
                      class="text-gray-900 text-xl font-semibold font-inter"
                      >{{ category.name }}</span
                    >
                  </template>
                </category-card>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../components/Layouts/Button.vue";
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";

import VaultItem from "@/components/Shared/VaultItem.vue";
import { useRouter } from "vue-router";
import CategoryCard from "../../components/cards/CategoryCard.vue";
import Title from "../../components/Shared/Title.vue";

import { ref } from '@vue/reactivity';

const vaults = [
  {
    id:"FineArt",
    name: "The caveman, ca. 2008",
    token: "SNEAKER",
    creator: "Nike",
    fractions: 58,
    available: "49%",
    valuation: "$2M",
    nfts: [
      {
        name: "caveman",
        image: "caveman.png",
      },
     {
        name: "caveman",
        image: "caveman.png",
      },
     {
        name: "caveman",
        image: "caveman.png",
      },
    ],
  },
  {
    id:"Sneakers",
    name: "Nike Sneakers",
    token: "SNEAKER",
    creator: "Nike",
    fractions: 58,
    available: "49%",
    valuation: "$2M",
    nfts: [
      {
        name: "Nft1",
        image: "03.png",
      },
      {
        name: "Nft2",
        image: "02.png",
      },
      {
        name: "Nft3",
        image: "03.png",
      },
      {
        name: "Nft4",
        image: "04.png",
      },
      {
        name: "Nft5",
        image: "05.png",
      },
      {
        name: "Nft6",
        image: "06.png",
      },
    ],
  },
  {
    id:"Sneakers",
    name: "Nike Shoes",
    token: "SNEAKER",
    creator: "Nike",
    fractions: 58,
    available: "49%",
    valuation: "$2M",
    nfts: [
      {
        name: "Nft2",
        image: "colors.png",
      },
      {
        name: "Nft3",
        image: "03.png",
      },
      {
        name: "Nft4",
        image: "04.png",
      },
    ],
  },
  
];

const categories = [
  {
    id:"Sneakers",
    name: "Sneakers",
    image: "sneakers.png",
    items: 9,
  },

  {
    id:"Fine Art",
    name: "Fine Art",
    image: "caveman.png",
    items: 2,
  },
  {
    id:"Gems",
    name: "Rare Gems & Jewellery",
    image: "gems.png",
    items: 1,
  },
];

export default {
  components: {
    Button,
    Swiper,
    SwiperSlide,
    VaultItem,
    CategoryCard,
    Title,
  },
  methods:{
    goToDetails(id){
      this.$router.push({ name: "vault_category", params: { category: id } });
    },
    goVault(id){
      this.$router.push({ name: "Vault" ,params: { id: id } });
    },

  },
  setup() {
    const router = useRouter();
    const carouselCardRef = ref();

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    const goCollections = () => {
      router.push({ name: "Explore" });
    };
    

    return {
      modules: [Pagination, Autoplay],
      onSwiper,
      onSlideChange,
      goCollections,
      vaults,
      categories,
      carouselCardRef,
    };
  },
};
</script>
<style scoped>

.carousel-card-item-card {
  opacity: .5;
}

.carousel-card-item-card.is-active {
  opacity: 1;
}

.slides {
  height: 710px;
}

.main-slider .swiper-slide {
  opacity: 0.4;
  overflow: hidden;
  transition: 0.7s;
  transform: scale(0.8);
}

.main-slider .swiper-slide img {
  width: 100%;
}

.main-slider .swiper-slide-active {
  opacity: 1;
  z-index: 1;
  transform: scale(1);
}

.carousel-card-arrow {
  width: 56px;
  height: 56px;
  background-color: transparent;
  background-size: 100%
}

.carousel-card-arrow-right i {
  background-image: url('/images/arrow_next.svg')!important;
  background-repeat: no-repeat;
}

.carousel-card-arrow-left i {
  background-image: url('/images/arrow_left.svg')!important;
  background-repeat: no-repeat;
}
</style>