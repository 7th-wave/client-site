<template>
  <div class="bg-white w-full py-4 px-2 rounded-md shadow-md">
    <span class="text-lg font-inter text-gray-900 font-medium"
      >Create a NFT Vault</span
    >
    <div class="w-full flex flex-col items-start py-4 space-y-4">
      <div class="w-full">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Vault Name</label
        >
        <div class="mt-1">
          <input
            v-model="form.Name"
            type="text"
            name="name"
            id="name"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div class="pt-1">
          <span
            v-if="errors.Name"
            class="text-red-600 font-inter text-sm font-normal"
            >{{ errors.Name }}</span
          >
        </div>
      </div>
      <div class="w-full">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Ticker</label
        >
        <div class="mt-1">
          <input
            v-model="form.Ticker"
            type="text"
            name="Ticker"
            id="Ticker"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <span
          v-if="errors.Ticker"
          class="text-red-600 font-inter text-sm font-normal"
          >{{ errors.Ticker }}</span
        >
      </div>
      <div class="w-full">
        <label for="location" class="block text-sm font-medium text-gray-700"
          >Vault Category</label
        >
        <select
          v-model="form.Category"
          id="Category"
          name="Category"
          class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option
            v-for="(category, index) in categories"
            :key="index"
            :value="category.dbRef"
          >
            {{ category.name }}
          </option>
        </select>
        <span
          v-if="errors.Category"
          class="text-red-600 font-inter text-sm font-normal"
          >{{ errors.Category }}</span
        >
      </div>
      <div class="w-full">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Fractionalized Token Supply</label
        >
        <div class="mt-1">
          <input
            v-model="form.Supply"
            type="text"
            name="Supply"
            id="Supply"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <span
          v-if="errors.Supply"
          class="text-red-600 font-inter text-sm font-normal"
          >{{ errors.Supply }}</span
        >
      </div>

      <div class="w-full">
        <label
          for="company-website"
          class="block text-sm font-medium text-gray-700"
        >
          Fractionalized Token Unit Price
        </label>
        <div class="mt-1 flex rounded-md shadow-sm">
          <span
            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
            >USD</span
          >
          <input
            v-model="form.Price"
            type="text"
            name="Price"
            id="Price"
            class="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
          />
        </div>
        <div class="text-sm font-normal text-gray-500 mt-2">
          <span class="font-semibold">Total Value: </span> {{ calculations.totalVault }}
        </div>
        <span
          v-if="errors.Price"
          class="text-red-600 font-inter text-sm font-normal"
          >{{ errors.Price }}</span
        >
      </div>

      <div class="w-full">
        <label
          for="company-website"
          class="block text-sm font-medium text-gray-700"
        >
          Asset Owner Fractions
        </label>
        <div class="mt-1 flex rounded-md shadow-sm">
          <span
            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
            >%</span
          >
          <input
            v-model="form.Fractions_owner"
            type="text"
            name="Fractions"
            id="Fractions"
            class="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
          />
        </div>
        <div class="text-sm font-normal text-gray-500 mt-2">
          <span class="font-semibold">Token:</span> {{ calculations.ownerFractions }}
        </div>
        <span
          v-if="errors.Fractions_owner"
          class="text-red-600 font-inter text-sm font-normal"
          >{{ errors.Fractions_owner }}</span
        >
      </div>

      <div class="w-full">
        <label
          for="company-website"
          class="block text-sm font-medium text-gray-700"
        >
          Max Fractions for Sale / Wallet
        </label>
        <div class="mt-1 flex rounded-md shadow-sm">
          <span
            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
            >%</span
          >
          <input
            v-model="form.Fractions"
            type="text"
            name="Fractions"
            id="Fractions"
            class="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
          />
        </div>
        <div class="text-sm font-normal text-gray-500 mt-2">
          <span class="font-semibold">Token:</span> {{ calculations.salesFractions }}
        </div>
        <span
          v-if="errors.Fractions"
          class="text-red-600 font-inter text-sm font-normal"
          >{{ errors.Fractions }}</span
        >
      </div>

      <div class="w-full">
        <label
          for="company-website"
          class="block text-sm font-medium text-gray-700"
        >
          JX Fractions
        </label>
        <div class="mt-1 flex rounded-md shadow-sm">
          <span
            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
            >%</span
          >
          <input
            v-model="form.Jx"
            type="text"
            name="JX"
            id="JX"
            disabled="disabled"
            class="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
          />
        </div>
        <div class="text-sm font-normal text-gray-500 mt-2">
          <span class="font-semibold">Token:</span> {{ calculations.jxFractions }}
        </div>
        <span
          v-if="errors.Jx"
          class="text-red-600 font-inter text-sm font-normal"
          >{{ errors.Jx }}</span
        >
      </div>
    </div>
    <div class="w-full bg-gray-300 h-px"></div>
    <div class="flex w-full py-4">
      <div
        class="m-auto"
        :class="{
          'grid grid-cols-3 gap-2': selectedVaults.length > 1,
        }"
      >
        <div
          class="relative w-14 h-14"
          v-for="(item, index, key) in selectedVaults"
          :key="key"
        >
          <div class="border rounded-md overflow-hidden w-full h-full">
            <img :src="item.img" alt="" class="w-full h-full" />
          </div>
          <div
            @click="RemoveItem(item)"
            class="cursor-pointer absolute -top-2 -right-2 z-20 bg-white rounded-full"
          >
            <IconCircle />
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-gray-300 h-px"></div>
    <div class="w-full py-4">
      <button
        @click="Continue"
        class="text-base font-inter font-medium text-white py-2 w-full rounded-md bg-primary-link"
      >
        CONTINUE
      </button>
    </div>
    <!-- <VaultStepModal ref="steps" /> -->
  </div>
