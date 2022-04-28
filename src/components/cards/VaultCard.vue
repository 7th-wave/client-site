<template>
  <div class="rounded-md shadow-md overflow-hidden bg-white" :class="Cardwidth">
    <div class="border-b border-gray-300 h-80">
      <img :src="Vault.image" class="w-full h-80 object-cover" alt="" />
    </div>
    <div class="w-full h-px bg-gray-300"></div>
    <div class="bg-white flex-col flex items-start space-y-2 p-5">
      <span class="text-primary-500 text-sm font-inter font-normal">{{
        Vault.collection
      }}</span>
      <span class="text-gray-900 font-inter font-semibold text-xl">{{
        Vault.name
      }}</span>
    </div>
    <div class="w-full h-px bg-gray-300"></div>
    <div class="py-2 px-4">
      <button
        v-if="Vault.selected"
        @click="toggleItem"
        class="
          text-base
          font-medium font-inter
          text-center
          bg-black
          py-2
          w-full
          rounded-full
          text-white
          flex
        "
      >
        <div class="m-auto flex items-center space-x-3">
          <span>SELECTED</span>
          
        </div>
      </button>
      <button
        v-else
        @click="toggleItem"
        class="
          text-base
          font-medium font-inter
          text-center
          bg-white
          border border-gray-700
          py-2
          w-full
          rounded-full
          text-gray-900
        "
      >
        SELECT
      </button>
    </div>
  </div>
</template>


<script>

export default {

  props: {
    vault: {
      type: Object,
      required: true,
    },
    Cardwidth: {
      type: String,
      default: "w-full",
    },
  },
  data() {
    return {
      Vault: this.vault,
    };
  },
  methods: {
    toggleItem() {
      this.Vault.selected = !this.Vault.selected;
    },
  },
};
</script>