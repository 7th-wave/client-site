<template>
  <div
    class="
      account
      py-4
      sm:py-4
      lg:py-16
      relative
      mx-auto
      bg-gray-100
      font-inter
      space-y-4
    "
  >
    <!-- <div class="lg:hidden">
      <Navbar />
    </div> -->
    <div
      class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center space-y-4"
    >
      <h1 class="sm:text-4xl text-2xl font-medium">
        {Client Username} Collection
      </h1>
    </div>
    <div class="w-full flex bg-white px-4 py-5 text-center">
      <div class="m-auto flex flex-col items-center">
        <div class="w-56 h-56 rounded-full bg-gray-200">
          <img
            class="w-full h-full object-cover"
            src="/images/Avatar3.png"
            alt=""
          />
        </div>
        <div class="flex flex-col items-start space-y-1">
          <span class="text-lg font-medium text-gray-900">@username</span>
          <span class="text-primary-500 font-medium text-sm"
            >0xE881...4567</span
          >
        </div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto px-4 w-full">
      <div class="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8">
        <VaultItem
          :url="{
            name: 'Vault',
            params: { id: item.id },
          }"
          class="cursor-pointer"
          v-for="(item, index, key) in getData"
          :key="key"
          :vault="item"
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
                class="text-sm font-medium font-inter text-gray-900 text-center"
                >{{ item.creator }}</span
              >
            </div>
          </template>
        </VaultItem>
      </div>
    </div>
  </div>
</template>

<script>
// import Navbar from "@/components/Layouts/Navbar.vue";
import VaultItem from "@/components/Shared/VaultItem.vue";

// @ is an alias to /src
export default {
  components: {
    // GalleryClient,
    // Navbar,
    VaultItem,
  },
  data() {
    return {
      vaults: [
        {
          id: "1",
          name: "Nike Collection",
          token: "SNEAKER",

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
          id: "6",
          name: "Basket Name",
          token: "SNEAKER",
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
          id: "5",
          name: "Basket Name",
          token: "SNEAKER",
          fractions: 58,
          available: "49%",
          valuation: "$2M",
          nfts: [
            {
              name: "Nft2",
              image: "03.png",
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
          id: "2",
          name: "Air Mags",
          token: "SNEAKER",
          fractions: 58,
          available: "49%",
          valuation: "$2M",
          nfts: [
            {
              name: "Nft4",
              image: "04.png",
            },
            {
              name: "Nft2",
              image: "02.png",
            },
            {
              name: "Nft3",
              image: "03.png",
            },
          ],
        },
        {
          id: "3",
          name: "Springers",
          token: "SNEAKER",
          fractions: 58,
          available: "49%",
          valuation: "$2M",
          nfts: [
            {
              name: "Nft2",
              image: "05.png",
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
          id: "4",
          name: "Jordans",
          token: "SNEAKER",
          fractions: 58,
          available: "49%",
          valuation: "$2M",
          nfts: [
            {
              name: "Nft2",
              image: "06.png",
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
  computed: {
    getData() {
      return this.vaults;
    },
  },
  methods: {
    goDetails(id) {
      this.$router.push({
        name: "CollectionDetails",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>
