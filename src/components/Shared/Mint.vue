<template>
  <div class="w-full space-x-2 flex items-center md:block lg:flex">
   
    <div
      class="
      w-full
        flex
        justify-between
        pr-0
        rounded-bl-2xl rounded-br-2xl
        px-0
        flex
        items-center
      "
    >
      <div class="w-full">
        <Button @click="mint()" customClass="w-full" :btnStyle="'outlined'" :size="'xlarge'" v-if="currentProvider !== 'walletconnect'">MINT</Button>
        <Button @click="showWalletConnectModal()" customClass="w-full" :btnStyle="'outlined'" :size="'xlarge'" v-if="currentProvider == 'walletconnect'">MINT</Button>
      </div>
    </div>
     <div class="mt-1 ">
      <div
        class="flex items-center text-xl font-opensans font-semibold text-black px-4"
      >
        <div class="text-sm font-medium text-gray-700">
          <ETHalt size="10" />
        </div>

        <h3 class="mt-0 text-4xl">{{ finalPrice }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref, toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import Button from "../Layouts/Button.vue";
import ETHalt from "./ETHalt.vue";
import { mintNft, pinJson } from "../../blockchain";
import { findNewxtIdPerContract, updateNft } from "../../firebase/nfts";
import { useRouter } from "vue-router";
import { onMounted } from '@vue/runtime-core';

export default {
  components: { Button, ETHalt },
  props: {
    user: String, 
    currentAddress: String,
    currentProvider: String, 
    nft: Object,
    nftRef: String, 
    price: Number, 
    amount: Number
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const finalPrice = ref();

    const { nft, currentAddress, nftRef, price, amount } = toRefs(props);

    const showOfferDialog = ref(false);

    const makeOffer = () => {
      showOfferDialog.value = true;
    };

    const openModal = async () => {
      await store.dispatch("NotificationStore/SET_MODAL_MESSAGE", {
        message:
          "To place an offer you will have to pay some network gas fees. The NFT Owner will receive a notification. If they accept, the transaction will go through. You may cancel the offer at any time to receive your funds back.",
      });
      await store.dispatch("NotificationStore/SET_MODAL_TITLE", {
        title: "Make an Offer",
      });
      await store.dispatch("NotificationStore/SET_MODAL_BUTTONS", {
        buttons: [
          {
            name: "OK",
            btnStyle: "secondary",
            action: async function () {
              await store.dispatch("NotificationStore/SET_OPEN_MODAL");
            },
          },
        ],
      });
      await store.dispatch("NotificationStore/SET_OPEN_MODAL");
    };

    const web3Instance = computed(
			() => store.getters["blockchain/getInstance"]
		);

    const closeModal = () => {
      showOfferDialog.value = false;
    };

    const showWalletConnectModal = () => {
      store.dispatch("NotificationStore/SET_MODAL_TITLE", {
          title: "WALLETCONNECT",
        });
        store.dispatch("NotificationStore/SET_MODAL_MESSAGE", {
          message: `Check your mobile wallet to approve this transaction`,
        });
        store.dispatch("NotificationStore/SET_MODAL_BUTTONS", {
          buttons: [
            { name: "OK", btnStyle: "primary", action: async () => {
              await mint();
            } },
            
          ],
        });
        store.dispatch("NotificationStore/SET_OPEN_MODAL");
    }

    const mint = async () => {
      store.dispatch("NotificationStore/TOGGLE_LOADING");
      const contractAddress = process.env.VUE_APP_ERC721;
      const nextId = await findNewxtIdPerContract(contractAddress);
      console.log(nextId);
      const token_id = nextId.nextId;
      const description = nft.value.description;

      const attrs = nft.value.attributes.map((item) => {
        let value = item.value;
        const token_id = nextId.nextId;
        if (item.name == "CIRKOL CLASS") {
          if (token_id <= 250) {
            value = "C";
          } else if (token_id >= 251 && token_id <= 750) {
            value = "I";
          } else if (token_id >= 751 && token_id <= 1500) {
            value = "R";
          } else if (token_id >= 1501 && token_id <= 2500) {
            value = "K";
          } else if (token_id >= 2501 && token_id <= 3750) {
            value = "O";
          } else {
            value = "L";
          }
        }

        if (item.name == "Member Stars") {
          if (token_id <= 250) {
            value = 5;
          } else if (token_id >= 251 && token_id <= 750) {
            value = 4;
          } else if (token_id >= 751 && token_id <= 1500) {
            value = 3;
          } else if (token_id >= 1501 && token_id <= 2500) {
            value = 2;
          } else if (token_id >= 2501 && token_id <= 3750) {
            value = 1;
          } else {
            value = 0;
          }
        }
        return { name: item.name, value: value };
      });

      const properties = attrs.map((item) => {
        return { trait_type: item.name, value: item.value };
      });

      const metadata = {
        pinataMetadata: {
          name: nft.value.title + ' #' + token_id,
        },
        pinataContent: {
          name: nft.value.title + ' #' + token_id,
          description: description,
          image: nft.value.ipfs,
          attributes: properties
        },
      };

      const metadataIpfs = await pinJson(metadata);
      /* const signature = {
        minPrice: 20,
        uri: nft.value.ipfs,
        signature: nft.value.signature,
      }; */
      try {
        const result = await mintNft(
          web3Instance.value,
          "0xB889eDEFBF7fC1f8Ae11ac1D69462be8C863004D",
          token_id,
          "https://gateway.pinata.cloud/ipfs/" + metadataIpfs.IpfsHash,
          process.env.VUE_APP_MINTING_TOKEN,
          finalPrice.value
        );
        console.log("mint -> ", result);
        const newNft = Object.assign({}, nft.value);
        newNft.metadataIpfs =
          "https://gateway.pinata.cloud/ipfs/" + metadataIpfs.IpfsHash;
        newNft.blockchainId = token_id;
        newNft.status = "minted";
        newNft.title = nft.value.title + ' #'  + token_id;
        newNft.isMinted = true;
        newNft.blockChainOwner = currentAddress.value;
        newNft.mintDate = new Date().getTime();
        newNft.attributes = attrs;
        await updateNft(nftRef.value, newNft);
        router.push("/my-nfts");
        store.dispatch("NotificationStore/TOGGLE_LOADING");
      } catch (err) {
        store.dispatch("NotificationStore/TOGGLE_LOADING");
        console.log(err);
      }
    };

    onMounted(() => {
      console.log('--');
      console.log(currentAddress.value);
      console.log('--');
      finalPrice.value = amount.value ? price.value : nft.value.mintinPrice;
    })

    return {
      openModal,
      makeOffer,
      showOfferDialog,
      closeModal,
      mint,
      finalPrice,
      showWalletConnectModal
    };
  },
};
</script>
