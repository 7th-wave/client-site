<template>
    <svg width="80" height="80" viewBox="0 0 80 80" stroke="currentColor" class="transition-all duration-500 transform text-primary-900 hover:text-pink" :class="{'rotate-0': localState, 'rotate-225': !localState}" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 60L60 20M20 20L60 60" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>
<script>
import { ref, toRefs } from '@vue/reactivity'
import { watch } from '@vue/runtime-core';
export default {
    props: ['state'],
    setup(props) {
        const {state} = toRefs(props);
        const localState = ref(false);

        watch(state, (value) => {
            localState.value = value
        });

        return {
            localState
        }
    },
}
</script>