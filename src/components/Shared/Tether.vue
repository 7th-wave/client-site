<template>
<div 
  :class="`h-${iconSize} w-${iconSize} card justify-center items-center`"
> 

<svg :class="`h-${iconSize } w-${iconSize}`" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#26A17B"/><path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"/></g></svg>
  

</div>
</template>

<script>
import { ref, toRefs } from '@vue/reactivity'
import { onMounted, watch } from '@vue/runtime-core'
export default {
  props: ['color', 'size'],
  setup(props) {
    const { color, size } = toRefs(props)

    const iconColor = ref("#A0A4B1")
    const iconSize = ref("5")

    onMounted(() => {
      iconColor.value = color.value || "#A0A4B1"
      iconSize.value = size.value || "5"
    })

    watch(color, (val) => {
      iconColor.val = val
    })
    watch(size, (val) => {
      iconSize.val = val
    })

    return {
      iconColor,
      iconSize
    }
  },
}
</script>