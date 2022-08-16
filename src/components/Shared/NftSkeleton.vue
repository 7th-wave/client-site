<template>
  <div class="rounded-lg overflow-hidden w-full relative" :class="bg">
    <slot name="badge" />
    <div class="slider relative">
      <Skeletor height="325" />
    </div>

    <div class="content w-full py-6 bg-white">
      <div class="data w-full flex items-center justify-between">
        <Skeletor />
        <div class="flex items-center justify-end pr-6">
          <Skeletor />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import { Skeletor } from "vue-skeletor";
import "vue-skeletor/dist/vue-skeletor.css";


export default {
  props: ["bg", "isLoading"],
  components: { Skeletor },
  setup() {},
};
</script>