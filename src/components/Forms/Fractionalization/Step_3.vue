<template>
  <div class="space-y-4 w-full">
    <Steps :step="steps" v-if="!isminted"/>
        <Steps :step="steps_1"  v-else />
    <div class="w-full font-inter grid lg:grid-cols-2 gap-5">
      <div class="w-full rounded-md shadow-md overflow-hidden img-container">
        <img
          src="/images/categories/caveman.png"
          class="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div class="w-full flex items-start flex-col space-y-2">
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
            Perhaps the most famous figure in street art working today, Banksy
            is known for urban interventions that demonstrate irreverent wit and
            a biting political edge. Enhancing his mystique by maintaining an
            anonymous identity, the artist has modified street signs, illegally
            printed his own currency, and illicitly hung his own work in the
            Louvre and the Museum of Modern Art.
          </p>
          <p class="text-left text-lg font-normal text-black">
            He often uses spray paint and stencils in his critiques of
            consumerism, political authority, terrorism, and the status of art
            and its display. His street art, installations, and studio-produced
            works have been shown in Los Angeles, New York, London, Bethlehem,
            and beyond. His art has been subject to widespread interest on the
            secondary market and has fetched eight figures at auction.
          </p>
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
          <span class="text-lg text-gray-500 font-semibold">Artist:</span>
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
          <span class="text-lg text-gray-500 font-semibold">Location:</span>
          <span class="text-lg text-gray-900 font-normal">Miami</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import Feed from '../../Drawers/Feed.vue'
import Steps from "../../Drawers/Steps.vue";
const steps = [
  {
    id: "1",
    name: "Propose New Asset",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "complete",
  },
  {
    id: "2",
    name: "Mint your NFT",
    description: "Cursus semper viverra.",
    href: "#",
    status: "current",
  },
  {
    id: "3",
    name: "Mint Asset",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
  {
    id: "4",
    name: "Create a Vault",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
];

const steps_1 = [
  {
    id: "1",
    name: "Propose New Asset",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "complete",
  },
  {
    id: "2",
    name: "Mint your NFT",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "complete",
  },
  {
    id: "3",
    name: "Create a Vault",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "current",
  },
];
export default {
  props: {
    isminted: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  setup() {
    return {
      steps,
      steps_1,
    };
  },
  components: {
    Steps,
    // Feed
  },
};
</script>

<style scoped>
.img-container {
  height: 540.91px;
}
</style>