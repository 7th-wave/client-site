
import axios from 'axios';

const app_url = process.env.VUE_APP_FUNCTIONS_URL;

const getMintedNftsCount = async() => {
    const result = await axios.post(app_url+'filter_nfts', {filter: [{name: 'isMinted', value: true}]});
    return result.data.length;
}

const filterNfts = async(data) => {
    const result = await axios.post(app_url+'filter_nfts', data);
    return result.data;
}

const filterNftsPaged = async(data, page) => {
    const result = await axios.post(app_url+'filter_nfts_paged?page='+page, data);
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
                name: 'Baiter',
                value: 'Baiter'
                },
                {
                name: 'Bearscicle',
                value: 'Bearscicle'
                },
                {
                name: 'Ben Day',
                value: 'Ben Day'
                },
                {
                name: 'Bling',
                value: 'Bling'
                },
                {
                name: 'Bones',
                value: 'Bones'
                },
                {
                name: 'Breedrz',
                value: 'Breedrz'
                },
                {
                name: 'Centibear',
                value: 'Centibear'
                },
                {
                name: 'Cloud9',
                value: 'Cloud9'
                },
                {
                name: 'Crystal',
                value: 'Crystal'
                },
                {
                name: 'Disco',
                value: 'Disco'
                },
                {
                name: 'Drippy',
                value: 'Drippy'
                },
                {
                name: 'Fused',
                value: 'Fused'
                },
                {
                name: 'Fuzzy',
                value: 'Fuzzy'
                },
                {
                name: 'Giddy Up',
                value: 'Giddy Up'
                },
                {
                name: 'Glazed',
                value: 'Glazed'
                },
                {
                name: 'Glitchy',
                value: 'Glitchy'
                },
                {
                name: 'Halfy',
                value: 'Halfy'
                },
                {
                name: 'Happy',
                value: 'Happy'
                },
                {
                name: 'Hippy',
                value: 'Hippy'
                },
                {
                name: 'Lucie',
                value: 'Lucie'
                },
                {
                name: 'McLovin',
                value: 'McLovin'
                },
                {
                name: 'Mintr',
                value: 'Mintr'
                },
                {
                name: 'Nugget',
                value: 'Nugget'
                },
                {
                name: 'OG',
                value: 'OG'
                },
                {
                name: 'Onyx',
                value: 'Onyx'
                },
                {
                name: 'Pudge',
                value: 'Pudge'
                },
                {
                name: 'Quad',
                value: 'Quad'
                },
                {
                name: 'Radium',
                value: 'Radium'
                },
                {
                name: 'Ripped',
                value: 'Ripped'
                },
                {
                name: 'Ripped',
                value: 'Ripped'
                },
                {
                name: 'Scrambler',
                value: 'Scrambler'
                },
                {
                name: 'Sicko',
                value: 'Sicko'
                },
                {
                name: 'Sticky',
                value: 'Sticky'
                },
                {
                name: 'Stroke',
                value: 'Stroke'
                },
                {
                name: 'Time',
                value: 'Time'
                },
                {
                name: 'Up',
                value: 'Up'
                },
                {
                name: 'Voltz',
                value: 'Voltz'
                },
                {
                name: 'Zen',
                value: 'Zen'
                },
        ]
    },
    {
        name: 'Bear Flavr',
        key: 'bear_flavr',
        options: [
            {
                name: 'BlueBeary',
                value: 'BlueBeary'
                },{
                name: 'BubbleFun',
                value: 'BubbleFun'
                },{
                name: 'Cacao',
                value: 'Cacao'
                },{
                name: 'Crime',
                value: 'Crime'
                },{
                name: 'GoldRush',
                value: 'GoldRush'
                },{
                name: 'Heat',
                value: 'Heat'
                },{
                name: 'HoneyBee',
                value: 'HoneyBee'
                },{
                name: 'IceIce',
                value: 'IceIce'
                },{
                name: 'Icky',
                value: 'Icky'
                },{
                name: 'Kush',
                value: 'Kush'
                },{
                name: 'Moon',
                value: 'Moon'
                },{
                name: 'Obsidian',
                value: 'Obsidian'
                },{
                name: 'OJ',
                value: 'OJ'
                },{
                name: 'PurpleRain',
                value: 'PurpleRain'
                },{
                name: 'Rainbow',
                value: 'Rainbow'
                },{
                name: 'SeaFoam',
                value: 'SeaFoam'
                },{
                name: 'Slime',
                value: 'Slime'
                },{
                name: 'SunState',
                value: 'SunState'
                },{
                name: 'TieDye',
                value: 'TieDye'
                },{
                name: 'ViceBlu',
                value: 'ViceBlu'
                }
        ]
    },
    {
        name: 'Shades',
        key: 'shades',
        options: [
            {
                name: '3D',
                value: '3D'
                },
                {
                name: 'Cobain',
                value: 'Cobain'
                },
                {
                name: 'Invisible',
                value: 'Invisible'
                },
                {
                name: 'PixBlue',
                value: 'PixBlue'
                },
                {
                name: 'PixGreen',
                value: 'PixGreen'
                },
                {
                name: 'PixLiLBlue',
                value: 'PixLiLBlue'
                },
                {
                name: 'PixOrange',
                value: 'PixOrange'
                },
                {
                name: 'PixPink',
                value: 'PixPink'
                },
                {
                name: 'PixPurple',
                value: 'PixPurple'
                },
                {
                name: 'PixRed',
                value: 'PixRed'
                },
                {
                name: 'PixSilver',
                value: 'PixSilver'
                },
                {
                name: 'PixYellow',
                value: 'PixYellow'
                },
                {
                name: 'Vr',
                value: 'Vr'
                }
        ]
    },
    {
        name: 'Canvas',
        key: 'canvas',
        options: [
            {
                name: 'Bal Harbour',
                value: 'Bal Harbour'
                },{
                name: 'Coconut Grove',
                value: 'Coconut Grove'
                },{
                name: 'Coral Gables',
                value: 'Coral Gables',
                },{
                name: 'Edgewater',
                value: 'Edgewater'
                },{
                name: 'Key Biscayne',
                value: 'Key Biscayne'
                },{
                name: 'Lil Haiti',
                value: 'Lil Haiti'
                },{
                name: 'Lil Havana',
                value: 'Lil Havana'
                },{
                name: 'Miami Beach',
                value: 'Miami Beach'
                },{
                name: 'Ocean Drive',
                value: 'Ocean Drive'
                },{
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
                name: 'C',
                value: 'C'
            },
            {
                name: 'I',
                value: 'I'
            },
            {
                name: 'R',
                value: 'R'
            },
            {
                name: 'K',
                value: 'K'
            },
            {
                name: 'O',
                value: 'O'
            },
            {
                name: 'L',
                value: 'L'
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
    filterNfts,
    filterNftsPaged
};