</template>
<script>
// import VaultStepModal from "../Modals/VaultStepModal.vue";
import IconCircle from "@/components/Icons/IconCircle.vue";
import { computed, onMounted, ref, toRefs } from "vue";
import { getCategories } from "../../firebase/firebase";
import MoralisFactory from "../../moralis";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { create } from "../../firebase/vaults";

export default {
  props: {
    vaults: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  emits: ["on:clientSelected"],
  components: {
    //VaultStepModal,
    IconCircle,
  },
  setup(props, { emit }) {
    const moralisInstance = MoralisFactory.getInstance();

    const store = useStore();
    const router = useRouter();
    const { vaults } = toRefs(props);

    const selectedVaults = computed(() =>
      vaults.value.filter((vault) => vault.selected)
    );

    const currentAddress = computed(
      () => store.getters["blockchain/getCurrentAddress"]
    );

    const owner = computed(() => store.getters["user/getUser"]);
    const categories = ref("[]");
    const errors = ref({
      Name: "",
      Category: "",
      Supply: "",
      Price: "",
      Ticker: "",
      Fractions: "",
      Jx: "",
      Owner: "",
      Fractions_owner: "",
    });

    const form = ref({
      Name: "",
      Category: "",
      Supply: null,
      Price: null,
      Ticker: "",
      Fractions: null,
      Jx: 3.5,
      Owner: currentAddress,
      Fractions_owner: null,
      status: 'applied'
    });

    const calculations = computed(() => {
      const ownerFractions = (form.value.Supply * form.value.Fractions_owner) / 100;
      const jxFractions = (form.value.Supply * form.value.Jx) / 100;
      const salesFractions = ((form.value.Supply - (ownerFractions + jxFractions)) * form.value.Fractions) / 100;
      const totalVault = form.value.Price * form.value.Supply;

      return {ownerFractions, jxFractions, salesFractions, totalVault};
    });

    const validate = () => {
      var isValid = true;
      errors.value = {
        Name: "",
        Category: "",
        Supply: "",
        Price: "",
        Ticker: "",
        Fractions: "",
        Jx: "",
        Owner: "",
        Fractions_owner: "",
      };
      if (form.value.Name == "") {
        errors.value.Name = "Vault Name is required";
        isValid = false;
      }
      if (form.value.Category == "") {
        errors.value.Category = "Vault Category is required";
        isValid = false;
      }
      if (form.value.Supply == "") {
        errors.value.Supply = "Supply is required";
        isValid = false;
      }
      if (form.value.Price == "") {
        errors.value.Price = "Reserve Price is required";
        isValid = false;
      }
      if (form.value.Ticker == "") {
        errors.value.Ticker = "Ticker is required";
        isValid = false;
      }
      if (form.value.Fractions == "") {
        errors.value.Fractions = "Max Fractions is required";
        isValid = false;
      }
      if (form.value.Jx == "") {
        errors.value.Jx = "JX Fractions is required";
        isValid = false;
      }

      if (form.value.Fractions_owner == "") {
        errors.value.Fractions_owner = "Fractions owner is required";
        isValid = false;
      }
      return isValid;
    };

    const RemoveItem = (item) => {
      item.selected = false;
    };
    const Continue = async () => {
      store.dispatch("NotificationStore/TOGGLE_LOADING");

      if (validate()) {
        //   // this.$refs.steps.open = true;
        //   // this.$refs.steps.step = 1;
        // }
        //  this.$router.push({
        //     name: "VaultsCreateStep2",
        const nft = selectedVaults.value.map(item => {
          return {
            address: item.address,
            id: item.block_number,
            img: item.image
          }
        });

        const data = {
            name: form.value.Name,
            category: form.value.Category,
            supply: parseInt(form.value.Supply),
            reserved_price: parseFloat(form.value.Price),
            ticker: form.value.Ticker,
            max_fractions: parseInt(form.value.Fractions),
            asset_owner: form.value.Owner,
            asset_owner_fractions: parseFloat(form.value.Fractions_owner),
            jx_fractions: parseFloat(form.value.Jx),
            nfts: nft,
            status: form.value.status
        }
        
        try {
          const result = await create(data);
          store.dispatch("NotificationStore/TOGGLE_LOADING");
          router.push('/vault/create/step/2/'+result.dbRef);
        } catch(error) {
          store.dispatch("NotificationStore/TOGGLE_LOADING");
          console.log(error);
        }
      } else {
        store.dispatch("NotificationStore/TOGGLE_LOADING");
      }
    };

    const categoriesLoad = async () => {
      categories.value = await getCategories();
    };

    const loadNfts = async () => {
      store.dispatch("NotificationStore/TOGGLE_LOADING");

      const testnetNFTs = await moralisInstance.Web3API.account.getNFTs({
        chain: "rinkeby",
        address: currentAddress.value,
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
              badge: "",
            };

            return nft;
      });
      store.dispatch("NotificationStore/TOGGLE_LOADING");

      emit("on:clientSelected", { nfts: nfts });
    };

    onMounted(async () => {
      await categoriesLoad();
      await loadNfts();
    });

    return {
      owner,
      form,
      errors,
      validate,
      Continue,
      RemoveItem,
      selectedVaults,
      loadNfts,
      calculations,
      categories
    };
  },
};
</script>
