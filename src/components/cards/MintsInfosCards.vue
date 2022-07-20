<template>
  <div class="grid lg:grid-cols-4 gap-4">
    <div
      class="
        flex
        justify-between
        items-center
        w-full
        bg-white
        rounded-md
        shadow-md
        py-2
        px-2
      "
    >
      <div class="flex items-center space-x-2 px-2 py-2">
        <span class="text-lg text-gray-500 font-semibold">Artist:</span>
        <span class="text-lg text-gray-900 font-normal">Banksy</span>
      </div>
      <div>
        <ItrIcon />
      </div>
    </div>
    <div
      class="
        flex
        justify-between
        items-center
        w-full
        bg-white
        rounded-md
        shadow-md
        px-2
      "
    >
      <div class="flex items-center space-x-2 px-2 py-2">
        <span class="text-lg text-gray-500 font-semibold">Smart Contract:</span>
        <span class="text-lg text-primary-500 font-normal">{{ nft.contractAddress }}</span>
      </div>
      <div class="cursor-pointer">
        <DocumentDuplicateIcon />
      </div>
    </div>
 <div
      class="
        flex
        justify-between
        items-center
        w-full
        bg-white
        rounded-md
        shadow-md
        px-2
      "
    >
      <div class="flex items-center space-x-2 px-2 py-2">
        <span class="text-lg text-gray-500 font-semibold">Mint Date:</span>
        <span class="text-lg text-gray-900 font-normal">02/04/2022</span>
      </div>
     
    </div>
    <div
      class="
        flex
        justify-between
        items-center
        w-full
        bg-white
        rounded-md
        shadow-md
        px-2
      "
    >
      <div class="flex items-center space-x-2 px-2 py-2">
        <span class="text-lg text-gray-500 font-semibold">Owner:</span>
        <span class="text-lg text-primary-500 font-normal">{{nft.blockChainOwner ? nft.blockChainOwner.replace(nft.blockChainOwner.substring(8,nft.blockChainOwner.length - 4), "....") : 'N/A'}}</span>
      </div>
      <div class="cursor-pointer">
        <DocumentDuplicateIcon />
      </div>
    </div>
  </div>
</template>


<script>
import ItrIcon from "../../components/Icons/ItrIcon.vue";
import DocumentDuplicateIcon from "../../components/Icons/DocumentDuplicateIcon.vue";

export default {
  components: {
    ItrIcon,
    DocumentDuplicateIcon,
  },
};
</script>


<style scoped>
</style>