<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="open = false; $emit('on:close')"
    >
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:block sm:p-0
        "
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
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
            class="
              inline-block
              align-bottom
              bg-white
              rounded-lg
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle sm:max-w-sm w-full
            "
          >
            <div class="bg-white w-full">
              <div
                class="
                  w-full
                  bg-gray-50
                  flex
                  items-center
                  justify-between
                  py-4
                  px-4
                "
              >
                <span class="text-lg text-gray-900 font-inter"
                  >Confirm Order</span
                >
                <div
                  class="p-1 bg-white rounded-md shadow-sm cursor-pointer"
                  @click="open = false; $emit('on:close');"
                >
                  <XIcon class="w-5 h-5 text-primary-500" />
                </div>
              </div>
            </div>
            <div class="w-full flex flex-col items-start py-5 px-5 space-y-4">
              <span class="text-xs text-gray-500 font-normal font-inter"
                >YOU PAY</span
              >
              <span class="text-sm font-inter text-black font-normal"
                >{{ pay }} <span class="font-semibold">USDT</span></span
              >
              <span class="text-xs text-gray-500 font-normal font-inter"
                >≈ ${{ payDollar }}</span
              >
              <div class="w-full h-px bg-gray-300"></div>
              <span class="text-xs text-gray-500 font-normal font-inter"
                >YOU RECEIVE</span
              >
              <span class="text-sm font-inter text-black font-normal"
                > {{ receive }} <span class="font-semibold">{{ ticker }}</span></span
              >
              <div class="w-full flex flex-col items-start space-y-3">
                <div class="flex items-center space-x-2 w-full">
                  <span
                    class="
                      text-xs text-gray-500
                      font-normal font-inter
                      whitespace-nowrap
                    "
                    >Gas + Fees</span
                  >
                  <div class="w-full h-px bg-gray-300"></div>
                  <span
                    class="
                      text-xs text-gray-500
                      font-normal font-inter
                      whitespace-nowrap
                    "
                    >≈ $47.08</span
                  >
                </div>
                <div class="flex items-center space-x-2 w-full">
                  <span
                    class="
                      text-xs text-gray-500
                      font-normal font-inter
                      whitespace-nowrap
                    "
                    >Total</span
                  >
                  <div class="w-full h-px bg-gray-300"></div>
                  <span
                    class="
                      text-xs text-gray-500
                      font-normal font-inter
                      whitespace-nowrap
                    "
                    >≈ 10,047.08 DAI</span
                  >
                </div>
              </div>
              <button
                @click="Confirm"
                class="
                  w-full
                  py-4
                  text-center text-base text-white
                  font-medium font-inter
                  bg-primary-500
                  rounded-md
                "
              >
                CONFIRM
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { onMounted, ref, toRefs, watch } from "vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/solid";
import axios from 'axios';
export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    XIcon,
  },
  props: ['show', 'pay', 'payDollar', 'receive', 'ticker'],
  setup(props) {
    const {show} = toRefs(props);
    const open = ref(false);
    const gasPrice = ref(0)

    watch(show, (value) => {

      open.value = value

    });

    const getGasFees = async () => {
      let result = await axios.get('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YourApiKeyToken');
      gasPrice.value = result.data.result;
    }

    onMounted(async() => {
      await getGasFees()
    })

    return {
      open,
      gasPrice
    };
  },
  computed:{
    getParams(){
      return this.$route.params.id;
    }
  },
  methods:{
      Confirm(){
         this.open = false;
         this.$store.commit('user/changeType', 'Buyer')
        this.$router.push({name:'My_fractions_details',params:{id: this.ticker.toLowerCase()}});
        
      }
  }
};
</script>