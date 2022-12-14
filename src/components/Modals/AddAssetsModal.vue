<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="openModal">
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="openModal = false"
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
              sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full
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
                  >Add / Remove Assets from the Vault</span
                >
                <div
                  class="p-1 bg-white rounded-md shadow-sm cursor-pointer"
                  @click="openModal = false"
                >
                  <XIcon class="w-5 h-5 text-primary-500" />
                </div>
              </div>
            </div>
            <div class="w-full grid lg:grid-cols-3 py-2 px-4 gap-4">
              <VaultCard
                v-for="(item, index, key) in vaults"
                :key="key"
                :vault="item"
              />
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import VaultCard from "@/components/cards/VaultCard.vue";

import { onMounted, ref, toRefs, watch } from "vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/solid";
import MoralisFactory from "../../moralis";
import { useStore } from 'vuex';

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    XIcon,
    VaultCard,
  },
  props: ['selected', 'open', 'owner'],
  emits: ["on:clientSelected"],
  setup(props, {emit}) {
    const moralisInstance = MoralisFactory.getInstance();
    const store = useStore();
    const { selected, open, owner} = toRefs(props);

    const vaults = ref([])
    const openModal = ref(false);

    watch(open, (value) => {
      openModal.value = value;
    });

    watch(owner, (value) => {
      loadNfts(value, selected.value);
    })

    const loadNfts = async (owner, selected) => {
      store.dispatch("NotificationStore/TOGGLE_LOADING");

      const testnetNFTs = await moralisInstance.Web3API.account.getNFTs({
        chain: "rinkeby",
        address: owner,
      });
      const results = testnetNFTs.result;

      const nfts = results.filter((item) => {
        if (item.symbol !== "NFTB") {
          const metadata = JSON.parse(item.metadata);
          if (metadata) {
            return item;
          }
        }
      }).map(item => {
        const metadata = JSON.parse(item.metadata);
        const nft = {
              address: item.token_address,
              block_number: item.token_id,
              name: metadata.name,
              image: metadata.image,
              title: metadata.name,
              selected: selected.some(selectedItem => item.id == selectedItem.id),
              badge: "",
            };

            return nft;
      });
      store.dispatch("NotificationStore/TOGGLE_LOADING");

      emit("on:clientSelected", { nfts: nfts });
    };

    
    onMounted(async() => {
      await loadNfts(owner.value, selected.value);
    })

    return {
     vaults,
     openModal
    };
  }

 
};
</script>