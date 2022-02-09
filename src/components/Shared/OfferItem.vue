<template>
    <div class="flex flex-col">
        <div class="mt-1 flex flex-col items-baseline md:block lg:flex">
			<div class="flex items-baseline">
			<span class="text-base font-bold text-gray-500">From:</span>
			<span class="mx-2 text-sm font-normal leading-5">
				{{ offer.fromAddress.replace(offer.fromAddress.substring(0,offer.fromAddress.length - 6), "****") }}
			</span>
			</div>
			<div class="flex items-baseline">
				<span class="text-base font-bold text-gray-500">Status:</span>
				<span class="mx-2 text-sm font-normal leading-5">{{ offer.status }}</span>
			</div>
		
			<div class="flex items-baseline">
				<div class="text-base font-bold text-gray-500">
					Price:
				</div>
				<div class="flex items-center">
					<div class="mx-1">
					<USDC color="#000000" size="3" v-if="offer.currency == 'USDC'" />
					<ETH color="#000000" size="3" v-if="offer.currency == 'ETH'" />
					</div>
					<div
					class="
						items-baseline
						text-sm
						leading-5
					"
					>
					{{ offer.amount }} <span>(${{ dollarValue }})</span>
					
					</div>
				</div>
			</div>
        </div>

        <div v-if="offer.fromAddress == currentAddress" class="mt-4 mb-4 flex just-center">
          <button
            type="button"
            @click="cancelOffer"
            :class="[
              'inline-flex items-center text-center uppercase px-4 w-full py-2 border border-gray-400 shadow-sm text-md font-medium rounded-md ',
              'justify-center focus:outline-none',
              'text-sm leading-5 font-medium',
              'hover:bg-gray-100',
            ]"
          >
            CANCEL
          </button>
        </div>

		<div v-if="nft.fromAddress == currentAddress" class="mt-4 mb-4 flex just-center">
          <button
            type="button"
            @click="acceptOffer"
            :class="[
              'inline-flex items-center text-center uppercase px-4 w-full py-2 border border-gray-400 shadow-sm text-md font-medium rounded-md ',
              'justify-center focus:outline-none',
              'text-sm leading-5 font-medium',
              'hover:bg-gray-100',
            ]"
          >
            Accept Offer
          </button>
        </div>

        <div class="mt-1 flex items-baseline md:block lg:flex">
          <div class="flex items-baseline text-base font-bold text-gray-500">
            <span class="mr-1">Placed:</span>
            <count-down
              :timestamp="timestamp(offer.date)"
              :placed="true"
            />
          </div>
        </div>
    </div>
</template>
<script>
import { ref, defineComponent, onMounted, toRefs, computed } from "vue";

import CountDown from "@/components/Shared/CountDown";
import USDC from './USDC.vue';
import { getTxReceipt } from '../../blockchain/index';
import { db } from "@/firebase/firebase";
import { useStore } from "vuex";
import ETH from "./ETH.vue";
import Axios from 'axios';

export default defineComponent({
    name: "OfferItem",
    components: {
        CountDown,
        USDC,
		ETH
	},
    emits: ['on:withdraw'],
    props: ['offer', 'nft'],
    setup(props, {emit}) {

        const store = useStore();
        let timer = ref();
        const { offer } = toRefs(props);
        const currentAddress = computed(() => store.getters['blockchain/getCurrentAddress']);
		
		const convertPrice = ref(1);

		const dollarValue = computed(() => {
			return (offer.value.amount * convertPrice.value).toLocaleString('en-US')
		})

        onMounted(async () => {
			const request = await Axios.get(
				"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=0aec04c83ee62053aac51c4c380d7ac28faf2224a683e948de42f3b10182b9b6"
			);
			convertPrice.value = request.data.USD;

            if (offer.value.status == 'pending') {
                timer.value = setInterval(async () => {
                const receipt = getTxReceipt(offer.value.transactionHash);
                if (receipt && receipt.status) {
                     await db.collection('offers').doc(offer.value.id).update({
                         status: 'success'
                     });
                    clearInterval(timer.value);
                } else if (receipt && !receipt.status) {
                    await db.collection('offers').doc(offer.value.id).updatETHe({
                         status: 'failed'
                     });
                    clearInterval(timer.value);
                }
                }, 1000);
            }
        })

        const cancelOffer = () => {
            emit('on:cancel');
        }
		const timestamp = (date) => {
          const time = new Date(date).getTime();
          return time;
        };

        return {
            cancelOffer,
            currentAddress,
			timestamp,
			convertPrice,
			dollarValue
        }
    }
})
</script>