
import axios from 'axios';

const app_url = process.env.VUE_APP_FUNCTIONS_URL;


const getClients = async() => {
    const result = await axios.get(app_url+'find_clients');
    return result.data;
}

const getClient = async(address) => {
    const result = await axios.get(app_url+'find_client?ref='+address);
    return result.data;
}


export {
    getClients,
    getClient
};