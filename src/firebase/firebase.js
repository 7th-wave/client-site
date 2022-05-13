import { firebase } from '@firebase/app'

import '@firebase/auth'
import '@firebase/firestore'
import '@firebase/storage'
import axios from 'axios';
import env from './config'



firebase.initializeApp(env.firebaseConfig);


const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const authObject = firebase.auth

const app_url = process.env.VUE_APP_FUNCTIONS_URL;



const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};

const getClientByBlockChain = async(address) => {
    console.log(address);
    const clientsRef = db.collection('clients');

    const metamask = clientsRef.where('metamask', '==', address).get();
    const fortmatic = clientsRef.where('fortmatic', '==', address).get();
    const portis = clientsRef.where('portis', '==', address).get();
    
    const [metamaskQuerySnapshot, fortmaticQuerySnapshot, portisQuerySnapshot] = await Promise.all([
        metamask,
        fortmatic,
        portis
      ]);

    let client = {
        data: {},
        dbRef: null,
        state: false
    };

    console.log('metamask', metamaskQuerySnapshot);
    console.log('fortmatic', fortmaticQuerySnapshot);
    console.log('portis', portisQuerySnapshot);
    
    if (!metamaskQuerySnapshot.empty) {
        client.data = metamaskQuerySnapshot.docs[0].data();
        client.dbRef = metamaskQuerySnapshot.docs[0].id;
        client.state = true;
    } else if(!fortmaticQuerySnapshot.empty) {
        client.data = fortmaticQuerySnapshot.docs[0].data();
        client.dbRef = fortmaticQuerySnapshot.docs[0].id;
        client.state = true;
    } else if(!portisQuerySnapshot.empty) {
        client.data = portisQuerySnapshot.docs[0].data();
        client.dbRef = portisQuerySnapshot.docs[0].id;
        client.state = true;
    }

    return client;
}

const getLastBid = async (auction) => {
    const bidsNew = [];
    const result = await db.collection('bids')
        .where('auctionId', '==', auction)
        .get()

    result.docs.map((doc) => bidsNew.push(doc.data()))
    bidsNew.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
    }); 

    return bidsNew[0];
}

const saveUser = async(data) => {
    const result = await axios.post(app_url+'create_client', data);
    return result.data;
}

const getUserByAddress = async(address) => {
    const result = await axios.get(app_url+'find_client?ref='+address);
    return result.data;
}

const getVaults = async(address) => {
    const result = await axios.get(app_url+'find_client?ref='+address);
    return result.data;
}


export {
    db,
    auth,
    authObject,
    storage,
    getCurrentUser,
    getClientByBlockChain,
    getLastBid,
    saveUser,
    getUserByAddress,
    getVaults
};