<template>
  <div class="home font-inter w-full flex flex-col items-center">
    <div class="bg-white flex flex-col items-center">

      <parallax id="ONE" class="w-full h-full">
        <section class="bg-red-500 h-full w-full flex items-center mx-auto">

              <div id="circle"> <svg width="62" height="62" viewBox="0 0 170.79 170.79" fill="none" class="text-primary-900
    " version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                  y="0px" enable-background="new 0 0 170.79 170.79" xml:space="preserve">
                  <path fill="black" d="M85.395,16.813c37.816,0,68.582,30.765,68.582,68.582s-30.766,68.582-68.582,68.582
      c-37.816,0-68.582-30.765-68.582-68.582S47.579,16.813,85.395,16.813 M85.395,0C38.233,0,0,38.233,0,85.395
      s38.233,85.395,85.395,85.395s85.395-38.233,85.395-85.395S132.558,0,85.395,0L85.395,0z" />
                </svg></div>



        </section>
        <section class="panel bg-orange-500">
          TWO
        </section>
        <section class="panel bgpurple">
          THREE
        </section>
        <section class="panel green">
          FOUR
        </section>


        <h1 class="header-section">Scroll to construct a shoe</h1>

        <section class="shoe">
          <img src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84da29b46cb1403688b139_outsole.png"
            class="outsole piece" alt="outsole">
          <img src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84d9ecb32e46bc5f1f8a8a_component.png?"
            class="heel piece" alt="heel">
          <img src="https://uploads-ssl.webflow.com/5d3ee7c0c89f6a2d122c0695/5d84da293b7f75e5a42bcacd_midsole.png?"
            class="midsole piece" alt="midsole">
        </section>

        <h1 class="header-section">Cool, right?</h1>




        <header>
          <a href="https://greensock.com/scrolltrigger">
            <img class="greensock-icon"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200"
              height="64" />
          </a>
        </header>




      </parallax>

    </div>
  </div>
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

 gsap.set("#home", {scale:0.7});
 gsap.timeline()
     .from("home", {duration: 1, opacity:0}) 




</script>
