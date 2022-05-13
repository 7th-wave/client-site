
import axios from 'axios';

const app_url = process.env.VUE_APP_FUNCTIONS_URL;


const getUserApplications = async(address) => {
    const result = await axios.get(app_url+'find_application_by_owner?owner='+address);
    return result.data;
}

const getApplication = async(ref) => {
    const result = await axios.get(app_url+'find_application?ref='+ref);
    return result.data;
}

const createApplication = async(data) => {
    const result = await axios.post(app_url+'create_application', data);
    return result.data;
}

const editApplication = async(data) => {
    const result = await axios.post(app_url+'edit_application', data);
    return result.data;
}


export {
    getUserApplications,
    getApplication,
    createApplication,
    editApplication
};