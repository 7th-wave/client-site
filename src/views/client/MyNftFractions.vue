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
      w-full
    "
  >
    <div class="lg:hidden">
      <Navbar :type="'customer'" />
    </div>
    <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="text-4xl font-medium">My NFT Fractions</h1>
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
            lg:col-span-5
            grid
            lg:grid-cols-3
            grid-cols-1
            gap-4
          "
        >
          <VaultItem
            class=" cursor-pointer"
            @click="
              $router.push({
                name: 'My_fractions_details',
                params: { id: item.id },
              })
            "
            v-for="(item, index, key) in vaults"
            :key="key"
            :vault="item"
            bg="bg-white"
          >
            <template #badge>
              <div
                class="
                  z-50
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
                  >{{ item.creator }}</span
                >
              </div>
            </template>
          </VaultItem>
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
import VaultItem from "@/components/Shared/VaultItem.vue";
// @ is an alias to /src
export default {
  components: {
    Menu,
    Navbar,
    VaultItem,
  },
  data() {
    return {
      vaults: [
        {
          id: "1",
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
          id: "2",
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
          id: "3",
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
