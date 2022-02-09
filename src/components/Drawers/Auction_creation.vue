<template v-if="data.status == 'delete'">
  <Disclosure as="div" class="" v-slot="{ open }">
    <dt class="text-lg">
      <DisclosureButton
        class="
          text-left
          w-full
          flex
          justify-between
          items-start
          text-gray-400
          focus:outline-none
        "
      >
        <span class="font-medium text-black text-lg uppercase">
          Auction Creation
        </span>
        <span class="ml-6 h-7 flex items-center">
          <ChevronDownIcon
            :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']"
            aria-hidden="true"
          />
        </span>
      </DisclosureButton>
    </dt>
    <DisclosurePanel as="dd" class="mt-2 rounded-sm px-2 py-2">
      <div class="mt-1 flex items-baseline md:block lg:flex">
        <div class="flex items-baseline text-base font-bold text-gray-500">
          By:
          <span class="mx-2 text-base font-normal text-gray-500">{{
            data.by
          }}</span>
        </div>
      </div>
      <div class="mt-1 flex items-baseline md:block lg:flex">
        <div class="flex items-baseline text-base font-bold text-gray-500">
          Date:
          <span class="mx-2 text-base font-normal text-gray-500">{{
            data.dateStarts
          }}</span>
        </div>
      </div>
      <div class="mt-1 flex items-baseline md:block lg:flex">
        <div class="flex items-baseline text-base font-bold text-gray-500">
          Status:
          <span class="mx-2 text-base font-normal text-gray-500">{{
            data.status.toUpperCase()
          }}</span>
        </div>
      </div>
      <div class="mt-1 flex items-baseline md:block lg:flex">
        <div class="flex items-baseline text-base font-bold text-gray-500">
          Won by:
          <span class="mx-2 text-base font-normal text-gray-500">{{
            data.wonBy ? data.wonBy.replace(data.wonBy.substring(8,data.wonBy.length - 3), "****") : "N/A"
          }}</span>
        </div>
      </div>
      <div class="mt-1 flex items-center lg:flex" v-if="data.wonPrice">
        <div class="flex items-center text-base font-bold text-gray-500">
          Sold Price:
        </div>
        <div class="mt-1 flex items-center lg:flex">
          <div class="mx-1 text-sm font-medium text-gray-500">
            <USDC size="5" />
          </div>
          <div
            class="
              flex
              items-center
              text-base
              font-opensans font-md
              text-black
            "
          >
            {{data.wonPrice}}
          </div>
        </div>
      </div>
      <div class="mt-5 flex items-center lg:flex" v-if="data.wonPrice">
        <div class="mt-1 flex items-center lg:flex font-opensans">
          <div class="mx-1 text-sm font-medium text-gray-400">
            <USDC size="5" />
          </div>
          <div
            class="
              flex
              items-center
              text-xl
              font-opensans font-semibold
              text-black
            "
          >
            {{data.wonPrice}}
            <!-- <span
              class="mx-2 text-base font-normal font-opensans text-gray-400"
            >
              ($450,000.00)
            </span> -->
          </div>
        </div>
      </div>
      <div class="mt-3 flex items-baseline md:block lg:flex">
        <div class="flex items-baseline text-base font-bold text-gray-500">
          <span class="mr-2">Auction End:</span>
          <count-down
                  v-if="data.status != 'ended' && data.status != 'sold'"
                  :dateEnd="data.dateEnd"
                  :timeEnd="data.timeEnd"
                  :timestamp="data.timestampEnd"
                />
          <span v-else class="mx-2 text-base font-normal text-black">
            Sold
          </span>
        </div>
      </div>
      <div v-if="data.status == 'ended' && !finishing" class="pt-8 flex just-center -mb-3">
        <button
          type="button"
          @click="showFinishAuctionConfirmation"
          :class="[
            'inline-flex items-center text-center uppercase px-4 w-full py-2 border border-gray-400 shadow-sm text-md font-medium rounded-md ',
            'justify-center focus:outline-none',
            'text-sm leading-5 font-medium',
            'hover:bg-gray-100',
          ]"
        >
          FINISH
        </button>
      </div>
      <div v-if="finishing" class="pt-8 -mb-3">
        <span>Are your sure you want to finish and select the winner bid?</span>
        
        <div class="pt-8 flex just-center -mb-3">

          <button
            type="button"
            @click="cancelProccess"
            :class="[
              'inline-flex items-center text-center uppercase mx-2 px-4 w-full py-2 border border-gray-400 shadow-sm text-md font-medium rounded-md ',
              'justify-center focus:outline-none',
              'text-sm leading-5 font-medium',
              'hover:bg-gray-100',
            ]"
          >
            CANCEL
          </button>
          <button
            type="button"
            @click="finishAuction"
            :class="[
              'inline-flex items-center text-center uppercase mx-2 px-4 w-full py-2 border border-gray-400 shadow-sm text-md font-medium rounded-md text-white',
              'justify-center focus:outline-none',
              'text-sm leading-5 font-medium',
              'bg-gray-900 hover:bg-black',
            ]"
          >
            YES
          </button>
        </div>
      </div>
      <div v-if="data.status != 'sold' && data.status != 'ended'" class="pt-8 flex just-center -mb-3">
        <button
          type="button"
          @click="handleStatus"
          :class="[
            'inline-flex items-center text-center uppercase px-4 w-full py-2 border border-gray-400 shadow-sm text-md font-medium rounded-md ',
            'justify-center focus:outline-none',
            'text-sm leading-5 font-medium',
            'hover:bg-gray-100',
          ]"
        >
          {{ data.status == "active" ? "PAUSE" : "CONTINUE" }}
        </button>
      </div>
      <div v-if="data.status != 'sold' && data.status != 'ended' && (!data.bids || data.bids.length)" class="pt-8 flex just-center">
        <button
          type="button"
          @click="deleteStatus"
          :class="[
            'inline-flex items-center text-center uppercase px-4 w-full py-2 border border-gray-400 shadow-sm text-md font-medium rounded-md text-white',
            'justify-center focus:outline-none',
            'text-sm leading-5 font-medium',
            'bg-gray-900 hover:bg-black',
          ]"
        >
          DELETE
        </button>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { ref, toRefs } from "vue";
