// Works for web3 1.0 and pre-1.0 versions
import axios from "axios";
import Web3 from "web3";
//import { ethers } from "ethers";
import FERC721 from "../contracts/FERC721.json";
import USDCAbi from "../contracts/USDCAbi.json";
//import Vault from "../contracts/Vault.json";
import VaultFactory from "../contracts/VaultFactory.json";
import BasketFactory from "../contracts/JERC72BasketFactory.json";


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
    ERC721: "0x8a824328a5A93435F92cc48E1579B6acA262E9f4",
    USDC: "0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b",
    vaultFactory: "0x458556c097251f52ca89cB81316B4113aC734BD1",
    settings: "0x1C0857f8642D704ecB213A752A3f68E51913A779",
    basketFactory: "0xee727b734aC43fc391b67caFd18e5DD4Dc939668"
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
    FERC721,
    addresses[currNetwork].ERC721
  );
  const receipt = await tokenContractERC721.methods
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
    FERC721,
    addresses[currNetwork].ERC721
  );
  const receipt = await tokenContractERC721.methods
    .authorizeAndMintMainArtwork(accounts.result[0], metadataUri)
    .send({ from: accounts.result[0] });

  return receipt;
};

const mintBasket = async () => {
  const accounts = await window.ethereum.send("eth_requestAccounts");
  window.web3 = new Web3(window.ethereum);
  // Create contract object
  const basketFactoryContract = new window.web3.eth.Contract(
    BasketFactory,
    addresses[currNetwork].basketFactory
  );
  const receipt = await basketFactoryContract.methods
    .createBasket()
    .send({ from: accounts.result[0] });

  return receipt;
};

const approveBasket = async (basketaddress) => {
  const accounts = await window.ethereum.send("eth_requestAccounts");
  window.web3 = new Web3(window.ethereum);
  // Create contract object
  const basketContract = new window.web3.eth.Contract(
    FERC721,
    basketaddress
  );
  const receipt = await basketContract.methods
    .setApprovalForAll(addresses[currNetwork].vaultFactory, true)
    .send({ from: accounts.result[0] });

  return receipt;
};

const mintVault = async (name, ticker, basketaddress, id, supply, listPrice, fee) => {
  const accounts = await window.ethereum.send("eth_requestAccounts");
  window.web3 = new Web3(window.ethereum);
  // Create contract object
  const vaultFactoryContract = new window.web3.eth.Contract(
    VaultFactory,
    addresses[currNetwork].vaultFactory
  );
  const receipt = await vaultFactoryContract.methods
    .mint(name, ticker, basketaddress, 0, supply, listPrice, fee)
    .sendAsync({ from: accounts.result[0] });

  return receipt;
};

const approveNFT = async (nftAddress, id, basketaddress) => {
  const accounts = await window.ethereum.send("eth_requestAccounts");
  window.web3 = new Web3(window.ethereum);
  // Create contract object
  const nftContract = new window.web3.eth.Contract(
    FERC721,
    nftAddress
  );
  const receipt = await nftContract.methods
    .approve(basketaddress, id)
    .send({ from: accounts.result[0] });

  return receipt;
};

const transferNFT = async (nftAddress, id, basketaddress) => {
  console.log('Here');

  const accounts = await window.ethereum.send("eth_requestAccounts");
  window.web3 = new Web3(window.ethereum);
  // Create contract object
  const nftContract = new window.web3.eth.Contract(
    FERC721,
    nftAddress
  );
  
  try {
   
    const receipt = await nftContract.methods
      .safeTransferFrom(accounts.result[0], basketaddress, id)
      .send({ from: accounts.result[0] });

    return receipt;
  } catch(error) {
    console.log(error);
  }
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
  mintNft,
  getTxReceipt,
  tokenAllowance,
  getDecimal,
  checkBalance,
  mintBasket,
  approveBasket,
  approveNFT,
  transferNFT,
  mintVault
};
