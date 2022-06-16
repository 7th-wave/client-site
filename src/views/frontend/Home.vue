<template>
  <div class="home font-inter w-full flex flex-col items-center">
    



      <div id="circle" class="flex items-center m-auto h-full z-10 top-2">
        <svg width="62" height="62" viewBox="0 0 170.79 170.79" fill="none" class="text-primary-900"
        enable-background="new 0 0 275.887 250.26" xml:space="preserve">
          <path fill="#000000" d="M137.68,21.278c37.816,0,68.582,30.765,68.582,68.582s-30.766,68.582-68.582,68.582
              c-37.816,0-68.582-30.765-68.582-68.582S99.863,21.278,137.68,21.278 M137.68,4.465c-47.163,0-85.395,38.233-85.395,85.395
              s38.233,85.395,85.395,85.395s85.395-38.233,85.395-85.395S184.842,4.465,137.68,4.465L137.68,4.465z" />
          <g>
            <path fill="#676063" d="M60.947,193.902h5.275v49.903h-5.275V193.902z" />
            <path fill="#676063" d="M116.551,243.805l-11.406-16.04c-1.283,0.143-2.614,0.214-3.992,0.214H87.75v15.826h-5.275v-49.903h18.678
                c6.368,0,11.358,1.521,14.971,4.562c3.611,3.042,5.418,7.225,5.418,12.547c0,3.898-0.987,7.189-2.958,9.874
                c-1.973,2.686-4.789,4.623-8.448,5.81l12.19,17.109H116.551z M112.345,220.208c2.613-2.186,3.921-5.251,3.921-9.197
                c0-4.039-1.308-7.14-3.921-9.303c-2.614-2.162-6.393-3.244-11.335-3.244H87.75v25.023h13.26
                C105.952,223.487,109.731,222.395,112.345,220.208z" />
            <path fill="#676063" d="M149.486,220.351l-10.193,10.337v13.117h-5.275v-49.903h5.275v30.156l29.299-30.156h6.061l-21.602,22.599
                l23.099,27.304h-6.274L149.486,220.351z" />
            <path fill="#676063" d="M237.26,193.902h5.275v45.34h27.945v4.562H237.26V193.902z" />
            <path fill="#676063"
              d="M203.67,198.116c11.246,0,20.395,9.149,20.395,20.395s-9.149,20.395-20.395,20.395
                c-11.246,0-20.395-9.149-20.395-20.395S192.424,198.116,203.67,198.116 M203.67,193.116c-14.025,0-25.395,11.37-25.395,25.395
                s11.37,25.395,25.395,25.395s25.395-11.37,25.395-25.395S217.695,193.116,203.67,193.116L203.67,193.116z" />
            <path fill="#676063"
              d="M48.128,235.43l-3.053-2.789c-3.72,3.934-8.972,6.405-14.8,6.405c-11.246,0-20.395-9.149-20.395-20.396
                s9.149-20.395,20.395-20.395c5.829,0,11.08,2.471,14.8,6.404l3.053-2.788l0.656-0.599c-4.633-4.932-11.209-8.017-18.509-8.017
                c-14.025,0-25.395,11.37-25.395,25.395s11.37,25.396,25.395,25.396c7.301,0,13.877-3.085,18.509-8.017L48.128,235.43z" />
          </g>
        </svg>
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
</script>
