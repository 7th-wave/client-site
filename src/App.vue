<template>
<div class="gog-app bg-gray-100">
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo>
  <Header />
  <div class="body " :class="{'bg-white':getRouteName == 'Home','bg-gray-100':getRouteName != 'Home'}">
    <router-view />
    <Modal />
    <toast />
  </div>
  <Footer />
  <loading />
</div> 
</template>

<script>
import Header from "@/components/Layouts/Header.vue";
import Footer from "@/components/Layouts/Footer.vue";
import Toast from "./components/Shared/Toast.vue";
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Modal from './components/Modals/Modal.vue';
import Loading from './components/Shared/Loading.vue';
import WalletConnect from "@walletconnect/client";

import QRCodeModal from "@walletconnect/qrcode-modal";



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
  },
  setup() {
    
    const store = useStore();
    const router = useRouter();
 
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

      const connector = new WalletConnect({
        bridge: "https://bridge.walletconnect.org", // Required
        qrcodeModal: QRCodeModal,
      });

      // Check if connection is already established
      if (!connector.connected) {
        // create new session
        //connector.createSession();
      }

      
    })
    
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
