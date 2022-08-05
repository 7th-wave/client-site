import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import VueEasyLightbox from "vue-easy-lightbox";
import VueClipboard from 'vue3-clipboard';
import VueLazyload from '@jambonn/vue-lazyload'

// import { auth } from "../src/firebase/firebase";
import CarouselCard from 'vue-carousel-card'
import 'vue-carousel-card/styles/index.css'

import { DatePicker, TimePicker } from 'ant-design-vue';
//import 'ant-design-vue/dist/antd.css';

import "firebaseui/dist/firebaseui.css";

import store from "./store";


import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCoffee, faChild, faCircle, faArchive, faEnvelope, faWallet, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

library.add(
  faCoffee,
  faChild,
  faCircle,
  faArchive,
  faEnvelope,
  faTwitter,
  faWallet,
  faInstagram,
  faDiscord,
  faArrowUpRightFromSquare
)

const loadimage = require('./assets/images/loading_image.png')
const errorimage = require('./assets/images/loading_image.png')

createApp(App).use(router).use(VueEasyLightbox).use(store).use(DatePicker).use(TimePicker).use(VueClipboard).use(CarouselCard).component('font-awesome-icon', FontAwesomeIcon).use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1
}).mount("#app");

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch("authStore/getAdminAuth", user.uid);
//   } else {
//     store.dispatch("authStore/clearAuth");
//   }
// });
