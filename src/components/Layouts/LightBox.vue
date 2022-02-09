<template>
  <vue-easy-lightbox
    scrollDisabled
    moveDisabled
    :visible="localVisible"
    :imgs="imgs"
    :index="index"
    @hide="close"
  >
    <template v-slot:toolbar="{ toolbarMethods }" v-if="localVisible && toolbarMethods">
      <button @click="toolbarMethods.zoomIn">zoom in</button>
      <button @click="toolbarMethods.zoomOut">zoom out</button>
      <button @click="toolbarMethods.rotateLeft">Anticlockwise rotation</button>
      <button @click="toolbarMethods.rotateRight">clockwise rotation</button>
    </template>
  </vue-easy-lightbox>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref, toRefs } from '@vue/reactivity'
import { onMounted, watch } from '@vue/runtime-core'

  export default {
    components: {
      VueEasyLightbox
    },
    props: ['images', 'visible'],
    setup(props, {emit}) {
      const imgs = ref('')
      const localVisible = ref(false)
      const index = ref(0)
      const { visible } = toRefs(props)

      onMounted(() => {
        localVisible.value = props.visible;
        imgs.value = props.images;
      })

      const close = () => {
        localVisible.value = false
        emit('on:close')
      }

      watch(visible, (val) => {
        localVisible.value = val;
      })

      return {
        imgs,
        index,
        localVisible,
        close
      }
    }
  }
</script>