import { db, getClientByBlockChain } from "../../firebase/firebase";
import { computed, onMounted } from "@vue/runtime-core";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import USDC from '../Shared/USDC.vue'
import CountDown from '@/components/Shared/CountDown.vue'
import {cancelAuction, toggleAuction, endAuction} from '../../blockchain/index';

const buttonColor = {
  sold: "bg-gray-400 ",
  selected: "bg-gray-900 hover:bg-black",
  "for sale": "text-white hover:text-white border-green-400 bg-green-400",
};

export default {
  props: ["auction"],
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
    USDC,
    CountDown
  },
  setup(props) {
    const open = ref(false);
    const store = useStore();
    const { auction } = toRefs(props);
    const route = useRoute();
    const nftRef = ref(route.params.artid);
    const finishing = ref(false);
    const data = ref({
      by: "",
      startingPrice: 0,
      startingPriceCoin: "",
      minimumPrice: 0,
      minimumPriceCoin: "",
      minimumPriceIncrement: 0,
      minimumPriceIncrementCoin: "",
      dateStarts: "",
      dateEnd: "",
      status: "",
      timeStarts: "",
      timeEnd: "",
      timestampEnd: '',
      wonBy: "",
      wonPrice: "",
      bids: []
    });
    const countDownData = ref({
      day: "",
      hour: "",
      minute: "",
      second: "",
    });

    const currentAddress = computed(
      () => store.getters["blockchain/getCurrentAddress"]
    );
    
    const getDetail = async (value) => {
      const currentData = await db.collection("auctions").doc(value).get();
      const client = await getClientByBlockChain(currentAddress.value)

      data.value = currentData.data();
      data.value.bids = currentData.data().bids || [];
      data.value.by = client.data.username;
    };

    const handleStatus = async () => {
      store.dispatch("NotificationStore/TOGGLE_LOADING");
      if (data.value.status == "active") {
        await toggleAuction(auction.value, 'pause');
        await db
          .collection("auctions")
          .doc(auction.value)
          .update({
            status: "pause",
          })
          .then(() => {
            data.value.status = "pause";
          })
          .catch((e) => {
            console.log(e);
          });

          store.dispatch("NotificationStore/setMessage", {
            message: "Auction paused.",
            type: "success",
          });
      } else if (data.value.status == "pause") {
        await toggleAuction(auction.value, 'unpause');
        await db
          .collection("auctions")
          .doc(auction.value)
          .update({
            status: "active",
          })
          .then(() => {
            data.value.status = "active";
          })
          .catch((e) => {
            console.log(e);
          });
        store.dispatch("NotificationStore/TOGGLE_LOADING");
        store.dispatch("NotificationStore/setMessage", {
          message: "Auction resumed.",
          type: "success",
        });
      }
    };

    const deleteStatus = async () => {
      const currentData = await db.collection("nfts").doc(nftRef.value).get();
      try {
        await cancelAuction(auction.value);
        console.log(currentData.data());
        const result = currentData
          .data()
          .auctions.filter((e) => e != auction.value);
        console.log(result);

        await db
          .collection("nfts")
          .doc(nftRef.value)
          .update({
            auctions: result,
          })
          .then(() => {
            data.value.status = "delete";
          })
          .catch((e) => {
            console.log(e);
          });

        await db
          .collection("auctions")
          .doc(auction.value)
          .update({
            status: "delete",
          })
          .then(() => {
            data.value.status = "delete";
            //depois fazer uma melhora disso

            location.reload();
          });
          store.dispatch("NotificationStore/setMessage", {
            message: "Auction deleted successfuly.",
            type: "success",
          });

      } catch (error) {
        store.dispatch("NotificationStore/setMessage", {
          message: "You rejected the transaction.",
          type: "error",
        });
      }
      
    };

    const finishAuction = async () => {
      finishing.value = false;
      await endAuction(auction.value);
      await store.dispatch('auctionStore/finishAuction', {auctionref: auction.value, nftRef: nftRef.value});
      data.value.status = 'sold';
    }

    const showFinishAuctionConfirmation = () => {
      finishing.value = true;
    }

    const cancelProccess = () => {
      finishing.value = false;
    }

    onMounted(async () => {
      await getDetail(auction.value);
    });

    return {
      open,
      data,
      buttonColor,
      handleStatus,
      deleteStatus,
      countDownData,
      showFinishAuctionConfirmation,
      finishAuction,
      finishing,
      cancelProccess
    };
  },
};
</script>
