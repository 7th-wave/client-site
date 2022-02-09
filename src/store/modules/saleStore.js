import { db } from "../../firebase/firebase";

// initial state
const state = () => ({
    sale: baseSale,
});
  
const baseSale = {
    from: null,
    fromAddress: null,
    soldTo: null,
    soldToAddress: null,
    amount: 0,
    currency: '',
    expiring_date: '',
    date: '',
    status: '',
    transactionHash: ''
};

const getters = {
    sale(state) {
        return state.sale
    }
}

const mutations = {
    setSale(state, payload) {
        state.sale = payload;
    },
    makeASell(state, payload) {
        state.sale.soldTo = payload.clientRef;
        state.sale.soldToAddress = payload.clientAddress;
        state.sale.transactionHash = payload.transactionHash;
    },
    cancelSale(state, payload) {
        state.sale.status = payload;
    }
}

const actions = {
    async getSale({ commit }, payload) {
        const sale = await db
        .collection("sales")
        .doc(payload.saleRef)
        .get();

        if (sale.exists) {
            commit("setSale", sale);
        }
    },

    async createSale({ commit, dispatch }, payload) {

        let nft = await db
            .collection("nfts")
            .doc(payload.nft)
            .get();
        
        let sales = nft.data().sales || [];

        const payloadSale = {
            amount: payload.total,
            date: new Date().toISOString(),
            expiring_date: payload.exp_date,
            nft: payload.nft,
            status: 'active',
            currency: payload.currency
        };

        const sale = await db
        .collection("sales")
        .add(payloadSale);

        sales.push(sale.id);

        await db
        .collection("nfts")
        .doc(payload.nft)
        .update({ sales: sales });

        dispatch("user/newSale", {sale: sale.id}, { root: true });

        commit("setSale", sale);
    
    },

    async sell({commit, dispatch}, payload) {
        const sale = await db
        .collection("sales").doc(payload.saleRef).get();
       
        if (sale.exists) {

            const docData = payload.sale;
            
            docData.transactionHash = '234234';
            docData.status = 'sold';

            await db
            .collection("sales").doc(payload.saleRef).update(docData);

            await db
            .collection("nfts")
            .doc(payload.sale.nft)
            .update({ blockChainOwner: docData.soldToAddress });

            dispatch("user/newPurchase", {nft: payload.sale.nft}, { root: true });

            commit('makeASell', payload);
        }
    },

    async cancel({commit},payload) {
        console.log(payload)
        await db
        .collection("sales").doc(payload.saleRef).update({status: 'canceled'});

        commit("cancelSale", 'canceled');
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  };