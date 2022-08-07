<template>
  <TransitionRoot as="template" :show="openModal">
    <Dialog
      as="div"
      static
      class="fixed z-10 inset-0"
      :open="openModal"
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
            :class="[
              'inline-block align-bottom sm:align-middle sm:max-w-sm sm:w-full text-left overflow-visible',
              'bg-white rounded-lg shadow-xl transform transition-all',
            ]"
          >
            <div class="relative bg-gray-50 p-4 rounded-lg">
              <DialogTitle
                as="h3"
                class="text-lg leading-6 font-medium text-gray-900 m-0"
              >
                By {{nft.title}}
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
                  @click="
                    openModal = false;
                    $emit('on:close');
                  "
                >
                  <span class="sr-only">Close</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div v-if="!showConversor">
              <div class=" p-4 sm:items-start text-left sm:mt-0">
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
								v-if="sale.currency == 'USDC'"
							/>
							<ETH color="#000000" size="5" v-if="sale.currency == 'ETH'" />
						</span>
						<input
							type="number"
							name="usd"
							readonly
							disabled
							:step="inputStep"
							:value="sale.amount"
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
					</div>
					
				</div>
			</div>

              <div
                class="
                  px-4
                  pt-3
                  pb-3
                  flex flex-wrap
                  justify-end
                  border-t
                  space-x-2
                "
              >
                <Button
                  @on:submit="buyNow"
                  :customClass="{ 'w-full': saleObject.currency == 'ETH' }"
                  name="CONFIRM CHECKOUT"
                />

                <Button
                  @on:submit="setAllowance"
                  v-if="!authorized && hasFunds && currency == 'USDC'"
                  name="PRE-AUTHORIZE OFFER"
                />
                <Button
                  @on:submit="conversor"
                  v-if="
                    !authorized &&
                    !hasFunds &&
                    currentProvider == 'metamask' &&
                    saleObject.currency == 'USDC'
                  "
                  name="CONVERT TO USDC"
                />
                <Button
                  @on:submit="showFortmaticDeposit"
                  v-if="
                    !authorized && !hasFunds && currentProvider == 'fortmatic'
                  "
                  name="GET USDC"
                />
              </div>
            </div>
            <div v-else>
              <div class="sm:flex flex-col sm:items-between px-4 pt-3 pb-3">
                <div class="mt-3 text-left w-full sm:text-left">
                  <DialogTitle
                    as="h3"
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    Convert ETH to USDC
                  </DialogTitle>
                  <iframe
                    src="https://app.uniswap.org/#/swap?use=v1?outputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
                    height="660px"
                    class="w-full"
                    style="
                      margin-top: 24px;
                      border: 0;
                      display: block;
                      border-radius: 10px;
                    "
                    id="myId"
                  />
                </div>
                <div
                  class="mt-5 sm:mt-4 flex justify-end flex-wrap border-t pt-4"
                >
                  <Button
                    @on:submit="showConversor = false"
                    btn-style="outlined"
                    customClass="mr-2"
                    name="CANCEL"
                  />

                  <Button
                    @on:submit="checkCurrentBalance"
                    name="CHECK BALANCE"
                  />
                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { computed, onMounted, ref, toRefs, watch } from "vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
  DialogTitle,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import Axios from "axios";
import { tokenAllowance, checkBalance } from "../../blockchain/index";
import USDC from "../Shared/USDC.vue";
import { useStore } from "vuex";
import Button from "../Layouts/Button.vue";
import ETH from "../Shared/ETH.vue";
import { storage } from "../../firebase/firebase";


