<template>
  <div class="w-full flex items-center">
    <div class="xl:w-2/3 w-full xl:m-auto xl:px-0 px-4">
      <div v-if="localSlides.length > 1" class="relative w-full">
        <CarouselCard class=" hidden lg:block"
          ref="carouselCardRef"
          :interval="7000"
          :autoplay="false"
          height="400px"
          type="card"
          arrow="never"
          @change="changeHandle"
        >
          <CarouselCardItem
            v-for="(item, index, key) in localSlides"
            :key="key"
            :name="`cc_${key}`"
          >
            <div
              class="w-full bg-blue-400 bg-opacity-30 relative"
              style="max-hight: 663px"
            >
              <img
                class="w-full h-full object-cover"
                :src="item.img"
                alt=""
              />
            </div>
          </CarouselCardItem>
        </CarouselCard>
           <CarouselCard
          class=" lg:hidden"
          ref="carouselCardRef1"
          :interval="7000"
          :autoplay="false"
          height="400px"
         
          arrow="never"
          @change="changeHandle"
        >
          <CarouselCardItem
            v-for="(item, index, key) in localSlides"
            :key="key"
            :name="`cc_${key}`"
          >
            <div
              class="w-full bg-blue-400 bg-opacity-30 relative"
              style="max-hight: 663px"
            >
              <img
                class="w-full h-full object-cover"
                :src="item.img"
                alt=""
              />
            </div>
          </CarouselCardItem>
        </CarouselCard>
        <div
        
          class="
        
            w-full
            absolute 
            z-10
          "
          style="top:12rem;"
        >
         <div class=" w-full relative flex
            justify-between
            items-center">
            <button
            @click="prev"
            class="
              bg-white
              shadow-md
              rounded-full
              flex
              w-10
              h-10
              hover:bg-gray-100 absolute -left-4
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
             absolute lg:-right-6 -right-4
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

      <div
        v-else
        class="lg:w-96 w-full m-auto bg-blue-400 bg-opacity-30 relative"
        style="height: 660px"
      >
        <img class="w-full h-full object-cover" :src="localSlides[0].img" alt="" v-if="localSlides.length" />
      </div>
    </div>
  </div>
</template>


<script>
import { ref, watch, toRefs } from "vue";

export default {
  data() {
    return {
      index: 0,
    };
  },
  props: [
    'slides'
  ],
  components: {
    // ArrowLeftIcon,
    // ArrowRightIcon,
  },
  setup(props) {

    const { slides } = toRefs(props);

    const localSlides = ref([]);

    const carouselCardRef = ref();
    const carouselCardRef1 = ref();
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
    };

     watch(slides, (value) => {
      localSlides.value = value;
    })

    return {
      carouselCardRef,
      carouselCardRef1,
      changeHandle,
      next,
      prev,
      setToFirst,
      localSlides
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

@media (min-width: 1024px) {
    .MyButton {
       width: 69rem
    }
  }




.opImage {
  opacity: 0.3;
}

.carousel-card-item-card {
  opacity: 0.5;
}

.carousel-card-item-card.is-active {
  opacity: 1;
}

.carousel-card-arrow {
  width: 56px;
  height: 56px;
  background-color: transparent;
  background-size: 100%;
}

.carousel-card-arrow-right i {
  background-img: url("/images/arrow_next.svg") !important;
  background-repeat: no-repeat;
}

.carousel-card-arrow-left i {
  background-img: url("/images/arrow_left.svg") !important;
  background-repeat: no-repeat;
}
</style>