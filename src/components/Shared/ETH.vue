<template>
<div 
  :class="`h-${iconSize} w-${iconSize} card justify-center items-center`"
> 

<svg xmlns="http://www.w3.org/2000/svg" :class="`h-${iconSize } w-${iconSize}`" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#627EEA"/><g fill="#FFF" fill-rule="nonzero"><path fill-opacity=".602" d="M16.498 4v8.87l7.497 3.35z"/><path d="M16.498 4L9 16.22l7.498-3.35z"/><path fill-opacity=".602" d="M16.498 21.968v6.027L24 17.616z"/><path d="M16.498 27.995v-6.028L9 17.616z"/><path fill-opacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><path fill-opacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/></g></g></svg>


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