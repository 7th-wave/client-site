<template>
<div class="gog-app bg-gray-100">
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo>
  <Header @on:login="showLoginPopUp" />
  <div class="body " :class="{'bg-white':getRouteName == 'Home' || getRouteName == 'LearnMore','bg-gray-100':getRouteName != 'Home' && getRouteName != 'LearnMore'}">
    <router-view />
    <Modal />
    <toast />
  </div>
  <Footer />
  <loading />
  <ConnectWallet
		
		:login_modal="showLogin"
		@on:close="closeLoginModal"
    @on:walletconnect="walletConnectSetup"
	/>
</div> 
</template>

<script>
import Header from "@/components/Layouts/Header.vue";
import Footer from "@/components/Layouts/Footer.vue";
import Toast from "./components/Shared/Toast.vue";
import { onMounted, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Modal from './components/Modals/Modal.vue';
import Loading from './components/Shared/Loading.vue';

import ConnectWallet from './components/Modals/ConnectWallet.vue';



export default {
  computed:{
    getRouteName(){
      return this.$route.name;
    }
  },
  components: {
    Header,
    Footer,
    Toast,
    Modal,
    Loading,
    ConnectWallet,
  },
  setup() {

    const ph = document.createElement("script");
    if (process.env.VUE_ENV == 'staging') {
       ph.text = "(function(d,t,g,k){var ph=d.createElement(t),s=d.getElementsByTagName(t)[0],t=(new URLSearchParams(window.location.search)).get(k);t&&localStorage.setItem(k,t);t=localStorage.getItem(k);ph.type='text/javascript';ph.async=true;ph.defer=true;ph.charset='UTF-8';ph.src=g+'&v='+(new Date()).getTime();ph.src+=t?'&'+k+'='+t:'';s.parentNode.insertBefore(ph,s)})(document,'script','//7thw.co/?p=2032&ph_apikey=6a1b42cf34c38e321353e1d24c514600','ph_access_token');"
               
    } else {
        ph.text = "(function(d,t,g,k){var ph=d.createElement(t),s=d.getElementsByTagName(t)[0],t=(new URLSearchParams(window.location.search)).get(k);t&&localStorage.setItem(k,t);t=localStorage.getItem(k);ph.type='text/javascript';ph.async=true;ph.defer=true;ph.charset='UTF-8';ph.src=g+'&v='+(new Date()).getTime();ph.src+=t?'&'+k+'='+t:'';s.parentNode.insertBefore(ph,s)})(document,'script','//7thw.co/?p=2066&ph_apikey=1e04c691e6fbcaacf9da49deac11dbd9','ph_access_token');"
    }
    document.body.appendChild(ph);

    const showLogin = ref(false);
    
    const store = useStore();
    const router = useRouter();

    const showLoginPopUp = () => {
      showLogin.value = true;
    }

    const closeLoginModal = () => {
      showLogin.value = false;
    }
 
    onMounted(async () => {

      await store.dispatch('blockchain/initWallets');
      await store.dispatch('blockchain/getBlockChain');
      //const address = store.getters['blockchain/getCurrentAddress'];
      const provider = store.getters['blockchain/getCurrentProvider'];
      

      if (provider == 'metamask') {

        window.ethereum.on('accountsChanged', () => {
          store.dispatch('user/logoutUser');
          router.push("/");
        });

      }

      

      
      
    });

    const walletConnectSetup = () => {
      const connector = store.getters['blockchain/getWalletConnectInstance'];
      connector.on("session_update", (error, payload) => {
        if (error) {
          throw error;
        }

        // Get updated accounts and chainId
        const { accounts, chainId } = payload.params[0];
        console.log(accounts);
        console.log(chainId);
      });

      connector.on("disconnect", (error, payload) => {
        if (error) {
          throw error;
        }

        console.log(payload);
      });
    }

    return {
      showLoginPopUp,
      closeLoginModal,
      showLogin,
      walletConnectSetup
    }
    
  }

  
};
</script>

<style scoped>
.body {
  min-height: calc(100vh - 400px);
  position: relative;
}
.gog-app {
  position: relative;
}
</style>
