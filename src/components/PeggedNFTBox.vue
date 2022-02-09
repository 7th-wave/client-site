<template>
<dl class="mt-5 xl:grid lg:grid flex flex-wrap grid-cols-1 rounded-lg md:bg-white overflow-hidden md:shadow md:grid-cols-12 lg:grid-cols-7">
  <div 
    v-for="item in stats" 
    :key="item.name" 
    :class="[
      'lg:w-full',
      'px-3 py-5 bg-white my-2 md:m-0 md:bg-none flex flex-col justify-center border border-gray-100', 
      item.colSpan
    ]"
  >
    <dt class="flex flex-nowrap xl:text-base text-sm text-gray-900 w-full">
      {{ item.name }}
    </dt>
    <dd class="mt-1 flex justify-between items-end lg:flex">
      <div :class="['flex items-baseline xl:text-3xl text-md w-full font-semibold', item.previousStat && 'flex-wrap']">
        <component v-bind:is="item.customIcon"></component> {{ item.stat }}
        <!-- <span :class="[!item.previousStat ? 'hidden' : 'ml-2 text-sm font-medium text-gray-500']"> {{ item.previousStat }} </span> -->
      </div>

      <div :class="[
        item.changeType && item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800', 
        !item.changeType && 'hidden',
        'flex w-max px-1 text-sm rounded-full self-end font-medium'
        ]">
        <ArrowSmUpIcon v-if="item.changeType === 'increase'" class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500" aria-hidden="true" />
        <ArrowSmDownIcon v-else class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500" aria-hidden="true" />
        <span class="sr-only"> {{ item.changeType === 'increase' ? 'Increased' : 'Decreased' }} by </span>
        {{ item.change }}
      </div>
    </dd>
  </div>
</dl>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add the lines below */
@layer utilities {
  @variants responsive {
    .card {
      font-size: 0.75rem;
    }
  }
}

</style>

<script>

import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/vue/solid'
import USDC from '@/components/Shared/USDC.vue'

const stats = [
  { 
    name: 'Max Suply', 
    stat: '100', 
    colSpan: 'lg:col-span-1 md:col-span-2 xl:w-full md:w-max w-3/6 xl:rounded-none rounded-l-md',
  },
  { 
    name: 'For Sale', 
    stat: '10', 
    colSpan: 'lg:col-span-1 md:col-span-2 xl:w-full md:w-max w-3/6 xl:rounded-none rounded-r-md'
  },
  { 
    name: 'Original Price', 
    stat: '2.0', 
    colSpan: 'lg:col-span-1 md:col-span-2 col-span-1 xl:w-full md:w-max w-full xl:rounded-none rounded-md',
    customIcon: <USDC color="#222" />
  },
  { 
    name: 'Currente Base Price', 
    stat: '2.3', 
    previousStat: '($4,500.00 USD)', 
    change: '15.9%', 
    changeType: 'increase', 
    colSpan: 'lg:col-span-2 md:col-span-3 col-span-1 xl:w-full md:w-max w-full xl:rounded-none rounded-md', 
    customIcon: <USDC color="#222" />
  },
  { 
    name: 'Original NFT QR View', 
    stat: '238', 
    previousStat: 'Total', 
    colSpan: 'lg:col-span-2 md:col-span-3 col-span-1 xl:w-full md:w-max w-full xl:rounded-none rounded-md', 
  },
]
 
 
export default {
  components: {
      ArrowSmUpIcon,
      ArrowSmDownIcon,
      USDC
  },
  setup() {

    return {
      stats
    }
  },
}
</script>
