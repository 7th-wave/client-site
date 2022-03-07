<template>
  <div class="home font-inter py-4 ">
    <div class="relative  ">
        <div class="relative">
          <div class="m-auto grid grid-cols-1 lg:grid-cols-6 gap-12 px-12">
            <div class="col-span-1 lg:col-span-2 flex flex-col justify-center">
              <h1 class="text-6xl leading-none font-inter font-semibold"><span class="text-primary-500">Mint</span> and <span class="text-secondary-500">Trade</span> <br />NFT Fractions of <br />Tangile Assets  </h1>
              <p class="text-gray-500 mt-4 text-xl leading-7 font-normal">Fractional ownership of the world’s most sought after NFTs. Fractional reduces entry costs, increases access, and enables new communities.</p>

              <div class="flex mt-16">
                <div class="mr-4 w-full">
                  <Button :btn-style="'secondary'" :size="'large'" class="w-full"  @click="goCollections">Buy Fractions</Button>
                </div>
              </div>
            </div>
            <div class="col-span-1 lg:col-span-4 lg:pl-12 pb-6 pt-6">
                 <swiper 
                  class="main-slider"
                  :slides-per-view="2"
                  :space-between="-100"
                  :centeredSlides="true"
                  :modules="modules"
                  :autoplay="{
                      delay: 3000,
                  }"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange"
                >
                  <swiper-slide class="w-64" v-for="(vault, index) in vaults" :key="index"> 
                    <div class="w-full p-2 flex items-center">
                    <vault-item :vault="vault" />
                    </div>
                  </swiper-slide>
                  
                </swiper>
            </div>
          </div>

          <div class="pb-12 bg-white">

            <Title text="Featured Collections" />
            <swiper 
                  :slides-per-view="3.5"
                  :space-between="20"
                  :centeredSlides="true"
                  :modules="modules"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange"
                >
                  <swiper-slide v-for="(category, index) in categories" :key="index"> 
                    <div class="w-full p-2 flex items-center">
                      <category-card
                          @click="GoToCategory"
                          :category="category"
                        >
                          <template #image>
                            <img
                              class="w-full h-full object-cover"
                              :src="'/images/categories/'+category.image"
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
                            <span class="text-gray-900 text-xl font-semibold font-inter">{{
                              category.name
                            }}</span>
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
import Button from '../../components/Layouts/Button.vue';
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';





// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import "swiper/modules/effect-coverflow/effect-coverflow.min.css"

import VaultItem from '@/components/Shared/VaultItem.vue';
import { useRouter } from 'vue-router';
import CategoryCard from '../../components/cards/CategoryCard.vue';
import Title from '../../components/Shared/Title.vue';

const vaults = [{
    name: "Nike Sneakers",
    token: 'SNEAKER',
    creator: 'Nike',
    fractions: 58,
    available: '49%',
    valuation: '$2M',
    nfts: [
        {
            name: "Nft1",
            image: "01.png"
        },
        {
            name: "Nft2",
            image: "02.png"
        },
        {
            name: "Nft3",
            image: "03.png"
        },
        {
            name: "Nft4",
            image: "04.png"
        },
        {
            name: "Nft5",
            image: "05.png"
        },
        {
            name: "Nft6",
            image: "06.png"
        }
    ]
},
{
    name: "Nike Shoes",
    token: 'SNEAKER',
    creator: 'Nike',
    fractions: 58,
    available: '49%',
    valuation: '$2M',
    nfts: [
        
        {
            name: "Nft2",
            image: "02.png"
        },
        {
            name: "Nft3",
            image: "03.png"
        },
        {
            name: "Nft4",
            image: "04.png"
        }
    ]
},
{
    name: "Nike Shoes",
    token: 'SNEAKER',
    creator: 'Nike',
    fractions: 58,
    available: '49%',
    valuation: '$2M',
    nfts: [
        
        {
            name: "Nft2",
            image: "02.png"
        },
        {
            name: "Nft3",
            image: "03.png"
        },
        {
            name: "Nft4",
            image: "04.png"
        }
    ]
}];

const categories = [
        {
          name: "Sneakers",
          image:
            "sneakers.png",
          items: 9,
        },
        {
          name: "Rare Gems & Jewellery",
          image:
            "gems.png",
          items: 1,
        },
        {
          name: "Fine Art",
          image:
            "caveman.png",
          items: 2,
        },
        {
          name: "Flip Flops",
          image:
            "https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg",
          items: 2,
        },
        {
          name: "Sneakers",
          image:
            "https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg",
          items: 2,
        },
        {
          name: "Boots",
          image:
            "https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg",
          items: 2,
        },
        {
          name: "Sandals",
          image:
            "https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg",
          items: 2,
        },
        {
          name: "Flip Flops",
          image:
            "https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg",
          items: 2,
        },
        {
          name: "Sneakers",
          image:
            "https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg",
          items: 2,
        },
        {
          name: "Boots",
          image:
            "https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg",
          items: 2,
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
  setup() {

    const router = useRouter();

    const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };

      const goCollections = () => {
        router.push({ name:'Explore' })
      }

      return {
        modules: [Pagination, Autoplay],
        onSwiper,
        onSlideChange,
        goCollections,
        vaults,
        categories
      };
  },
}
</script>
<style scoped>

.slides {
  height: 710px;
}

.main-slider .swiper-slide {
    opacity: 0.4;
    overflow: hidden;
    transition: .7s;
    transform: scale(.8);
}

.main-slider .swiper-slide img {
    width: 100%;
}

.main-slider .swiper-slide-active {
    opacity: 1;
    z-index: 1;
    transform: scale(1);
}
</style>