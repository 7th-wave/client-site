<template>
  <div
    class="px-0 sm:px-0 font-inter flex-1 flex flex-col min-h-0 bg-white font-medium rounded-lg shadow-lg"
  >
    <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
      <nav class="flex-1 px-2 space-y-2.5" aria-label="Sidebar">
        <router-link
          :to="item.href"
          @click="closeMenu"
          v-for="item in getData"
          :key="item.name"
          :class="[
            currentRouteName === item.href.name ||
            currentRouteName === item.subname ||
            currentRouteName === item.subname1 ||
            currentRouteName === item.subname2
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-900 hover:bg-gray-100',
            'group flex items-center px-2 py-2 text-base font-medium rounded-md',
          ]"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </div>
    <div class="flex-shrink-0 flex bg-gray-100 p-4">
      <a href="#" class="flex-shrink-0 w-full group block">
        <div class="flex items-center">
          <div>
            <UserImage :src="avatar" :custom_height="8" />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-700">{{ fullName }}</p>
            <div class="flex items-center space-x-1">
              <p
                class="text-xs font-medium text-primary-500 hover:underline flex items-center space-x-2"
              >
                <span>{{blockchainAddress ? blockchainAddress.replace(blockchainAddress.substring(8,blockchainAddress.length - 3), "....") : 'N/A'}}</span>
                <span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.6341 3.66667V9C4.6341 9.73638 5.23106 10.3333 5.96744 10.3333H9.96744M4.6341 3.66667V2.33333C4.6341 1.59695 5.23106 1 5.96744 1H9.02463C9.20144 1 9.37101 1.07024 9.49603 1.19526L12.4388 4.13807C12.5639 4.2631 12.6341 4.43266 12.6341 4.60948V9C12.6341 9.73638 12.0372 10.3333 11.3008 10.3333H9.96744M4.6341 3.66667H3.96744C2.86287 3.66667 1.96744 4.5621 1.96744 5.66667V11.6667C1.96744 12.403 2.56439 13 3.30077 13H7.96744C9.07201 13 9.96744 12.1046 9.96744 11V10.3333"
                      stroke="#049AFF"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="flex flex-col items-start space-y-2 p-4">
     
      <a
        href="/"
        class="text-gray-600 font-medium text-base font-inter flex items-center space-x-4"
      >
        <div>
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 13L5 9M5 9L9 5M5 9L19 9M14 13V14C14 15.6569 12.6569 17 11 17H4C2.34315 17 1 15.6569 1 14V4C1 2.34315 2.34315 1 4 1H11C12.6569 1 14 2.34315 14 4V5"
              stroke="#9CA3AF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <span>Disconect</span></a
      >
    </div>
  </div>
</template>
<script>
// import {  LockClosedIcon  } from '@heroicons/vue/solid'
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { auth } from "../../firebase/firebase";
import UserImage from "./UserImage.vue";


export default {
  created() {
    //  this.$store.commit('user/changeType', "Admin")
    // alert(this.$store.state.user.user.type);
  },
  props: {
    userType: {
      type: String,
      default: "Client",
      required: true,
    },
  },
  components: {
    UserImage
},
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const fullName = computed(() => store.getters["user/getUsername"]);

    const email = computed(() => store.getters["user/getEmail"]);
    const blockchainAddress = computed(() => store.getters['user/getBlockchainAddress']);


    const avatar = computed(() => store.getters['user/getAvatar']);

    const Client = [
      {
        name: "My Account",
        href: { name: "MyAccount", params: { address: computed(() => store.getters['blockchain/getCurrentAddress']) } },
        subname: "",
        subname1: "",
        subname2: "",
      },
      {
        name: "My NFT",
        href: { name: "My_collections" },
        subname: "CollectionDetails",
        subname2: "CreateNftadmin",
      },
      
    ];
  const Buyer = [
    {
      name: "My Account",
      href: { name: "MyAccount", params: { address: computed(() => store.getters['blockchain/getCurrentAddress']) } },
      subname: "",
      subname1: "",
      subname2: "",
    },
    {
      name: "My Fractions",
      href: { name: "My_fractions" },
      subname: "My_fractions",
      subname1: "My_fractions_details",
      subname2: "PurchasseHistoryDetails",
    },
    {
      name: "My Purchase History",
      href: { name: "PurchasseHistory" },
      subname: "",
      subname1: "",
      subname2: "",
    },
  ];
  const Admin = [
    {
      name: "My Account",
      href: { name: "MyAccount", params: { address: computed(() => store.getters['blockchain/getCurrentAddress']) }, subname2: "" },
      subname: "",
      subname1: "",
      subname2: "",
    },
    {
      name: "Vault Categories",
      href: { name: "My_collections" },
      subname: "CollectionDetails",
      subname1: "Fractionalize",
      subname2: "",
    },
    {
      name: "Vaults",
      href: { name: "MyVault" },
      subname: "",
      subname1: "",
      subname2: "",
    },
    {
      name: "NFTs",
      href: { name: "My_fractions" },
      subname: "My_fractions",
      subname1: "My_fractions_details",
      subname2: "PurchasseHistoryDetails",
    },
    {
      name: "Clients",
      href: { name: "PurchasseHistory" },
      subname: "",
      subname1: "",
      subname2: "",
    },
    {
      name: "Emails",
      href: { name: "PurchasseHistory" },
      subname: "",
      subname1: "",
      subname2: "",
    },
    {
      name: "Team",
      href: { name: "PurchasseHistory" },
      subname: "",
      subname1: "",
      subname2: "",
    },
  ];

  const getData = computed(() => {
      return Client;
    });

    const openModal = async () => {
      await store.dispatch("NotificationStore/SET_MODAL_TITLE", {
        title: "Are you sure you want to log out?",
      });
      await store.dispatch("NotificationStore/SET_MODAL_MESSAGE", {
        message: "",
      });
      await store.dispatch("NotificationStore/SET_MODAL_BUTTONS", {
        buttons: [
          {
            name: "Cancel",
            btnStyle: "secondary",
            action: async function () {
              await store.dispatch("NotificationStore/SET_OPEN_MODAL");
            },
          },
          {
            name: "Log out",
            action: async function () {
              logout();
              await store.dispatch("NotificationStore/SET_OPEN_MODAL");
            },
          },
        ],
      });
      await store.dispatch("NotificationStore/SET_OPEN_MODAL");
    };

    const logout = async () => {
      if (props.type == "admin") {
        await auth.signOut();
        router.push("/admin/login");
      } else {
        await store.dispatch("user/logoutUser");
        router.push("/");
      }
    };

    onMounted(async () => {
      //await getAvatar();
    });

    return {
      Client,
      Buyer,
      Admin,
      route,
      blockchainAddress,
      logout,
      fullName,
      email,
      avatar,
      openModal,
      getData
    };
  },
};
</script>
