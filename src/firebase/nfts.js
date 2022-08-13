
import axios from 'axios';

const app_url = process.env.VUE_APP_FUNCTIONS_URL;

const getMintedNftsCount = async() => {
    //const result = await axios.get(app_url+'find_minted_nfts');
    return 1;
}

const filterNfts = async(data) => {
    const result = await axios.post(app_url+'filter_nfts', data);
    return result.data;
}

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

const nftFilters = [
    {
        name: 'Bear Bod',
        key: 'bear_bod',
        options: [
            {
                name: 'Time',
                value: 'Time'
            },
            {
                name: 'OG',
                value: 'OG'
            }
        ]
    },
    {
        name: 'Bear Flavr',
        key: 'bear_flavr',
        options: [
            {
                name: 'BlueBeary',
                value: 'BlueBeary'
            },
            {
                name: 'Moon',
                value: 'Moon'
            }
        ]
    },
    {
        name: 'Shades',
        key: 'shades',
        options: [
            {
                name: 'PixOrange',
                value: 'PixOrange'
            },
            {
                name: 'PixBlue',
                value: 'PixBlue'
            }
        ]
    },
    {
        name: 'Canvas',
        key: 'canvas',
        options: [
            {
                name: 'Lil Havana',
                value: 'Lil Havana'
            },
            {
                name: 'Wynwood',
                value: 'Wynwood'
            }
        ]
    },
    {
        name: 'Cirkol Class',
        key: 'cirkol_class',
        options: [
            {
                name: 'Lil Havana',
                value: 'Lil Havana'
            },
            {
                name: 'Wynwood',
                value: 'Wynwood'
            }
        ]
    },
    {
        name: 'Member Stars',
        key: 'member_stars',
        options: [
            {
                name: '1',
                value: 1
            },
            {
                name: '2',
                value: 2
            },
            {
                name: '3',
                value: 3
            },
            {
                name: '4',
                value: 4
            },
            {
                name: '5',
                value: 5
            }
        ]
    }
]



export {
    getUserNfts,
    createNft,
    getNft,
    updateNft,
    getNfts,
    getNftsByCollection,
    findNewxtIdPerContract,
    getMintedNftsCount,
    nftFilters,
    filterNfts
};