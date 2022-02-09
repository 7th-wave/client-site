import { db } from "@/firebase/firebase";

// initial state
const state = () => ({
  auth: baseAuth,
});

const baseAuth = {
  adminAuth: "",
  clientAuth: "",
};

// getters
const getters = {};

// actions
const actions = {
  async getAdminAuth({ commit }, payload) {
    commit("clearAuth");

    db.collection("admin")
      .where("firebaseUser", "==", payload)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          commit("getAdminAuth", doc.data.data());
        });
      });
  },
  // async getClientAuth({ commit, state }) {
  //   commit("clearAuth");
  //   const data = state.blockchain.currentAddress;

  //   commit("getAuction", data);
  // },
};

// mutations
const mutations = {
  getAdminAuth(state, payload) {
    state.auth = payload;
    //state = Object.assign({}, payload);
  },
  clearAuth(state) {
    state.auth = baseAuth;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
