<template>
 <div class="bg-white w-full py-6 px-4 rounded-md shadow-md">
            <span class="text-lg font-inter text-gray-900 font-medium"
              >Create a NFT Vault</span
            >
            <div class="w-full flex flex-col items-start py-4 space-y-4">
              <div class="w-full">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Vault Name</label
                >
                <div class="mt-1">
                  <input
                    v-model="form.Name"
                    type="text"
                    name="name"
                    id="name"
                    class="
                      shadow-sm
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                    placeholder="Banksy’s Caveman"
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
                <label
                  for="location"
                  class="block text-sm font-medium text-gray-700"
                  >Vault Category</label
                >
                <select
                  v-model="form.Category"
                  id="Category"
                  name="Category"
                  class="
                    mt-1
                    block
                    w-full
                    pl-3
                    pr-10
                    py-2
                    text-base
                    border-gray-300
                    focus:outline-none
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    sm:text-sm
                    rounded-md
                  "
                >
                  <option value="cat_1">cat 1</option>
                  <option selected value="cat_2">cat 2</option>
                  <option value="cat_3">cat 3</option>
                </select>
                <span
                  v-if="errors.Category"
                  class="text-red-600 font-inter text-sm font-normal"
                  >{{ errors.Category }}</span
                >
              </div>
              <div class="w-full">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Supply</label
                >
                <div class="mt-1">
                  <input
                    v-model="form.Supply"
                    type="text"
                    name="Supply"
                    id="Supply"
                    class="
                      shadow-sm
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                    placeholder="100,000,000"
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
                  Reserve Price
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
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
                    >USDC</span
                  >
                  <input
                    v-model="form.Price"
                    type="text"
                    name="Price"
                    id="Price"
                    class="
                      flex-1
                      min-w-0
                      block
                      w-full
                      px-3
                      py-2
                      rounded-none rounded-r-md
                      focus:ring-indigo-500 focus:border-indigo-500
                      sm:text-sm
                      border-gray-300
                    "
                    placeholder="10,000,000"
                  />
                </div>
                <span
                  v-if="errors.Price"
                  class="text-red-600 font-inter text-sm font-normal"
                  >{{ errors.Price }}</span
                >
              </div>
              <div class="w-full">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Ticker</label
                >
                <div class="mt-1">
                  <input
                    v-model="form.Ticker"
                    type="text"
                    name="Ticker"
                    id="Ticker"
                    class="
                      shadow-sm
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                    placeholder="NIKE"
                  />
                </div>
                <span
                  v-if="errors.Ticker"
                  class="text-red-600 font-inter text-sm font-normal"
                  >{{ errors.Ticker }}</span
                >
              </div>
              <div class="w-full">
                <label
                  for="company-website"
                  class="block text-sm font-medium text-gray-700"
                >
                  Max Fractions for Sale per Buyer / Wallet
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
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
                    >%</span
                  >
                  <input
                    v-model="form.Fractions"
                    type="text"
                    name="Fractions"
                    id="Fractions"
                    class="
                      flex-1
                      min-w-0
                      block
                      w-full
                      px-3
                      py-2
                      rounded-none rounded-r-md
                      focus:ring-indigo-500 focus:border-indigo-500
                      sm:text-sm
                      border-gray-300
                    "
                    placeholder="5"
                  />
                </div>
                <span
                  v-if="errors.Fractions"
                  class="text-red-600 font-inter text-sm font-normal"
                  >{{ errors.Fractions }}</span
                >
              </div>
              <div class="w-full">
                <label
                  for="location"
                  class="block text-sm font-medium text-gray-700"
                  >Asset Owner</label
                >
                <select
                  v-model="form.Owner"
                  id="Asset_Owner"
                  name="Asset_Owner"
                  class="
                    mt-1
                    block
                    w-full
                    pl-3
                    pr-10
                    py-2
                    text-base
                    border-gray-300
                    focus:outline-none
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    sm:text-sm
                    rounded-md
                  "
                >
                  <option value="{Asset Owner Name} {0xab...124E}">
                    {Asset Owner Name} {0xab...124E}
                  </option>
                </select>
                <span
                  v-if="errors.Owner"
                  class="text-red-600 font-inter text-sm font-normal"
                  >{{ errors.Owner }}</span
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
                    >%</span
                  >
                  <input
                    v-model="form.Fractions_owner"
                    type="text"
                    name="Fractions"
                    id="Fractions"
                    class="
                      flex-1
                      min-w-0
                      block
                      w-full
                      px-3
                      py-2
                      rounded-none rounded-r-md
                      focus:ring-indigo-500 focus:border-indigo-500
                      sm:text-sm
                      border-gray-300
                    "
                    placeholder="51"
                  />
                </div>
                <div class="text-sm font-normal text-gray-500">
                  <span class="font-semibold">Token</span>: 51,000,000
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
                  JX Fractions
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
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
                    >%</span
                  >
                  <input
                    v-model="form.Jx"
                    type="text"
                    name="JX"
                    id="JX"
                    class="
                      flex-1
                      min-w-0
                      block
                      w-full
                      px-3
                      py-2
                      rounded-none rounded-r-md
                      focus:ring-indigo-500 focus:border-indigo-500
                      sm:text-sm
                      border-gray-300
                    "
                    placeholder="3"
                  />
                </div>
                <div class="text-sm font-normal text-gray-500">
                  <span class="font-semibold">Token</span>: 7,000,000
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
                :class="{ 'grid 2xl:grid-cols-1 lg:grid-cols-1  sm:grid-cols-3  gap-2': selectedVaults.length > 1 }"
              >
                <div
                  class="relative w-28 h-28"
                  v-for="(item, index, key) in selectedVaults"
                  :key="key"
                >
                  <div class="border rounded-md overflow-hidden w-full h-full">
                    <img :src="item.img" alt="" class="w-full h-full" />
                  </div>
                  <div
                    @click="RemoveItem(item)"
                    class="
                      cursor-pointer
                      absolute
                      -top-2
                      -right-2
                      z-20
                      bg-white
                      rounded-full
                    "
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
                class="
                  text-base
                  font-inter font-medium
                  text-white
                  py-2
                  w-full
                  rounded-md
                  bg-primary-link
                "
              >
                CONTINUE
              </button>
            </div>
             <VaultStepModal ref="steps" />
          </div>  
