<template>
  <div>
    <div class="mt-1 flex items-center md:block lg:flex">
      <div
        class="flex items-center text-xl font-opensans font-semibold text-black"
      >
        <div class="mx-1 text-sm font-medium text-gray-500">
          <ETH size="6" />
        </div>

        <h3 class="mt-0">20</h3>
      </div>
    </div>
    <div
      class="
        flex
        justify-between
        pr-2
        py-4
        rounded-bl-2xl rounded-br-2xl
        px-0
        flex
        items-center
      "
    >
      <div class="w-5/6">
        <Button @click="mint()" customClass="w-full">MINT</Button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import Button from "../Layouts/Button.vue";
import ETH from "./ETH.vue";
import { mintNft, pinJson } from "../../blockchain";
import { findNewxtIdPerContract, updateNft } from "../../firebase/nfts";
import { useRouter } from "vue-router";
import { onMounted } from '@vue/runtime-core';

export default {
  components: { Button, ETH },
  props: ["user", "currentAddress", "nft", "nftRef"],
  setup(props) {
    const store = useStore();
    const router = useRouter();

    const { nft, currentAddress, nftRef } = toRefs(props);

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

    const closeModal = () => {
      showOfferDialog.value = false;
    };

    const mint = async () => {
      store.dispatch("NotificationStore/TOGGLE_LOADING");
      const contractAddress =
        process.env.VUE_APP_NETWORK == "mainnet"
          ? process.env.VUE_APP_ERC721_ADDRESS_MAINNET
          : process.env.VUE_APP_ERC721_ADDRESS_RINKEBY;
      const nextId = await findNewxtIdPerContract(contractAddress);
      console.log(nextId);
      const token_id = nextId.nextId;
      const description = nft.value.description.replace(/\\n/g, '');

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
          name: nft.value.title + token_id,
        },
        pinataContent: {
          name: nft.value.title + token_id,
          description: description,
          image: nft.value.ipfs,
          attributes: properties,
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
          "0xB889eDEFBF7fC1f8Ae11ac1D69462be8C863004D",
          token_id,
          "https://gateway.pinata.cloud/ipfs/" + metadataIpfs.IpfsHash,
          process.env.VUE_APP_MINTING_TOKEN,
          nft.value.mintinPrice
        );
        console.log("mint -> ", result);
        const newNft = Object.assign({}, nft.value);
        newNft.metadataIpfs =
          "https://gateway.pinata.cloud/ipfs/" + metadataIpfs.IpfsHash;
        newNft.blockchainId = token_id;
        newNft.status = "minted";
        newNft.title = nft.value.title + token_id;
        newNft.isMinted = true;
        newNft.blockchainOwner = currentAddress.value;
        newNft.attributes = attrs;
        await updateNft(nftRef.value, newNft);
        router.push("/my-nfts");
        store.dispatch("NotificationStore/TOGGLE_LOADING");
      } catch (err) {
        console.log(err);
      }
    };

    onMounted(() => {
      console.log('--');
      console.log(currentAddress.value);
      console.log('--');
    })

    return {
      openModal,
      makeOffer,
      showOfferDialog,
      closeModal,
      mint,
    };
  },
};
</script>
