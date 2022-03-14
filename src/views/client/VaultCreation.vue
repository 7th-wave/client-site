 
<template>
  <div
    class="account sm:px-8 py-4 lg:py-16 relative bg-gray-100 font-inter w-full"
  >
    <div class="py-0 sm:py-2 lg:pt-0 lg:pb-8 text-center">
      <h1 class="text-4xl font-normal">Vault Creation</h1>
    </div>

    <div
      class="
        flex
        xl:flex-row
        lg:items-start lg:space-x-4
        w-full
        lg:space-y-0
        flex-col
        items-start
        space-y-4
      "
    >
      <div class="hidden xl:block">
        <Menu />
      </div>
      <div
        class="
          mt-5
          md:mt-0
          flex flex-col
          items-start
          space-y-4
          lg:col-span-5
          w-full
        "
      >
      
        <div class="w-full flex space-y-4 flex-col items-start">
           <div class=" w-full">
              <Steps :step="steps" />
           </div>
          <div class="bg-white w-full py-4 sm:px-10 shadow-md rounded-md">
            <p class="text-center text-gray-900 text-lg font-inter font-normal">
              Choose the NFT(s) to send to a new vault, select your desired
              fraction type, set your vault’s details, then continue to
              fractionalize. Once complete, all fractions will appear in your
              wallet. Be aware, you cannot add to the NFTs in a vault once
              created. Read our guides for more information.
            </p>
          </div>
          <div
            class="
              w-full
              grid grid-cols-1
              lg:grid-cols-7 lg:gap-4
              space-y-4
              lg:space-y-0
            "
          >
            <div class="col-span-5 w-full grid lg:grid-cols-2 gap-4">
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
    </div>
  </div>
</template>
 
<script>
import Menu from "@/components/Layouts/Menu.vue";
import VaultCard from "@/components/cards/VaultCard.vue";
import FractionForm from "@/components/Forms/FractionForm.vue";
import Steps from "@/components/Drawers/Steps.vue";
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
    Menu,
    Steps,
  },
  setup() {
    return {
      steps,
    };
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
