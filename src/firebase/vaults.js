
import axios from 'axios';

const app_url = process.env.VUE_APP_FUNCTIONS_URL;


const getUserVaults = async(address) => {
    const result = await axios.get(app_url+'find_by_owner?owner='+address);
    return result.data;
}

const getVault = async(ref) => {
    const result = await axios.get(app_url+'find_vault?ref='+ref);
    return result.data;
}

const create = async(data) => {
    const result = await axios.post(app_url+'create_vault', data);
    return result.data;
}


export {
    getUserVaults,
    create,
    getVault
};