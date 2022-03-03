<template>
  <div class="w-full rounded-md p-4 shadow-md bg-white max-h-20">
    <div class="w-full flex items-start space-x-2">
      <IconLockOpen v-if="open" />
      <IconLockClose v-else/>
      <div class="flex flex-col items-start w-full space-y-1">
        <span>Connect</span>
        <div class="flex items-center justify-between w-full">
          <span class="text-gray-500 font-inter text-sm">02/25/2022</span>
          <span class="text-gray-500 font-inter text-sm">192.158.1.38</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconLockOpen from "../Icons/IconLockOpen.vue";
import IconLockClose from "../Icons/IconLockClose.vue";

export default {
    props:{
        open:{
            type:Boolean,
            default:true
        }
    },
  components: {
    IconLockOpen,
    IconLockClose,
  },
};
</script>