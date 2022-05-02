<template>
  <button
    :type="typeBtn"
    @click="submit"
    :class="[
      'focus:outline-none inline-flex items-center justify-center shadow-sm uppercase',
      sizeClass,
      styleClass,
      typeClass,
      custom
    ]"
  >
    <slot></slot>
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

        case 'xlarge':
          return 'text-xl leading-8 font-bold px-8 py-6';
        case 'large':
          return 'text-lg leading-7 font-bold px-6 py-4';
        case 'medium':
          return 'px-5 py-3 text-md leading-6 font-medium';
        case 'small':
          return 'px-3 py-2 text-sm leading-4 font-medium';
        case 'tiny':
          return 'px-3 py-2 text-xs leading-4 font-medium';
        default:
          return 'px-4 py-2 text-sm text-base leading-6 font-medium';
      }
    }

    function defineStyleClass(style) {
      switch (style) {
        case 'primary':
          return 'bg-primary-500 text-white hover:bg-primary-600';
        case 'outlined':
          return 'border border-primary-500 text-primary-500 hover:bg-primary-600 hover:text-white';
        case 'secondary':
          return 'bg-secondary-500 text-white hover:bg-secondary-600';
        case 'black':
          return 'bg-gray-900 text-white hover:bg-gray-900';
        default:
          return 'bg-primary-500 text-white hover:bg-primary-600';
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