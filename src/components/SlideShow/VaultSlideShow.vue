<template>
  <div class="w-full flex items-center">
    <div class=" w-2/3 m-auto">
       <CarouselCard ref="carouselCardRef" :interval="7000" :autoplay="false" height="400px" type="card" arrow="always" @change="changeHandle"  v-if="slides.length > 1">
        <CarouselCardItem  v-for="(item,index,key) in slides" :key="key" :name="`cc_${key}`">
          <div
            class="w-full bg-blue-400 bg-opacity-30 relative"
            style="max-hight: 663px;"
          >
            <img
              class="w-full h-full object-cover "
              :src="item.image"
              alt=""
            />
           
          </div>
        </CarouselCardItem>
      </CarouselCard>
      

     <div
          v-else
            class="lg:w-96 w-full m-auto  bg-blue-400 bg-opacity-30 relative"
             style="height: 660px;"
           
          >
            <img
            
              class="w-full h-full object-cover "
              :src="slides[0].image"
              alt=""
            />
           
          </div>
     
    </div>
  </div>
</template>


<script>
import { ref } from '@vue/reactivity';

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
  },
  setup() {

    const carouselCardRef = ref();

  

  

    return {
      carouselCardRef

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


<style >
.opImage {
  opacity: 0.3;
}

.carousel-card-item-card {
  opacity: .5;
}

.carousel-card-item-card.is-active {
  opacity: 1;
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