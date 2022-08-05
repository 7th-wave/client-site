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
        <span class="text-lg text-gray-900 font-normal">Manfred Delgado</span>
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
        <span class="text-lg text-gray-500 font-semibold">Contract:</span>
        <span class="text-lg text-primary-500 font-normal">{{
          nft.contractAddress
            ? nft.contractAddress.replace(
                nft.contractAddress.substring(
                  8,
                  nft.contractAddress.length - 4
                ),
                "...."
              )
            : "N/A"
        }}</span>
      </div>
      <div class="cursor-pointer" @click="goToEtherscan(nft.contractAddress)">
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
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
        <span class="text-lg text-gray-900 font-normal">{{nft.mintDate ? new Date(nft.mintDate).toLocaleDateString("en-US") : 0 }}</span>
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
        <span class="text-lg text-primary-500 font-normal">{{
          nft.blockChainOwner
            ? nft.blockChainOwner.replace(
                nft.blockChainOwner.substring(
                  8,
                  nft.blockChainOwner.length - 4
                ),
                "...."
              )
            : "N/A"
        }}</span>
      </div>
      <div class="cursor-pointer" @click="goToEtherscan(nft.blockChainOwner)">
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
      </div>
    </div>
  </div>
</template>


<script>

export default {
  
  props: ["nft"],
  setup() {
    const goToEtherscan = (address) => {
      let url = 'https://rinkeby.etherscan.io/address/'+address;
      if (process.env.VUE_APP_NETWORK == 'mainnet') {
        url = 'https://etherscan.io/address/'+address;
      }
      window.open(url);
    } 

    return {
      goToEtherscan
    }
  },
};
</script>


<style scoped>
</style>