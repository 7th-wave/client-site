import Fortmatic from "fortmatic";
import Portis from "@portis/web3";
import detectEthereumProvider from '@metamask/detect-provider';
import WalletConnectProvider from "@walletconnect/web3-provider";


import { get, set, del } from "idb-keyval";

// Works for web3 1.0 and pre-1.0 versions
import Web3 from "web3";

const state = {
  currentProvider: null,
  currentAddress: null,
  transaction: {},
  connected: false,
  portis: null,
  fortmatic: null,
  walletconnect: null,
  instance: () => ({
    web3: {}
  })
};

// getters
const getters = {
  getCurrentProvider: (state) => {
    return state.currentProvider;
  },
  getCurrentAddress: (state) => {
    return state.currentAddress;
  },
  getWalletConnectInstance: (state) => {
    return state.walletconnect;
  },
  getInstance: (state) => {
    return state.instance
  },
  isConnected: (state) => {
    return state.connected;
  },
};

// mutations
const mutations = {
  setProvider(state, payload) {
    console.log(payload);
    state.currentProvider = payload;
  },
  setCurrentAddress(state, payload) {
    state.currentAddress = payload;
  },
  setConnected(state, payload) {
    state.connected = payload;
  },
  setWalletConnect(state, payload) {
    state.walletconnect = payload;
  },
  setWallets(state, payload) {
    (state.fortmatic = payload.fortmatic), (state.portis = payload.portis);
  },
  setInstance(state, payload) {
    state.instance = payload
  },
};

const actions = {
  async initWallets({ commit }) {
    let fortmatic = null;
    let portis = null;
    fortmatic = new Fortmatic(
      process.env.VUE_APP_FORTMATIC_KEY,
      process.env.VUE_APP_NETWORK
    );
    portis = new Portis(
      process.env.VUE_APP_PORTIS_KEY,
      process.env.VUE_APP_NETWORK
    );

    commit("setWallets", { portis: portis, fortmatic: fortmatic });
  },

  async connected({ commit }) {
    let currentAddress = null;
    let web3;

    if (window.ethereum) {
      // Use MetaMask provider
     web3 = new Web3(window.ethereum);
      const addresses = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      currentAddress = addresses[0];
    } else {
      let isUserLoggedIn = await state.fortmatic.user.isLoggedIn();
      if (isUserLoggedIn) {
       web3 = new Web3(state.fortmatic.getProvider());
      } else {
        const portis = new Portis(
          process.env.VUE_APP_PORTIS_KEY,
          process.env.VUE_APP_NETWORK
        );
       web3 = new Web3(portis.provider);
      }

      const addresses = await web3.eth.getAccounts();
      currentAddress = addresses[0];
    }

    if (currentAddress) {
      commit("setConnected", true);
    } else {
      commit("setConnected", false);
    }
  },
  async getBlockChain({ commit, dispatch, state }) {
    const bString = await get("blockchain");
    let currentAddress = null;
    let web3;

    console.log(bString);
    let addresses = [];

    if (bString) {
      const data = JSON.parse(bString);
      if (data.provider == "fortmatic") {
        let isUserLoggedIn = await state.fortmatic.user.isLoggedIn();
        if (isUserLoggedIn) {
         web3 = new Web3(state.fortmatic.getProvider());
        } else {
          await state.fortmatic.user.login();
         web3 = new Web3(state.fortmatic.getProvider());
        }
        addresses = await web3.eth.getAccounts();
        currentAddress = addresses[0];
      } else if (data.provider == "portis") {
        const portis = new Portis(
          process.env.VUE_APP_PORTIS_KEY,
          process.env.VUE_APP_NETWORK
        );
       web3 = new Web3(portis.provider);

       addresses = await web3.eth.getAccounts();
        
      } else if (data.provider == 'walletconnect') {
        const connector = new WalletConnectProvider({
          infuraId: process.env.VUE_APP_INFURA_ID,
        });
  
        // Check if connection is already established
        await connector.enable();
  
        web3 = new Web3(connector);
        addresses = await web3.eth.getAccounts();
        currentAddress = addresses[0];
        
      } else if (window.ethereum) {
        // Use MetaMask provider
        web3 = new Web3(window.ethereum);
        addresses = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        currentAddress = addresses[0];
      }

      if (currentAddress == data.address) {
        commit("setCurrentAddress", data.address);
        commit("setProvider", data.provider);
        commit("setInstance", () => web3);
        dispatch(
          "user/getUser",
          { provider: data.provider, address: data.address },
          { root: true }
        );
      } else {
        await del("blockchain");
        commit("setProvider", null);
        commit("setCurrentAddress", null);
        dispatch("user/delete", {}, { root: true });
      }
    }
  },
  async new({ commit, dispatch, state }, payload) {
    let address = "";
    let mutate = false;
    let web3;

    if (payload.type == "fortmatic") {
      web3 = new Web3(state.fortmatic.getProvider());

      await state.fortmatic.configure({ primaryLoginOption: "phone" });
      let isUserLoggedIn = await state.fortmatic.user.isLoggedIn();
      if (!isUserLoggedIn) {
        await state.fortmatic.user.login();
      }

      address = await web3.eth.getAccounts();
      mutate = true;
    } else if (payload.type == "portis") {
      const portis = new Portis(
        process.env.VUE_APP_PORTIS_KEY,
        process.env.VUE_APP_NETWORK
      );
     web3 = new Web3(portis.provider);
      address = await web3.eth.getAccounts();
      mutate = true;
    } else if (payload.type == 'walletconnect') {
      const connector = new WalletConnectProvider({
        infuraId: process.env.VUE_APP_INFURA_ID,
      });

      // Check if connection is already established
      await connector.enable();

     web3 = new Web3(connector);
      address = await web3.eth.getAccounts();

      mutate = true;
      
    } else {
      const provider = await detectEthereumProvider();
      if (provider) {
        address = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        web3 = new Web3(window.ethereum);
        mutate = true;
      }
    }

    //debugger;
    if ( mutate ) {
      commit("setCurrentAddress", address[0]);
      commit("setProvider", payload.type);
      commit("setInstance", () => web3);


      const data = {
        provider: payload.type,
        address: address[0]
      };

      await set("blockchain", JSON.stringify(data));

      dispatch("user/getUser", data, { root: true });
    }
  },
  async delete({ commit, state }) {
    await del("blockchain");
    if (state.currentProvider == 'portis') {
      state.portis.logout();
    }
    commit("setProvider", null);
    commit("setCurrentAddress", null);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
