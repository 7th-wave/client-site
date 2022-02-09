<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    aria-live="assertive"
    class="
      sticky
      fixed
      inset-0
      flex
      items-end
      px-4
      py-6
      pointer-events-none
      sm:p-6 sm:items-start
    "
  >
    <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="snackbarShow"
          :class="[
            'max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden',
            type == 'success' ? 'bg-green-50' : '',
            type == 'error' ? 'bg-red-50' : '',
            type == 'warning' ? 'bg-yellow-50' : '',
          ]"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0" v-if="type == 'success'">
                <CheckCircleIcon
                  class="h-5 w-5 text-green-400"
                  aria-hidden="true"
                />
              </div>
              <div class="flex-shrink-0" v-else-if="type == 'warning'">
                <ExclamationIcon
                  class="h-5 w-5 text-yellow-400"
                  aria-hidden="true"
                />
              </div>
              <div class="flex-shrink-0" v-else>
                <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p
                  :class="[
                    'text-sm font-medium',
                    type == 'success' ? 'text-green-900' : '',
                    type == 'error' ? 'text-red-900' : '',
                    type == 'warning' ? 'text-yellow-900' : '',
                  ]"
                >
                  {{ message }}
                </p>
                <p
                  :class="[
                    'mt-1 text-sm',
                    type == 'success' ? 'text-green-700' : '',
                    type == 'error' ? 'text-red-700' : '',
                    type == 'warning' ? 'text-yellow-700' : '',
                  ]"
                >
                  {{ description }}
                </p>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button
                  @click="snackbarClosed"
                  class="
                    rounded-md
                    inline-flex
                    text-gray-400
                    hover:text-gray-500
                    focus:outline-none
                  "
                >
                  <span class="sr-only">Close</span>
                  <XIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import {
  XIcon,
  CheckCircleIcon,
  ExclamationIcon,
  XCircleIcon,
} from "@heroicons/vue/solid";
// import { XIcon, ExclamationIcon  } from '@heroicons/vue/solid'

export default {
  name: "Toast",
  components: {
    XIcon,
    CheckCircleIcon,
    ExclamationIcon,
    XCircleIcon,
  },
  setup() {
    const store = useStore();
    const snackbarShow = computed(
      () => store.state.NotificationStore.snackbarShow
    );
    const type = computed(() => store.state.NotificationStore.type);
    const message = computed(() => store.state.NotificationStore.message);
    const description = computed(
      () => store.state.NotificationStore.description
    );

    const snackbarClosed = () => {
      store.dispatch("NotificationStore/SET_SNACKBAR_FALSE");
    };

    return {
      snackbarShow,
      message,
      description,
      type,
      snackbarClosed,
    };
  },
};
</script>
