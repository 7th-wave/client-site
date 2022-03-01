<template>
  <div class="w-full flex">
    <div class="flex items-center space-x-4 m-auto">
      <swiper
        :effect="'coverflow'"
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
        <swiper-slide class="w-96" v-for="(item,index,key) in slides" :key="key">
          <div
            class="w-80 h-80 bg-blue-400 bg-opacity-30 relative"
          
          >
            <img
              class="w-full h-full object-cover "
              :src="item.image"
              alt=""
            />
           
          </div>
        </swiper-slide>
      
      </swiper>

    
     
    </div>
  </div>
</template>


<script>
// import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/solid";
import { EffectCoverflow, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/modules/effect-coverflow/effect-coverflow.min.css";
export default {
  data() {
    return {
      index: 0,
    };
  },
  props: {
    slides: {
      type: Object,
      required: true,
    },
  },
  components: {
    // ArrowLeftIcon,
    // ArrowRightIcon,
    Swiper,
    SwiperSlide,
  },
  setup() {

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

  

    return {
      modules: [EffectCoverflow, Pagination],
      onSwiper,
      onSlideChange,

    };
  },
  methods: {
    Next() {
      this.index = this.index == this.slides.length - 1 ? 0 : this.index + 1;
    },
    Back() {
      this.index = this.index == 0 ? this.slides.length - 1 : this.index - 1;
    },
  },
};
</script>


<style scoped>
.opImage {
  opacity: 0.3;
}
</style>