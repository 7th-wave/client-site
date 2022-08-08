import { set, del } from "idb-keyval";
import { db, getClientByBlockChain } from "../../firebase/firebase";
import { saveUser, updateUser } from "../../firebase/clients"
import { getUserByAddress } from "../../firebase/firebase";

// initial state
const state = () => ({
  user: {
    type:'Client',
    dbRef: null,
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
      dbRef: null,
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

  getUser: (state) => {
    return state.user;
  },
  getUsername: (state) => {
    return state.user.username;
  },
  getFullName: (state) => {
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
  async getUser({ dispatch }, payload) {
    dispatch("recoverUser", payload);
  },
  
  async recoverUser({ commit, dispatch }, payload) {
    try {
      const results = await getUserByAddress(payload.address);
      const user = results.doc;
      user.dbRef = results.doc.blockchainAddress;
      console.log('recover user->', user);
      commit("setUser", user);
    } catch ($e) {
      dispatch("saveUser", {address: payload.address, provider: payload.provider});
    }
    
  },
  async saveUser({ commit }, payload) {
    const clientRef = payload.address;   

    let user = {
      blockchainAddress: payload.address,
      provider: payload.provider
    };
    await saveUser(user);
    user.dbRef = clientRef;
    await set("user", JSON.stringify(user));
    commit("setUser", user);
  },

  async updateUser({ commit }, payload) {
    console.log('---');
    console.log(payload);
    console.log('---');
    const user = payload;
    await updateUser(user, user.dbRef);
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
