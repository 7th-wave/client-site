<template>
  <div class="py-8  2xl:max-w-8xl w-full 2xl:mx-auto">
    <div class="flex pb-14">
      <span
        class="m-auto text-4xl text-center font-normal font-inter text-black"
        >{{getParams == 'cvman' ? 'The caveman, ca. 2008' : 'Nike Collection'}}</span
      >
    </div>

    <div class="w-full pb-24">
      <VaultSlideShow :slides="getSlides" />
    </div>

    <div class="w-full px-8 py-4 grid lg:grid-cols-4 gap-4">
      <!-- left -->
      <div class="lg:col-span-3 col-span-4 w-full flex flex-col items-start space-y-5">
        <span class="text-2xl text-black font-inter font-medium"
          >{Vault Sub-Title}</span
        >
        <FractionCard :goDown="true" :goBack="false" />
        <p
          class="
            text-lg
            font-normal font-inter
            text-black
            bg-white
            py-3
            px-4
            shadow-md
            rounded-md
          "
        >
          {Vault Description} Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </div>
      <!-- right -->
      <div class="w-full col-span-4 lg:col-span-1">
        <BuyFractionCard />
      </div>
    </div>
    <div class="w-full px-8 py-4 grid lg:grid-cols-4 gap-4 overflow-y-auto">
      <!-- left -->
      <div class="lg:col-span-3 col-span-4 w-full flex flex-col items-start space-y-5">
        <span class="text-2xl text-black font-inter font-medium"
          >Top 10 Vault Owner</span
        >
        <Table :headers="tableData.headers" :data="tableData.data">
          <template #body>
            <tbody
              class="bg-white divide-y divide-gray-200 shadow-md w-full h-full"
              v-for="n in 9"
              :key="n"
            >
              <td
                class="
                  px-6
                  py-2
                  whitespace-nowrap
                  text-sm
                  font-medium
                  text-gray-900
                "
              >
                #1
              </td>
              <td
                class="
                  px-6
                 py-2
                  whitespace-nowrap
                  text-sm
                  font-medium
                  text-gray-900
                "
              >
                <div class="flex items-center -space-x-2">
                  <div
                    class="w-10 h-10 rounded-full bg-gray-400 overflow-hidden"
                  >
                    <img
                      class="w-full h-full object-cover"
                      src="/images/avatar.png"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-col items-start -space-y-8">
                    <span
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-sm
                        font-medium
                        text-gray-900
                      "
                      >0xb7BC...eA21</span
                    >
                    <span
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-sm
                        font-medium
                        text-gray-500
                      "
                      >0xb7BC...eA21</span
                    >
                  </div>
                </div>
              </td>
              <td
                class="
                  px-6
                  py-2
                  whitespace-nowrap
                  text-sm
                  font-medium
                  text-gray-900
                "
              >
                48,640,595.584
              </td>
              <td
                class="
                  px-6
                  py-2
                  whitespace-nowrap
                  text-sm
                  font-medium
                  text-gray-900
                "
              >
                <span
                  class="
                    whitespace-nowrap
                    text-sm
                    font-medium
                    text-green-800
                    bg-green-100
                    rounded-2xl
                    py-1
                    px-6
                  "
                  >48.640%</span
                >
              </td>
              <td
                class="
                  px-6
                  py-2
                  whitespace-nowrap
                  text-sm
                  font-medium
                  text-gray-900
                "
              >
                <div class="flex flex-col items-start space-y-1">
                  <span
                    class="whitespace-nowrap text-sm font-medium text-gray-900"
                    >Ξ 8,166.345</span
                  >
                  <span
                    class="whitespace-nowrap text-sm font-medium text-gray-500"
                    >≈ $19,917,308.65</span
                  >
                </div>
              </td>
            </tbody>
          </template>
        </Table>
      </div>
      <!-- right -->
      <div class="w-full col-span-4 lg:col-span-1">
        <span class="text-2xl text-black font-inter font-medium"
          >Activities</span
        >
       <LineChart />
        <div class="w-full pt-2">
          <Events />
        </div>
      </div>
    </div>
    <div class="w-full px-8 pt-2">
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
    <div class="w-full space-y-4 px-8 pt-8">
      <div>
        <span class="text-2xl text-black font-inter font-medium"
          >All {{ getParams == 'cvman' ? 'CVMAN' : 'NIKE'}} Vault Assets</span
        >
      </div>
      <div class="grid   lg:grid-cols-3 gap-8">
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
              class="
                text-sm
                font-inter font-medium
                text-primary-500
                cursor-pointer
              "
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
import Table from "../../components/tables/table.vue";
import LineChart from '@/components/Drawers/LineChart.vue';
export default {
 
  components: {
    FractionCard,
    //InteriorPage,
    VaultSlideShow,
    BuyFractionCard,
    CategoryCard,
    Events,
    Table,
    LineChart,
  },
  computed: {
    getParams() {
      return this.$route.params.id;
    },
    getData(){
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
  methods:{
    GoToCategory(){
      if(this.getParams == 'cvman'){
        this.$router.push({ name: 'VaultView',params:{id: 'cvman'}});
      }
    }
  },
  data() {
    return {
      tableData: {
        headers: [
          {
            text: "RANK",
            key: "rank",
          },
          {
            text: "OWNERS",
            key: "owner",
          },
          {
            text: "QUANTITY",
            key: "quantity",
          },
          {
            text: "PERCENTAGE",
            key: "percentage",
          },
          {
            text: "VALUE",
            key: "value",
          },
        ],
        data: [
          {
            rank: "1",
            owner: "0x1",
            quantity: "6",
            percentage: "2",
            value: "100",
          },
          {
            rank: "2",
            owner: "0x2",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "3",
            owner: "0x3",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "4",
            owner: "0x4",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "5",
            owner: "0x5",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "6",
            owner: "0x6",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "7",
            owner: "0x7",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "8",
            owner: "0x8",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "9",
            owner: "0x9",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "10",
            owner: "0x10",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
        ],
      },

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
      categories1:[
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
          image: "/images/sneakers/01.png",
          name: "Books",
        },
        {
          image: "/images/sneakers/red.png",
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