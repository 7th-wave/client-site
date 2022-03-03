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
			<Button @click="makeOffer()" customClass="w-full" name="MAKE OFFER" />
		</div>
		<div class="mt-2 text-primary-400">
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

        <offer-modal
            :open_modal="showOfferDialog"
            @on:close="closeModal"
            @on:offer="saveOffer"
            :client-ref="user"
			:nft="nft"
			:address="currentAddress"
        ></offer-modal>
	</div>
</template>
<script>
import { ref } from '@vue/reactivity';
import { useStore } from "vuex";
import Button from "../Layouts/Button.vue";
import OfferModal from '../Modals/OfferModal.vue';
export default {
	components: { Button, OfferModal },
	props: ['user', 'currentAddress', 'nft'],
	setup(props, {emit}) {
		const store = useStore();

        const showOfferDialog = ref(false);

        const makeOffer = () => {
            showOfferDialog.value = true;
        }

		const openModal = async () => {
			await store.dispatch("NotificationStore/SET_MODAL_MESSAGE", {
				message:
					"To place an offer you will have to pay some network gas fees. The NFT Owner will receive a notification. If they accept, the transaction will go through. You may cancel the offer at any time to receive your funds back.",
			});
			await store.dispatch("NotificationStore/SET_MODAL_TITLE", {
				title: "Make an Offer",
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
			showOfferDialog.value = false;
		};

        const saveOffer = (e) => {
			store.dispatch("offerStore/createOffer", e);
			showOfferDialog.value = false;
			emit("on:placeOffer");
        }

		

		return {
			openModal,
            makeOffer,
            showOfferDialog,
            closeModal,
            saveOffer
		};
	},
};
</script>
