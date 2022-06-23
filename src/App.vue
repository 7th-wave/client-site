<template>
  <div class="gog-app bg-white">
    <metainfo>
      <template v-slot:title="{ content }">{{
        content ? `${content} | SITE_NAME` : `SITE_NAME`
      }}</template>
    </metainfo>
    <Header @on:login="showLoginPopUp" @on:logout="logout" />
    <div
      class="body"
      :class="{
        'bg-white': getRouteName == 'Home' || getRouteName == 'LearnMore',
        'bg-gray-100': getRouteName != 'Home' && getRouteName != 'LearnMore',
      }"
    >
      <router-view @on:login="showLoginPopUp" :registered="registrationDone" />
      <Modal />
      <toast />
    </div>
    <Footer />
    <loading />
    <ConnectWallet
      :login_modal="showLogin"
      @on:close="closeLoginModal"
      @on:connect="setEvents($event)"
    />
  </div>
</template>

<script>
import Header from "@/components/Layouts/Header.vue";
import Footer from "@/components/Layouts/Footer.vue";
import Toast from "./components/Shared/Toast.vue";
import { onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Modal from "./components/Modals/Modal.vue";
import Loading from "./components/Shared/Loading.vue";

import ConnectWallet from "./components/Modals/ConnectWallet.vue";

export default {
  computed: {
    getRouteName() {
      return this.$route.name;
    },
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
    const chains = {
      "0x4": "rinkeby",
      "0x1": "mainnet",
    };

    const ph = document.createElement("script");
    console.log('------');
    console.log(process.env.VUE_APP_ENV);
    console.log(process.env.VUE_APP_NETWORK);
    console.log('------');
    if (process.env.VUE_APP_ENV == "staging") {
      ph.text =
        "(function(d,t,g,k){var ph=d.createElement(t),s=d.getElementsByTagName(t)[0],t=(new URLSearchParams(window.location.search)).get(k);t&&localStorage.setItem(k,t);t=localStorage.getItem(k);ph.type='text/javascript';ph.async=true;ph.defer=true;ph.charset='UTF-8';ph.src=g+'&v='+(new Date()).getTime();ph.src+=t?'&'+k+'='+t:'';s.parentNode.insertBefore(ph,s)})(document,'script','//7thw.co/?p=2173&ph_apikey=e73a582e7c6d9638bf49527e02b1af7d', 'ph_access_token');;";
    } 
    else {
      // ph.text =
      //   "(function(d,t,g,k){var ph=d.createElement(t),s=d.getElementsByTagName(t)[0],t=(new URLSearchParams(window.location.search)).get(k);t&&localStorage.setItem(k,t);t=localStorage.getItem(k);ph.type='text/javascript';ph.async=true;ph.defer=true;ph.charset='UTF-8';ph.src=g+'&v='+(new Date()).getTime();ph.src+=t?'&'+k+'='+t:'';s.parentNode.insertBefore(ph,s)})(document,'script','//7thw.co/?p=2066&ph_apikey=1e04c691e6fbcaacf9da49deac11dbd9','ph_access_token');";
    }
    document.body.appendChild(ph);

    const showLogin = ref(false);
    const registrationDone = ref(false);

    const store = useStore();
    const router = useRouter();

    const showLoginPopUp = () => {
      console.log("here");
      showLogin.value = true;
    };

    const closeLoginModal = () => {
      showLogin.value = false;
      
    };

    const logout = () => {
       registrationDone.value = false;
    }

    const setEvents = async (event) => {


      registrationDone.value = event.registered;
      

      if (event.provider == "metamask") {
        const chainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        console.log(chains[chainId]);

        checkChain(chains[chainId]);

        window.ethereum.on("chainChanged", (chainId) => {
          checkChain(chains[chainId]);
        });

        window.ethereum.on("accountsChanged", () => {
          store.dispatch("user/logoutUser");
          router.push("/");
        });
      } else if (event.provider == "walletconnect") {
        walletConnectSetup();
      }
    };

    const walletConnectSetup = () => {
      const connector = store.getters["blockchain/getWalletConnectInstance"];
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
    };

    const checkChain = (chain) => {
      if (chain !== process.env.VUE_APP_NETWORK) {
        store.dispatch("NotificationStore/SET_MODAL_TITLE", {
          title: "You are on the wrong network.",
        });
        store.dispatch("NotificationStore/SET_MODAL_MESSAGE", {
          message: `This site is intended to work in ${process.env.VUE_APP_NETWORK} chain. Please change your network and try again.`,
        });
        store.dispatch("NotificationStore/SET_MODAL_BUTTONS", {
          buttons: [
            { name: "OK", btnStyle: "primary", action: function () {} },
            
          ],
        });
        store.dispatch("NotificationStore/SET_OPEN_MODAL");
      }
    };

    onMounted(async () => {
      await store.dispatch('blockchain/initWallets');
      await store.dispatch('blockchain/getBlockChain');
      //const address = store.getters['blockchain/getCurrentAddress'];
      const provider = store.getters['blockchain/getCurrentProvider'];
      setEvents({provider: provider, registered: false});
    })

    return {
      showLoginPopUp,
      closeLoginModal,
      showLogin,
      setEvents,
      registrationDone,
      logout,
    };
  },
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
