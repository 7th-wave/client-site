<template>
  <div class="w-full font-inter space-y-4 ">
    <div
      class="w-full overflow-hidden flex-grow" :class="{'rounded-lg': !info.image }"
    >
      <img v-if="info.image" :src="info.image" alt="" class="w-full bg-cover" />
    </div>
    <div class="flex flex-col items-start space-y-2">
      <span class="text-primary-900 font-medium text-2xl"> {{info.name}} </span>
      <span class="text-primary-900 font-medium text-xl"
        >{{info.title}}</span
      >
      <p class="text-lg font-normal text-gray-500">
        {{info.discription}}
      </p>
      <div class="flex items-center space-x-2">
        <a  target="_blank"   :href="info.linkedin" v-if="info.linkedin"> <IconLinkedin /></a>
        <a target="_blank"  :href="info.twitter" v-if="info.twitter"> <IconTwitter /></a>
      </div>
    </div>
  </div>
</template>



<script>
import IconLinkedin from "../Icons/IconLinkedin.vue";
import IconTwitter from "../Icons/IconTwitter.vue";
export default {
  components: {
    IconLinkedin,
    IconTwitter,
  },
  props: {
    info: {
      type: [Object],
      required: true,
    },
  },
};
</script>
