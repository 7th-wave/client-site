
import axios from 'axios';

const app_url = process.env.VUE_APP_FUNCTIONS_URL;


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


export {
    getUserNfts,
    createNft,
    getNft
};