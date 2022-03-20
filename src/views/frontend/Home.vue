<template>
  <div class="home font-inter py-4 w-full">
    <div class="relative">
      <div class="relative">
        <div class="w-full bg-gray-100">
          <div
            class=" pt-10
              m-auto
              xl:grid grid-cols-1
              xl:grid-cols-6
              gap-12
              sm:px-8
              px-4
              2xl:max-w-8xl 2xl:mx-auto
            "
          >
            <div class="col-span-1 lg:col-span-2 flex flex-col justify-center mt-10 lg:mt-0">
              <h1
                class="
                  md:text-6xl
                  text-3xl
                  leading-none
                  font-inter font-semibold
                "
              >
                <span class="text-primary-500">Mint</span> and
                <span class="text-secondary-500">Trade</span> <br />NFT
                Fractions of <br />Tangile Assets
              </h1>
              <p
                class="
                  text-gray-500
                  mt-4
                  md:text-xl
                  text-lg
                  leading-7
                  font-normal
                "
              >
                Fractional ownership of the world’s most sought after NFTs.
                Fractional reduces entry costs, increases access, and enables
                new communities.
              </p>

              <div class="flex lg:mt-16 mt-6 w-full">
                <div class=" w-full">
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
            <div
              class="
                col-span-1
                lg:col-span-4 lg:pl-12
                pb-6
                pt-6
                relative
                hidden
                xl:block
              "
            >
              <CarouselCard
                ref="carouselCardRef"
                :interval="7000"
                :autoplay="false"
                height="500px"
                type="card"
                arrow="always"
                @change="changeHandle"
              >
                <CarouselCardItem
                  v-for="(vault, index) in vaults"
                  :key="index"
                  :name="`cc_${index}`"
                >
                  <vault-item
                    style="width: 100%"
                    :url="{ name: 'Vault', params: { id: vault.id } }"
                    badgecolor="green"
                    :show-arrows="false"
                    :vault="vault"
                  />
                </CarouselCardItem>
              </CarouselCard>

              <div
                class="
                  w-full
                  flex
                  justify-between
                  items-center
                  absolute
                  top-1/2 transform -translate-y-1/2
                  -right-2.5
                  z-10
                "
              >
                <button
                  @click="prev"
                  class="
                    bg-white
                    shadow-md
                    rounded-full
                    flex
                    w-10
                    h-10
                    hover:bg-gray-100
                  "
                >
                  <svg
                    class="m-auto"
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.13346 10.9835L1.4668 6.31687M1.4668 6.31687L6.13346 1.65021M1.4668 6.31687L13.4668 6.31687"
                      stroke="#9CA3AF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button
                  @click="next"
                  class="
                    bg-white
                    shadow-md
                    rounded-full
                    flex
                    w-10
                    h-10
                    hover:bg-gray-100
                  "
                >
                  <svg
                    class="m-auto"
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.80013 1.65021L13.4668 6.31687M13.4668 6.31687L8.80013 10.9835M13.4668 6.31687L1.4668 6.31687"
                      stroke="#9CA3AF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              class="
                col-span-1
                lg:col-span-4 
                pb-6
                pt-6
                relative
                xl:hidden
              "
            >
              <CarouselCard
                ref="carouselCardRef1"
                :interval="7000"
                :autoplay="false"
                height="500px"
                arrow="always"
                 type="card"
                @change="changeHandle"
              >
                <CarouselCardItem
                  v-for="(vault, index) in vaults"
                  :key="index"
                  :name="`cc_${index}`"
                >
                  <vault-item
                    :url="{ name: 'Vault', params: { id: vault.id } }"
                    badgecolor="green"
                    :show-arrows="false"
                    :vault="vault"
                  />
                </CarouselCardItem>
              </CarouselCard>

              <div class="w-full absolute bottom-0 z-10 pb-6  left-1/2 transform -translate-x-1/2 -translate-y-1/2" style=" top: 32rem/*;">
                <div class="w-full relative flex justify-between items-center">
                  <button
                    @click="prev"
                    class="
                      bg-white
                      shadow-md
                      rounded-full
                      flex
                      w-10
                      h-10
                      hover:bg-gray-100
                      absolute
                      top-0
                      -left-4
                    "
                  >
                    <svg
                      class="m-auto"
                      width="15"
                      height="12"
                      viewBox="0 0 15 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.13346 10.9835L1.4668 6.31687M1.4668 6.31687L6.13346 1.65021M1.4668 6.31687L13.4668 6.31687"
                        stroke="#9CA3AF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    @click="next"
                    class="
                      absolute
                      -right-4
                      lg:right-0
                      top-0
                      bg-white
                      shadow-md
                      rounded-full
                      flex
                      w-10
                      h-10
                      hover:bg-gray-100
                    "
                  >
                    <svg
                      class="m-auto"
                      width="15"
                      height="12"
                      viewBox="0 0 15 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.80013 1.65021L13.4668 6.31687M13.4668 6.31687L8.80013 10.9835M13.4668 6.31687L1.4668 6.31687"
                        stroke="#9CA3AF"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pb-12 bg-white">
          <Title text="Featured Collections" />
          <swiper
            :slides-per-view="width > 534 ? 3.5 : 1"
            :space-between="20"
            :centeredSlides="false"
            :loop="false"
            :modules="modules"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              class="card"
              v-for="(category, index, key) in categories"
              :key="key"
              @click="goToDetails(category.id)"
            >
              <div class="w-full p-2 flex items-center">
                <category-card @click="GoToCategory" :category="category">
                  <template #image>
                    <img
                      class="w-full h-full object-cover max-w-xl"
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
          <!-- <div class=" w-full grid md:grid-cols-2 grid-cols-1 gap-4 lg:hidden">
    
              <div class="w-full p-2 flex items-center"  v-for="(category, index,key) in categories" :key="key" @click="goToDetails(category.id)">
                <category-card @click="GoToCategory" :category="category">
                  <template #image>
                    <img
                      class="w-full h-full object-cover max-w-xl"
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
           
          </div> -->
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

