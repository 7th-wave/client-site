<template>
  <div
    class="
      inline-flex
      items-center
      justify-center
      w-full
      h-16
      border-t border-gray-200
    "
  >
    <div class="flex items-center justify-center flex-1 h-20 p-3">
      <div class="inline-flex flex-col items-start justify-start">
        <p class="text-sm leading-tight text-gray-500">Fractions</p>
        <div class="inline-flex items-end justify-start">
          <div class="flex space-x-2 items-end justify-start">
            <p class="text-lg font-semibold leading-normal">{{ vault.supply }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-0.5 h-full bg-gray-200" />
    <div class="flex items-center justify-center flex-1 h-20 p-3">
      <div class="inline-flex flex-col items-start justify-start">
        <p class="text-sm leading-tight text-gray-500">Available</p>
        <div class="inline-flex space-x-4 items-end justify-start">
          <div class="flex space-x-2 items-end justify-start">
            <p class="text-lg font-semibold leading-normal">{{ calculations.salesFractions }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-0.5 h-full bg-gray-200" />
    <div class="flex items-center justify-center flex-1 h-20 p-3">
      <div class="inline-flex flex-col items-start justify-start">
        <p class="text-sm leading-tight text-gray-500">Valuation</p>
        <div class="inline-flex items-end justify-start">
          <div class="flex space-x-2 items-end justify-start">
            <p class="text-lg font-semibold leading-normal">{{ calculations.totalVault }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, toRefs } from "vue";
import { useRoute } from "vue-router";
export default {
  props: ['vault'],
  setup(props) {
    const route = useRoute();
    const getParams = computed(() => route.params.id);

    const { vault } = toRefs(props)

    const calculations = computed(() => {
      const ownerFractions = (vault.value.supply * vault.value.asset_owner_fractions) / 100;
      const jxFractions = (vault.value.supply * vault.value.jx_fractions) / 100;
      const salesFractions = ((vault.value.supply - (ownerFractions + jxFractions)) * vault.value.max_fractions) / 100;
      const totalVault = vault.value.reserved_price * vault.value.supply;

      return {ownerFractions, jxFractions, salesFractions, totalVault};
    });

    return {
      getParams,
      calculations
    };
  },
};
</script>