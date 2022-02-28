<template>
<div class="gog-app bg-gray-100">
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo>
  <Header />
  <div class="body bg-gray-100">
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
import WalletConnectClient from "@walletconnect/client";

import { CLIENT_EVENTS } from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";



export default {
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

      const client = await WalletConnectClient.init({
        projectId: "c77630296e835e9f15911e4957965e64",
        relayUrl: "wss://relay.walletconnect.com",
        metadata: {
          name: "Jupiter Exchange",
          description: "Jupiter Exchange",
          url: "#",
          icons: ["https://walletconnect.com/walletconnect-logo.png"],
        },
      });

      client.on(
        CLIENT_EVENTS.pairing.proposal,
        async (proposal) => {
          // uri should be shared with the Wallet either through QR Code scanning or mobile deep linking
          const { uri } = proposal.signal.params;
          console.log(uri);
          QRCodeModal.open(uri, () => {
            console.log("EVENT", "QR Code Modal closed");
          });
          
        }
      );

      
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
