 
<template>
  <div
    class="
      account
      sm:px-8 pr-4
      py-4
      lg:py-16
      relative
      bg-gray-100
      mx-auto
      font-inter 2xl:max-w-8xl w-full
    "
  >
    <div class="lg:hidden">
      <navbar :type="'customer'" />
    </div>
    <div class="py-0 sm:py-2 lg:pt-0 lg:pb-8 text-center">
      <h1 class="sm:text-4xl text-2xl font-normal">My Wallet</h1>
    </div>
    <div>
      <div class="flex items-start space-x-4 w-full">
        <div class="hidden lg:col-span-2 lg:block ">
          <Menu />
        </div>
        <div class=" w-full lg:mt-0 lg:col-span-5  rounded-lg flex lg:flex-row flex-col space-y-6 lg:space-y-0 items-start lg:space-x-4 ">
          <div
            class="
              p-6 lg:max-w-xs lg:max-h-80
              h-full
              bg-white
              group
              block
              w-full
              aspect-w-10 aspect-h-7
              focus-within:ring-2
              focus-within:ring-offset-2
              focus-within:ring-offset-gray-100
              focus-within:ring-primary-500
              overflow-hidden space-y-4 rounded-md shadow-lg
            "
          >
            <a @click.prevent="doMetaMaskLogin()">
              <img
                src="/images/wallet1.jpg"
                alt=""
                class="
                  object-cover
                  pointer-events-none
                  group-hover:opacity-75
                  w-full
                "
              />
            </a>
            <div class="flex cursor-pointer">
              <div class=" flex items-center space-x-1 m-auto">
                <span
                  class="text-primary-300 font-medium font-inter text-sm m-auto"
                  >0xE881...4567</span
                >
                <div class="">
                  <svg
                    width="13"
                    height="15"
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75913 3.95573V9.28906C3.75913 10.0254 4.35609 10.6224 5.09247 10.6224H9.09247M3.75913 3.95573V2.6224C3.75913 1.88602 4.35609 1.28906 5.09247 1.28906H8.14966C8.32647 1.28906 8.49604 1.3593 8.62106 1.48432L11.5639 4.42713C11.6889 4.55216 11.7591 4.72173 11.7591 4.89854V9.28906C11.7591 10.0254 11.1622 10.6224 10.4258 10.6224H9.09247M3.75913 3.95573H3.09247C1.9879 3.95573 1.09247 4.85116 1.09247 5.95573V11.9557C1.09247 12.6921 1.68942 13.2891 2.4258 13.2891H7.09247C8.19704 13.2891 9.09247 12.3936 9.09247 11.2891V10.6224"
                      stroke="#049AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
         <div class=" flex flex-col items-start space-y-2 w-full lg:col-span-2">
          <WalletConnectCard :open="true"/>
          <WalletConnectCard :open="false"/>
          <WalletConnectCard :open="true"/>
          <WalletConnectCard :open="false"/>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import Fortmatic from "fortmatic";
import Portis from "@portis/web3";
import WalletConnectCard from "@/components/cards/WalletConnectCard.vue";

export default {
  components: {
    Menu,
    Navbar,
    WalletConnectCard,
  },

  setup() {
    const fm = new Fortmatic("pk_test_74DE84F478732B84");
    const portis = new Portis(
      "a8b095a1-4da6-49ab-8073-9a8bddaf8a85",
      "rinkeby"
    );
    const store = useStore();
    const currentAddress = computed(
      () => store.getters["blockchain/getCurrentAddress"]
    );
    const currentProvider = computed(
      () => store.getters["blockchain/getCurrentProvider"]
    );

    const doFortmaticLogin = async () => {
      if (currentProvider.value !== "fortmatic") {
        return await store.dispatch("blockchain/new", { type: "fortmatic" });
      }
      return fm.user.deposit();
    };

    const doPortisLogin = async () => {
      if (currentProvider.value !== "portis") {
        return await store.dispatch("blockchain/new", { type: "portis" });
      }
      return portis.showPortis();
    };

    const doMetaMaskLogin = async () => {
      if (currentProvider.value !== "metamask") {
        return await store.dispatch("blockchain/new", { type: "metamask" });
      }
    };

    return {
      currentAddress,
      currentProvider,
      doFortmaticLogin,
      doPortisLogin,
      doMetaMaskLogin,
    };
  },
};
</script>
