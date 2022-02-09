// Works for web3 1.0 and pre-1.0 versions
import axios from "axios";
import Web3 from "web3";
//import { ethers } from "ethers";
import GOGAuctionV2 from "../contracts/GOGAuctionV2.json";
import GOGERC721 from "../contracts/GOGERC721.json";
import USDCAbi from "../contracts/USDCAbi.json";

const addresses = {
  ropsten: {
    auction: "0xC3dC1B68B3D077Fe23178206462f792943f75b3A",
    ERC721: "0xBcA770B20C37331887d7074481bc3B61B75e2641",
    USDC: "0x07865c6e87b9f70255377e024ace6630c1eaa37f",
  },
  // rinkeby: {
  //   auction: "0xE1133Ff991392Af52025eD60a99f258A71054F47",
  //   ERC721: "0x2Ed3125f1832BeEDEE38adE6541F93217bbdC29f",
  //   USDC: "0xeb8f08a975ab53e34d8a0330e0d34de942c95926",
  // },
  rinkeby: {
    auction: "0xE1133Ff991392Af52025eD60a99f258A71054F47",
    ERC721: "0x2Ed3125f1832BeEDEE38adE6541F93217bbdC29f",
    USDC: "0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b",
  },
  mainnet: {
    auction: "0xE1133Ff991392Af52025eD60a99f258A71054F47",
    ERC721: "0x2Ed3125f1832BeEDEE38adE6541F93217bbdC29f",
    USDC: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  },
};

let currNetwork = process.env.VUE_APP_NETWORK;
let decimals = Math.pow(10, 6);

const setWeb3 = (instance, provider) => {
  if (provider == 'fortmatic') {
    return new Web3(instance.getProvider());
  } if (provider == 'portis') {
    return new Web3(instance.provider);
  } else {
    return new Web3(instance);
  }
}

