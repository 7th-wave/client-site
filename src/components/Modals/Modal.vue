<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog 
      as="div" 
      static 
      class="fixed z-10 inset-0 overflow-y-auto" 
      @close="closeModal" 
      :open="open"
    >
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild 
          as="template" 
          enter="ease-out duration-300" 
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" 
          enter-to="opacity-100 translate-y-0 sm:scale-100" 
          leave="ease-in duration-200" 
          leave-from="opacity-100 translate-y-0 sm:scale-100" 
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div 
            class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
          >
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                class="
                  bg-white
                  rounded-md
                  text-gray-400
                  hover:text-gray-500
                  focus:outline-none
                "
                @click="closeModal"
              >
                <span class="sr-only">Close</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div>
              <div class="hidden mx-auto flex items-center justify-center h-12 w-12 rounded-full text-primary-400">
                <CheckIcon class="h-6 w-6 text-primary-400" aria-hidden="true" />
              </div>
              <div class="mt-3 text-center sm:mt-5">
                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                  {{title}}
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{message}}
                  </p>
                </div>
              </div>
            </div>
            <div v-if="buttons" class="mt-5 sm:mt-6 flex flex-wrap justify-center">
              <div v-for="btn in buttons" :key="btn.name" class="px-2">
                <Button :name="btn.name" @on:submit="btn.action" :btnStyle="btn.btnStyle"  />
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { computed, onMounted, ref, watch, } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon, XIcon } from '@heroicons/vue/outline'
import { useStore } from 'vuex'
import Button from '../Layouts/Button.vue'
export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    CheckIcon,
    XIcon,
    Button,
  },
  setup() {
    const store = useStore();
    const open = ref(false);
    const openModal = computed(
      () => store.state.NotificationStore.openModal
    );
    const message = computed(
      () => store.state.NotificationStore.message
    );
    const title = computed(
      () => store.state.NotificationStore.title
    );
    const buttons = computed(
      () => store.state.NotificationStore.buttons
    );

    const closeModal = () => {
      store.dispatch("NotificationStore/SET_OPEN_MODAL");
    }

    onMounted(() => {
      open.value = openModal.value; 
    })

    watch(openModal, (val) => {
      open.value = val
    })

    return {
      open,
      closeModal,
      message,
      title,
      buttons,
    }
  },
}
</script>