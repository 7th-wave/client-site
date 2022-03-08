<template>
  <div class="w-full rounded-md shadow-md p-4 font-inter bg-white">
    <div class="flex justify-between w-full items-center">
      <span class="text-base font-medium text-gray-700"
        >Your owned fractions</span
      >
      <span @click="PurchaseDetails" class="text-sm font-semibold text-primary-300 cursor-pointer"
        >View your vault purchases</span
      >
    </div>
    <div class="flex items-start flex-col space-y-1 pb-4">
      <span class="text-black font-normal text-sm"
        >10,000.00 <span class="font-semibold">NIKE</span></span
      >
      <span class="text-gray-500 font-normal text-xs">≈ $10,000.00</span>
      <span class="text-black font-normal text-sm"
        >0.5%<span class="font-semibold"> NIKE Vault</span></span
      >
      <span class="text-black text-base font-medium"
        >Your average net cost</span
      >
      <span class="text-black font-normal text-sm"
        >≈ $1.004708 / <span class="font-semibold">NIKE</span></span
      >
    </div>
    <div class="w-full bg-gray-300 h-px"></div>
    <div class="w-full flex items-center justify-between pt-4">
      <div class="flex items-start flex-col">
        <span class="text-base font-inter font-medium text-gray-700"
          >Current Exchange Market Price</span
        >
        <span class="text-black font-normal text-sm"
          >≈ $2.0345<span class="font-semibold">NIKE</span></span
        >
        <span class="text-gray-500 font-normal text-xs">≈ $20,345.00</span>
      </div>
      <div >
          <button class=" bg-secondary-500 px-6 py-2.5 rounded-md text-white text-base font-inter font-medium">TRADE ON EXCHANGE MARKET</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods:{
    PurchaseDetails(){
      this.$router.push({ name: 'PurchasseHistory' });
    }
  }
}
</script>