const testAuthentication = async () => {
  try {
    const url = `https://api.pinata.cloud/data/testAuthentication`;
    const response = await axios.get(url, {
      headers: {
        pinata_api_key: process.env.VUE_APP_PINATA_API_KEY,
        pinata_secret_api_key: process.env.VUE_APP_PINATA_API_SECRET,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const pinFile = async (image, name) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  //we gather a local file from the API for this example, but you can gather the file from anywhere
  let data = new FormData();
  data.append("file", image);
  const metadata = {
    name: name,
  };
  data.append("metadata", metadata);
  const results = await axios.post(url, data, {
    headers: {
      "Content-Type": `multipart/form-data; boundary= ${data._boundary}`,
      pinata_api_key: process.env.VUE_APP_PINATA_API_KEY,
      pinata_secret_api_key: process.env.VUE_APP_PINATA_API_SECRET,
    },
  });
  return results;
};

const pinJson = async (json) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

  const results = await axios.post(url, json, {
    headers: {
      pinata_api_key: process.env.VUE_APP_PINATA_API_KEY,
      pinata_secret_api_key: process.env.VUE_APP_PINATA_API_SECRET,
    },
  });
  return results.data;
};

const addOperatorERC721 = async (account) => {
  const accounts = await window.ethereum.send("eth_requestAccounts");
  window.web3 = new Web3(window.ethereum);
  // Create contract object
  const tokenContractERC721 = new window.web3.eth.Contract(
    GOGERC721.abi,
    addresses[currNetwork].ERC721
  );
  const receipt = await tokenContractERC721.methods
    .addOperator(account)
    .send({ from: accounts.result[0] });

  return receipt;
};

const addOperatorGOGAuction = async (account) => {
  const accounts = await window.ethereum.send("eth_requestAccounts");
  window.web3 = new Web3(window.ethereum);
  // Create contract object
  const auctionContract = new window.web3.eth.Contract(
    GOGAuctionV2.abi,
    addresses[currNetwork].auction
  );
  const receipt = await auctionContract.methods
    .addOperator(account)
    .send({ from: accounts.result[0] });

  return receipt;
};

const mintNft = async (metadataUri) => {
  const accounts = await window.ethereum.send("eth_requestAccounts");
  window.web3 = new Web3(window.ethereum);
  console.log(metadataUri);
  // Create contract object
  const tokenContractERC721 = new window.web3.eth.Contract(
    GOGERC721.abi,
    addresses[currNetwork].ERC721
  );
  const receipt = await tokenContractERC721.methods
    .authorizeAndMintMainArtwork(accounts.result[0], metadataUri)
    .send({ from: accounts.result[0] });

  return receipt;
};

const cancelAuction = async (id) => {
  try {
    const accounts = await window.ethereum.send("eth_requestAccounts");
    window.web3 = new Web3(window.ethereum);
    // Create contract object
    const auctionContract = new window.web3.eth.Contract(
      GOGAuctionV2.abi,
      addresses[currNetwork].auction
    );

    const receipt = await auctionContract.methods
      .auctionCancel(id)
      .send({ from: accounts.result[0] });

    return receipt;
  } catch (error) {
    return error.message;
  }
};

const toggleAuction = async (id) => {
  const accounts = await window.ethereum.send("eth_requestAccounts");
  window.web3 = new Web3(window.ethereum);
  // Create contract object
  const auctionContract = new window.web3.eth.Contract(
    GOGAuctionV2.abi,
    addresses[currNetwork].auction
  );
  let receipt;
  receipt = await auctionContract.methods
      .toggleAuction(id)
      .send({ from: accounts.result[0] });

  return receipt;
};

const endAuction = async (id) => {
  const accounts = await window.ethereum.send("eth_requestAccounts");
  window.web3 = new Web3(window.ethereum);
  const auctionContract = new window.web3.eth.Contract(
    GOGAuctionV2.abi,
    addresses[currNetwork].auction
  );
  let receipt;
  receipt = await auctionContract.methods
      .auctionEnd(id)
      .send({ from: accounts.result[0] });

  return receipt;
};

const withdraw = async (id) => {
  const accounts = await window.ethereum.send("eth_requestAccounts");
  window.web3 = new Web3(window.ethereum);
  const auctionContract = new window.web3.eth.Contract(
    GOGAuctionV2.abi,
    addresses[currNetwork].auction
  );
  let receipt;
  receipt = await auctionContract.methods
      .withdraw(id)
      .send({ from: accounts.result[0] });

  return receipt;
};

const createAuction = async (auctionId, time, artwork_id, minimumBid, artist_address, isEth) => {
  try {
    const accounts = await window.ethereum.send("eth_requestAccounts");
    window.web3 = new Web3(window.ethereum);
    // Create contract object
    const auctionContract = new window.web3.eth.Contract(
      GOGAuctionV2.abi,
      addresses[currNetwork].auction
    );

    let receipt;

    if (!isEth) {
      receipt = await auctionContract.methods
        .createAuction(
          auctionId,
          time,
          artwork_id,
          minimumBid * decimals,
          0,
          addresses[currNetwork].ERC721,
          addresses[currNetwork].USDC,
          artist_address
        )
        .send({ from: accounts.result[0] });

      return receipt;
    } else {

      receipt = await auctionContract.methods
        .createAuctionEth(
          auctionId,
          time,
          artwork_id,
          minimumBid * decimals,
          addresses[currNetwork].ERC721,
          addresses[currNetwork].USDC,
          artist_address
        )
        .send({ from: accounts.result[0] });

    }
  } catch (error) {
    throw error.message;
  } 
};

const bid = async (auctionId, value, address, instance, provider) => {
  window.web3 = setWeb3(instance, provider);

  console.log(auctionId);
  // Create contract object
  const tokenContractERCAuction = new window.web3.eth.Contract(
    GOGAuctionV2.abi,
    addresses[currNetwork].auction
  );
  //var block = await window.web3.eth.getBlock("latest");

  return new Promise((resolve, reject) => {
    tokenContractERCAuction.methods
    .bid(auctionId, value * decimals)
    .send({ from: address })
    .once("transactionHash", (hash) => {
      resolve({ transactionHash: hash, status: "pending" });
    })
    .once("error", (error, receipt) => {
      reject({ error: error, receipt: receipt })
    });
  })
  

  // return receipt;
};

const offer = async (auctionId, value, address, instance, provider) => {
  window.web3 = setWeb3(instance, provider);

  console.log(auctionId);
  // Create contract object
  const tokenContractERCAuction = new window.web3.eth.Contract(
    GOGAuctionV2.abi,
    addresses[currNetwork].auction
  );
  //var block = await window.web3.eth.getBlock("latest");

  return new Promise((resolve, reject) => {
    tokenContractERCAuction.methods
    .bid(auctionId, value * decimals)
    .send({ from: address })
    .once("transactionHash", (hash) => {
      resolve({ transactionHash: hash, status: "pending" });
    })
    .once("error", (error, receipt) => {
      reject({ error: error, receipt: receipt })
    });
  })
  

  // return receipt;
};

const tokenAllowance = async (amount, address, instance, provider) => {
  // const accounts = await window.ethereum.send("eth_requestAccounts");
  window.web3 = setWeb3(instance, provider);

  // Create contract object
  const USDCContract = new window.web3.eth.Contract(
    USDCAbi,
    addresses[currNetwork].USDC
  );

  const receipt = await USDCContract.methods
    .approve(addresses[currNetwork].auction, amount * decimals * 1000)
    .send({ from: address });

  return receipt;
};

const checkBalance = async (address, instance, provider) => {
  // const accounts = await window.ethereum.send("eth_requestAccounts");
  window.web3 = setWeb3(instance, provider);

  //const addresses = await window.web3.eth.getAccounts();
  //Create contract object
  const USDCContract = new window.web3.eth.Contract(
    USDCAbi,
    addresses[currNetwork].USDC
  );

  const result = await USDCContract.methods.balanceOf(address).call();

  const balance = result / decimals;
  console.log(balance);

  return balance;
};

const getTxReceipt = async (tx) => {
  try {
    const receipt = await window.web3.eth.getTransactionReceipt(tx);
    return receipt;
  } catch (error) {
    console.log(error);
  }
};

const getDecimal = (value) => {
  return window.web3.utils.hexToNumber(value);
};

export {
  testAuthentication,
  pinFile,
  pinJson,
  addOperatorERC721,
  addOperatorGOGAuction,
  mintNft,
  getTxReceipt,
  createAuction,
  cancelAuction,
  endAuction,
  bid,
  toggleAuction,
  tokenAllowance,
  getDecimal,
  checkBalance,
  withdraw,
  offer
};
