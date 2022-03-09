<template>
    <div class="rounded-lg overflow-hidden shadow-lg w-90 relative" :class="bg">
         <slot name="badge"/>
        <div class="slider relative">    
            <div class="m-auto absolute z-10 bottom-4" style="left: 50%; transform:translate(-50%, 0);"><badge :color="badgecolor" :label="vault.nfts.length + ' assets'" /></div>
            <swiper
                  :slides-per-view="1"
                  :space-between="0"
                >
                  <swiper-slide v-for="(item, index) of vault.nfts" :key="index">
                      <img class="w-full h-80 object-cover" :src="'/images/sneakers/'+item.image" />
                  </swiper-slide>
            </swiper>   
        </div>
        
        <div class="content w-full pt-6 bg-white">
            <div class="data w-full">
                <h4 class="w-72 text-sm font-medium leading-tight text-primary-link px-6" v-if="vault.creator">{{ vault.creator }}</h4>
                <h2 class="w-full text-xl font-semibold leading-8 text-gray-900 px-6">{{ vault.name }}</h2>
                <div class="h-6" />
                <stats />
            </div>
        </div>
    </div>
</template>
<script>


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import Badge from './Badge.vue';
import Stats from './Stats.vue';
import { onMounted } from '@vue/runtime-core';

export default {
    props: ['vault','bg','badgecolor'],

    components: {
        Swiper,
        SwiperSlide,
        Badge,
        Stats
    },
        
    setup(props) {

        onMounted(() => {
            console.log(props.value);
        })

        return {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            
        }
    }
}
</script>