import { ref } from "@vue/reactivity";

const vaults = [
  {
    id: "cvman",
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
    ],
  },
  {
    id: "sneakers",
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
    id: "sneakers",
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
    id: "sneakers",
    name: "Sneakers",
    image: "sneakers.png",
    items: 6,
  },

  {
    id: "cvman",
    name: "Fine Art",
    image: "caveman.png",
    items: 2,
  },
  {
    id: "Gems",
    name: "Rare Gems & Jewellery",
    image: "gems.png",
    items: 1,
  },
  {
    id: "Gems",
    name: "Rare Gems & Jewellery",
    image: "gems.png",
    items: 1,
  },
  {
    id: "Gems",
    name: "Rare Gems & Jewellery",
    image: "gems.png",
    items: 1,
  },
];

export default {
  data() {
    return {
      width: window.innerWidth,
    };
  },
  created() {
    setTimeout(() => {
      this.width = window.innerWidth;
    }, 100);
    //534
  },

  components: {
    Button,
    Swiper,
    SwiperSlide,
    VaultItem,
    CategoryCard,
    Title,
  },
  methods: {
    goToDetails(id) {
      this.$router.push({ name: "vault_category", params: { category: id } });
    },
    goVault(id) {
      this.$router.push({ name: "Vault", params: { id: id } });
    },
  },
  setup() {
    const router = useRouter();
    const carouselCardRef = ref();
    const carouselCardRef1 = ref();

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    const goCollections = () => {
      router.push({ name: "Explore" });
    };
    const changeHandle = (index) => {
      console.log(index);
    };
    const next = () => {
      carouselCardRef.value.next();
      carouselCardRef1.value.next();
    };
    const prev = () => {
      carouselCardRef.value.prev();
      carouselCardRef1.value.prev();
    };
    const setToFirst = () => {
      carouselCardRef.value.setActiveItem(0);
      carouselCardRef1.value.setActiveItem(0);
    };

    return {
      modules: [Pagination, Autoplay],
      onSwiper,
      onSlideChange,
      goCollections,
      vaults,
      categories,
      carouselCardRef,
      carouselCardRef1,
      changeHandle,
      next,
      prev,
      setToFirst,
    };
  },
};
</script>
<style scoped>
.carousel-card-item-card {
  opacity: 0.5;
}

.card {
  width: 529.429px !important;
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
.swiper-slide  {
       width: 529.429px !important;
}

.swiper-slide {
  width: 329.429px !important;
 
}
@media (min-width: 768px) {
  .swiper-slide {
    width: 529.429px !important;
    /* 329.429px !important */
  }
}


</style>
<style >
.carousel-card-arrow, .carousel-card-indicators {
  display: none;
}

.carousel-card-item-card {
       left: -69px !important;
    width: 309px !important;
  }


@media only screen and (min-width: 768px) {
 
.carousel-card-item-card {
    left: -49px !important;
    width: 418px !important;
  }
}

@media only screen and (min-width: 1024px) {

.carousel-card-item-card {
  left: 17px !important;
   width: 410px !important;
}

}

  
 








</style>

