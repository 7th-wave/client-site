<template>
  <div class="home font-inter w-full flex flex-col items-center"></div>
    



      
   
</template>
<script>
  //import Button from "@/components/Layouts/Button.vue";
  import {
    useRouter
  } from "vue-router";
  //import Title from "@/components/Shared/Title.vue";

  import {
    ref
  } from "@vue/reactivity";
  import {
    gsap
  } from "gsap";
  import {
    Flip
  } from "gsap/Flip";
  import {
    ScrollTrigger
  } from "gsap/ScrollTrigger";
  import {
    Observer
  } from "gsap/Observer";
  import {
    ScrollToPlugin
  } from "gsap/ScrollToPlugin";
  import {
    Draggable
  } from "gsap/Draggable";
  import {
    EaselPlugin
  } from "gsap/EaselPlugin";
  import {
    MotionPathPlugin
  } from "gsap/MotionPathPlugin";
  import {
    PixiPlugin
  } from "gsap/PixiPlugin";
  import {
    TextPlugin
  } from "gsap/TextPlugin";

  gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, EaselPlugin, MotionPathPlugin,
    PixiPlugin, TextPlugin);




  export default {
    data() {
      return {
        width: window.innerWidth,
      };
    },
    created() {
      setTimeout(() => {
        this.width = window.innerWidth;
      }, 100);
      //534
    },

    components: {
      // Button,
      //Title,
    },
    methods: {
      goToDetails(id) {
        this.$router.push({
          name: "vault_category",
          params: {
            category: id
          }
        });
      },
      goVault(id) {
        this.$router.push({
          name: "Vault",
          params: {
            id: id
          }
        });
      },
    },
    setup() {
      const router = useRouter();
      const carouselCardRef = ref();
      const carouselCardRef1 = ref();



      const goCollections = () => {
        router.push({
          name: "Explore"
        });
      };
      const changeHandle = (index) => {
        console.log(index);
      };

      const setToFirst = () => {
        carouselCardRef.value.setActiveItem(0);
        carouselCardRef1.value.setActiveItem(0);
      };

      return {
        goCollections,
        carouselCardRef,
        carouselCardRef1,
        changeHandle,
        setToFirst,
      };
    },
  };
</script>

<style>

.main-content {
  scroll-behavior: smooth;
}
</style>