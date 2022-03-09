<template>
    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" :class="classes">
        <svg class="-ml-0.5 mr-1.5 h-2 w-2 " :class="classes_1" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3" />
        </svg>
        {{ label }}
  </span>
</template>
<script>
import { computed } from '@vue/reactivity'
export default {
    props: ['label', 'color'],
    setup(props) {
        const classes = computed(() => {
            return {
                'bg-indigo-100 text-indigo-800': !props.color,
                'bg-gray-100 text-gray-800': props.color == 'gray',
                'bg-white shadow-md text-gray-800': props.color == 'green',
            }
         
        });
         const classes_1 = computed(()=>{
             return {
                 'text-indigo-400': !props.color,
                 'text-white': props.color == 'gray',
                'text-secondary-500': props.color == 'green',
             }
          }) ;

        return {
            classes,
            classes_1
        }
    },
}
</script>