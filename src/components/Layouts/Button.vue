<template>
  <button
    :type="typeBtn"
    @click="submit"
    :class="[
      'focus:outline-none inline-flex items-center justify-center shadow-sm',
      sizeClass,
      styleClass,
      typeClass,
      custom
    ]"
  >
    {{ name }}
  </button>
</template>

<script>
import { ref, toRefs } from '@vue/reactivity';
import { onMounted, watch } from '@vue/runtime-core';
export default {
  props: {
    name: { type: String, default: '' },
    btnStyle: { type: String, default: 'primary' },
    type: { type: String, default: 'default' },
    size: { type: String, default: 'medium' },
    customClass: { type: String, default: '' },
    typeButton: {type: String, default: 'button'}
  },
  setup(props, {emit}) {
    const sizeClass = ref('')
    const styleClass = ref('')
    const typeClass = ref('')
    const typeBtn = ref('')
    const custom = ref('')

    const { btnStyle, type, size, customClass, typeButton } = toRefs(props)

    function submit() {
      emit('on:submit');
    }

    function defineSizeClass(size) {
      switch (size) {
        case 'medium':
          return 'px-4 py-2 text-sm';
        case 'large':
          return 'px-6 py-3 text-base';
        case 'small':
          return 'px-3 py-2 text-sm leading-4';
        case 'tiny':
          return 'px-3 py-2 text-xs';
        default:
          return 'px-4 py-2 text-sm';
      }
    }

    function defineStyleClass(style) {
      switch (style) {
        case 'primary':
          return 'bg-teal-400 text-white hover:bg-teal-500';
        case 'outlined':
          return 'border border-teal-400 text-teal-400 hover:bg-teal-50';
        case 'secondary':
          return 'border border-gray-300 bg-white hover:bg-gray-50';
        case 'black':
          return 'bg-gray-900 text-white hover:bg-gray-900';
        default:
          return 'bg-teal-400 text-white hover:bg-teal-500';
      }
    }

    function defineTypeClass(type) {
      switch (type) {
        case 'default':
          return 'rounded-md';
        case 'full':
          return 'rounded-full';
        case 'none':
          return '';
        default:
          return 'rounded-sm';
      }
    }


    onMounted(function() {
      sizeClass.value = defineSizeClass(size.value);
      styleClass.value = defineStyleClass(btnStyle.value);
      typeClass.value = defineTypeClass(type.value);
      typeBtn.value = typeButton.value

      custom.value = customClass.value;
    })

    watch(size, (val) => sizeClass.value = defineSizeClass(val));

    watch(btnStyle, (val) => styleClass.value = defineStyleClass(val));

    watch(type, (val) => typeClass.value = defineTypeClass(val));

    watch(customClass, (val) => custom.value = val);


    return {
      submit,
      typeClass,
      styleClass,
      sizeClass,
      custom,
      typeBtn,
    }
  },
}
</script>