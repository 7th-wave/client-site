import firebase from "firebase";

const db = firebase.firestore();

// initial state
const state = () => ({
  title: "",
  artistName: "",
  artistBioTitle: "",
  lastName: "",
  artistBio: "",
  featuredImage: "",
  gallery: [],
});

// getters
const getters = {
  getName: (state) => {
    return state.artistBioTitle;
  },
};

// actions
const actions = {
  async loadCollection({ commit }, payload) {
    const data = await db.collection("collections").doc(payload).get();

    commit("setState", data.data());
  },
};

// mutations
const mutations = {
  setState(state, payload) {
    state.title = payload.title;
    state.artistName = payload.artistName;
    state.artistBioTitle = payload.artistBioTitle;
    state.lastName = payload.lastName;
    state.artistBio = payload.artistBio;
    state.featuredImage = payload.featuredImage;
    state.gallery = payload.gallery;
    //state = Object.assign({}, payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
