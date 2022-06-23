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
      <div class="mt-2 text-primary-400">
        <button @click="openModal" class="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
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

export default {
  components: { Button, ETH },
  props: ["user", "currentAddress", "nft", "nftRef"],
  setup(props) {
    const store = useStore();

    const { nft, currentAddress, nftRef} = toRefs(props);

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
      const nextId = await findNewxtIdPerContract(
        process.env.VUE_APP_ERC721_ADDRESS
      );
      console.log(nextId);
      const description = nft.value.description;

      const attrs = nft.value.attributes.map((item) => {
		  let value = item.value;
		  if (item.name == 'CIRKOL CLASS') {
			  if (nextId <= 250 ) {
				  value = 'C'
			  } else if (nextId >= 251 && nextId <=750) {
				  value = 'I'
			  } else if (nextId >= 751 && nextId <=1500) {
				  value = 'R'
			  } else if (nextId >= 1501 && nextId <=2500) {
				  value = 'K'
			  } else if (nextId >= 2501 && nextId <=3750) {
				  value = 'O'
			  } else {
				  value = 'L'
			  }
			  
		  }

		  if (item.name == 'Member Stars') {
			 if (nextId <= 250 ) {
				  value = 5
			  } else if (nextId >= 251 && nextId <=750) {
				  value = 4
			  } else if (nextId >= 751 && nextId <=1500) {
				  value = 3
			  } else if (nextId >= 1501 && nextId <=2500) {
				  value = 2
			  } else if (nextId >= 2501 && nextId <=3750) {
				  value = 1
			  } else {
				  value = 0
			  }
		  }
        return { trait_type: item.name, value: value };
      });

      const metadata = {
        pinataMetadata: {
          name: nft.value.title + " #" + nextId,
        },
        pinataContent: {
          name: nft.value.title + " #" + nextId,
          description: description,
          image: nft.value.ipfs,
          attributes: attrs,
        },
      };

      const metadataIpfs = await pinJson(metadata);
      /* const signature = {
        minPrice: 20,
        uri: nft.value.ipfs,
        signature: nft.value.signature,
      }; */
      try {
        const result = await mintNft( "0xB889eDEFBF7fC1f8Ae11ac1D69462be8C863004D", nextId.nextId, "https://gateway.pinata.cloud/ipfs/" + metadataIpfs.IpfsHash, process.env.VUE_APP_MINTING_TOKEN, nft.value.mintinPrice);
		console.log('mint -> ', result);
        const newNft = Object.assign({}, nft.value);
        newNft.metadataIpfs = "https://gateway.pinata.cloud/ipfs/" + metadataIpfs.IpfsHash;
        newNft.blockchainId = nextId.nextId;
        newNft.status = "minted";
        newNft.titlte = nft.value.title + nextId.nextId;
        newNft.isMinted = true;
		newNft.blockchainOwner = currentAddress.value;
        await updateNft(nftRef.value, newNft);
      } catch (err) {
        console.log(err);
      }
    };

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
