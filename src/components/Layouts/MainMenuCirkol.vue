<template>
<div>
  <div
      class="
        cursor-pointer
        fixed
        right-0
        top-0
        bg-white
        hover:text-pink
        rounded-lg
        z-50
      "
      @click="toggleMenu"
    >
      <div class="flex p-4">
        <div class="m-auto"><cirkol-menu-close :state="animate_menu" /></div>
      </div>
    </div>
  <div
    :class="{ 'right-0': animate_menu, '-right-full': !animate_menu }"
    class="
      transition-all
      ease
      duration-500
      max-w-lg
      lg:max-w-2xl
      lg:w-m-2xl
      overflow-hidden
      fixed
      z-40
      top-0
      shadow
      bg-white
      h-screen
      rounded-bl-xl
    "
  >
    <div
      class="
        h-full
        col-span-4
        flex-1 flex flex-col
        min-h-0
        bg-white
        font-inter font-medium
      "
    >
    <div class="flex space-x-16 absolute top-8 left-10">
            <a 
              v-for="item in social" 
              :key="item.name" 
              :href="item.href" 
              target="_blank" 
              class="text-gray-700 hover:text-gray-500 border border-gray-700 flex items-center justify-center w-14 h-14"
              rel="noopener noreferrer"
            >
              <span class="sr-only">{{ item.name }}</span>
              <font-awesome-icon :icon="item.icon" size="xl" />
            </a>
          </div>
      <div class="flex-1 flex flex-col pt-10 pb-10 overflow-y-auto">
        <nav class="mt-10 flex-1 flex flex-col justify-center space-y-1" aria-label="Sidebar">
          <span v-for="item in navigation"
            :key="item.name">
          <router-link
            v-if="item.local"
            :to="{ name: item.href }"
            @click="closeMenu"
            
            :class="[
              currentRouteName === item.href
                ? 'bg-gray-100 text-gray-600'
                : 'text-gray-700 hover:bg-white hover:text-pink',
              'group flex items-center pl-10 py-8 text-lg font-light text-5xl rounded-md uppercase',
            ]"
          >
            <span class="flex-1">
              {{ item.name }}
            </span>
          </router-link>
          <a :href="item.href" :class="[
              currentRouteName === item.href
                ? 'bg-gray-100 text-gray-600'
                : 'text-gray-700 hover:bg-white hover:text-pink',
              'group flex items-center pl-10 py-8 text-lg font-light text-5xl rounded-md uppercase',
            ]" v-else> <span class="flex-1">
              {{ item.name }}
            </span></a>
          </span>
        </nav>
      </div>
      <div class="flex-shrink-0 p-10 space-y-8 border-t border-gray-300" v-if="blockchainAddress">
        <router-link
          :to="{ name: 'MyAccount' }"
          class="flex-shrink-0 w-full group block"
        >
          <span class="font-light text-5xl text-gray-600">ACCOUNT</span>
          <div class="flex items-center">
            <div>
              <div class="flex items-center space-x-1">
                <p
                  class="
                    text-3xl
                    font-light
                    text-pink
                    hover:underline
                  "
                >
                  {{
                    blockchainAddress
                      ? blockchainAddress.replace(
                          blockchainAddress.substring(
                            8,
                            blockchainAddress.length - 4
                          ),
                          "...."
                        )
                      : "N/A"
                  }}
                </p>
              </div>
            </div>
          </div>
        </router-link>
        <div class="group flex items-center">
          <a
            href="#"
            @click.prevent="logout"
            class="
              text-5xl
              uppercase
              font-light
              font-inter
              cursor-pointer
              text-gray-600
              hover:text-pink
            "
            >Disconnect</a
          >
        </div>
      </div>

      <div class="flex items-center p-10 space-y-4 border-t border-gray-300" v-else>
        <a
          href="javascript:void(0)"
          @click.prevent="login"
          class="
            text-5xl
            uppercase
            font-light
            cursor-pointer
            text-primary-500
            hover:text-pink
            font-light
            text-lg
            font-inter
          "
          >Connect</a
        >
      </div>
    </div>
    
  </div>
</div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { storage } from "../../firebase/firebase";
import CirkolMenuClose from "../Icons/CirkolMenuClose.vue";

const navigation = [
  { name: "Join", icon: "", href: "/" },
  { name: "Lightpaper", icon: "", href: "https://www.cirkol.com/#lightpaper" },
  { name: "Roadmap", icon: "", href: "https://www.cirkol.com/#roadmap" },
  { name: "Team", icon: "", href: "https://www.cirkol.com/#team" },
];

const social = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/cirkol_',
      icon: "fa-brands fa-twitter fa-2xl" 
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/cirkol_/',
      icon: "fa-brands fa-instagram fa-2xl"
    },
    {
      name: 'Discord',
      href: 'https://discord.com/channels/987423455521701948/987423457316851727',
      icon: "fa-brands fa-discord fa-2xl"
    },
    
  ];

export default {
  props: {
    animate_menu: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  components: {
    //ChartSquareBarIcon,
    CirkolMenuClose,
  },

  emits: ["on:login"],
  CirkolMenuClose,
  setup(props, { emit }) {
    const store = useStore();

    const blockchainAddress = computed(
      () => store.getters["user/getBlockchainAddress"]
    );
    const user = computed(() => store.getters["user/getUser"]);
    const avatar = ref();

    const login = () => {
      emit("on:login");
    };

    const logout = () => {
      emit("on:logout");
    };

    const getAvatar = async () => {
      const image = store.getters["user/getAvatar"];

      if (image) {
        var storageRef = storage.ref();
        const url = await storageRef.child(image).getDownloadURL();
        avatar.value = url;
      }
    };

    return {
      navigation,
      login,
      logout,
      blockchainAddress,
      getAvatar,
      avatar,
      user,
      social
    };
  },
  methods: {
    toggleMenu() {
      this.$emit("toggleMenu");
    },
  },
};
</script>

<style scoped>
.userIcon {
  color: #9ca3af;
}
</style>

