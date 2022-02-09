<template>
     <!-- Create Auction  -->
  <TransitionRoot as="template" :show="showForm">
    <Dialog
      as="div"
      static
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="closeModal"
      :open="showForm"
    >
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-2
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
          class="sm:inline-block sm:align-middle sm:h-screen"
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
              px-4
              pt-5
              pb-4
              text-left
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle
              lg:max-w-lg
              w-full
              sm:p-6
            "
          >
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                class="
                  bg-white
                  rounded-md
                  text-teal-400
                  hover:text-teal-400
                  focus:outline-none
                "
                @click="showForm = false"
              >
                <span class="sr-only">Close</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:text-left">
                <DialogTitle
                  as="h3"
                  class="text-lg leading-6 font-medium text-gray-900"
                >
                  Create Auction
                </DialogTitle>
              </div>
            </div>

            <div class="mt-4 lg:mt-8">
              <div v-if="errorMessage" class="rounded-md bg-red-50 p-4">
                <div class="flex">
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-red-800">
                      {{ errorMessage }}
                    </h3>
                  </div>
                </div>
              </div>

              <div class="mt-3 sm:mt-0 sm:text-left">
                <div>
                  <label
                    for="price"
                    class="block text-sm font-medium text-gray-700"
                    >Starting Price</label
                  >
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div
                      class="
                        absolute
                        inset-y-0
                        left-0
                        pl-3
                        flex
                        items-center
                        pointer-events-none
                      "
                    >
                      <span class="text-gray-500 sm:text-sm"> $ </span>
                    </div>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      class="
                        focus:ring-gray-200 focus:border-gray-200
                        block
                        w-full
                        pl-8
                        pr-12
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                      placeholder="0.00"
                      v-model="dataAuction.startingPrice"
                    />
                    <div class="absolute inset-y-0 right-0 flex items-center">
                      <label for="currency" class="sr-only">Currency</label>
                      <select
                        id="currency"
                        name="currency"
                        class="
                          focus:ring-gray-200 focus:border-gray-200
                          h-full
                          py-0
                          pl-2
                          pr-7
                          border-transparent
                          bg-transparent
                          text-gray-500
                          sm:text-sm
                          rounded-md
                          z-20
                        "
                        v-model="dataAuction.startingPriceCoin"
                      >
                        <option value="USDC">USDC</option>
                        <option value="ETH">ETH</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="mt-4">
                  <label
                    for="price"
                    class="block text-sm font-medium text-gray-700"
                    >Minimum Price</label
                  >
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div
                      class="
                        absolute
                        inset-y-0
                        left-0
                        pl-3
                        flex
                        items-center
                        pointer-events-none
                      "
                    >
                      <span class="text-gray-500 sm:text-sm"> $ </span>
                    </div>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      class="
                        focus:ring-gray-200 focus:border-gray-200
                        block
                        w-full
                        pl-8
                        pr-12
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                      placeholder="0.00"
                      v-model="dataAuction.minimumPrice"
                    />
                    <div class="absolute inset-y-0 right-0 flex items-center">
                      <label for="currency" class="sr-only">Currency</label>
                      <select
                        id="currency"
                        name="currency"
                        class="
                          focus:ring-gray-200 focus:border-gray-200
                          h-full
                          py-0
                          pl-2
                          pr-8
                          border-transparent
                          bg-transparent
                          text-gray-500
                          sm:text-sm
                          rounded-md
                          z-20
                        "
                        v-model="dataAuction.minimumPriceCoin"
                      >
                        <option value="USDC">USDC</option>
                        <option value="ETH">ETH</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="mt-4">
                  <label
                    for="price"
                    class="block text-sm font-medium text-gray-700"
                    >Minimum Price Increment</label
                  >
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <div
                      class="
                        absolute
                        inset-y-0
                        left-0
                        pl-3
                        flex
                        items-center
                        pointer-events-none
                      "
                    >
                      <span class="text-gray-500 sm:text-sm"> $ </span>
                    </div>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      class="
                        focus:ring-gray-200 focus:border-gray-200
                        block
                        w-full
                        pl-7
                        pr-12
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                      placeholder="0.00"
                      v-model="dataAuction.minimumPriceIncrement"
                    />
                    <div class="absolute inset-y-0 right-0 flex items-center">
                      <label for="currency" class="sr-only">Currency</label>
                      <select
                        id="currency"
                        name="currency"
                        class="
                          focus:ring-gray-200 focus:border-gray-200
                          h-full
                          py-0
                          pl-2
                          pr-7
                          border-transparent
                          bg-transparent
                          text-gray-500
                          sm:text-sm
                          rounded-md
                          z-20
                        "
                        v-model="dataAuction.minimumPriceIncrementCoin"
                      >
                        <option value="USDC">USDC</option>
                        <option value="USD">ETH</option>
                      </select>
                    </div>
                  </div>
                </div>
                

                <div class="mt-4 md:flex md:justify-between">
                  <div class="">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                      >Auction Date Starts</label
                    >
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div
                        class="
                          absolute
                          inset-y-0
                          left-0
                          pl-3
                          flex
                          items-center
                          cursor-pointer
                          z-10
                        "
                        
                      >
                        <CalendarIcon
                          class="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <datepicker
                        class="
                          focus:ring-gray-200 focus:border-gray-200
                          block
                          lg:w-56
                          w-full
                          pl-10
                          sm:text-sm
                          border-gray-300
                          rounded-md
                        "
                        v-model="dateStart"
                      />
                    </div>
                  </div>
                  <div class="">
                    
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                      >Auction Date End</label
                    >
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div
                        class="
                          absolute
                          inset-y-0
                          left-0
                          pl-3
                          flex
                          items-center
                          cursor-pointer
                          z-10
                        "

                          
                      >
                        <CalendarIcon
                          class="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <datepicker
                        
                        class="
                          focus:ring-gray-200 focus:border-gray-200
                          block
                          lg:w-56
                          w-full
                          pl-10
                          sm:text-sm
                          border-gray-300
                          rounded-md
                        "
                        
                        v-model="dateEnd"
                      />
                    </div>
                  </div>
                </div>
                <div class="mt-4 md:flex md:justify-between">
                  <div class="">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                      >Auction Time Starts</label
                    >
                    <div class="mt-1 relative rounded-md shadow-sm">
                      
                      <input
                        type="time"
                        class="
                          focus:ring-gray-200
                          w-full
                          lg:w-56
                          focus:border-gray-200
                          block
                          pl-10
                          sm:text-sm
                          border-gray-300
                          rounded-md
                        "
                        v-model="dataAuction.timeStarts"
                      />
                    </div>
                  </div>
                  <div class="">
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                      >Auction Time End</label
                    >
                    <div class="mt-1 relative rounded-md shadow-sm">
                      
                      <input
                        type="time"
                        class="
                          focus:ring-gray-200 focus:border-gray-200
                          block
                          lg:w-56
                          w-full
                          pl-10
                          sm:text-sm
                          border-gray-300
                          rounded-md
                        "
                        v-model="dataAuction.timeEnd"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div
              class="
                mt-5
                sm:mt-4 sm:flex sm:flex-row-reverse
                border-t border-gray-300
                pt-5
              "
            >
              <button
                type="button"
                class="
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-transparent
                  shadow-sm
                  px-4
                  py-2
                  bg-teal-400
                  text-base
                  font-medium
                  text-white
                  hover:bg-teal-600
                  focus:outline-none
                  sm:ml-3 sm:w-auto sm:text-sm
                "
                @click="onSaveAuction"
              >
                Create
              </button>
              
              <button
                type="button"
                class="
                  mt-3
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-gray-500
                  shadow-sm
                  px-4
                  py-2
                  bg-white
                  text-base
                  font-medium
                  text-gray-700
                  hover:text-gray-500 hover:text-gray-50
                  focus:outline-none
                  sm:mt-0 sm:w-auto sm:text-sm
                "
                @click="closeModal"
              >
                Cancel
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import Datepicker from 'vue3-datepicker';
import { CalendarIcon, XIcon } from "@heroicons/vue/outline";

