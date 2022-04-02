import { get, set, del } from "idb-keyval";
import { db, getClientByBlockChain, saveUser } from "../../firebase/firebase";

// initial state
const state = () => ({
  user: {
    type:'Client',
    dbRef: "",
    username: "",
    about: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    newsletter_push: false,
    email_push: false,
    sms_push: false,
    avatar: null,
    blockchainAddress: null,
    provider: null,
    hasSetAllowance: false,
    nfts: [],
    offers: [],
    bids: []
  },
});

const getDefaultState = () => {
  return {
    user: {
      dbRef: "",
      username: "",
      about: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      comments: false,
      candidates: false,
      smsEverything: false,
      smsSameEmail: false,
      smsNotifications: false,
      avatar: null,
      blockchainAddress: null,
      provider: null,
      hasSetAllowance: false,
      nfts: [],
      offers: [],
      bids: []
    },
  };
};

// getters
const getters = {
  getMetamask: (state) => {
    return state.user.metamask;
  },
  getFortmatic: (state) => {
    return state.user.fortmatic;
  },
  getPortis: (state) => {
    return state.user.portis;
  },
  getUser: (state) => {
    return state.user;
  },
  getFullName: (state) => {
    console.log(state);
    return state.user.firstName + " " + state.user.lastName;
  },
  getAvatar: (state) => {
    return state.user.avatar;
  },
  getEmail: (state) => {
    return state.user.email;
  },
  getBids: (state) => {
    return state.user.bids
  },
  geOffers: (state) => {
    return state.user.offers
  },
  getBlockchainAddress: (state) => {
    return state.user.blockchainAddress;
  },
};

// actions
const actions = {
  async getUser({ commit, dispatch }, payload) {
    const user = await get("user");
    if (user) {
      commit("setUser", JSON.parse(user));
    } else {
      if (payload.provider) {
        dispatch("recoverUser", payload);
      }
      
    }
  },
  
  async recoverUser({ commit }, payload) {
    const results = await getClientByBlockChain(payload.address);
    console.log(payload.address);
    console.log(results);
    if (results.dbRef) {
      const user = results.data;
      user.dbRef = results.dbRef;
      console.log('recover user->', user);
      await set("user", JSON.stringify(user));
      commit("setUser", user);
    }
  },
  async saveUser({ commit }, payload) {
    const clientRef = payload.username;
    //await db.collection("clients").doc(clientRef).set(payload);
    await saveUser(payload);

    let user = payload;
    user.dbRef = clientRef;
    await set("user", JSON.stringify(user));
    commit("setUser", user);
  },
  async addNft({commit}, payload) {
    const results = await getClientByBlockChain(payload.address);
    console.log(results);
    if (results.state) {
      const user = results.data;
      user.dbRef = results.dbRef;
      console.log(user);
      const nfts = user.nfts;
      nfts.push(payload.nft);

      await db.collection("clients").doc(user.dbRef).update({nfts: nfts});

      commit('updateNfts', nfts);
    }
  },
  async logoutUser({ commit, dispatch }) {
    await del("user");
    commit("resetState");
    //block chain action
    dispatch("blockchain/delete", {}, {root: true});
  },
  async delete({ commit }) {
    await del("user");
    commit("resetState");
  },
  async setAllowance({commit}, payload) {
    await db.collection("clients").doc(payload.client).update({
      hasSetAllowance: true
    });

    commit("setAllwoance");
  },
  async newOffer({commit, state}, payload) {
    

    let offers = state.user.offers || [];
    offers.push(payload.offer);

    await db
    .collection("clients")
    .doc(state.user.dbRef)
    .update({ offers: offers });


    commit('updateOffers', offers);

  },

  async newPurchase({commit, state}, payload) {
    

    let nfts = state.user.nfts || [];
    nfts.push(payload.nft);

    await db
    .collection("clients")
    .doc(state.user.dbRef)
    .update({ nfts: nfts });


    commit('updateNfts', nfts);

  }
};

// mutations
const mutations = {
  changeType(state, payload) {
    state.user.type = payload;
  },
  setUser(state, payload) {
    state.user = payload;
  },
  updateNfts(state, payload) {
    state.user.nfts = payload;
  },
  resetState(state) {
    Object.assign(state, getDefaultState());
  },
  setAllwoance(state) {
    state.user.hasSetAllowance = true;
  },
  updateOffers(state, payload) {
    state.user.offers = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
