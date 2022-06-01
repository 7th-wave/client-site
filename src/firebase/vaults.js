
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

const updateVault = async(dbRef, data) => {
    const results = await axios.post(app_url+'edit_vault?ref='+dbRef, data);
    return results.data;
}

const saveBucketAddress = async(dbRef, data) => {
    const results = await axios.post(app_url+'bucket_address?ref='+dbRef, data);
    return results.data;
}

const saveVaultMintStatus = async(dbRef, data) => {
    const results = await axios.post(app_url+'mint_status?ref='+dbRef, data);
    return results.data;
}

export {
    getUserVaults,
    create,
    getVault,
    updateVault,
    saveBucketAddress,
    saveVaultMintStatus
};