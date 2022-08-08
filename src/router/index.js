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
    path: "/connect/:connect?",
    name: "Connect",
    component: Home,
  },
  {
    path: "/vault/create",
    name: "VaultsCreate",

    component: () => import("../views/client/VaultCreation.vue"),
  },
  {
    path: "/vault/create/step/2/:dbref",
    name: "VaultsCreateStep2",
    component: () => import("../views/client/VaultCreationStep_2.vue"),
  },
  {
    path: "/vault/create/step/3/:dbref",
    name: "VaultsCreateStep3",
    component: () => import("../views/client/VaultCreationStep_3.vue"),
  },
  {
    path: "/vault/create/step/4/:dbref",
    name: "VaultsCreateStep4",
    component: () => import("../views/client/VaultCreationStep_4.vue"),
  },
  {
    path: "/nft-create/:step?/:dbref?",
    name: "CreateNftadmin",

    component: () => import("../views/client/NftCreate.vue"),
  },
  {
    path: "/fractionalize",
    name: "Fractionalize",

    component: () => import("../views/client/FractionCreate.vue"),
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
    path: "/elements",
    name: "Elements",

    component: () => import("../views/frontend/Elements.vue"),
  },
  {
    path: "/contact",
    name: "Contact",

    component: () => import("../views/frontend/Contact.vue"),
  },
  {
    path: "/mnft/miami",
    name: "nft",
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
    path: "/mnft",
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
    path: "/team",
    name: "Team",
    component: () => import("../views/frontend/Team.vue"),
  },
  {
    path: "/Under-Construction",
    name: "UnderConstruction",
    component: () => import("../views/frontend/UnderConstruction.vue"),
  },
  {
    path: "/vault/:id",
    name: "Vault",
    component: () => import("../views/frontend/Vault.vue"),
  },
 

  //Client
  {
    path: "/vault/:id/view",
    name: "VaultView",
    component: () => import("../views/client/VaultView.vue"),
  },
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
    path: "/my-account",
    name: "MyAccount",
    component: () => import("../views/client/Myaccount.vue"),
    beforeEnter: clientGuard,
  },
  {
    path: "/my-vaults",
    name: "MyVault",
    component: () => import("../views/client/MyVaults.vue"),
    beforeEnter: clientGuard,
  },
  {
    path: "/purchase-history",
    name: "PurchasseHistory",
    component: () => import("../views/client/MyAllPurchasse.vue"),
    beforeEnter: clientGuard,
  },
  {
    path: "/my-fractions/:id/purchases",
    name: "PurchasseHistoryDetails",
    component: () => import("../views/client/MyPurchasse.vue"),
    beforeEnter: clientGuard,
  },
  {
    path: "/my-nfts",
    name: "My_collections",
    component: () => import("../views/client/Mycollections.vue"),
    beforeEnter: clientGuard,
  },
 
  {
    path: "/my-nft/:id/details",
    name: "CollectionDetails",
    component: () => import("../views/client/myNftPending.vue"),
  },
   {
    path: "/my-fractions",
    name: "My_fractions",
    component: () => import("../views/client/MyFractions.vue"),
  },
  {
    path: "/my-fractions/:id",
    name: "My_fractions_details",
    component: () => import("../views/client/NftfractionDetails.vue"),
  },
  {
    path: "/category/:category",
    name: "vault_category",
    component: () => import("../views/client/VaultCatgory.vue"),
    beforeEnter: clientGuard,
  },
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
  {
    path: "/user-portfolio/:id",
    name: "UserPortfolio",
    component: () => import("../views/client/UserPortfolio.vue"),
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
