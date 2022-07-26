<template>
    <div>
    <footer class="bg-white" aria-labelledby="footerHeading">
      <h2 id="footerHeading" class="sr-only">Footer</h2>
      <div class="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-16 lg:px-8">
        
        <div class="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
          <div class="flex space-x-6 md:order-3">
            <a 
              v-for="item in footerNavigation.social" 
              :key="item.name" 
              :href="item.href" 
              target="_blank" 
              class="text-gray-400 hover:text-gray-500"
              rel="noopener noreferrer"
            >
              <span class="sr-only">{{ item.name }}</span>
              <font-awesome-icon :icon="item.icon" />
            </a>
          </div>
           <!--<div class="flex space-x-6 md:order-2">
            <a class="mt-8 text-base text-gray-400 md:mt-0 md:order-1" href="http://7thw.com" target="_blank" rel="noopener noreferrer">
            NFT DAPP by 7thw
            </a>
          </div>-->
          <p class="mt-8 md:mt-0 md:order-1">
            <a href="/" class="text-base text-gray-400">&copy; 2022 / &copy; CIRKOL COLLECTIVE </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
  <LoginModal :login_modal="login_modal" @on:close="login_modal = false" />
</template>


<script>
import { computed } from 'vue'
import { ref } from 'vue'

import { useStore } from 'vuex';
import LoginModal from '@/components/Modals/Login_Modal.vue'

const footerNavigation = {
  account: [
    { name: 'Login / Signup', href: '/my-account/sfd'},
    { name: 'Admin', href: '/my-account/sfd' },
    { name: 'Client', href: '/my-account/sfd' },
    { name: 'Buyer', href: '/my-account/sfd' },
 
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
   
  social: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/cirkol_',
      icon: "fa-brands fa-twitter" 
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/cirkol_/',
      icon: "fa-brands fa-instagram"
    },
    {
      name: 'Discord',
      href: 'https://discord.com/channels/987423455521701948/987423457316851727',
      icon: "fa-brands fa-discord"
    },
    
  ],
}


export default {
  methods:{
    ChangeUserRole(role){
      this.$store.commit('user/changeType', role)
    }
  },
  components: {
      LoginModal,
  },
  setup() {

    const store = useStore();
 
    const login = ref(false);
    const login_modal = ref(false);
    const newsletter_modal = ref(false);
    const currentAddress = computed(() => store.getters['blockchain/getCurrentAddress']);
    const user = computed(() => store.getters['user/getUser']);

    const openModal = async () => {
      await store.dispatch("NotificationStore/SET_MODAL_MESSAGE", { message: 'Thank you for subscribing to GOG Newsletter' });
      await store.dispatch("NotificationStore/SET_MODAL_TITLE", { title: 'Newsletter' });
      await store.dispatch("NotificationStore/SET_MODAL_BUTTONS", { buttons: [] });
      await store.dispatch("NotificationStore/SET_OPEN_MODAL");
    }

    return {
      footerNavigation,
      login_modal,
      login,
      newsletter_modal,
      currentAddress,
      user,
      openModal
    }
  },
}
</script>