import { ref, toRefs } from '@vue/reactivity';
import { createAuction } from '../../blockchain';
import { db } from "../../firebase/firebase";

import moment from 'moment-timezone';
import { useStore } from 'vuex';
import { watch } from '@vue/runtime-core';
export default {
    components: {TransitionChild, TransitionRoot, Dialog, DialogOverlay, DialogTitle, Datepicker, CalendarIcon, XIcon},
    props: ['nftRef', 'blockchainId', 'create_auction'],
    emits: ['on:created', 'on:close'],
    setup(props, {emit}) {

        let { nftRef, blockchainId, create_auction } = toRefs(props);

        const showForm = ref(false);

         watch(create_auction, (value) => {
             console.log(value);
             showForm.value = value;
        })

        const dataAuction = ref({
            nftRef: nftRef.value,
            startingPrice: 0,
            startingPriceCoin: "USDC",
            minimumPrice: 0,
            minimumPriceCoin: "USDC",
            minimumPriceIncrement: 0,
            minimumPriceIncrementCoin: "USDC",
            dateStarts: "",
            dateEnd: "",
            timeStarts: "",
            timeEnd: "",
            timestampEnd: '',
            timestampStart: '',
            blockchainId: 0,
            receipt: {},
            draft: false
        });
        
        const store = useStore();

        const dateStart = ref(null);
        const dateEnd = ref(null);
        const errorMessage = ref('');

        const onSaveAuction = async () => {

            const timezone = moment.tz.guess();
            
            dataAuction.value.dateStarts = moment(dateStart.value).format('MM/DD/YYYY');
            dataAuction.value.dateEnd = moment(dateEnd.value).format('MM/DD/YYYY');

            const dsTimestamp = dateStart.value.toISOString().split('T')[0];
            const deTimestamp = dateEnd.value.toISOString().split('T')[0];

            dataAuction.value.timestampStart = moment.tz(dsTimestamp + "T" + dataAuction.value.timeStarts + ":00", timezone).utc().format();
            dataAuction.value.timestampEnd = moment.tz(deTimestamp + "T" + dataAuction.value.timeEnd + ":00", timezone).utc().format();

            errorMessage.value = "";
            if (
                dataAuction.value.startingPrice &&
                dataAuction.value.startingPriceCoin &&
                dataAuction.value.minimumPrice &&
                dataAuction.value.minimumPriceCoin &&
                dataAuction.value.minimumPriceIncrement &&
                dataAuction.value.minimumPriceIncrementCoin &&
                dataAuction.value.dateStarts &&
                dataAuction.value.dateEnd &&
                dataAuction.value.timeStarts &&
                dataAuction.value.timeEnd
            ) {

                store.dispatch('NotificationStore/TOGGLE_LOADING');

                let dataUp = dataAuction.value;
                dataUp.by = "";
                dataUp.status = "active";
                dataUp.wonBy = "";
                dataUp.wonPrice = "";
                try {

                const doc = await db.collection("auctions").add(dataUp);

                const timestapEnd = moment(dataAuction.value.timestampEnd).unix();
                const receipt = await createAuction(doc.id, timestapEnd, blockchainId, dataAuction.value.minimumPrice);
                console.log(receipt);
                dataUp.receipt = receipt;

                emit('on:auction_created', doc.id); 
                showForm.value = false;
                store.dispatch('NotificationStore/TOGGLE_LOADING');

                } catch (error) {
                  store.dispatch('NotificationStore/TOGGLE_LOADING');
                  console.log('error.message');
                  console.log(error);
                }
                
            } else {
                errorMessage.value = "Please check that all fields are filled.!";
            } 
        };

        const closeModal = () => {
            showForm.value = false;
            emit('on:close');
            errorMessage.value = '';
        }
        
        return {
            onSaveAuction,
            dataAuction,
            dateStart,
            dateEnd,
            errorMessage,
            showForm,
            closeModal
        }
    },
}
</script>