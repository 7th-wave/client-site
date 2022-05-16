<template>
  <div class="sm:col-span-5 space-y-4 w-full">
    <div class="w-full flex space-y-4 flex-col items-start">
      <div class="w-full">
        <Steps :step="steps" />
      </div>
      <div class="bg-white w-full py-4 sm:px-10 shadow-md rounded-md">
        <p class="text-center text-gray-900 text-lg font-inter font-normal">
          Choose the NFT(s) to send to a new vault, select your desired fraction
          type, set your vault’s details, then continue to fractionalize. Once
          complete, all fractions will appear in your wallet. Be aware, you
          cannot add to the NFTs in a vault once created. Read our guides for
          more information.
        </p>
      </div>
      <div
        class="w-full grid grid-cols-1 lg:grid-cols-7 lg:gap-4 space-y-4 lg:space-y-0"
      >
        <div class="col-span-5 w-full grid lg:grid-cols-2 gap-4">
          <VaultCard
            :Cardwidth="'w-72 md:w-full'"
            v-for="(item, index, key) in nfts"
            :key="key"
            :vault="item"
          />
        </div>
        <div class="col-span-2">
          <FractionForm :vaults="nfts" @on:clientSelected="loadNfts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VaultCard from "../../cards/VaultCard.vue";
import FractionForm from "@/components/Forms/FractionForm.vue";
import Steps from "@/components/Drawers/Steps.vue";
import { ref } from "vue";

const steps = [
  {
    id: "1",
    name: "Propose New Vault",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "current",
  },
  {
    id: "2",
    name: "Approve Vault",
    description: "Cursus semper viverra.",
    href: "#",
    status: "upcoming",
  },
  {
    id: "3",
    name: "Fractionalize",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
];
export default {
  components: {
    VaultCard,
    FractionForm,
    Steps,
  },
  setup() {
    const nfts = ref([]);

    const loadNfts = (event) => {
      nfts.value = event.nfts;
    };

    return {
      steps,
      nfts,
      loadNfts,
    };
  },
};
</script>
