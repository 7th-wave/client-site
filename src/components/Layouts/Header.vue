<template>
  <div class="header">
    <header>
      <Popover class="relative " style="background-color: #374151">
        <div
          class="
            md:flex
            justify-between
            text-center
            items-center
            max-w-7xl
            mx-auto
            px-4
            py-6
            lg:py-8
            sm:px-6
            md:justify-start md:space-x-10
            lg:px-8
          "
        >
          <div
            class="flex md:justify-start justify-center lg:w-0 lg:flex-1 w-full"
          >
            <a href="/">
              <span class="sr-only">Workflow</span>
              <img
                class="h-8 w-auto sm:h-8"
                :src="hovered === key ? logo_hover : logo"
                @mouseover="hovered = key"
                @mouseleave="hovered = null"
                alt=""
              />
            </a>
          </div>

          <div
            class="
              md:flex
              items-center
              justify-end
              md:flex-1
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
            <div class="px-4 py-2">
              <span class="sr-only">Workflow</span>
              <a :href="'/artist/'+slugify(currentRouteName, {lower: true})">
                <img
                  class="h-8 w-auto m-auto sm:h-6 relative lg:top-0 top-4"
                  src="/images/bar.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </Popover>
    </header>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { Popover } from "@headlessui/vue";
import slugify from 'slugify';

import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  components: {
    Popover,
  },

  setup() {
    const hovered = ref(null);
    const route = useRoute();
    const store = useStore();

    const currentRouteName = computed(() => {
      if ("Artist,Artwork,Series".indexOf(route.name) !== -1) {
        return store.getters["collection/getName"];
      } else {
        return ""; 
      }
    });

    return {
      key: 0,
      hovered, // access a state in computed function
      logo: "/images/gog.svg",
      logo_hover: "/images/full_gog.svg",

      currentRouteName,
      slugify
    };
  },
};
</script>
