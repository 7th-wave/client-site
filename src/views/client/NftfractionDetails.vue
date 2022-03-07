<template>
  <div
    class="
      account
      sm:px-8
      py-4
      sm:py-4
      lg:py-16
      relative
      mx-auto
      bg-gray-100
      font-inter
      2xl:max-w-8xl w-full
    "
  >
    <div class="lg:hidden">
      <Navbar :type="'customer'" />
    </div>
    <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="text-4xl font-medium">Your NIKE Fractions</h1>
    </div>
    <div>
      <div class="lg:grid lg:grid-cols-7 lg:gap-6 rounded-lg">
        <div class="lg:col-span-2">
          <Menu />
        </div>
        <div
          class="
            mt-5
            md:mt-0
            flex flex-col items-start space-y-4 lg:col-span-5
          "
        >
         <CardTrade />
         <CardVaultDao />
         <FractionCard :goDown="false" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar_mobile.vue";
import FractionCard from "@/components/cards/FractionCard.vue";
import CardTrade from "@/components/cards/CardTrade.vue";
import CardVaultDao from "@/components/cards/CardVaultDao.vue";
// import VaultItem from "@/components/Shared/VaultItem.vue";
// @ is an alias to /src
export default {
  components: {
    Menu,
    Navbar,
    // VaultItem,
    FractionCard,
    CardTrade,
    CardVaultDao
  },
  data() {
    return {
      vaults: [
        {
          name: "Nike Sneakers",
          token: "SNEAKER",
          creator: "Nike",
          fractions: 58,
          available: "49%",
          valuation: "$2M",
          nfts: [
            {
              name: "Nft1",
              image: "01.png",
            },
            {
              name: "Nft2",
              image: "02.png",
            },
            {
              name: "Nft3",
              image: "03.png",
            },
            {
              name: "Nft4",
              image: "04.png",
            },
            {
              name: "Nft5",
              image: "05.png",
            },
            {
              name: "Nft6",
              image: "06.png",
            },
          ],
        },
        {
          name: "Nike Shoes",
          token: "SNEAKER",
          creator: "Nike",
          fractions: 58,
          available: "49%",
          valuation: "$2M",
          nfts: [
            {
              name: "Nft2",
              image: "02.png",
            },
            {
              name: "Nft3",
              image: "03.png",
            },
            {
              name: "Nft4",
              image: "04.png",
            },
          ],
        },
        {
          name: "Nike Shoes",
          token: "SNEAKER",
          creator: "Nike",
          fractions: 58,
          available: "49%",
          valuation: "$2M",
          nfts: [
            {
              name: "Nft2",
              image: "02.png",
            },
            {
              name: "Nft3",
              image: "03.png",
            },
            {
              name: "Nft4",
              image: "04.png",
            },
          ],
        },
      ],
    };
  },
};
</script>
