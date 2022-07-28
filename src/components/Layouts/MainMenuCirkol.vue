<template>
  <div
    :class="{ ' w-full': animate_menu, ' w-0': !animate_menu }"
    class="
      ease-in-out
      duration-300
      max-w-sm
      overflow-hidden
      fixed
      z-50
      right-0
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
      <div class="flex-1 flex flex-col pt-10 pb-10 overflow-y-auto">
        <nav class="mt-10 flex-1 px-2 space-y-1" aria-label="Sidebar">
          <router-link
            :to="{ name: item.href }"
            @click="closeMenu"
            v-for="item in navigation"
            :key="item.name"
            :class="[
              currentRouteName === item.href
                ? 'bg-gray-100 text-gray-600'
                : 'text-gray-700 hover:bg-white hover:text-black',
              'group flex items-center px-2 py-8 text-lg font-light text-5xl rounded-md uppercase',
            ]"
          >
            <span class="flex-1">
              {{ item.name }}
            </span>
          </router-link>
        </nav>
      </div>
      <div class="flex-shrink-0 p-4 space-y-4 border-t border-gray-300" v-if="blockchainAddress">
        <router-link
          :to="{ name: 'MyAccount', params: { address: blockchainAddress } }"
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
              hover:text-gray-700
            "
            >Disconnect</a
          >
        </div>
      </div>

      <div class="flex items-center space-x-2 p-4" v-else>
        <a
          href="javascript:void(0)"
          @click.prevent="login"
          class="
            cursor-pointer
            text-primary-500
            hover:text-white
            font-medium
            text-lg
            font-inter
          "
          >Connect</a
        >
      </div>
    </div>
    <div
      class="
        cursor-pointer
        absolute
        right-0
        top-0
        bg-white
        hover:bg-primary-500
        text-primary-500
        hover:text-white
      "
      @click="closeMenu"
    >
      <div class="flex p-4">
        <div class="m-auto"><cirkol-menu-close /></div>
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
  { name: "Lightpaper", icon: "", href: "https://lightpaper.com" },
  { name: "Roadmap", icon: "", href: "LearnMore" },
  { name: "Team", icon: "", href: "https://www.cirkol.com/#team" },
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
    };
  },
  methods: {
    closeMenu() {
      this.$emit("closeMenu");
    },
  },
};
</script>

<style scoped>
.userIcon {
  color: #9ca3af;
}
</style>

