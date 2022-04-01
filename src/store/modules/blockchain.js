import Fortmatic from "fortmatic";
import Portis from "@portis/web3";
import detectEthereumProvider from '@metamask/detect-provider';
import WalletConnect from "@walletconnect/client";

import QRCodeModal from "@walletconnect/qrcode-modal";

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
  walletconnect: null
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
    return {
      fortmatic: state.fortmatic,
      portis: state.portis,
      metamask: window.ethereum,
    };
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

    if (window.ethereum) {
      // Use MetaMask provider
      window.web3 = new Web3(window.ethereum);
      const addresses = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      currentAddress = addresses[0];
    } else {
      let isUserLoggedIn = await state.fortmatic.user.isLoggedIn();
      if (isUserLoggedIn) {
        window.web3 = new Web3(state.fortmatic.getProvider());
      } else {
        const portis = new Portis(
          process.env.VUE_APP_PORTIS_KEY,
          process.env.VUE_APP_NETWORK
        );
        window.web3 = new Web3(portis.provider);
      }

      const addresses = await window.web3.eth.getAccounts();
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

    console.log(bString);
    let addresses = [];

    if (bString) {
      const data = JSON.parse(bString);
      if (data.provider == "fortmatic") {
        let isUserLoggedIn = await state.fortmatic.user.isLoggedIn();
        if (isUserLoggedIn) {
          window.web3 = new Web3(state.fortmatic.getProvider());
        } else {
          await state.fortmatic.user.login();
          window.web3 = new Web3(state.fortmatic.getProvider());
        }
        addresses = await window.web3.eth.getAccounts();
        currentAddress = addresses[0];
      } else if (data.provider == "portis") {
        const portis = new Portis(
          process.env.VUE_APP_PORTIS_KEY,
          process.env.VUE_APP_NETWORK
        );
        window.web3 = new Web3(portis.provider);
        
      } else if (window.ethereum) {
        // Use MetaMask provider
        window.web3 = new Web3(window.ethereum);
        addresses = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        currentAddress = addresses[0];
      }

      if (currentAddress == data.address) {
        commit("setCurrentAddress", data.address);
        commit("setProvider", data.provider);
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

    if (payload.type == "fortmatic") {
      window.web3 = new Web3(state.fortmatic.getProvider());

      await state.fortmatic.configure({ primaryLoginOption: "phone" });
      let isUserLoggedIn = await state.fortmatic.user.isLoggedIn();
      if (!isUserLoggedIn) {
        await state.fortmatic.user.login();
      }

      address = await window.web3.eth.getAccounts();
      mutate = true;
    } else if (payload.type == "portis") {
      const portis = new Portis(
        process.env.VUE_APP_PORTIS_KEY,
        process.env.VUE_APP_NETWORK
      );
      window.web3 = new Web3(portis.provider);
      address = await window.web3.eth.getAccounts();
      mutate = true;
    } else if (payload.type == 'walletconnect') {
      const connector = new WalletConnect({
        bridge: "https://bridge.walletconnect.org", // Required
        qrcodeModal: QRCodeModal,
      });

      // Check if connection is already established
      if (!connector.connected) {
        // create new session
        connector.createSession();
      }

      commit("setWalletConnect", connector);
      
    } else {
      const provider = await detectEthereumProvider();
      if (provider) {
        address = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        mutate = true;
      }
    }

    //debugger;
    if ( mutate ) {
      commit("setCurrentAddress", address[0]);
      commit("setProvider", payload.type);

      const data = {
        provider: payload.type,
        address: address[0],
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
