<template>
	<div class="bg-white rounded-lg md:mx-0 mx-2">
		<div class="min-w-7xl mx-auto py-4 px-4 sm:py-2">
			<div class="mx-auto divide-y-2 divide-gray-200">
				<dl class="">
					<div class="mt-1 flex items-baseline md:block lg:flex">
						<div
							class="flex items-baseline text-md font-semibold text-gray-500"
							v-if="auction && auction.wonBy"
						>
							<span class="mr-1">Owner:</span>
							<span>
								<a
									:href="'https://etherscan.io/address/' + auction.wonBy"
									class="text-primary-400"
									target="_blank"
									>{{
										auction.wonBy.replace(
											auction.wonBy.substring(8, auction.wonBy.length - 3),
											"****"
										)
									}}</a
								>
							</span>
						</div>
					</div>

          			<div v-if="!currentAddress && !user.dbRef">
						<Button @click="openLoginModal" customClass="w-full">CONNECT WALLET</Button>
					</div>
					
					<div v-else-if="nft.blockChainOwner !== currentAddress && !nft.isMinted">
						<div class="flex flex-col">
							
							<div><Mint :user="user.dbRef" :current-address="currentAddress" :nft="nft" :nft-ref="nftRef" /></div>

						</div>
					</div>

					<div v-else-if="nft.blockChainOwner !== currentAddress && nft.isMinted && false">
						<div class="flex flex-col">
							
							<div v-if="hasActiveSale"><buy-now :sale-ref="saleRef" :sale="sale" :user="user.dbRef" :current-Address="currentAddress" :nft="nft" @on:buyNow="hideButton" /></div>
							<div><offer @on:bid="saveBid" :user="user.dbRef" :current-Address="currentAddress" :nft="nftRef"></offer></div>

						</div>
					</div>

					

					<div v-if="auction?.status && auction.status != 'ended'">
						<div class="relative py-4">
							<div
								class="
									absolute
									inset-0
									flex
									md:max-w-5xl
									y-8
									m-auto
									items-center
								"
								aria-hidden="true"
							>
								<div class="w-full border-b border-gray-400"></div>
							</div>
						</div>
						<div class="mt-1 flex items-center md:block lg:flex">
							<div
								class="
									flex
									items-center
									text-xl
									 font-semibold
									text-black
								"
							>
								<div class="mx-1 text-sm font-medium text-gray-500">
									<USDC size="6" v-if="auction.minimumPriceCoin == 'USDC'" />
									<ETH size="6" v-if="auction.minimumPriceCoin == 'ETH'" />
								</div>
								<h3 class="mt-0" v-if="auction.minimumPriceCoin == 'USDC'">
									{{ currentBidValue }}
									<span class="ml-1 text-gray-400 text-lg">USDC</span>
								</h3>
								<h3 class="mt-0" v-if="auction.minimumPriceCoin == 'ETH'">
									{{ currentBidValue }}
									<span class="ml-1 text-gray-400 text-lg">({{ usd }})</span>
								</h3>
								<!-- <span
                  class="
                    mx-2
                    xl:text-base
                    text-sm
                    font-normal 
                    text-gray-500
                  "
                >
                  ({{ usd }})
                </span> -->
							</div>
						</div>
						<div class="mt-1 flex items-baseline md:block lg:flex">
							<div
								class="
									flex
									items-baseline
									xl:text-base
									flex-wrap
									text-sm
									font-bold
									text-gray-500
								"
							>
								<span class="mr-1">Auction End:</span>

								<count-down
									v-if="auction.status != 'ended' || auctionTimeLeft > 0"
									:dateEnd="auction.dateEnd"
									:timeEnd="auction.timeEnd"
									:timestamp="auction.timestampEnd"
									@on:timerEnd="endAuction()"
								/>

								<span
									class="mx-2 text-base font-normal text-black"
									v-if="auction.status == 'ended'"
								>
									Sold
								</span>
							</div>
						</div>

						<div
							class="
								flex
								justify-between
								pr-2
								py-4
								rounded-bl-2xl rounded-br-2xl
								px-0
								items-center
							"
						>
							<div class="w-5/6" v-if="auction.status == 'active'">
								<button
									type="button"
									@click="openLoginModal"
									class="
										inline-flex
										items-center
										w-full
										text-center
										uppercase
										px-7
										w-md
										py-2
										border border-primary-400
										shadow-sm
										text-base
										font-medium
										rounded-md
										text-white
										bg-primary-400
										hover:bg-primary-600
										justify-center
										focus:outline-none
									"
									auction-ref="auctionref"
								>
									Place bid <span aria-hidden="true"> +</span>
								</button>
							</div>

							<div class="mt-2 text-primary-400">
								<button @click="openInfoModal" class="focus:outline-none">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</dl>
			</div>
		</div>
	</div>
	

	<PlaceBid
		v-if="currentAddress && user.dbRef"
		:value="currentBidValue"
		:open_modal="open"
		@on:close="closeLoginModal"
		@on:bid="saveBid"
		:step="stepBid"
		:client-ref="user"
		:auction-ref="auctionref"
		:currency="auction.minimumPriceCoin"
	/>

	<RegisterModal
		v-if="currentAddress && !user.dbRef"
		:open_modal="open"
		@on:close="closeLoginModal"
	/>
