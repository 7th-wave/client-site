<template>
  <div
    class="py-8 2xl:max-w-8xl w-full 2xl:mx-auto account sm:py-4 lg:py-16 relative font-inter space-y-4"
  >
    <div class="flex md:pb-14 py-0 sm:py-4 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <span
        class="m-auto sm:text-4xl text-2xl text-center font-normal font-inter text-black"
        >{{
          getParams == "cvman" ? "The caveman, ca. 2008" : "Rare Sneakers"
        }}</span
      >
    </div>

    <div class="w-full md:pb-24">
      <VaultSlideShow :slides="getSlides" />
    </div>
    
    <div class="max-w-7xl mx-auto px-4 py-4 grid lg:grid-cols-4 gap-4">
      <!-- left -->
      <div
        class="lg:col-span-3 col-span-4 w-full flex flex-col items-start space-y-5"
      >
        <span class="text-2xl text-black font-inter font-medium"
          >{{
          getParams == "cvman" ? "Own a piece of history" : "Get you Nike on"
        }}</span
        >
        <FractionCard :goDown="true" :goBack="false" />
        <p
          class="text-lg font-normal font-inter text-black bg-white py-3 px-4 shadow-md rounded-md"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </div>
      <!-- right -->
      <div class="w-full col-span-4 lg:col-span-1">
        <BuyFractionCard @on:login="doLogin" :registered="registered" />
      </div>
    </div>
    <div class="px-4 md:hidden">
      <span class="text-2xl text-black font-inter font-medium"
        >Top 10 Vault Owner</span
      >
    </div>
    <div class="max-w-7xl mx-auto px-4 py-4 grid lg:grid-cols-4 gap-4">
      <!-- left -->
      <FractionTable />
      <!-- right -->
      <div class="w-full col-span-4 lg:col-span-1 overflow-y-auto max-w-7xl">
        <span class="text-2xl text-black font-inter font-medium"
          >Activities</span
        >
        <LineChart />
        <div class="w-full pt-2">
          <Events />
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-4 pt-2">
      <div class="w-full py-3 bg-white border-2 rounded-md flex">
        <div class="flex items-center space-x-2 m-auto">
          <span class="text-base text-gray-700 font-medium font-inter"
            >VIEW ALL OWNERS & EVENTS</span
          >
          <div>
            <svg
              width="17"
              height="14"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1667 1.16663L16 6.99996M16 6.99996L10.1667 12.8333M16 6.99996L1 6.99996"
                stroke="#9CA3AF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto space-y-4 px-4 pt-8">
      <div>
        <span class="text-2xl text-black font-inter font-medium"
          >All {{ getParams == "cvman" ? "CVMAN" : "NIKE" }} Vault Assets</span
        >
      </div>
      <div class="grid lg:grid-cols-3 gap-8" id="CategoryCards">
        <CategoryCard
          @click="GoToCategory"
          v-for="(category, index, key) in getData"
          :key="key"
          :category="category"
        >
          <template #image>
            <img
              class="w-full h-full object-cover border-b"
              :src="category.image"
              alt=""
            />
          </template>

          <template #subtitle>
            <span
              class="text-sm font-inter font-medium text-primary-500 cursor-pointer"
              >{{ category.title }}</span
            >
          </template>
          <template #title>
            <span class="text-gray-900 text-xl font-semibold font-inter">{{
              category.name
            }}</span>
          </template>
        </CategoryCard>
      </div>
    </div>
  </div>
</template>

<script>
// import InteriorPage from "../../components/Layouts/InteriorPage.vue";
import FractionCard from "../../components/cards/FractionCard.vue";
import BuyFractionCard from "../../components/cards/BuyFractionCard.vue";
import VaultSlideShow from "../../components/SlideShow/VaultSlideShow.vue";
import Events from "../../components/cards/Events.vue";
import CategoryCard from "../../components/cards/CategoryCard.vue";
import LineChart from "@/components/Drawers/LineChart.vue";
import FractionTable from "@/components/tables/FractionTable.vue";
export default {
  components: {
    FractionCard,
    //InteriorPage,
    VaultSlideShow,
    BuyFractionCard,
    CategoryCard,
    Events,
    LineChart,
    FractionTable,
  },
  props: ['registered'],
  computed: {
    getParams() {
      return this.$route.params.id;
    },
    getData() {
      if (this.getParams == "cvman") {
        return this.categories1;
      }
      return this.categories;
    },
    getSlides() {
      if (this.getParams == "cvman") {
        return this.slide;
      }
      return this.slides;
    },
  },
  methods: {
    GoToCategory() {
      if (this.getParams == "cvman") {
        this.$router.push({ name: "VaultView", params: { id: "cvman" } });
      }
    },
    doLogin() {
      this.$emit('on:login');
    }
  },
  data() {
    return {
      categories: [
        {
          name: "Nike Waffle Sneakers",
          image: "/images/sneakers/01.png",
          title: "Sneakers Collection",
        },
        {
          name: "Basket Name",
          image: "/images/sneakers/02.png",
          title: "Sneakers Collection",
        },
        {
          name: "Basket Name",
          image: "/images/sneakers/03.png",
          title: "Sneakers Collection",
        },
        {
          name: "Air Mags",
          image: "/images/sneakers/04.png",
          title: "Sneakers Collection",
        },
        {
          name: "Springers",
          image: "/images/sneakers/red.png",
          title: "Sneakers Collection",
        },
        {
          name: "Jordans",
          image: "/images/sneakers/06.png",
          title: "Sneakers Collection",
        },
      ],
      categories1: [
        {
          name: "The caveman, ca. 2008",
          image: "/images/sneakers/caveman.png",
          title: "Fine Art ",
        },
      ],
      slides: [
        {
          image: "/images/sneakers/01.png",
          name: "Books",
        },
        {
          image: "/images/sneakers/02.png",
          name: "Books",
        },
        {
          image: "/images/sneakers/03.png",
          name: "Books",
        },
      ],
      slide: [
        {
          image: "/images/sneakers/Cave_Man_Banksy.jpg",
          name: "Books",
        },
      ],
    };
  },
};
</script>
