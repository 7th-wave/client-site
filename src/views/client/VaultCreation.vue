 
<template>
  <div
    class="
      account
      sm:px-2
      py-4
      lg:py-16
      relative
      bg-gray-100
      mx-auto
      font-inter 2xl:max-w-8xl w-full
    "
  >
    <div class="py-0 sm:py-2 lg:pt-0 lg:pb-8 text-center">
      <h1 class="text-4xl font-normal">Vault Creation</h1>
    </div>
    <div class="w-full flex space-y-4 flex-col items-start">
      <div class="bg-white flex py-8 lg:px-96">
        <p class="text-center text-xl font-inter font-normal">
          Choose the NFT(s) to send to a new vault, select your desired fraction
          type, set your vault’s details, then continue to fractionalize. Once
          complete, all fractions will appear in your wallet. Be aware, you
          cannot add to the NFTs in a vault once created. Read our guides for
          more information.
        </p>
      </div>
      <div
        class="
          w-full
          grid grid-cols-1
          lg:grid-cols-7 lg:gap-4
          space-y-4
          lg:space-y-0
          max-w-7xl
          mx-auto
        "
      >
        <div class="col-span-5 w-full grid lg:grid-cols-2 gap-8">
          <VaultCard
            v-for="(item, index, key) in Vaults"
            :key="key"
            :vault="item"
          />
        </div>
        <div class="col-span-2">
         <FractionForm :vaults="Vaults" />
        </div>
      </div>
    </div>
   
  </div>
</template>
 
<script>
import VaultCard from "@/components/cards/VaultCard.vue";
import FractionForm from '@/components/Forms/FractionForm.vue';
export default {
  components: {
    VaultCard,
    FractionForm
  },
  data() {
    return {
      errors: {
        Name: "",
        Category: "",
        Supply: "",
        Price: "",
        Ticker: "",
        Fractions: "",
        Jx: "",
        Owner: "",
        Fractions_owner: "",
      },
      form: {
        Name: "",
        Category: "",
        Supply: "",
        Price: "",
        Ticker: "",
        Fractions: "",
        Jx: "",
        Owner: "",
        Fractions_owner: "",
      },
      Vaults: [
        {
          selected: false,
          img: "/images/sneakers/01.png",
          collection: "Sneakers Collection",
          name: "Nike Waffle Sneakers",
        },
        {
          selected: false,
          img: "/images/sneakers/02.png",
          collection: "Sneakers Collection",
          name: "Nike Waffle Sneakers",
        },
        {
          selected: false,
          img: "/images/sneakers/03.png",
          collection: "Sneakers Collection",
          name: "Nike Waffle Sneakers",
        },
        {
          selected: false,
          img: "/images/sneakers/04.png",
          collection: "Sneakers Collection",
          name: "Nike Waffle Sneakers",
        },
        {
          selected: false,
          img: "/images/sneakers/05.png",
          collection: "Sneakers Collection",
          name: "Nike Waffle Sneakers",
        },
        {
          selected: false,
          img: "/images/sneakers/06.png",
          collection: "Sneakers Collection",
          name: "Nike Waffle Sneakers",
        },
      ],
    };
  },

 
};
</script>
