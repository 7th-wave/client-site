<template>
  <div
  :class="{' w-full':animate_menu,' w-0':!animate_menu}"
    class="
      ease-in-out duration-300
      grid grid-cols-5
      max-w-sm overflow-hidden
      absolute
      z-50
      right-0
      top-0
      shadow
      bg-white
      h-full
    "
    style="max-height: 636px"
  >
    <div
      class="
        col-span-4
        flex-1 flex flex-col
        min-h-0
        bg-white
        font-inter font-medium
      "
    >
      <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
          <logo-small />
        </div>
        <nav class="mt-5 flex-1 px-2 space-y-1" aria-label="Sidebar">
          <router-link
            :to="{name: item.href}"
            @click="closeMenu"
            v-for="item in navigation"
            :key="item.name"
            :class="[
            currentRouteName === item.href 
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-100',
              'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
            ]"
          >
            <component
              :is="item.icon"
              class="mr-3 flex-shrink-0 h-6 w-6 text-primary-500"
              aria-hidden="true"
            />
            <span class="flex-1">
              {{ item.name }}
            </span>
          </router-link>
        </nav>
      </div>
      <div class="flex-shrink-0 flex bg-gray-100 p-4" v-if="blockchainAddress">
        <router-link :to="{name:'MyAccount',params:{address:blockchainAddress}}"  class="flex-shrink-0 w-full group block">
          <div class="flex items-center">
            <div>
              <img
                class="inline-block h-9 w-9 rounded-full"
                :src="avatar"
                alt=""
              />
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-700">{{ user.username }}</p>
              <div class="flex items-center space-x-1">
                <p class="text-xs font-medium text-primary-500 hover:underline">
                  {{blockchainAddress ? blockchainAddress.replace(blockchainAddress.substring(8,blockchainAddress.length - 3), "....") : 'N/A'}}
                </p>
                <DocumentDuplicateIcon class="h-4 w-4" />
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="flex flex-col items-start space-y-2 p-4" v-if="blockchainAddress">
        <router-link :to="{name:'My_collections'}" class="text-gray-900 font-medium text-base font-inter"
          >My Assets</router-link
        >
        <a href="#" @click.prevent="logout" class="text-gray-600 font-medium text-base font-inter"
          >Disconect</a
        >
      </div>
       <div class="flex  items-center space-x-2 p-4 border-t bg-gray-50" v-else >
        
           <UserIcon  class=" w-6 h-5  userIcon"/>
       
        <a href="javascript:void(0)" @click.prevent="login" class="text-gray-900 font-medium text-base font-inter"
          >Login</a
        >
      </div>
    </div>
    <div class="bg-secondary-500">
      <div
        class="flex cursor-pointer p-4 text-white hover:text-black"
        @click="closeMenu"
      >
        <div class="m-auto"><XIcon class="w-6 h-6" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  // LightBulbIcon,
  ViewGridIcon,
  // SearchIcon,
  // CubeIcon,
  DocumentDuplicateIcon,
  XIcon,
  ChartSquareBarIcon,
  UserIcon,
  BookOpenIcon,
  MailIcon,
} from "@heroicons/vue/outline";
  import LogoSmall from './LogoSmall.vue';
import { computed, ref } from '@vue/reactivity';
import { useStore } from 'vuex';
import { storage } from "../../firebase/firebase";

const navigation = [
  { name: "Buy Fractions", icon: ChartSquareBarIcon, href: "Explore" },
  { name: "Fractionalize", icon: ViewGridIcon, href: "Fractionalize" },
  { name: "Learn More", icon: BookOpenIcon, href: "LearnMore" },
  { name: "Contact Us", icon: MailIcon, href: "Contact" },
];

export default {
  props: {
    animate_menu: {
      type: Boolean,
      default: false,
    },
    
   
  },
  computed:{
    currentRouteName() {
        return this.$route.name;
    }
  },
  components: {
    DocumentDuplicateIcon,
    XIcon,
    UserIcon,
    ChartSquareBarIcon,
    LogoSmall,
    BookOpenIcon
  },

  emits: ['on:login'],    
  setup(props, {emit}) {

    const store = useStore();

    const blockchainAddress = computed(() => store.getters['user/getBlockchainAddress']);
    const user = computed(() => store.getters['user/getUser']);
    const avatar = ref();

    const login = () => {
      
      emit('on:login');

    }

    const logout = () => {
      emit('on:logout');
    }

    const getAvatar = async () => 
    {
        const image = store.getters['user/getAvatar'];

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
      user
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
    color:#9CA3AF;
  }
</style>

