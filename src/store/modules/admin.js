import { db, getCurrentUser } from '../../firebase/firebase';
import { addOperatorERC721, addOperatorGOGAuction } from '../../blockchain/index';

// initial state
const state = () => ({
  admin: {
    dbRef: null,
    unique: '',
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
    offers: false,
    sms: "",
    firebaseUser: "",
    avatar: null,
    defaultOperatorAddress: null,
    isERC721Operator: false,
    isAuctionOperator: false
  }
});

const getDefaultState = () => {
  return {
    admin: {
      dbRef: null,
      unique: '',
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
      offers: false,
      sms: "",
      firebaseUser: "",
      avatar: null,
      userType: 'admin',
      defaultOperatorAddress: null,
      isERC721Operator: false,
      isAuctionOperator: false
    }
  }
}

// getters
const getters = {
  getAdmin: (state) => {
    return state.admin;
  },
  getFullName: (state) => {
    console.log(state);
    return state.admin.firstName + ' ' + state.admin.lastName;
  },
  getAvatar: (state) => {
    return state.admin.avatar;
  },
  getEmail: (state) => {
    return state.admin.email;
  },
  hasCurrentAddress: (state) => {
    return state.admin.defaultOperatorAddress || false;
  }
}

// actions
const actions = {
    async getAdmin ({ dispatch }, payload) {
      if (payload.uuid) {
        dispatch('loadInvitedAdmin', payload);
      } else {
        const admin = await getCurrentUser();
        if (admin) {
          dispatch('recoverAdmin', admin);
        }
      }
    },
    async loadInvitedAdmin ({commit}, payload) {
      const results = await db.collection("admins").where("unique", "==", payload.uuid).get();
      if (!results.empty) {
        const admin = results.docs[0].data();
        admin.dbRef = results.docs[0].id;
        console.log(admin);
        commit('setAdmin', admin);
      }
    },
    async recoverAdmin ({commit}, payload) {
      const results = await db.collection("admins").where("firebaseUser", "==", payload.uid).get();
      console.log(payload.uid);
      if (!results.empty) {
        const admin = results.docs[0].data();
        admin.dbRef = results.docs[0].id;
        
        commit('setAdmin', admin);
      }
      
    },
    async connectToBlockChain({commit}) {

      try {

        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        commit('setBlockchain', accounts[0]);

     } catch (error) {
       console.log(error);
     }
    },
    async saveAdmin ({commit}, payload) {

        try {
        // Get user account wallet address first

        const admin = payload.admin;
       

        await db.collection("admins").doc(payload.admin.dbRef).set(admin);
        commit('setAdmin', admin);

      } catch (error) {
        throw new Error(error.message);
      }
      
    },
    async makeERC721Operator({commit}, payload) {

      try {
        const receipt = await addOperatorERC721(payload.address);
        console.log(receipt);
        await db.collection("admins").doc(payload.ref)
        .update({
          isERC721Operator: true 
        });

        commit('setERC721OperatorStatus');
      } catch (error) {
        console.log(error)
      }

    },

    async makeAuctionOperator({commit}, payload) {

      try {
        const receipt = await addOperatorGOGAuction(payload.address);
        console.log(receipt);
        await db.collection("admins").doc(payload.ref)
        .update({
          isAuctionOperator: false 
        });
        commit('setAuctionOperatorStatus');

      } catch (error) {
        console.log(error)
      }

      

    },
    async logoutAdmin ({ commit }) {
      await delete('admin');
      commit('resetState');
    }
    
  }

// mutations
const mutations = {
    setAdmin (state, payload) {
      state.admin = Object.assign({}, payload);
    },
    setBlockchain (state, payload) {
      state.admin.defaultOperatorAddress = payload;
    },
    resetState (state) {
      Object.assign(state, getDefaultState())
    },
    setERC721OperatorStatus(state) {
      state.admin.isERC721Operator = true;
    },
    setAuctionOperatorStatus(state) {
      state.admin.isAuctionOperator = true;
    }
  }


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}