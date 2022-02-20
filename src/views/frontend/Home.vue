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
                  <Button :btn-style="'outlined'" :size="'large'" @click="goToLiveAuctions">Fractionalize</Button>
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
                  <swiper-slide>Slide 1</swiper-slide>
                  <swiper-slide>Slide 2</swiper-slide>
                  <swiper-slide>Slide 3</swiper-slide>
                  ...
                </swiper>
            </div>
          </div>
          <div class="bg-gray-100 py-32">
            <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <p class="mt-2 text-4xl font-medium leading-10 text-black tracking-tight sm:text-4xl">
                Artists Collections
              </p>
            </div>
            
            <ArtistCollection :src="'home'" />
            </div>
        </div>
        <div class="max-w-7xl mx-auto text-center bg-white py-12">

            <h3 class="text-4xl leading-10 font-medium mb-16">About GOG</h3>
            <p class="text-2xl leading-8 font-medium my-8">The Gallery on Greene has consistently fomented curatorial and artistic practice through ambitious exhibitions programs, created in close collaboration with its artists with museums from New York, MCNY, AFAM, SSSM to Havana's National Museum of Fine Art.</p>

            <p class="text-2xl leading-8 font-medium  my-8">Our philosophy: The style pendulum swung away from overly furnished and cluttered interiors some time ago. The immediate reaction was one of clinical simplicity. We are now experiencing a hugely exciting period where key pieces of fine art or antiques are used to a stunning effect within contemporary interiors. This juxtaposition makes for an emerging sophisticated style, next to no other.</p>

            <p class="text-2xl leading-8 font-bold  my-8"><b>Now we can appreciate the best of both worlds.</b></p>

        </div>
      </div>
  </div>
</template>

<script>
import ArtistCollection from '@/components/ArtistCollection.vue'
import Button from '../../components/Layouts/Button.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

export default {

  components: {
    ArtistCollection,
    Button,
    Swiper,
    SwiperSlide,
  },
  setup() {

    const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };

      return {
        onSwiper,
        onSlideChange,
      };
  },
}
</script>
