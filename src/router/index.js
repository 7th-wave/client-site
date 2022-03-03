import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/frontend/Home.vue";
import clientGuard from "../guards/ClientGuard";
// import { useStore } from "vuex";

// const store = useStore();

const routes = [
  // Frontend
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/fractionalize",
    name: "Fractionalize",

    component: () => import("../views/frontend/Fractionalize.vue"),
  },
  {
    path: "/claim",
    name: "Claim",

    component: () => import("../views/frontend/Claim.vue"),
  },
  {
    path: "/privacy",
    name: "Privacy",

    component: () => import("../views/frontend/Privacy.vue"),
  },
  {
    path: "/terms",
    name: "Terms",

    component: () => import("../views/frontend/Terms.vue"),
  },
  {
    path: "/swap",
    name: "Swap",

    component: () => import("../views/frontend/Swap.vue"),
  },
  {
    path: "/contact",
    name: "Contact",

    component: () => import("../views/frontend/Contact.vue"),
  },
  {
    path: "/artist/:ref",
    name: "Artist",
    component: () =>
      import(/* webpackChunkName: "artist" */ "../views/frontend/Artist.vue"),
  },
  {
    path: "/artwork/:collection/:ref",
    name: "Artwork",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../views/frontend/Artwork.vue"),
  },
  {
    path: "/series",
    name: "Series",
    component: () => import("../views/frontend/Series.vue"),
  },
  {
    path: "/client-page/:username",
    name: "ClientPage",
    component: () => import("../views/frontend/Client.vue"),
  },
  {
    path: "/explore",
    name: "Explore",
    component: () => import("../views/frontend/Explore.vue"),
  },
  {
    path: "/create-nft",
    name: "CreateNft",
    component: () => import("../views/frontend/CreateNft.vue"),
  },
  {
    path: "/learn-more",
    name: "LearnMore",
    component: () => import("../views/frontend/LearnMore.vue"),
  },
  {
    path: "/vault/:id",
    name: "Vault",
    component: () => import("../views/frontend/Vault.vue"),
  },

  //Client
 
  {
    path: "/register/:address",
    name: "ClientRegister",
    component: () => import("../views/client/Register.vue"),
  },
  {
    path: "/register/:address",
    name: "ClientRegister",
    component: () => import("../views/client/Register.vue"),
  },
  {
    path: "/my_history",
    name: "My_history",
    component: () => import("../views/client/MyFractions.vue"),
  },
  {
    path: "/my-account/:address",
    name: "MyAccount",
    component: () => import("../views/client/Myaccount.vue"),
    beforeEnter: clientGuard,
  },
  {
    path: "/my-collections",
    name: "My_collections",
    component: () => import("../views/client/Mycollections.vue"),
    beforeEnter: clientGuard,
  },
  {
    path: "/collection/:id/details",
    name: "CollectionDetails",
    component: () => import("../views/client/Artistdetail.vue"),
  },
   {
    path: "/my_fractions",
    name: "My_fractions",
    component: () => import("../views/client/MyNftFractions.vue"),
  },
  // {
  //   path: "/my-collection",
  //   name: "My_collection",
  //   component: () => import("../views/client/Mycollection.vue"),
  //   beforeEnter: clientGuard,
  // },
  {
    path: "/my-collections/artwork/:collection/:ref",
    name: "ClientArtwork",
    component: () => import("../views/client/Artwork.vue"),
    beforeEnter: clientGuard,
  },
  {
    path: "/my-wallets",
    name: "My_wallets",
    component: () => import("../views/client/Mywallets.vue"),
    beforeEnter: clientGuard,
  },
  {
    path: "/my-bids",
    name: "My_bids",
    component: () => import("../views/client/Mybids.vue"),
    beforeEnter: clientGuard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {

//   const adminAuth  = store.state.adminStore.auth.authAdmin;
//   const clientAuth  = store.state.adminStore.auth.clientAuth;

//   if (to.matched.some(record => record.meta.requiresAuth == "admin") && adminAuth) {
//     next()
//   } else if (to.matched.some(record => record.meta.requiresAuth == "client") && clientAuth){
//     next()
//   }else{
//       next('/')
//   }
// })
export default router;
