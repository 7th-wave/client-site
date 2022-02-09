import { db } from "../../firebase/firebase";

// initial state
const state = () => ({
    bid: basBid,
});
  
const basBid = {
from: '',
fromAddress: '',
amount: 0,
date: '',
auctionId: null
};

const getters = {
    bid(state) {
        return state.bid
    }
}

const mutations = {
    setBid(state, payload) {
        state.bid = payload;
    }
}

const actions = {
    async getBid({ commit }, payload) {
        const bid = await db
        .collection("auctions")
        .doc(payload.bidRef)
        .get();

        if (bid.exists) {
            commit("setBid", bid);
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };