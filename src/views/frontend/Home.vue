<template>
  <div class="home bg-white font-inter">
    <div class="relative  ">
        <div class="relative">
          <div class="max-w-7xl m-auto bg-white grid grid-cols-4 gap-4 py-12">
            <div class="col-span-2">
              <h1 class="text-6xl leading-none font-inter "><span class="text-teal-500">Mint</span> and <span class="text-teal-500">Trade</span> <br />NFT Fractions of <br />Tangile Assets  </h1>
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
                 <swiper
                  :slides-per-view="3"
                  :space-between="50"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange"
                >
                  <swiper-slide> 
                    <vault-item />
                  </swiper-slide>
                  <swiper-slide>Slide 2</swiper-slide>
                  <swiper-slide>Slide 3</swiper-slide>
                </swiper>
            </div>
          </div>
          
        </div>
        
      </div>
  </div>
</template>

<script>
import Button from '../../components/Layouts/Button.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import VaultItem from '@/components/Shared/VaultItem.vue';
import { useRouter } from 'vue-router';

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
        onSwiper,
        onSlideChange,
        fractionalize
      };
  },
}
</script>
