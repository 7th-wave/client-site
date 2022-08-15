
import axios from 'axios';

const app_url = process.env.VUE_APP_FUNCTIONS_URL;

const getMembersCount = async() => {
    const result = await axios.get(app_url+'find_clients');
    return result.data.length;
}


const getClients = async() => {
    const result = await axios.get(app_url+'find_clients');
    return result.data;
}

const getClient = async(address) => {
    const result = await axios.get(app_url+'find_client?ref='+address);
    return result.data;
}

const saveUser = async(data) => {
    const result = await axios.post(app_url+'create_client', data);
    return result.data;
}

const updateUser = async(data, address) => {
    const result = await axios.post(app_url+'edit_client?ref='+address, data);
    return result.data;
}


export {
    getClients,
    getClient,
    saveUser,
    updateUser,
    getMembersCount
};