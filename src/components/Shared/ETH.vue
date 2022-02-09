<template>
<div 
  :class="`h-${iconSize} w-${iconSize} card justify-center items-center`"
> 
  <svg :class="`h-${iconSize } w-${iconSize}`" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.636364 12H8V10.75H0.636364V12ZM0.659091 1.61364H7.88636V0.363636H0.659091V1.61364ZM1.31818 6.70455H7.27273V5.45455H1.31818V6.70455Z" fill="#6B7280"/>
  </svg>

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