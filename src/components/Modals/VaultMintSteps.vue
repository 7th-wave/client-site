<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="open = false"
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
              sm:my-8 sm:align-middle sm:max-w-xs sm:w-full
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
                  >Follow Steps</span
                >
                <div
                  class="p-1 bg-white rounded-md shadow-sm cursor-pointer"
                  @click="open = false"
                >
                  <XIcon class="w-5 h-5 text-teal-500" />
                </div>
              </div>
            </div>
            <div class="w-full py-5 pr-3 grid grid-cols-5">
              <!-- step 1 -->
              <div class="w-full col-span-1 flex items-center flex-col">
                <div>
                  <svg
                    v-if="step === 1"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.67969"
                      y="1"
                      width="30"
                      height="30"
                      rx="15"
                      fill="white"
                    />
                    <circle cx="16.6797" cy="16" r="5" fill="#049AFF" />
                    <rect
                      x="1.67969"
                      y="1"
                      width="30"
                      height="30"
                      rx="15"
                      stroke="#049AFF"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    v-else
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.679688"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#049AFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.3868 11.2929C23.7773 11.6834 23.7773 12.3166 23.3868 12.7071L15.3868 20.7071C14.9963 21.0976 14.3631 21.0976 13.9726 20.7071L9.97258 16.7071C9.58206 16.3166 9.58206 15.6834 9.97258 15.2929C10.3631 14.9024 10.9963 14.9024 11.3868 15.2929L14.6797 18.5858L21.9726 11.2929C22.3631 10.9024 22.9963 10.9024 23.3868 11.2929Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="3"
                    height="124"
                    viewBox="0 0 3 124"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.679688"
                      y="136.04"
                      width="136.04"
                      height="2"
                      transform="rotate(-90 0.679688 136.04)"
                      fill="#049AFF"
                    />
                  </svg>
                </div>
              </div>
              <div
                class="w-full col-span-4 flex flex-col items-start space-y-3"
              >
                <span class="text-sm text-gray-900 font-inter font-semibold"
                  >Mint the nft vault</span
                >
                <p class="text-left text-gray-500 font-inter text-sm">
                  In order to fractionalize multiple NFTs you need to mint the
                  NFT Vault.
                </p>
                <button
                  @click="nextStep"
                  class="
                    text-center text-white text-sm
                    font-medium font-inter
                    rounded-md
                    py-2.5
                    w-full
                    outline-none
                  "
                  :class="{
                    'bg-primary-link': step === 1,
                    'bg-gray-300': step !== 1,
                  }"
                >
                  MINTED
                </button>
              </div>
              <!-- step 2 -->
              <div class="w-full col-span-1 flex items-center flex-col">
                <div>
                  <svg
                    v-if="step === 1"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.67969"
                      y="1"
                      width="30"
                      height="30"
                      rx="15"
                      fill="white"
                    />
                    <circle cx="16.6797" cy="16" r="5" fill="#049AFF" />
                    <rect
                      x="1.67969"
                      y="1"
                      width="30"
                      height="30"
                      rx="15"
                      stroke="#049AFF"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    v-else
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.679688"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#049AFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.3868 11.2929C23.7773 11.6834 23.7773 12.3166 23.3868 12.7071L15.3868 20.7071C14.9963 21.0976 14.3631 21.0976 13.9726 20.7071L9.97258 16.7071C9.58206 16.3166 9.58206 15.6834 9.97258 15.2929C10.3631 14.9024 10.9963 14.9024 11.3868 15.2929L14.6797 18.5858L21.9726 11.2929C22.3631 10.9024 22.9963 10.9024 23.3868 11.2929Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="3"
                    height="124"
                    viewBox="0 0 3 124"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.679688"
                      y="136.04"
                      width="136.04"
                      height="2"
                      transform="rotate(-90 0.679688 136.04)"
                      fill="#049AFF"
                    />
                  </svg>
                </div>
              </div>
              <div
                class="w-full col-span-4 flex flex-col items-start space-y-3"
              >
                <span class="text-sm text-gray-900 font-inter font-semibold"
                  >Approve nft VAULT</span
                >
                <p class="text-left text-gray-500 font-inter text-sm">
                  In order to fractionalize the NFT basket approval is needed.
                </p>
                <button
                  @click="nextStep"
                  class="
                    text-center text-white text-sm
                    font-medium font-inter
                    rounded-md
                    py-2.5
                    w-full
                    outline-none
                  "
                  :class="{
                    'bg-primary-link': step === 1,
                    'bg-gray-300': step !== 1,
                  }"
                >
                  APPROVED
                </button>
              </div>
              <!-- step 3 -->
              <div class="w-full col-span-1 flex items-center flex-col">
                <div>
                  <svg
                    v-if="step === 1"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.67969"
                      y="1"
                      width="30"
                      height="30"
                      rx="15"
                      fill="white"
                    />
                    <circle cx="16.6797" cy="16" r="5" fill="#049AFF" />
                    <rect
                      x="1.67969"
                      y="1"
                      width="30"
                      height="30"
                      rx="15"
                      stroke="#049AFF"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    v-else
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.679688"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#049AFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.3868 11.2929C23.7773 11.6834 23.7773 12.3166 23.3868 12.7071L15.3868 20.7071C14.9963 21.0976 14.3631 21.0976 13.9726 20.7071L9.97258 16.7071C9.58206 16.3166 9.58206 15.6834 9.97258 15.2929C10.3631 14.9024 10.9963 14.9024 11.3868 15.2929L14.6797 18.5858L21.9726 11.2929C22.3631 10.9024 22.9963 10.9024 23.3868 11.2929Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="3"
                    height="124"
                    viewBox="0 0 3 124"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.679688"
                      y="136.04"
                      width="136.04"
                      height="2"
                      transform="rotate(-90 0.679688 136.04)"
                      fill="#049AFF"
                    />
                  </svg>
                </div>
              </div>
              <div
                class="w-full col-span-4 flex flex-col items-start space-y-3"
              >
                <span class="text-sm text-gray-900 font-inter font-semibold"
                  >transfer nft(s)</span
                >
                <p class="text-left text-gray-500 font-inter text-sm">
                  In order to transfer the NFT(s) approval is needed.
                </p>
                <button
                  @click="nextStep"
                  class="
                    text-center text-white text-sm
                    font-medium font-inter
                    rounded-md
                    py-2.5
                    w-full
                    outline-none
                  "
                  :class="{
                    'bg-primary-link': step === 1,
                    'bg-gray-300': step !== 1,
                  }"
                >
                  TRANSFERED
                </button>
              </div>

              <!-- step 4 -->
              <div class="w-full col-span-1 flex items-center flex-col">
                <div>
                  <svg
                    v-if="step === 1"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.67969"
                      y="1"
                      width="30"
                      height="30"
                      rx="15"
                      fill="white"
                    />
                    <rect
                      x="1.67969"
                      y="1"
                      width="30"
                      height="30"
                      rx="15"
                      stroke="#D1D5DB"
                      stroke-width="2"
                    />
                  </svg>
                  <svg
                    v-else
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.67969"
                      y="1"
                      width="30"
                      height="30"
                      rx="15"
                      fill="white"
                    />
                    <circle cx="16.6797" cy="16" r="5" fill="#049AFF" />
                    <rect
                      x="1.67969"
                      y="1"
                      width="30"
                      height="30"
                      rx="15"
                      stroke="#049AFF"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
              <div
                class="w-full col-span-4 flex flex-col items-start space-y-3"
              >
                <span class="text-sm text-gray-900 font-inter font-semibold"
                  >Fractionalize</span
                >
                <p class="text-left text-gray-500 font-inter text-sm">
                  Fractionalize your NFT(s) so you can bring them to the
                  exchange.
                </p>
                <button
                  @click="Finish"
                  class="
                    text-center text-white text-sm
                    font-medium font-inter
                    rounded-md
                    py-2.5
                    w-full
                    outline-none
                  "
                  :class="{
                    'bg-primary-link': step === 4,
                    'bg-gray-300': step != 4,
                  }"
                >
                  FRACTIONALIZE
                </button>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/solid";
export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    XIcon,
  },
  data() {
    return {
      step: 4,
    };
  },
  setup() {
    const open = ref(false);

    return {
      open,
    };
  },
  methods: {
    Confirm() {
      this.open = false;
    },
    nextStep() {
     // this.step++;
    },
    Finish() {
      //code
 this.$router.push({name:'My_fractions_details',params:{id:'cvman'}})
      //close modal
      this.open = false;
     
    },
  },
};
</script>