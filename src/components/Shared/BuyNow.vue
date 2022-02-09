<template>
	<div
		class="
			flex
			justify-between
			pr-2
			py-4
			rounded-bl-2xl rounded-br-2xl
			px-0
			flex
			items-center
		"
	>
		<div class="w-5/6">
			<Button @click="showBuyNowSummary()" customClass="w-full" name="BUY NOW" />
		</div>
		<div class="mt-2 text-teal-400">
			<button @click="openModal" class="focus:outline-none">
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

        <buy-now-modal
            :open_modal="showBuyNowDialog"
            @on:close="closeModal"
            @on:buyNow="buyNow"
            :client-ref="user"
			:nft="nft"
			:address="currentAddress"
            :sale="sale"
        ></buy-now-modal>
	</div>
</template>
<script>
import { ref } from '@vue/reactivity';
import { useStore } from "vuex";
import Button from "../Layouts/Button.vue";
import BuyNowModal from '../Modals/BuyNowModal.vue';

export default {
	components: { Button, BuyNowModal },
	props: ['user', 'currentAddress', 'nft', 'sale', 'saleRef'],
	setup(props, {emit}) {
		const store = useStore();

        const showBuyNowDialog = ref(false);

        const showBuyNowSummary = () => {
            showBuyNowDialog.value = true;
        }

		const openModal = async () => {
			await store.dispatch("NotificationStore/SET_MODAL_MESSAGE", {
				message:
					"We need an explanation.",
			});
			await store.dispatch("NotificationStore/SET_MODAL_TITLE", {
				title: "Buy now",
			});
			await store.dispatch("NotificationStore/SET_MODAL_BUTTONS", {
				buttons: [
					{
						name: "OK",
						btnStyle: "secondary",
						action: async function () {
							await store.dispatch("NotificationStore/SET_OPEN_MODAL");
						},
					},
				],
			});
			await store.dispatch("NotificationStore/SET_OPEN_MODAL");
		};

        const closeModal = () => {
			showBuyNowDialog.value = false;
		};

		const buyNow = (e) => {
            store.dispatch("saleStore/sell", {sale: e, saleRef: props.saleRef});
			showBuyNowDialog.value = false;
            emit('on:buyNow');
        }

		return {
			openModal,
            showBuyNowSummary,
            showBuyNowDialog,
            closeModal,
            buyNow
		};
	},
};
</script>
