import { createStore, createLogger } from "vuex";
import admin from "./modules/admin";
import blockchain from "./modules/blockchain";
import user from "./modules/user";
import collection from "./modules/collection";
import auctionStore from "./modules/auctionStore";
import NotificationStore from "./modules/NotificationStore";
import authStore from "./modules/authStore";
import bidStore from "./modules/bidStore";
import offerStore from "./modules/offerStore";
import saleStore from "./modules/saleStore";


const debug = process.env.NODE_ENV !== "production";

/* const checkEthereumAccounts = (store) => {
  window.ethereum.on('accountsChanged', (accounts) => {
      // Handle the new accounts, or lack thereof.
      // "accounts" will always be an array, but it can be empty.
      console.log(accounts);
  });
};

const checkDisconnect = (store) => {
  window.ethereum.on('disconnect', () => {
    console.log(store)
  });
};

const plugins = [
  checkEthereumAccounts(),
  checkDisconnect(),
]; */

export default createStore({
  modules: {
    admin,
    blockchain,
    user,
    NotificationStore,
    auctionStore,
    collection,
    authStore,
    bidStore,
    offerStore,
    saleStore
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
