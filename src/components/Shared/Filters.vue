<template>
    <div class="grid grid-cols-1
                gap-x-4
                sm:gap-x-4" :class="[`lg:grid-cols-${localFilters.length}`]">
        <div class="sm:items-start text-left sm:mt-0" v-for="(filter, index) of localFilters" :key="index">
            <label class="block text-sm font-medium text-gray-700 mt-6">
            {{ filter.name }}
            </label>
            <div
            class="
                mt-2
                
            "
            >
            <div class="relative mt-1">
                <ListBox :options="filter.options" :filter="filter.key" @on:selected="filterNow" />
                
            </div>
            
            </div>
        </div>
    </div>
</template>
<script>
import { ref, toRefs } from '@vue/reactivity'
import { watch } from '@vue/runtime-core';
import ListBox from '@/components/Forms/ListBox.vue'
export default {
    components: { ListBox },
    props: ['filters'],
    emits: ['on:filter'],
    setup(props, {emit}) {
        const { filters } = toRefs(props);
        const localFilters = ref(filters);
        let selectedFilters = [];

        watch(filters, (value) => {
            localFilters.value = value;
        });

        const filterNow = (event) => {
            const filtered = selectedFilters.filter(item => {
                return item.name !== event.name
            });
            filtered.push(event);
            selectedFilters = filtered;
            emit('on:filter', {filtersSelected: selectedFilters});

        }

        return {
            localFilters,
            filterNow
        }
    },
}
</script>