</template> 
<script>
import VaultStepModal from "../Modals/VaultStepModal.vue";
import IconCircle from "@/components/Icons/IconCircle.vue";

export default {
  props: {
    vaults: {
      type: Array,
      default: () => [],
      required: true
    },
  },
  components: {
    VaultStepModal,
    IconCircle
  },
  data() {
    return {
      Vaults: this.vaults,
       errors: {
        Name: "",
        Category: "",
        Supply: "",
        Price: "",
        Ticker: "",
        Fractions: "",
        Jx: "",
        Owner: "",
        Fractions_owner: "",
      },
      form: {
        Name: "",
        Category: "",
        Supply: "",
        Price: "",
        Ticker: "",
        Fractions: "",
        Jx: "",
        Owner: "",
        Fractions_owner: "",
      },
    };
  },
   computed: {
    selectedVaults() {
      return this.Vaults.filter((vault) => vault.selected);
    },
  },
  methods: {
    validate() {
      var isValid = true;
      this.errors = {
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
      if (this.form.Name == "") {
        this.errors.Name = "Vault Name is required";
        isValid = false;
      }
      if (this.form.Category == "") {
        this.errors.Category = "Vault Category is required";
        isValid = false;
      }
      if (this.form.Supply == "") {
        this.errors.Supply = "Supply is required";
        isValid = false;
      }
      if (this.form.Price == "") {
        this.errors.Price = "Reserve Price is required";
        isValid = false;
      }
      if (this.form.Ticker == "") {
        this.errors.Ticker = "Ticker is required";
        isValid = false;
      }
      if (this.form.Fractions == "") {
        this.errors.Fractions = "Max Fractions is required";
        isValid = false;
      }
      if (this.form.Jx == "") {
        this.errors.Jx = "JX Fractions is required";
        isValid = false;
      }
      if (this.form.Owner == "") {
        this.errors.Owner = "Asset Owner is required";
        isValid = false;
      }
      if (this.form.Fractions_owner == "") {
        this.errors.Fractions_owner = "Fractions owner is required";
        isValid = false;
      }
      return isValid;
    },

    RemoveItem(item) {
      item.selected = false;
    },
    Continue() {
      // if (this.validate()) {
      //   // this.$refs.steps.open = true;
      //   // this.$refs.steps.step = 1;
       
      // }
       this.$router.push({
          name: "VaultsCreateStep2",
        });
    },
  },
 
};
</script>