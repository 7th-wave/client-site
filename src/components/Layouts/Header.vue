<template>
  <div class="header bg-white">
    <header>
      <Popover class="relative overflow-visible">
        <div
          class="
            flex
            justify-between
            text-center
            items-center
            
            px-4
            py-6
            
          "
        >
          <div
            class="flex"
          >
            <logo />
          </div>

          <div
            class="
              flex
              justify-end
             
              lg:w-0
              md:m-0
              mt-4
            "
          >
            <div
              class="
                whitespace-nowrap
                text-3xl
                font-medium
                text-gray-900
                hover:text-gray-900
              "
            >
              {{ currentRouteName }}
            </div>
            <div class="px-8 py-2">
              <span class="sr-only">Workflow </span>
              <button
                @click="goFractionalize()"
                class="
                  flex
                  items-center
                  space-x-2
                  border
                  py-2.5
                  px-4
                  rounded-md
                  w-auto
                  border-primary-500
                "
              >
                <div>
                  <svg width="16" height="16" viewBox="0 0 170.79 170.79" fill="none" class="text-gray-900
                    " version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                    y="0px" enable-background="new 0 0 170.79 170.79" xml:space="preserve">
                    <path fill="#999897" d="M85.395,16.813c37.816,0,68.582,30.765,68.582,68.582s-30.766,68.582-68.582,68.582
	                  c-37.816,0-68.582-30.765-68.582-68.582S47.579,16.813,85.395,16.813 M85.395,0C38.233,0,0,38.233,0,85.395
	                  s38.233,85.395,85.395,85.395s85.395-38.233,85.395-85.395S132.558,0,85.395,0L85.395,0z" />
                  </svg>
                </div>
                <span class="text-base font-medium font-inter black w-max">
                  JOIN THE CLUB</span
                >
              </button>
            </div>
            <button
              @click="openMenu"
              class="outline-none hover:text-black"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </Popover>
      <MainMenu
        @closeMenu="closeMenu"
        @on:login="login"
        @on:logout="logout"
        :animate_menu="showMenu"
        ref="MainMenu"
      />
    </header>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { Popover } from "@headlessui/vue";
import MainMenu from "./MainMenu.vue";
import slugify from "slugify";
import MenuIcon from "../Icons/MenuIcon.vue";

import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import Logo from "./Logo.vue";
export default {
  components: {
    Popover,
    MenuIcon,
    MainMenu,
    Logo,
  },
  emits: ['on:login'],    
  setup(props, {emit}) {

    const showMenu = ref(false);

    const login = () => {
      
      showMenu.value = false;
      emit('on:login');

    }

    

    const hovered = ref(null);
    const route = useRoute();
    const store = useStore();
    const router = useRouter();

    const currentRouteName = computed(() => {
      if ("Artist,Artwork,Series".indexOf(route.name) !== -1) {
        return store.getters["collection/getName"];
      } else {
        return "";
      }
    });

    const goFractionalize = () => {
      router.push({ path: "/fractionalize" });
    };

    const logout = () => {
      store.dispatch('user/logoutUser');
      emit('on:logout');
      router.push({path: "/"})
    }

    const closeMenu = () => {
      showMenu.value = false;
    }

    const openMenu = () => {
      showMenu.value = true;
    }

    return {
      login,
      logout,
      closeMenu,
      openMenu,
      showMenu,
      key: 0,
      goFractionalize,
      hovered, // access a state in computed function
      logo: `<svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.3755 0H16.8582C16.1811 0 15.6322 0.553696 15.6322 1.23672V21.4879C15.6322 22.854 14.5343 23.9614 13.1801 23.9614H10.4215C9.06719 23.9614 7.96935 22.854 7.96935 21.4879V17.314C7.96935 16.631 7.42043 16.0773 6.7433 16.0773H1.22605C0.548923 16.0773 0 16.631 0 17.314V22.8792C0 23.5622 0.548923 24.1159 1.22605 24.1159H5.36399C6.71825 24.1159 7.81609 25.2233 7.81609 26.5894V30.7633C7.81609 31.4463 8.36501 32 9.04215 32H14.5594C15.2365 32 15.7854 31.4463 15.7854 30.7633V26.5894C15.7854 25.2233 16.8833 24.1159 18.2375 24.1159H22.3755C23.0526 24.1159 23.6015 23.5622 23.6015 22.8792V1.23672C23.6015 0.553696 23.0526 0 22.3755 0Z"
          fill="black"/>
    <path d="M32.0307 1.23672C32.0307 0.553696 32.5796 0 33.2567 0H38.7739C39.4511 0 40 0.553696 40 1.23672V22.8792C40 23.5622 39.4511 24.1159 38.7739 24.1159H34.636C33.2818 24.1159 32.1839 25.2233 32.1839 26.5894V30.7633C32.1839 31.4463 31.635 32 30.9579 32H25.4406C24.7635 32 24.2146 31.4463 24.2146 30.7633V25.1981C24.2146 24.5151 24.7635 23.9614 25.4406 23.9614H29.5785C30.9328 23.9614 32.0307 22.854 32.0307 21.4879V1.23672Z"
          fill="black"/>
</svg>
`,
      logo_hover: `<svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.3755 0H16.8582C16.1811 0 15.6322 0.553696 15.6322 1.23672V21.4879C15.6322 22.854 14.5343 23.9614 13.1801 23.9614H10.4215C9.06719 23.9614 7.96935 22.854 7.96935 21.4879V17.314C7.96935 16.631 7.42043 16.0773 6.7433 16.0773H1.22605C0.548923 16.0773 0 16.631 0 17.314V22.8792C0 23.5622 0.548923 24.1159 1.22605 24.1159H5.36399C6.71825 24.1159 7.81609 25.2233 7.81609 26.5894V30.7633C7.81609 31.4463 8.36501 32 9.04215 32H14.5594C15.2365 32 15.7854 31.4463 15.7854 30.7633V26.5894C15.7854 25.2233 16.8833 24.1159 18.2375 24.1159H22.3755C23.0526 24.1159 23.6015 23.5622 23.6015 22.8792V1.23672C23.6015 0.553696 23.0526 0 22.3755 0Z"
          fill="black"/>
    <path d="M32.0307 1.23672C32.0307 0.553696 32.5796 0 33.2567 0H38.7739C39.4511 0 40 0.553696 40 1.23672V22.8792C40 23.5622 39.4511 24.1159 38.7739 24.1159H34.636C33.2818 24.1159 32.1839 25.2233 32.1839 26.5894V30.7633C32.1839 31.4463 31.635 32 30.9579 32H25.4406C24.7635 32 24.2146 31.4463 24.2146 30.7633V25.1981C24.2146 24.5151 24.7635 23.9614 25.4406 23.9614H29.5785C30.9328 23.9614 32.0307 22.854 32.0307 21.4879V1.23672Z"
          fill="black"/>
</svg>
`,

      currentRouteName,
      slugify,
    };
  },
};
</script>
