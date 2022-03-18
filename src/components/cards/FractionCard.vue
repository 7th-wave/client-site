<template>
  <div class="w-full bg-white p-4 shadow-md rounded-md space-y-4">
    <div class="w-full flex sm:flex-row flex-col space-y-2 sm:space-y-0 justify-between items-start sm:items-center">
      <div class="flex sm:items-center items-start sm:flex-row sm:space-y-0 flex-col space-y-2 sm:space-x-2">
        <div
          class="
            z-10
            bg-white
            shadow-md
            py-1
            px-2
            rounded-3xl
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
          <span class="text-sm font-medium font-inter text-gray-900 text-center"
            >CVMAN</span
          >
        </div>

        <span class="text-xl font-inter font-medium text-gray-900">
          {{
            getParams == "cvman"
              ? "The caveman, ca. 2008 Collection CVMAN Fraction Data"
              : "Nike Collection NIKE Fraction Data"
          }}</span
        >
      </div>
      <div
        class="
          py-2
          px-4
          rounded-md
          shadow-sm
          bg-white
          flex
          items-center
          cursor-pointer
          border-2
        "
        v-if="goDown == true"
        @click="gotoVaults"
      >
        <span class="font-inter text-sm text-gray-700 font-medium"
          >VIEW VAULT ASSETS</span
        >
        <ArrowDownIcon class="w-5 h-3 text-primary-500" />
      </div>
       <div
        class="
          py-2
          px-4
          rounded-md
          shadow-sm
          bg-white
          flex
          items-center
          cursor-pointer
          border-2
        "
        v-else
        @click="Back"
      >
        <span class="font-inter text-sm text-gray-700 font-medium"
          >VIEW VAULT</span
        >
        <ArrowDownIcon class="w-5 h-3" :class="IconColor" />
      </div>
    </div>
    <div
      class="w-full border-2 rounded-md flex lg:flex-row flex-col lg:border-r-0"
    >
      <div class="lg:w-28 w-full flex flex-col items-start lg:border-r-2 lg:border-b-0 border-b-2 p-4">
        <span class="text-base text-gray-500 font-inter whitespace-nowrap">{{
          getParams == "cvman" ? "NFT" : "NFTs"
        }}</span>
        <span class="text-black font-inter text-2xl">
          {{ getParams == "cvman" ? "1" : "6" }}
        </span>
      </div>
      <div class="lg:w-28 w-full flex flex-col items-start lg:border-r-2 lg:border-b-0 border-b-2  p-4">
        <span class="text-base text-gray-500 font-inter whitespace-nowrap"
          >Fractions</span
        >
        <span class="text-black font-inter text-2xl"
          >{{ getParams == "cvman" ? "100M" : "2M" }}
        </span>
      </div>
      <div class="lg:w-40 w-full flex flex-col items-start lg:border-r-2 lg:border-b-0 border-b-2 p-4">
        <span class="text-base text-gray-500 font-inter whitespace-nowrap"
          >Uique Owners</span
        >
        <span class="text-black font-inter text-2xl whitespace-nowrap"
          >2530
        </span>
      </div>
      <div class="lg:w-40 w-full flex flex-col items-start lg:border-r-2 lg:border-b-0 border-b-2 p-4">
        <span class="text-base text-gray-500 font-inter whitespace-nowrap"
          >Collectable Supply</span
        >
        <span class="text-black font-inter text-2xl">49% </span>
        <span class="text-sm text-gray-500 font-inter whitespace-nowrap"
          >980,000 {{ getParams == "cvman" ? "CVMAN" : "NIKE" }}</span
        >
      </div>
      <div class="w-full flex flex-col items-start lg:border-r-2 p-4">
        <span class="text-base text-gray-500 font-inter whitespace-nowrap"
          >Implied Vault Valuation</span
        >
        <span class="text-black font-inter text-2xl whitespace-nowrap">
          {{ getParams == "cvman" ? "≈ $ 10,000,000.00" : "≈ $ 2,000,000.00" }}
        </span>
        <span class="text-sm text-gray-500 font-inter whitespace-nowrap"
          >≈ $1 / {{ getParams == "cvman" ? "CVMAN" : "NIKE" }}</span
        >
      </div>
    </div>
    <div
      class="
          w-56
        py-2
        px-4
        rounded-md
        shadow-sm
        bg-white
        flex
        items-center
        cursor-pointer
        border-2
        space-x-2
      "
    >
      <span
        class="font-inter text-sm text-gray-700 font-medium whitespace-nowrap"
        >VIEW SMART CONTRACT</span
      >
      <div>
        <svg
         class=" fill-current " :class="IconColor"
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10.4762V13.4762C0 15.1331 3.13401 16.4762 7 16.4762C10.866 16.4762 14 15.1331 14 13.4762V10.4762C14 12.1331 10.866 13.4762 7 13.4762C3.13401 13.4762 0 12.1331 0 10.4762Z"
            
          />
          <path
            d="M0 5.4762V8.4762C0 10.1331 3.13401 11.4762 7 11.4762C10.866 11.4762 14 10.1331 14 8.4762V5.4762C14 7.13305 10.866 8.4762 7 8.4762C3.13401 8.4762 0 7.13305 0 5.4762Z"
           
          />
          <path
            d="M14 3.4762C14 5.13305 10.866 6.4762 7 6.4762C3.13401 6.4762 0 5.13305 0 3.4762C0 1.81934 3.13401 0.476196 7 0.476196C10.866 0.476196 14 1.81934 14 3.4762Z"
            
          />
        </svg>
      </div>
    </div>
  </div>
</template>


<script>
import { ArrowDownIcon } from "@heroicons/vue/solid";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
 
  setup(props) {
    const route = useRoute();
    const getParams = computed(() => route.params.id);
    const router = useRouter();
    function gotoVaults() {
      window.scrollTo({
        top: 2400,
        behavior: "smooth",
      });
    }
    function Back(){
      if(props.url != ""){
        router.push(props.url);
      }else {
        router.back();
      }
     
    }
    return {
      gotoVaults,
      getParams,
      Back,
    };
  },
  props: {
    goDown: {
      type: Boolean,
      default: true,
    },
    goBack: {
      type: Boolean,
      default: false,
    },
     IconColor:{
      type:String,
      default:"text-primary-500"
    },
    url:{
      type:String,
      default:""
    }
  },
  components: { ArrowDownIcon },
};
</script>