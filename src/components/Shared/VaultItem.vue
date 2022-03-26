<template>
  <div class="rounded-lg overflow-hidden shadow-lg w-full  relative" :class="bg">
    <slot name="badge" />
    <div class="slider relative">
      
      <div
        class="m-auto absolute z-10 bottom-4"
        style="left: 50%; transform: translate(-50%, 0)"
      >
        <badge :color="badgecolor" :label="vault.nfts.length + ' assets'" />
      </div>
      <swiper :modules="modules" :navigation="{
            nextEl: '.next-button',
            prevEl: '.prev-button',
          }" :slides-per-view="1" :space-between="0" >
        <swiper-slide v-for="(item, index) of vault.nfts" :key="index" >
          <img @click="goToDetails"
            class="w-full h-80 object-cover"
            :src="'/images/sneakers/' + item.image"
          />
        </swiper-slide>
        <div
       v-if="vault.nfts.length > 1"
        class="z-50 absolute left-0 bottom-2 px-4  w-full flex justify-between items-center"
      >
        <button  class="bg-white shadow-md rounded-full flex w-10 h-10 hover:bg-gray-100 prev-button">
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
        <button class="bg-white shadow-md rounded-full flex w-10 h-10 hover:bg-gray-100 next-button">
          <svg
           class=" m-auto"
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
      </swiper>
    </div>

    <div class="content w-full pt-6 bg-white" @click="goToDetails">
      <div class="data w-full">
        <h4
          class="w-72 text-sm font-medium leading-tight text-primary-link px-6"
          v-if="vault.creator"
        >
          {{ vault.creator }}
        </h4>
        <h2 class="w-full text-xl font-semibold leading-8 text-gray-900 px-6">
          {{ vault.name }}
        </h2>
        <div class="h-6" />
        <stats :stats="vault"  />
      </div>
    </div>
  </div>
</template>
<script>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/vue/swiper-vue.js";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import Badge from "./Badge.vue";
import Stats from "./Stats.vue";
import { onMounted } from "@vue/runtime-core";
// import { useRouter } from 'vue-router'

export default {
  props: ["vault", "bg", "badgecolor", "url", 'showArrows', 'create'],

  components: {
    Swiper,
    SwiperSlide,
    Badge,
    Stats,
  },
  methods:{
    goToDetails(){
     this.$router.push(this.url)
    }
  },

  setup(props) {

    const swiper = useSwiper();
    // const router = useRouter()
    onMounted(() => {
      console.log(props.value);
    });
   

    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
      swiper
    };
  },
};
</script>