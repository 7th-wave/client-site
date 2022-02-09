import {
  SET_MESSAGE,
  SET_SNACKBAR_FALSE,
  SET_OPEN_MODAL,
  SET_MODAL_MESSAGE,
  SET_MODAL_TITLE,
  SET_MODAL_BUTTONS,
  TOGGLE_LOADING,
  LOADING_TEXT,
} from "@/store/types/NotificationType";

const state = () => ({
  snackbarShow: false,
  message: "",
  description: "",
  type: "success",
  openModal: false,
  toggleLoading: false,
  loadingText: "",
  title: "",
  buttons: [
    { name: "Cancel", btnStyle: "secondary", action: function () {} },
    { name: "Save", action: function () {} },
  ],
});

const mutations = {
  [SET_MESSAGE](state, payload) {
    state.snackbarShow = true;
    state.message = payload.message;
    state.type = payload.type ? payload.type : "warnig";
    state.description = payload.description ? payload.description : "";
  },
  [SET_SNACKBAR_FALSE](state) {
    state.snackbarShow = false;
  },
  [SET_OPEN_MODAL](state) {
    state.openModal = !state.openModal;
  },
  [TOGGLE_LOADING](state) {
    state.loadingText = "";
    state.toggleLoading = !state.toggleLoading;
  },
  [LOADING_TEXT](state, payload) {
    console.log("payload", payload);
    state.loadingText = "Do not close your browser or reload.";
  },
  [SET_MODAL_MESSAGE](state, payload) {
    state.message = payload.message;
  },
  [SET_MODAL_TITLE](state, payload) {
    state.title = payload.title;
  },
  [SET_MODAL_BUTTONS](state, payload) {
    state.buttons = payload.buttons;
  },
};

const getters = {
  snackbarShow: (state) => {
    return state.snackbarShow;
  },
  snackbarMessage: (state) => {
    return state.message;
  },
  openModal: (state) => {
    return state.openModal;
  },
  toggleLoading: (state) => {
    return state.toggleLoading;
  },
  loadingText: (state) => {
    return state.loadingText;
  },
  message: (state) => {
    return state.message;
  },
  title: (state) => {
    return state.title;
  },
};

const actions = {
  async [SET_MESSAGE]({ commit }, payload) {
    commit(SET_MESSAGE, payload);
  },
  async [SET_SNACKBAR_FALSE]({ commit }) {
    commit(SET_SNACKBAR_FALSE);
  },
  async [SET_OPEN_MODAL]({ commit }) {
    commit(SET_OPEN_MODAL);
  },
  async [TOGGLE_LOADING]({ commit }) {
    commit(TOGGLE_LOADING);
  },
  async [LOADING_TEXT]({ commit }) {
    commit(LOADING_TEXT);
  },
  async [SET_MODAL_TITLE]({ commit }, payload) {
    commit(SET_MODAL_TITLE, payload);
  },
  async [SET_MODAL_MESSAGE]({ commit }, payload) {
    commit(SET_MODAL_MESSAGE, payload);
  },
  async [SET_MODAL_BUTTONS]({ commit }, payload) {
    commit(SET_MODAL_BUTTONS, payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
