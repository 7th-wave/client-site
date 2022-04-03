<template>
<div 
  :class="`h-${iconSize} w-${iconSize} card justify-center items-center`"
> 
  <svg :class="`h-${iconSize } w-${iconSize}`" width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.842 12.0468V12.0443C14.708 12.0541 14.017 12.0955 12.4752 12.0955C11.2443 12.0955 10.3778 12.0589 10.0731 12.0443V12.048C5.33458 11.8396 1.79777 11.0145 1.79777 10.0273C1.79777 9.04131 5.33458 8.21622 10.0731 8.00416V11.2265C10.3826 11.2485 11.2699 11.3009 12.496 11.3009C13.967 11.3009 14.7043 11.2399 14.842 11.2278V8.00659C19.5708 8.21744 23.0991 9.04253 23.0991 10.0273C23.0991 11.0145 19.5708 11.8371 14.842 12.0468V12.0468ZM14.842 7.67144V4.78788H21.4404V0.390625H3.47477V4.78788H10.0731V7.67022C4.71058 7.91641 0.677734 8.97916 0.677734 10.2515C0.677734 11.5239 4.71058 12.5854 10.0731 12.8328V22.0734H14.842V12.8304C20.196 12.5842 24.2191 11.5227 24.2191 10.2515C24.2191 8.98038 20.196 7.91885 14.842 7.67144" fill="#6B7280"/>
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