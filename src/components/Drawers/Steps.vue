<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="lg:border-t lg:border-b lg:border-gray-200 bg-white shadow-md">
    <nav class="mx-auto max-w-7xl" aria-label="Progress">
      <ol role="list" class="rounded-md overflow-hidden lg:flex lg:border-l lg:border-r lg:border-gray-200 lg:rounded-none">
        <li v-for="(step, stepIdx) in steps" :key="step.id" class="relative overflow-hidden lg:flex-1">
          <div :class="[stepIdx === 0 ? 'border-b-0 rounded-t-md' : '', stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '', 'border border-gray-200 overflow-hidden lg:border-0']">
            <a v-if="step.status === 'complete'" :href="step.href" class="group">
              <span class="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" aria-hidden="true" />
              <span :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-start text-sm font-medium']">
                <span class="flex-shrink-0">
                  <span class="w-10 h-10 flex items-center justify-center bg-secondary-500 rounded-full">
                    <CheckIcon class="w-6 h-6 text-white" aria-hidden="true" />
                  </span>
                </span>
                <span class="mt-3 ml-4 min-w-0 flex flex-col">
                  <span class="text-xs font-semibold tracking-wide uppercase text-gray-900">{{ step.name }}</span>
                  <!-- <span class="text-sm font-medium text-gray-500">{{ step.description }}</span> -->
                </span>
              </span>
            </a>
            <a v-else-if="step.status === 'current'" :href="step.href" aria-current="step">
              <span class="absolute top-0 left-0 w-1 h-full bg-secondary-500 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" aria-hidden="true" />
              <span :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-start text-sm font-medium']">
                <span class="flex-shrink-0">
                  <span class="w-10 h-10 flex items-center justify-center border-2 border-secondary-500 rounded-full">
                    <span class="text-gray-500">{{ step.id }}</span>
                  </span>
                </span>
                <span class="mt-3 ml-4 min-w-0 flex flex-col">
                  <span class="text-xs font-semibold text-gray-900 tracking-wide uppercase">{{ step.name }}</span>
                  <!-- <span class="text-sm font-medium text-gray-500">{{ step.description }}</span> -->
                </span>
              </span>
            </a>
            <a v-else :href="step.href" class="group">
              <span class="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" aria-hidden="true" />
              <span :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-start text-sm font-medium']">
                <span class="flex-shrink-0">
                  <span class="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full">
                    <span class="text-gray-500">{{ step.id }}</span>
                  </span>
                </span>
                <span class="mt-3 ml-4 min-w-0 flex flex-col">
                  <span class="text-xs font-semibold text-gray-500 tracking-wide uppercase">{{ step.name }}</span>
                  <!-- <span class="text-sm font-medium text-gray-500">{{ step.description }}</span> -->
                </span>
              </span>
            </a>
            <template v-if="stepIdx !== 0">
              <!-- Separator -->
              <div class="hidden absolute top-0 left-0 w-3 inset-0 lg:block" aria-hidden="true">
                <svg class="h-full w-full text-gray-300" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
                  <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vector-effect="non-scaling-stroke" />
                </svg>
              </div>
            </template>
          </div>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import { CheckIcon } from '@heroicons/vue/solid'


//upcoming,complete,current
export default {
  props:{
      step: {
        type: [Object, Array],
        required: true,
      },
  },
  data(){
    return  {
      steps:this.step,
    }
  },
  components: {
    CheckIcon,
  },
 
 
}
</script>