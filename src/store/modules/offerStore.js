import { db } from "../../firebase/firebase";

// initial state
const state = () => ({
    offer: baseOffer,
});
  
const baseOffer = {
    from: '',
    fromAddress: '',
    amount: 0,
    currency: '',
    expiring_date: '',
    date: '',
    status: ''
};

const getters = {
    offer(state) {
        return state.offer
    }
}

const mutations = {
    setOffer(state, payload) {
        state.offer = payload;
    },
    acceptOffer() {
        state.offer.status = 'accepeted'
    },
    rejectOffer() {
        state.offer.status = 'rejected'
    }
}

const actions = {
    async getOffer({ commit }, payload) {
        const offer = await db
        .collection("offers")
        .doc(payload.offerRef)
        .get();

        if (offer.exists) {
            commit("setOffer", offer);
        }
    },

    async createOffer({ commit, dispatch }, payload) {

        let nft = await db
            .collection("nfts")
            .doc(payload.nft)
            .get();
        
        let offers = nft.data().offers || [];

        const payloadOffer = {
            from: payload.from,
            fromAddress: payload.fromAddress,
            amount: payload.total,
            date: new Date().toISOString(),
            expiring_date: payload.exp_date,
            nft: payload.nft,
            status: 'active',
            currency: payload.currency
        };

        const offer = await db
        .collection("offers")
        .add(payloadOffer);

        offers.push(offer.id);

        await db
        .collection("nfts")
        .doc(payload.nft)
        .update({ offers: offers });

        dispatch("user/newOffer", {offer: offer.id}, { root: true });

        commit("setOffer", offer);
    
    },

    async accept({commit}, payload) {

        await db
        .collection("offers").doc(payload.offerRef).update({status: 'accepeted'});

        commit("acceptOffer");

    },

    async reject({commit}, payload) {

        await db
        .collection("offers").doc(payload.offerRef).update({status: 'rejected'});

        commit("rejectOffer");

    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };