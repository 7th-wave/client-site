<template>
<div class="gog-app">

  <Header />
  <div class="body">
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
