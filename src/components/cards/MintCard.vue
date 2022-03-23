<template>
  <div
    class="
      w-full lg:justify-between
      rounded-md
      shadow-md
      bg-primary-500
      py-5
      px-3
      flex
      lg:items-center
      font-inter lg:flex-row lg:space-y-0 flex-col space-y-4 items-start
    "
  >
    <div class="  flex lg:items-center lg:space-x-4 lg:flex-row lg:space-y-0 flex-col items-start space-y-4"
    :class="{' lg:w-11/12':cardtype == 'edit'}"
    >
      <p class="text-base text-white font-semibold">
        Which Blockchain do you <br class=" hidden lg:block"> want to use for your NFT?
      </p>
      <div
        class="
          bg-white
          rounded-sm
          shadow-sm
          flex
          items-center
          justify-between
          px-2 py-2
          cursor-pointer space-x-6
        "
      >
        <div class="flex items-center space-x-2">
          <ItrIcon />
          <span class="text-primary-500 text-sm font-inter">ETHEREUM</span>
        </div>
        <IconChevron class="top" />
      </div>
      <p class="text-base text-white font-semibold" v-if="cardtype == 'mint'">
        Ready to create your NFT? <br class=" hidden lg:block"> Minting is IRREVERSABLE
      </p>
      <button
      @click="MintIt"
      v-if="cardtype == 'mint'"
        class="
          text-primary-500
          font-medium
          text-base
          bg-white
          py-2
          px-4
          rounded-sm
          shadow-sm
        "
      >
        MINT NFT ASSET
      </button>
    </div>
    <div class=" flex items-center space-x-2" v-if="cardtype == 'mint'">
      <div class=" hidden lg:block">
        <svg
          width="3"
          height="50"
          viewBox="0 0 3 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.77734"
            y1="4.37114e-08"
            x2="1.77734"
            y2="50"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      </div>
      <span class="text-base text-white font-semibold">
        In doubt EDIT and <br class=" hidden lg:block"> request a revision
      </span>
      <button @click="nextStep" class=" text-white font-medium text-base font-inter border border-white py-2 px-4 rounded-sm">EDIT</button>
    </div>
     <div class=" w-full flex lg:flex-row flex-col items-start space-y-2 lg:space-y-0 lg:items-center lg:space-x-2" v-if="cardtype == 'edit'">
      <div class=" hidden lg:block">
        <svg
          width="3"
          height="50"
          viewBox="0 0 3 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.77734"
            y1="4.37114e-08"
            x2="1.77734"
            y2="50"
            stroke="white"
            stroke-width="2"
          />
        </svg>
      </div>
      <span class="text-base leading-6 font-semibold text-white">
        We will review your changes and send it back for you to MINT your NFT Assets. You may also contact us below 
      </span>
      <button class=" text-white font-medium text-base font-inter border border-white py-2 px-4 rounded-sm whitespace-nowrap">SEND FOR REVISION</button>
    </div>
  </div>
</template>


<script>
import ItrIcon from "../Icons/ItrIcon.vue";
import IconChevron from "../Icons/IconChevron .vue";

export default {
 props: {
   cardtype: {
     type: [String],
     required: true,
     default: "mint",
     // enum: ["mint", "edit"]
   },
 },
  components: {
    ItrIcon,
    IconChevron,
  },
  methods:{
      MintIt(){
        this.$emit("isminted");
      },
      nextStep(){
        this.$emit("nextStep");
      }
  }
};
</script>

<style scoped>
.top {
  transform: rotate(180deg);
}
</style>