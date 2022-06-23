import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import VueEasyLightbox from "vue-easy-lightbox";
import VueClipboard from 'vue3-clipboard';
// import { auth } from "../src/firebase/firebase";
import CarouselCard from 'vue-carousel-card'
import 'vue-carousel-card/styles/index.css'

import { DatePicker, TimePicker } from 'ant-design-vue';
//import 'ant-design-vue/dist/antd.css';

import "firebaseui/dist/firebaseui.css";

import store from "./store";


import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faChild, faCircle, faArchive, faEnvelope,faWallet } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(
  faCoffee,
  faChild,
  faCircle,
  faArchive,
  faEnvelope,
  faTwitter,
  faWallet,
  faInstagram,
)

import 'boxicons';




createApp(App).use(router).use(VueEasyLightbox).use(store).use(DatePicker).use(TimePicker).use(VueClipboard).use(CarouselCard).mount("#app");

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch("authStore/getAdminAuth", user.uid);
//   } else {
//     store.dispatch("authStore/clearAuth");
//   }
// });
