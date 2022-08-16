<template>
  <div
    class="
      inline-flex
      items-center
      justify-center
      w-full
      h-20
      border-2 border-gray-200
      rounded-lg
    "
  >
    <div class="w-full items-center
      justify-center inline-flex h-20" v-for="(stat, index) of stats" :key="index">
      <div class="w-0.5 h-full bg-gray-200" v-if="index > 0" />
      <div class="flex items-center justify-center flex-1 h-full" >
        <div class="inline-flex flex-col items-center justify-start">
          <p class="text-sm leading-tight text-gray-500">{{ stat.name }}</p>
          <div class="inline-flex items-end justify-start">
            <div class="flex flex-col space-x-2 items-center justify-start">
              <p class="text-lg font-semibold leading-normal">{{ stat.value }}</p>
              <div v-if="stat.name == 'Minted'">
                <Toggle @on:selected="sendToParent" :label="'Show Minted'" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Toggle from "@/components/Forms/Toggle.vue"
export default {
  props: ['stats'],
  emits: ['on:switch'],
  components: {Toggle},
  setup(props, {emit}) {
    const route = useRoute();
    const getParams = computed(() => route.params.id);

    //const { vault } = toRefs(props)

    /* const calculations = computed(() => {
      const ownerFractions = (vault.value.supply * vault.value.asset_owner_fractions) / 100;
      const jxFractions = (vault.value.supply * vault.value.jx_fractions) / 100;
      const salesFractions = ((vault.value.supply - (ownerFractions + jxFractions)) * vault.value.max_fractions) / 100;
      const totalVault = vault.value.reserved_price * vault.value.supply;

      return {ownerFractions, jxFractions, salesFractions, totalVault};
    }); */

    const sendToParent = (event) => {
      emit('on:switch', event)
    }

    return {
      getParams,
      sendToParent
      //calculations
    };
  },
};
</script>