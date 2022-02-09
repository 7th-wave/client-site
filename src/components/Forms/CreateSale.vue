<template>
  <!-- Create Auction  -->
  <TransitionRoot as="template" :show="showForm">
    <Dialog
      as="div"
      static
      class="fixed z-10 inset-0 overflow-y-auto"
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
                  List Artwork for Sale
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
                  <label class="block text-sm font-medium text-gray-700 mt-6">
									Price:
								</label>
								<div
									class="
										mt-2
										grid grid-cols-1
										gap-y-6
										sm:grid-cols-1 sm:gap-x-2
									"
								>
									<div class="relative mt-1 flex rounded-md shadow-sm">
										<span
											class="
												inline-flex
												items-center
												px-3
												rounded-l-md
												border border-r-0 border-gray-300
												bg-gray-50
												text-gray-500
												sm:text-sm
											"
										>
											<USDC
												color="#000000"
												size="5"
												v-if="dataSale.currency == 'USDC'"
											/>
											<ETH color="#000000" size="5" v-if="dataSale.currency == 'ETH'" />
										</span>
										<input
											type="number"
											name="usd"
											:step="inputStep"
											v-model="dataSale.total"
											class="
												flex-1
												min-w-0
												block
												w-full
												px-3
												py-2
												rounded-none rounded-r-md
												bg-gray-200
												sm:text-sm
												border-gray-300
											"
											placeholder="0"
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
                                                "
                                                v-model="dataSale.currency"
                                            >
                                                <option value="ETH">ETH</option>
                                                <option value="USDC">USDC</option>
                                            </select>
                                        </div>
									</div>
									
								</div>
                </div>
								

                 <div class="sm:items-start text-left sm:mt-0">
                  <label class="block text-sm font-medium text-gray-700 mt-6">
                    Sale Expiration:
                  </label>
                  <div
                    class="
                      mt-2
                      grid grid-cols-2
                      gap-x-4
                      sm:grid-cols-2 sm:gap-x-4
                    "
                  >
                    <div class="relative mt-1">
                      <select
                        id="exp"
                        name="exp"
                        class="
                          focus:ring-gray-200
                          border-gray-200
                          w-full
                          h-full
                          py-0
                          pl-2
                          pr-7
                          border-transparent
                          bg-transparent
                          text-gray-500
                          sm:text-sm
                          rounded-md
                        "
                        v-model="dataSale.exp_period"
                      >
                        <option value="3">3 days</option>
                        <option value="7">7 days</option>
                        <option value="month">A month</option>
                        <option value="custom">Custom Date</option>
                      </select>
                    </div>
                    <div class="relative mt-1" id="date-box">
                      <date-picker
                        v-model:value="dataSale.exp_date"
                        type="time"
                        v-if="dataSale.exp_period !== 'custom'"
                      ></date-picker>

                      <date-picker
                        :format="'MM/DD/YYYY HH:mm:ss'"
                        v-model:value="dataSale.exp_date"
                        type="datetime"
                        v-if="dataSale.exp_period == 'custom'"
                      >
                      </date-picker>
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
                @click="onSaveSale"
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
                  hover:text-gray-500
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
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import { XIcon } from "@heroicons/vue/outline";
import USDC from "../Shared/USDC.vue";
import ETH from "../Shared/ETH.vue";

import { ref, toRefs } from "@vue/reactivity";

import moment from "moment";
import { useStore } from "vuex";
import { watch } from "@vue/runtime-core";
export default {
  components: {
    TransitionChild,
    TransitionRoot,
    Dialog,
    DialogOverlay,
    DialogTitle,
    DatePicker,
    XIcon,
    USDC,
    ETH
  },
  props: ["nftRef", "create_sale", "address", "nft", "clientRef"],
  emits: ["on:created", "on:close"],
  setup(props, { emit }) {
    let { nftRef, create_sale } = toRefs(props);

    const showForm = ref(false);

    watch(create_sale, (value) => {
      console.log(value);
      showForm.value = value;
    });

    const dataSale = ref({
      from: props.clientRef,
      fromAddress: props.address,
      total: 0,
      currency: 'ETH',
			exp_date: null,
			exp_period: '3',
			nft: nftRef.value,
      status: 'active',
      soldTo: null,
      soldToAddress: null,
      transactionHash: null
    });

    const store = useStore();
    const errorMessage = ref("");

    const onSaveSale = async () => {
			
			store.dispatch("NotificationStore/TOGGLE_LOADING");
			//const instances = store.getters["blockchain/getInstance"];

			let date;
			let time;

			console.log(dataSale.value.exp_period);
			
			if (dataSale.value.exp_period !== 'custom') {
				switch (dataSale.value.exp_period) {
					case '3':
						date = moment().add(3, 'days');
					break;
					case '7':
						date = moment().add(7, 'days');
					break;
					case 'month':
						date = moment().add(1, 'months');
					break;
				}
				
				time = moment(dataSale.value.exp_date).format('hh:mm:ss');
				const dateString = date.format('YYYY-MM-DD');
				dataSale.value.exp_date = moment(dateString + ' ' + time).format();

			}

			store.dispatch("NotificationStore/TOGGLE_LOADING");
			emit("on:sale", {
				...dataSale.value
			});
			showForm.value = false;


			/* if (dataSale.value.total >= minValue.value) {
				store.dispatch("NotificationStore/TOGGLE_LOADING");
				const instances = store.getters["blockchain/getInstance"];

				try {
					const receipt = await offer(
						dataSale.value.total,
						currentAddress.value,
						instances[currentProvider.value],
						currentProvider.value
					);
					console.log("receipt");
					console.log(receipt);
					openModal.value = false;
					store.dispatch("NotificationStore/TOGGLE_LOADING");
					emit("on:offer", {
						amount: dataSale.value.total || 0,
						...receipt,
					});
				} catch (error) {
					console.log(error);
				}
			} */
		};

   

    const closeModal = () => {
      showForm.value = false;
      emit("on:close");
      errorMessage.value = "";
    };

    return {
      onSaveSale,
      dataSale,
      errorMessage,
      showForm,
      closeModal,
    };
  },
};
</script>
<style scoped>
.mx-datepicker {
	width: auto;
}
</style>