<template>
    <div>
        <div class="mt-1 flex flex-col items-baseline md:block lg:flex">
          <div class="flex items-baseline text-base font-bold text-gray-500">
            From:
            <span class="mx-2 text-base font-normal text-gray-500">
              {{ bid.data.from }}
            </span>
          </div>
          <div class="flex items-baseline text-base font-bold text-gray-500">
              Status:
              {{ bid.data.status }}
          </div>
        
          <div class="flex items-baseline text-base font-bold text-gray-500">
            Price:
          </div>
          <div class="mt-1 flex items-center md:block lg:flex">
            <div class="mx-1 text-sm font-medium text-gray-500">
              <USDC color="#A0A4B1" size="5" />
            </div>
            <div
              class="
                flex
                items-baseline
                text-base
                font-opensans font-md
                text-black
              "
            >
              {{ bid.data.amount }}
              
            </div>
          </div>
        </div>

        <div v-if="bid.data.fromAddress == currentAddress" class="mt-4 mb-4 flex just-center">
          <button
            type="button"
            @click="withdrawFunds"
            :class="[
              'inline-flex items-center text-center uppercase px-4 w-full py-2 border border-gray-400 shadow-sm text-md font-medium rounded-md ',
              'justify-center focus:outline-none',
              'text-sm leading-5 font-medium',
              'hover:bg-gray-100',
            ]"
          >
            WITHDRAW
          </button>
        </div>

        <div class="mt-1 flex items-baseline md:block lg:flex">
          <div class="flex items-baseline text-base font-bold text-gray-500">
            <span class="mr-1">Placed:</span>
            <count-down
              :timestamp="timestamp(bid.data.date)"
              :placed="true"
            />
          </div>
        </div>
    </div>
</template>
<script>
import { ref, defineComponent, onMounted, toRefs, computed } from "vue";

import CountDown from "@/components/Shared/CountDown";
import USDC from '../Shared/USDC.vue';
import { getTxReceipt } from '../../blockchain/index';
import { db } from "@/firebase/firebase";
import { useStore } from "vuex";

export default defineComponent({
    name: "Bid",
    components: {
        CountDown,
        USDC
    },
    emits: ['on:withdraw'],
    props: ['bid'],
    setup(props, {emit}) {

        const store = useStore();
        let timer = ref();
        const { bid } = toRefs(props);
        const currentAddress = computed(() => store.getters['blockchain/getCurrentAddress']);


        onMounted(() => {
            if (bid.value.status == 'pending') {
                timer.value = setInterval(async () => {
                const receipt = getTxReceipt(bid.value.transactionHash);
                if (receipt && receipt.status) {
                     await db.collection('bids').doc(bid.value.id).update({
                         status: 'success'
                     });
                    clearInterval(timer.value);
                } else if (receipt && !receipt.status) {
                    await db.collection('bids').doc(bid.value.id).update({
                         status: 'failed'
                     });
                    clearInterval(timer.value);
                }
                }, 1000);
            }
        })

        const withdrawFunds = () => {
            emit('on:withdraw');
        }

        const timestamp = (date) => {
          const time = new Date(date).getTime();
          return time;
        };

        return {
            withdrawFunds,
            currentAddress,
            timestamp
        }
    }
})
</script>