</template>

<script>
// @ is an alias to /src
import CountDown from "@/components/Shared/CountDown";
import { ref, toRefs } from "@vue/reactivity";
import PlaceBid from "./Modals/PlaceBid.vue";
import { useStore } from "vuex";
import { computed, onMounted, watch } from "@vue/runtime-core";
import Axios from "axios";
import USDC from "./Shared/USDC.vue";
import ETH from "./Shared/ETH.vue";

import slugify from "slugify";
import RegisterModal from "./Modals/RegisterModal.vue";
import Offer from "./Shared/Offer.vue";
import Mint from "./Shared/Mint.vue";
import Button from './Layouts/Button.vue';
import BuyNow from './Shared/BuyNow.vue';
import { db } from "../firebase/firebase";


export default {
	components: {
		CountDown,
		PlaceBid,
		USDC,
		ETH,
		RegisterModal,
		Offer,
		Button,
		BuyNow,
		Mint
	},
	props: {
		nftRef: String,
		nft: Object,
		auction: Object,
		auctionref: String,
	},
	emits: ["on:login", "on:info", "on:placedBid"],
	setup(props, { emit }) {
		const store = useStore();
		let { auction, auctionref, nft } = toRefs(props);
		const auctionTimeLeft = ref(1);
		const open = ref(false);
		const currentAddress = computed(
			() => store.getters["blockchain/getCurrentAddress"]
		);
		const user = computed(() => store.getters["user/getUser"]);
		const usd = ref(0);
		const currentBidValue = computed(() => {
			if (!props?.auction?.bids || props?.auction?.bids.length == 0) {
				return parseFloat(props.auction.minimumPrice);
			}

			let increment =
				props.auction && props.auction.minimumPriceIncrement
					? parseFloat(props.auction.minimumPriceIncrement)
					: 0;

			return (
				increment + (props.auction ? parseFloat(props.auction.lastBidValue) : 0)
			);
		});
		const stepBid = computed(() =>
			props.auction && props?.auction?.minimumPriceIncrement
				? props.auction.minimumPriceIncrement
				: 0
		);

		let convertPrice = 0;

		const formater = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
		});

		const hasActiveSale = ref(false);
		const sale = ref(null);
		const saleRef = ref('');


		onMounted(async () => {
			await store.dispatch("user/getUser", {
				provider: store.getters["blockchain/getCurrentProvider"],
				address: store.getters["blockchain/getCurrentAddress"],
			});

			const request = await Axios.get(
				"https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=0aec04c83ee62053aac51c4c380d7ac28faf2224a683e948de42f3b10182b9b6"
			);
			convertPrice = request.data.USD;

			
		});

		const saveBid = (e) => {
			e.auctionref = auctionref.value;
			e.address = currentAddress.value;
			store.dispatch("auctionStore/setBids", e);
			open.value = false;
			emit("on:placedBid");
		};

		const openLoginModal = () => {
			emit('on:login');
		};

		const closeLoginModal = () => {
			open.value = false;
		};

		const openInfoModal = () => {
			emit("on:info");
		};

		const endAuction = () => {
			auctionTimeLeft.value = -1;
		};

		const hideButton = () => {
			hasActiveSale.value = false;
		}

		watch(auction, (value) => {
			if (value) {
				usd.value = formater.format(convertPrice * value.startingPrice);
			}
		});

		watch(nft, async(value) => {

			if(value && value.sales) {
				const sales = value.sales;

				for(let saleString of sales) {
					const saleDb = await db.collection("sales").doc(saleString).get();
					if (saleDb.data().status == 'active') {
						saleRef.value = saleString;
						hasActiveSale.value = true;
						sale.value = saleDb.data();
					
					}

				} 
			}
		})

		return {
			openLoginModal,
			openInfoModal,
			open,
			closeLoginModal,
			currentAddress,
			user,
			usd,
			currentBidValue,
			stepBid,
			saveBid,
			auctionTimeLeft,
			endAuction,
			slugify,
			hasActiveSale,
			sale,
			saleRef,
			hideButton
		};
	},
};
</script>
