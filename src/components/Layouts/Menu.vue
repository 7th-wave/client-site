<template>
  <div
    class="
      px-4
      sm:px-0
      font-inter
      flex-1 flex flex-col
      min-h-0
      bg-white
      font-medium
      rounded-lg
      shadow-lg
      w-m-1xl
    "
  
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
            <img
              class="inline-block h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-700">User Name</p>
            <div class="flex items-center space-x-1">
              <p class="text-xs font-medium text-primary-500 hover:underline flex items-center space-x-2">
                <span>0xE881...4567</span>
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
              <DocumentDuplicateIcon class="h-4 w-4" />
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="flex flex-col items-start space-y-2 p-4">
      <router-link
        :to="{ name: 'My_wallets' }"
        href="#"
        class="
          text-gray-900
          font-medium
          text-base
          font-inter
          flex
          items-center
          space-x-4
        "
      >
        <div>
          <svg
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_2909_22256" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.72266 4.125H18.241C19.3082 4.125 20.1758 4.94499 20.1758 5.95312V15.7031C20.1758 16.7113 19.3082 17.5312 18.241 17.5312H3.11328C1.76694 17.5312 0.675781 16.4401 0.675781 15.0938V2.90625C0.675781 1.55991 1.76694 0.46875 3.11328 0.46875H17.1289C18.1386 0.46875 18.957 1.28722 18.957 2.29688C18.957 2.63355 18.6843 2.90625 18.3477 2.90625H3.72266C3.38598 2.90625 3.11328 3.17895 3.11328 3.51562C3.11328 3.8523 3.38598 4.125 3.72266 4.125ZM15.3008 10.8281C15.3008 11.5011 15.8466 12.0469 16.5195 12.0469C17.1925 12.0469 17.7383 11.5011 17.7383 10.8281C17.7383 10.1551 17.1925 9.60938 16.5195 9.60938C15.8466 9.60938 15.3008 10.1551 15.3008 10.8281Z"
              />
            </mask>
            <path
              d="M18.241 2.125H3.72266V6.125H18.241V2.125ZM22.1758 5.95312C22.1758 3.73525 20.3046 2.125 18.241 2.125V6.125C18.2575 6.125 18.2514 6.13019 18.2349 6.11467C18.2263 6.10653 18.2117 6.08959 18.1985 6.06028C18.1846 6.02919 18.1758 5.99127 18.1758 5.95312H22.1758ZM22.1758 15.7031V5.95312H18.1758V15.7031H22.1758ZM18.241 19.5312C20.3046 19.5312 22.1758 17.921 22.1758 15.7031H18.1758C18.1758 15.665 18.1846 15.6271 18.1985 15.596C18.2117 15.5667 18.2263 15.5497 18.2349 15.5416C18.2514 15.5261 18.2575 15.5312 18.241 15.5312V19.5312ZM3.11328 19.5312H18.241V15.5312H3.11328V19.5312ZM-1.32422 15.0938C-1.32422 17.5447 0.662374 19.5312 3.11328 19.5312V15.5312C2.87151 15.5312 2.67578 15.3355 2.67578 15.0938H-1.32422ZM-1.32422 2.90625V15.0938H2.67578V2.90625H-1.32422ZM3.11328 -1.53125C0.662374 -1.53125 -1.32422 0.455343 -1.32422 2.90625H2.67578C2.67578 2.66448 2.87151 2.46875 3.11328 2.46875V-1.53125ZM17.1289 -1.53125H3.11328V2.46875H17.1289V-1.53125ZM20.957 2.29688C20.957 0.182648 19.2431 -1.53125 17.1289 -1.53125V2.46875C17.034 2.46875 16.957 2.39179 16.957 2.29688H20.957ZM18.3477 4.90625C19.7889 4.90625 20.957 3.73812 20.957 2.29688H16.957C16.957 1.52898 17.5798 0.90625 18.3477 0.90625V4.90625ZM3.72266 4.90625H18.3477V0.90625H3.72266V4.90625ZM5.11328 3.51562C5.11328 4.28351 4.49055 4.90625 3.72266 4.90625V0.90625C2.28141 0.90625 1.11328 2.07438 1.11328 3.51562H5.11328ZM3.72266 2.125C4.49055 2.125 5.11328 2.74774 5.11328 3.51562H1.11328C1.11328 4.95687 2.28141 6.125 3.72266 6.125V2.125ZM16.5195 10.0469C16.9511 10.0469 17.3008 10.3965 17.3008 10.8281H13.3008C13.3008 12.6057 14.742 14.0469 16.5195 14.0469V10.0469ZM15.7383 10.8281C15.7383 10.3965 16.0879 10.0469 16.5195 10.0469V14.0469C18.2971 14.0469 19.7383 12.6057 19.7383 10.8281H15.7383ZM16.5195 11.6094C16.0879 11.6094 15.7383 11.2597 15.7383 10.8281H19.7383C19.7383 9.05058 18.2971 7.60938 16.5195 7.60938V11.6094ZM17.3008 10.8281C17.3008 11.2597 16.9511 11.6094 16.5195 11.6094V7.60938C14.742 7.60938 13.3008 9.05058 13.3008 10.8281H17.3008Z"
              fill="#9CA3AF"
              mask="url(#path-1-inside-1_2909_22256)"
            />
          </svg>
        </div>
        <span> My Wallet</span></router-link
      >
      <a
        href="/"
        class="
          text-gray-600
          font-medium
          text-base
          font-inter
          flex
          items-center
          space-x-4
        "
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
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { auth, storage } from "../../firebase/firebase";

const Client = [
  {
    name: "My Account",
    href: { name: "MyAccount", params: { address: "gfdg" } },
    subname: "",
    subname1: "",
    subname2:''
  },
  {
    name: "My NFT",
    href: { name: "My_collections" },
    subname: "CollectionDetails",
    subname1: "Fractionalize",
    subname2: "",
  },
  { name: "My Vaults", href: { name: "MyVault" }, subname: "", subname1: "",subname2:'' },
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
const Buyer = [
  {
    name: "My Account",
    href: { name: "MyAccount", params: { address: "gfdg" } },
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
    href: { name: "MyAccount", params: { address: "gfdg" },subname2:'' },
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
  { name: "Vaults", href: { name: "MyVault" }, subname: "", subname1: "" ,subname2:''},
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
    // LockClosedIcon
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    getData() {
      if (this.$store.state.user.user.type === "Client") {
        return Client;
      } else if (this.$store.state.user.user.type === "Buyer") {
        return Buyer;
      }
      return Admin;
    },
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const fullName = computed(() => store.getters["user/getFullName"]);

    const email = computed(() => store.getters["user/getEmail"]);

    const avatar = ref("");

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

    const getAvatar = async () => {
      const image = store.getters["user/getAvatar"];

      if (image) {
        var storageRef = storage.ref();
        const url = await storageRef.child(image).getDownloadURL();
        avatar.value = url;
      }
    };

    onMounted(async () => {
      await getAvatar();
    });

    return {
      Client,
      Buyer,
      Admin,
      route,
      currentAddress: computed(
        () => store.getters["blockchain/getCurrentAddress"]
      ),
      logout,
      fullName,
      email,
      avatar,
      openModal,
    };
  },
};
</script>