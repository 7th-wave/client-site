<template>
  <account-layout>
    <div class="xl:hidden">
      <Navbar  />
    </div>
    <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="sm:text-4xl text-2xl font-medium">
        Your {{ getParams == "cvman" ? "CVMAN" : "NIKE" }} Fractions
      </h1>
    </div>
    <div>
        <div class=" xl:grid xl:grid-cols-7 xl:gap-8 gap-2 sm:m-auto">
        <div class="sm:col-span-2 sm:pb-4  space-y-4">
          <Menu class="hidden xl:block" />
          <VaultItem
            class="cursor-pointer"
            :url="{
              name: 'Vault',
              params: { id: getData.id },
            }"
            :vault="getData"
            bg="bg-white"
            badgecolor="green"
          >
            <template #badge>
              <div
                class="
                  z-10
                  bg-white
                  py-1
                  px-2
                  rounded-3xl
                  absolute
                  top-3
                  right-3
                  flex
                  items-center
                  space-x-1.5
                "
              >
                <div>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10.4258" cy="10.5" r="10" fill="#1ACE99" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.23802 6.54959C6.61428 6.51735 8.77936 5.61072 10.4261 4.13684C12.0728 5.61072 14.2379 6.51735 16.6142 6.54959C16.7005 7.06364 16.7454 7.59172 16.7454 8.1303C16.7454 12.2575 14.1077 15.7686 10.4261 17.0698C6.74451 15.7686 4.10681 12.2575 4.10681 8.1303C4.10681 7.59172 4.15173 7.06364 4.23802 6.54959ZM13.5029 9.62729C13.8935 9.23677 13.8935 8.6036 13.5029 8.21308C13.1124 7.82255 12.4793 7.82255 12.0887 8.21308L9.63619 10.6656L8.76347 9.7929C8.37295 9.40238 7.73979 9.40238 7.34926 9.7929C6.95874 10.1834 6.95874 10.8166 7.34926 11.2071L8.92908 12.7869C9.11662 12.9745 9.37097 13.0798 9.63619 13.0798C9.90141 13.0798 10.1558 12.9745 10.3433 12.7869L13.5029 9.62729Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span
                  class="
                    text-sm
                    font-medium font-inter
                    text-gray-900 text-center
                  "
                  >{{ getData.creator }}</span
                >
              </div>
            </template>
          </VaultItem>
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
          <CardTrade />
          <active-buy-outs-card />
          <proposal-votes-card />
          <CardVaultDao />
          <FractionCard
            :goDown="false"
            :goBack="true"
            IconColor=" text-gray-400"
            :url="{
              name: 'Vault',
              params: { id: getData.id },
            }"
          />
        </div>
      </div>
    </div>
  </account-layout>
</template>
<style scoped></style>
<script>
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import FractionCard from "@/components/cards/FractionCard.vue";
import CardTrade from "@/components/cards/CardTrade.vue";
import CardVaultDao from "@/components/cards/CardVaultDao.vue";
import VaultItem from "@/components/Shared/VaultItem.vue";
import AccountLayout from "../../components/Layouts/AccountLayout.vue";
import ProposalVotesCard from '../../components/cards/ProposalVotesCard.vue';
import ActiveBuyOutsCard from '../../components/cards/ActiveBuyOutsCard.vue';
// @ is an alias to /src
export default {
  components: {
    Menu,
    Navbar,
    VaultItem,
    FractionCard,
    CardTrade,
    CardVaultDao,
    AccountLayout,
    ProposalVotesCard,
    ActiveBuyOutsCard,
  },
  computed: {
    getParams() {
      return this.$route.params.id;
    },
    getData() {
      if (this.getParams == "cvman") {
        return this.vaults[2];
      } else if (this.getParams == "mjs") {
         return this.vaults[0];
      } else {
         return this.vaults[1];
      }
      
    },
  },
  data() {
    return {
      vaults: [
        {
          id: "mjs",
          name: "The MJ's Shattered Backboard",
          token: "MJS",
          creator: "Sneakers",
          fractions: "1M",
          available: "30%",
          valuation: "$1.5M",
          nfts: [
            {
              name: "Nft1",
              image: "03.png",
            },
          ],
        },
        {
          id: "moon",
          name: "Rare Sneakers",
          token: "MOON",
          creator: "Sneakers",
          fractions: "1M",
          available: "30%",
          valuation: "$2.5M",
          nfts: [
            {
              name: "Nike Waffle Racing Flat Moon Shoe",
              image: "Waffle_Racing_Flats_1.jpg",
            },
          
          ],
        },
        {
          id: "cvman",
          name: "The caveman, ca. 2008",
          token: "CVMAN",
          creator: "Fine Art",
          fractions: "1M",
          available: "49%",
          valuation: "$10M",
          nfts: [
            {
              name: "Nft2",
              image: "caveman.png",
            }
          ],
        },
      ],
    };
  },
};
</script>
