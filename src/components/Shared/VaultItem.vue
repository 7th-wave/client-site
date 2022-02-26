<template>
    <div class="">
        <div class="slider relative">    
            <div class="m-auto absolute z-10 bottom-4" style="left: 50%; transform:translate(-50%, 0);"><badge :color="'gray'" :label="vault.nfts.length + ' assets'" /></div>
            <swiper
                  :slides-per-view="1"
                  :space-between="50"
                  :effect-fade="true"   
                >
                  <swiper-slide v-for="(item, index) of vault.nfts" :key="index">
                      <img :src="'/images/sneakers/'+item.image" />
                  </swiper-slide>
                </swiper>
        </div>
        <div class="content">
            <div class="data">
                <h4>{{ vault.creator }}</h4>
                <h2>{{ vault.name }}</h2>
                <div class="grid grid-cols-3 gap-0">
                    <div class="col-span-1">
                        <span>Fractions</span>
                        <h3>{{ vault.fractions }}</h3>
                    </div>
                    <div class="col-span-1">
                        <span>Available</span>
                        <h3>{{ vault.available }}</h3>
                    </div>
                    <div class="col-span-1">
                        <span>Valuation</span>
                        <h3>{{ vault.valuation }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

const vault = {
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
}

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import Badge from './Badge.vue';

export default {
    components: {
      Swiper,
      SwiperSlide,
      Badge
    },
        
    setup() {

        return {
            modules: [Navigation, Pagination, Scrollbar, A11y],
            vault
        }
    }
}
</script>