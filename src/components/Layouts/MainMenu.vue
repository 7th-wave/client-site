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
      h-screen
      rounded-bl-xl
    "
   
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
      <div class="flex-1 flex flex-col pt-10 pb-10 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
          <logo-small />
        </div>
        <nav class="mt-10 flex-1 px-2 space-y-1" aria-label="Sidebar">
          <router-link
            :to="{name: item.href}"
            @click="closeMenu"
            v-for="item in navigation"
            :key="item.name"
            :class="[
            currentRouteName === item.href 
                ? 'bg-gray-100 text-gray-900'
                : 'text-primary-500 hover:bg-white hover:text-black',
              'group flex items-center px-2 py-2 text-lg font-medium rounded-md',
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
      <div class="flex-shrink-0 flex bg-gray-800 p-4" v-if="blockchainAddress">
        <router-link :to="{name:'MyAccount',params:{address:blockchainAddress}}"  class="flex-shrink-0 w-full group block">
          <div class="flex items-center">
            <div>
              <UserImage :src="avatar" :custom_height="8" />
              
            </div>
            <div class="ml-3">
              <p class="text-lg font-medium text-gray-700">{{ user.username }}</p>
              <div class="flex items-center space-x-1">
                <p class="text-lg font-medium text-primary-500 hover:text-white">
                  {{blockchainAddress ? blockchainAddress.replace(blockchainAddress.substring(8,blockchainAddress.length - 4), "....") : 'N/A'}}
                </p>
                
            
               
              </div>
            </div>
          </div>
        </router-link>
      </div>

     

    
        

      <div class="flex flex-col items-start space-y-6 p-4 pt-6 pb-6 bg-gray-900" v-if="blockchainAddress">
        <div class="group flex items-center"><box-icon name="diamond" color="white" class="mr-3" />
          <router-link :to="{name:'My_collections'}" class=" font-medium text-lg font-inter cursor-pointer text-primary-500 hover:text-white"
            >My Membership</router-link
          >
        </div>
        <div class="group flex items-center"><box-icon name="wallet" color="white" class="mr-3" />  
          <a href="#" @click.prevent="logout" class="font-medium text-lg font-inter cursor-pointer text-primary-500 hover:text-white"
            >Disconnect</a
          >
        </div>  
      </div>
       <div class="flex  items-center space-x-2 p-4  bg-gray-800" v-else >
        
           <box-icon name="wallet" color="white" />
       
        <a href="javascript:void(0)" @click.prevent="login" class="cursor-pointer text-primary-500 hover:text-white font-medium text-lg font-inter"
          >Connect Wallet</a
        >
      </div>
    </div>
    <div class="cursor-pointer bg-white hover:bg-primary-500 text-primary-500 hover:text-white" @click="closeMenu" >
      
      <div
        class="flex p-4"
        
      >
        <div class="m-auto mt-5"><XIcon class="w-8 h-8" /></div>
      </div>
    </div>
  </div>
</template>

<script>


import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

import {
  // LightBulbIcon,
  ViewGridIcon,
  // SearchIcon,
  // CubeIcon,
  DocumentDuplicateIcon,
  XIcon,
  //ChartSquareBarIcon,
  UserIcon,
  BookOpenIcon,
  //MailIcon,

} from "@heroicons/vue/outline";
  import LogoSmall from './LogoSmall.vue';
import { computed, ref } from '@vue/reactivity';
import { useStore } from 'vuex';
import { storage } from "../../firebase/firebase";
import UserImage from './UserImage.vue';

const navigation = [
  { name: "Join Club", icon: ViewGridIcon, href: "nft" },
  // { name: "Reservation", icon: ViewGridIcon, href: "Fractionalize" },
  // { name: "Learn More", icon: BookOpenIcon, href: "LearnMore" },
  // { name: "Contact Us", icon: MailIcon, href: "Contact" },
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
    //ChartSquareBarIcon,
    LogoSmall,
    BookOpenIcon,
    UserImage,
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText,

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

