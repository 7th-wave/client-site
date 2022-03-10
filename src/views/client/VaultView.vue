<template>
  <div class="space-y-4 w-full font-inter py-14 px-6">
    <div class="w-full text-center pb-4">
      <span class="text-4xl font-medium text-gray-900"
        >The caveman, ca. 2008</span
      >
    </div>
    <div class="w-full font-inter grid lg:grid-cols-5 gap-5">
      <div
        class="
          w-full
          rounded-md
          shadow-md
          overflow-hidden
          img-container
          col-span-3
        "
      >
        <img
          src="/images/sneakers/Cave_Man_Banksy.jpg"
          class="w-full h-full "
          alt=""
        />
      </div>
      <div class="w-full flex items-start flex-col space-y-2 col-span-2">
        <div
          class="
            w-full
            rounded-md
            bg-white
            shadow-md
            py-4
            px-2
            flex flex-col
            items-start
            space-y-4
          "
        >
          <span class="text-xl font-semibold text-gray-900">NFT Subtitle</span>
          <p class="text-left text-lg font-normal text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
          <p class="text-left text-lg font-normal text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p class="text-left text-lg font-normal text-black">
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
        <div class="grid lg:grid-cols-2 gap-2 w-full">
          <div
            class="
              w-full
              bg-white
              rounded-md
              shadow-md
              flex
              items-center
              space-x-2
              px-2
              py-2
            "
          >
            <span class="text-lg text-gray-500 font-semibold"
              >Artist:</span
            >
            <span class="text-lg text-gray-900 font-normal">Banksy</span>
          </div>
          <div
            class="
              w-full
              bg-white
              rounded-md
              shadow-md
              flex
              items-center
              space-x-2
              px-2
              py-2
            "
          >
            <span class="text-lg text-gray-500 font-semibold">Dimensions:</span>
            <span class="text-lg text-gray-900 font-normal">7 × 50 × 12 in</span>
          </div>
        </div>
        <div class="grid lg:grid-cols-2 gap-2 w-full">
          <div
            class="
              w-full
              bg-white
              rounded-md
              shadow-md
              flex
              items-center
              space-x-2
              px-2
              py-2
            "
          >
            <span class="text-lg text-gray-500 font-semibold"
              >Creation Date:</span
            >
            <span class="text-lg text-gray-900 font-normal">2008</span>
          </div>
          <div
            class="
              w-full
              bg-white
              rounded-md
              shadow-md
              flex
              items-center
              space-x-2
              px-2
              py-2
            "
          >
            <span class="text-lg text-gray-500 font-semibold">Medium:</span>
            <span class="text-lg text-gray-900 font-normal">Graffiti</span>
          </div>
        </div>
        <div class="grid lg:grid-cols-2 gap-2 w-full">
          <div
            class="
              w-full
              bg-white
              rounded-md
              shadow-md
              flex
              items-center
              space-x-2
              px-2
              py-2
            "
          >
            <span class="text-lg text-gray-500 font-semibold"
              >Location:</span
            >
            <span class="text-lg text-gray-900 font-normal">Miami</span>
          </div>
          
        </div>
      </div>
    </div>

    <MintsInfosCards  />
    <FractionCard :goBack="true"/>
  </div>
</template>


<script>
import MintsInfosCards from "@/components/cards/MintsInfosCards.vue";
import FractionCard from "@/components/cards/FractionCard.vue";
export default {
  setup() {
    return {};
  },
  components: {
    MintsInfosCards,
    FractionCard,
  },
};
</script>

<style scoped>
.img-container {
  height: 762px;
}
</style>