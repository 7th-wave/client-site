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
            :class="[
            'inline-block align-bottom sm:align-middle sm:max-w-sm sm:w-full text-left overflow-hidden',
            'bg-white rounded-lg shadow-xl transform transition-all'
            ]"
          > 
          <div class="relative bg-gray-50 p-4">
            <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900 m-0">
              Profile Registration
              <div class="text-sm font-normal text-gray-400">
                Only your username will be public
              </div>
            </DialogTitle>
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                class="
                  bg-white
                  rounded-md
                  text-primary-400
                  hover:text-primary-500
                  focus:outline-none
                "
                @click="closeModal"
              >
                <span class="sr-only">Close</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

            <!-- body -->
            <div class="text-start">
              <form class="relative rounded-md shadow-s sm:col-span-2" @submit.prevent="onSubmit">
                <div class="p-4">
                  <div 
                    :class="'max-w-lg flex flex-wrap rounded-md shadow-none ' + (index != 0 && 'mt-3')" 
                    v-for="(input, index) in inputs" 
                    :key="input.name"
                  >
                    <label
                      for="username"
                      class="block text-sm w-full font-medium text-gray-700 capitalize"
                    >
                      {{input.label}} <span class="text-red-700 text-lg">*</span>
                    </label>
                    <span
                      :class="[
                      'px-3',
                      'inline-flex items-center',
                      'rounded-l-md border border-r-0 border-gray-300',
                      'bg-gray-50 text-gray-500 sm:text-sm'
                      ]"
                      v-if="input.name == 'username'"
                    >
                      @
                    </span>
                    <input
                      v-model="input.value"
                      :type="input.type"
                      :name="input.name"
                      :id="input.name"
                      autocomplete="off"
                      :class="[
                        'flex-1 block w-full focus:ring-primary-500 focus:border-primary-500 min-w-0 rounded-none sm:text-sm  border-gray-300',
                        validations[input.name] && 'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300',
                        input.name == 'username' ? 'rounded-r-md' : 'rounded-md'
                      ]"
                    />
                    <!-- validation -->
                    <div class="w-full" v-if="validations[input.name]">
                      <p
                        class="mt-2 text-sm text-red-600"
                        id="email-error"
                      >
                        {{ validations[input.name] }}
                      </p>
                    </div>
                  </div>
                </div>

                <div class="px-4 pt-3 pb-3 flex flex-wrap justify-end border-t">
                  <Button typeButton="submit" @on:submit="onSubmit" customClass="uppercase w-full" >Register</Button>
                </div>
              </form>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { computed, onMounted, ref, toRefs, watch } from 'vue'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'
// import { useStore } from 'vuex'
import Button from '../Layouts/Button.vue'
import { useStore } from 'vuex'
export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
    Button,
  },
  emits: [ 'on:close'],
  props: ['open_modal'],
  setup(props, {emit}) {
    const reEmail =
  /^([a-zA-Z0-9_\-/.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9/-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;
    const store = useStore();
    const open = ref(false);
    const { open_modal } = toRefs(props)
    const isValid = ref(true);
    const provider = computed(
      () => store.getters["blockchain/getCurrentProvider"]
    );
    const address = computed(
      () => store.getters["blockchain/getCurrentAddress"]
    );

    const inputs = ref([
      { 
        label: 'username',
        name: 'username',
        type: 'text',
        value: '',
      },
      {
        label: 'first name',
        name: 'first-name',
        type: 'text',
        value: '',
      },
      {
        label: 'last name',
        name: 'last-name',
        type: 'text',
        value: '',
      },
      {
        label: 'email',
        name: 'email',
        type: 'email',
        value: '',
      },
      {
        label: 'phone',
        name: 'phone',
        type: 'tel',
        value: '',
      },
    ])
    
    const validations = ref({
      username: computed(() => {
        if(!isValid.value && !inputs.value[0].value.length)
          return 'Username is required.'
        return ""
      }),
      'first-name': computed(() => {
        if(!isValid.value && !inputs.value[1].value.length)
          return 'First name is required.'
        return ""
      }),
      'last-name': computed(() => {
        if(!isValid.value && !inputs.value[2].value.length)
          return 'Last name is required.'
        return ""
      }),
      email: computed(() => {
        if(!isValid.value && !inputs.value[3].value.length)
          return 'Email is required.'
        if(!isValid.value &&
            !reEmail.test(inputs.value[3].value))
          return 'Valid email required.'
        return ""
      }),
      phone: computed(() => {
        if(!isValid.value && !inputs.value[4].value.length)
          return 'Phone is required.'
        return ""
      }),
    })

    const onSubmit = async () => {
      isValid.value = false
      const arrValidations = Object.keys(validations.value)
      const validationFail = arrValidations.find(ref => validations.value[ref]);

      if(validationFail) return
      isValid.value = true
      store.dispatch('NotificationStore/TOGGLE_LOADING');
      const newUser = {
        username: inputs.value[0].value,
        firstName: inputs.value[1].value,
        lastName: inputs.value[2].value,
        email: inputs.value[3].value,
        phone: inputs.value[4].value,
        blockchainAddress: address.value,
        provider: provider.value,
        avatar: ''
      }

      try {
        await store.dispatch("user/saveUser", newUser);
        store.dispatch('NotificationStore/TOGGLE_LOADING');
        store.dispatch("NotificationStore/setMessage", {
          message: "Your account is ready!",
          type: "success",
        });
        closeModal()
      } catch (error) {
        store.dispatch('NotificationStore/TOGGLE_LOADING');
        console.log(error)
      }


    }
    const closeModal = () => {
      emit('on:close')
    }

    onMounted(() => {
      open.value = open_modal.value
    })

    watch(open_modal, (val) => { open.value = val })

    return {
      open,
      closeModal,
      onSubmit,
      inputs,
      validations,
      isValid,
    }
  },
}
</script>