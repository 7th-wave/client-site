<template>
  <div class="home bg-white font-inter">
    <div class="relative  ">
        <div class="relative">
          <div class="max-w-7xl m-auto bg-white grid grid-cols-4 gap-4 py-12">
            <div class="col-span-2">
              <h1 class="text-6xl leading-none font-inter "><span class="text-primary-500">Mint</span> and <span class="text-primary-500">Trade</span> <br />NFT Fractions of <br />Tangile Assets  </h1>
              <p class="text-gray-500 mt-4">Fractional ownership of the world’s most sought after NFTs. Fractional reduces entry costs, increases access, and enables new communities.</p>

              <div class="flex mt-16">
                <div class="mr-4">
                  <Button :btn-style="'primary'" :size="'large'"  @click="goCollections">Explore</Button>
                </div>
                <div>
                  <Button :btn-style="'outlined'" :size="'large'" @click="fractionalize">Fractionalize</Button>
                </div>
              </div>
            </div>
            <div class="col-span-2">
                 <swiper :effect="'coverflow'"
                    :coverflowEffect="{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }"
                  :modules="modules"
                  :slides-per-view="'auto'"
                  :space-between="0"
                  :centeredSlides="true"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange"
                >
                  <swiper-slide class="w-96" v-for="(vault, index) in vaults" :key="index"> 
                    <div class="w-full p-6 flex items-center">
                    <vault-item :vault="vault" />
                    </div>
                  </swiper-slide>
                  
                </swiper>
            </div>
          </div>
          
        </div>
        
      </div>
  </div>
</template>

<script>
import Button from '../../components/Layouts/Button.vue';
import { EffectCoverflow, Pagination } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';





// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import "swiper/modules/effect-coverflow/effect-coverflow.min.css"

import VaultItem from '@/components/Shared/VaultItem.vue';
import { useRouter } from 'vue-router';

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
}]

export default {

  components: {
    Button,
    Swiper,
    SwiperSlide,
    VaultItem,
  },
  setup() {

    const router = useRouter();

    const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };

      const fractionalize = () => {
        router.push({ path: '/fractionalize' })
      }

      return {
        modules: [EffectCoverflow, Pagination],
        onSwiper,
        onSlideChange,
        fractionalize,
        vaults
      };
  },
}
</script>