export default {
  components: {
    Dialog,
    DialogTitle,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    XIcon,
    USDC,
    Button,
    ETH,
  },
  emits: ["on:buyNow", "on:allowance", "on:close"],
  props: ["open_modal", "clientRef", "address", "nft", 'sale'],
  setup(props, { emit }) {
    let { clientRef, open_modal, address, nft, sale } = toRefs(props);
    const openModal = ref(false);
    const showConversor = ref(false);
    const saleObject = ref({
      from: sale.from,
      fromAddress: sale.fromAddress,
	  soldTo: clientRef.value,
      soldToAddress: address.value,
      total: sale.amount,
      currency: sale.currency,
      exp_date: sale.exp_date,
      exp_period: sale.exp_period,
      nft: nft.value.nftRef,
	  transactionHash: null
    });
    const usd = ref(0);
    const conversorVal = ref(0);
    const minValue = ref(0);
    const inputStep = ref(0);
    const offerError = ref(false);
    const authorized = ref(false);
    const boxTitle = ref("Authorize USDC");
    const hasFunds = ref(false);
    const usdcBalance = ref(0);
	const nftImage = ref(null);

    const store = useStore();
    const currentAddress = computed(
      () => store.getters["blockchain/getCurrentAddress"]
    );
    const currentProvider = computed(
      () => store.getters["blockchain/getCurrentProvider"]
    );

    const web3Instance = computed(
      () => store.getters["blockchain/getInstance"]
    );

    watch(open_modal, function (val) {
      openModal.value = val;
    });

	watch(nft, async(value) => {
		if (value) {
			var storageRef = storage.ref();
      		nftImage.value = await storageRef.child(value.imageUrl).getDownloadURL();
		}
	})

    const convertCurrency = async () => {
      const request = await Axios.get(
        "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USDC&api_key=0aec04c83ee62053aac51c4c380d7ac28faf2224a683e948de42f3b10182b9b6"
      );

      usd.value = request.data.USD * saleObject.value.total;
      conversorVal.value = request.data.USD;

      usdcBalance.value = await checkBalance(
        web3Instance.value,
        currentAddress.value
      );
      hasFunds.value = usdcBalance.value >= saleObject.value.total;

      console.log("has allowance ->", clientRef.value);

      authorized.value = clientRef.value.hasSetAllowance || false;
    };

    const conversor = () => {
      showConversor.value = true;
    };

    const checkCurrentBalance = async () => {
      usdcBalance.value = await checkBalance(web3Instance, currentAddress.value);
      console.log(usdcBalance.value);
      showConversor.value = false;
      hasFunds.value = usdcBalance.value >= minValue.value;
    };

    const handleChange = () => {
      usd.value = saleObject.value.total * conversorVal.value;
    };

    const setAllowance = async () => {
      store.dispatch("NotificationStore/TOGGLE_LOADING");
      store.dispatch("NotificationStore/LOADING_TEXT");

      const instances = store.getters["blockchain/getInstance"];

      if (saleObject.value.total >= minValue.value) {
        try {
          const ERCReceipt = await tokenAllowance(
            Math.pow(10, 6),
            currentAddress.value,
            instances[currentProvider.value],
            currentProvider.value
          );
          console.log(ERCReceipt);

          store.dispatch("user/setAllowance", {
            client: clientRef.value.dbRef,
          });

          store.dispatch("NotificationStore/TOGGLE_LOADING");

          authorized.value = true;
        } catch (error) {
          emit("on:close");
          store.dispatch("NotificationStore/TOGGLE_LOADING");
          store.dispatch("NotificationStore/setMessage", {
            message: "You canceled Authorization",
            type: "error",
          });
        }
      }
    };

    const buyNow = async () => {
      store.dispatch("NotificationStore/TOGGLE_LOADING");
      
	   emit("on:buyNow", {
        ...saleObject.value,
      });	

      store.dispatch("NotificationStore/TOGGLE_LOADING");
      
      openModal.value = false;

      
    };

    const showFortmaticDeposit = async () => {
      const instances = store.getters["blockchain/getInstance"];
      const fortmatic = instances[currentProvider.value];
      fortmatic.user.deposit();
    };

    onMounted(() => {
      console.log("clientRef =>", clientRef.value);
	    saleObject.value = sale.value;
	    saleObject.value.soldTo = clientRef.value;
      saleObject.value.soldToAddress = address.value;
    });

    return {
      openModal,
      usd,
      conversor,
      handleChange,
      conversorVal,
      buyNow,
      showConversor,
      saleObject,
      minValue,
      inputStep,
      offerError,
      authorized,
      setAllowance,
      boxTitle,
      hasFunds,
      checkCurrentBalance,
      showFortmaticDeposit,
      currentProvider,
      usdcBalance,
      convertCurrency,
	  nftImage
    };
  },
};
</script>
<style scoped>
.mx-datepicker {
  width: auto;
}
</style>
