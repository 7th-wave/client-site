
import axios from 'axios';

const app_url = process.env.VUE_APP_FUNCTIONS_URL;

const getNfts = async(page) => {
    const result = await axios.get(app_url+'find_nfts?page='+page);
    return result.data;
}

const getNftsByCollection = async(collection, page) => {
    const result = await axios.get(app_url+'find_nfts_by_collection?page='+page+'&collection='+collection);
    return result.data;
}

const findNewxtIdPerContract = async(contract) => {
    const result = await axios.get(app_url+'find_next_id?address='+contract);
    return result.data;
}

const getUserNfts = async(address) => {
    const result = await axios.get(app_url+'find_nft_by_owner?owner='+address);
    return result.data;
}

const getNft = async(ref) => {
    const result = await axios.get(app_url+'find_nft?ref='+ref);
    return result.data;
}

const createNft = async(data) => {
    const result = await axios.post(app_url+'create_nft', data);
    return result.data;
}

const updateNft = async(ref, data) => {
    const result = await axios.post(app_url+'edit_nft?ref='+ref, data);
    return result.data;
}



export {
    getUserNfts,
    createNft,
    getNft,
    updateNft,
    getNfts,
    getNftsByCollection,
    findNewxtIdPerContract
};