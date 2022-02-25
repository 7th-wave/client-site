<template>
  <div>
    <h4>Create a Vault</h4>
    <form method="post">
      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div class="sm:col-span-6">
          <label
            for="vault_name"
            class="block text-sm font-medium text-gray-700"
          >
            Vault Name
          </label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              v-model="data.vaultName"
              name="vault_name"
              id="vault_name"
              autocomplete="Vault Name"
              class="
                flex-1
                focus:ring-teal-500 focus:border-teal-500
                block
                w-full
                min-w-0
                rounded-md
                sm:text-sm
                border-gray-300
              "
            />
          </div>
          <div class="pt-1">
            <span
              v-if="errors.vaultName"
              class="text-red-600 font-inter text-sm font-normal"
              >{{ errors.vaultName }}</span
            >
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="supply" class="block text-sm font-medium text-gray-700">
            Supply
          </label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              v-model="data.supply"
              name="supply"
              id="v"
              autocomplete="100"
              class="
                flex-1
                focus:ring-teal-500 focus:border-teal-500
                block
                w-full
                min-w-0
                rounded-md
                sm:text-sm
                border-gray-300
              "
            />
          </div>
           <span
              v-if="errors.supply"
              class="text-red-600 font-inter text-sm font-normal"
              >{{ errors.supply }}</span
            >
        </div>
        <div class="sm:col-span-3">
          <label
            for="bio_title"
            class="block text-sm font-medium text-gray-700"
          >
            Symbol
          </label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              v-model="data.Symbol"
              name="artist_name"
              id="symbol"
              autocomplete="symbol"
              class="
                flex-1
                focus:ring-teal-500 focus:border-teal-500
                block
                w-full
                min-w-0
                rounded-md
                sm:text-sm
                border-gray-300
              "
            />
          </div>
          <span
              v-if="errors.Symbol"
              class="text-red-600 font-inter text-sm font-normal"
              >{{ errors.Symbol }}</span
            >
        </div>
        <div class="sm:col-span-6">
          <label
            for="username"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Reserve Price
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="w-full flex rounded-md shadow-sm">
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
                >USDC
              </span>
              <input
                v-model="data.Price"
                type="text"
                name="Price"
                id="Price"
                autocomplete="Price"
                class="
                  flex-1
                  block
                  w-full
                  focus:ring-indigo-500 focus:border-indigo-500
                  min-w-0
                  rounded-none rounded-r-md
                  sm:text-sm
                  border-gray-300
                "
              />
            </div>
             <span
              v-if="errors.Price"
              class="text-red-600 font-inter text-sm font-normal"
              >{{ errors.Price }}</span
            >
          </div>
        </div>
        <div class="sm:col-span-6">
          <label
            for="username"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Vault Owner Fraction
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="w-full flex rounded-md shadow-sm">
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
                >%
              </span>
              <input
                v-model="data.Vault_Owner"
                type="text"
                name="Owner"
                id="Owner"
                autocomplete="Owner"
                class="
                  flex-1
                  block
                  w-full
                  focus:ring-indigo-500 focus:border-indigo-500
                  min-w-0
                  rounded-none rounded-r-md
                  sm:text-sm
                  border-gray-300
                "
              />
            </div>
              <span
              v-if="errors.Vault_Owner"
              class="text-red-600 font-inter text-sm font-normal"
              >{{ errors.Vault_Owner }}</span
            >
          </div>
        </div>
        <div class="sm:col-span-6">
          <label
            for="vault_name"
            class="block text-sm font-medium text-gray-700"
          >
            Token Owner Fraction
          </label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              v-model="data.Token_Owner"
              name="Token"
              id="Token"
              autocomplete="Token Owner"
              class="
                flex-1
                focus:ring-teal-500 focus:border-teal-500
                block
                w-full
                min-w-0
                rounded-md
                sm:text-sm
                border-gray-300
              "
            />
          </div>
           <span
              v-if="errors.Token_Owner"
              class="text-red-600 font-inter text-sm font-normal"
              >{{ errors.Token_Owner }}</span
            >
        </div>
        <div class="sm:col-span-6">
          <label
            for="username"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Max Fractions for Sale per Buyer / Wallet
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="w-full flex rounded-md shadow-sm">
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
                >%
              </span>
              <input
                v-model="data.Max_Fractions"
                type="text"
                name=" Max_Fractions"
                id="Max_Fractions"
                autocomplete=" Max Fractions"
                class="
                  flex-1
                  block
                  w-full
                  focus:ring-indigo-500 focus:border-indigo-500
                  min-w-0
                  rounded-none rounded-r-md
                  sm:text-sm
                  border-gray-300
                "
              />
            </div>
             <span
              v-if="errors.Max_Fractions"
              class="text-red-600 font-inter text-sm font-normal"
              >{{ errors.Max_Fractions }}</span
            >
          </div>
        </div>
        <div class="sm:col-span-6">
          <hr />
        </div>
        <div class="sm:col-span-2 relative h-28 w-28" v-for="n in 3" :key="n">
          <div
            class="rounded-md border border-gray-300 h-28 w-28 overflow-hidden"
          >
            <img
              class="w-full h-full object-cover"
              src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg"
              alt=""
            />
          </div>
          <div class="absolute -top-4 -right-4 cursor-pointer">
            <XCircleIcon class="w-7 h-7 text-teal-500" />
          </div>
        </div>
        <div class="sm:col-span-6">
          <hr />
        </div>
        <div class="sm:col-span-6 px-4">
          <button
            @click.prevent="CreateVault"
            class="
              w-full
              py-4
              rounded-md
              bg-teal-500
              hover:bg-teal-600
              text-white text-base
              font-inter font-medium
            "
          >
            CONTINUE
          </button>
        </div>
      </div>
    </form>
  </div>
</template> <script>
import { ref } from "@vue/reactivity";
import { XCircleIcon } from "@heroicons/vue/solid";

export default {
  components: {
    XCircleIcon,
  },
  data() {
    return {
      errors: {
        vaultName: "",
        Vault_Owner: "",
        Token_Owner: "",
        Max_Fractions: "",
        Price: "",
        supply: "",
        Symbol: "",
      },
    };
  },
  methods: {
    CreateVault() {
      this.validateForm();
      console.log(this.errors);
      if (this.errors.length == 0) {
        //save data
      }
    },
    validateForm() {
      this.errors = {
        vaultName: "",
        Vault_Owner: "",
        Token_Owner: "",
        Max_Fractions: "",
        Price: "",
        supply: "",
        Symbol: "",
      };
      if (this.data.vaultName == "") {
        this.errors.vaultName = "Vault Name is required";
      }
      if (this.data.Vault_Owner == "") {
        this.errors.Vault_Owner = "Vault Owner Fraction is required";
      }
      if (this.data.Token_Owner == "") {
        this.errors.Token_Owner = "Token Owner Fraction is required";
      }
      if (this.data.Max_Fractions == "") {
        this.errors.Max_Fractions = "Max Fractions for Sale per Buyer / Wallet is required";
      }
      if (this.data.Price == "") {
        this.errors.Price = "Price is required";
      }
      if (this.data.supply == "") {
        this.errors.supply = "Supply is required";
      }
      if (this.data.Symbol == "") {
        this.errors.Symbol = "Symbol is required";
      }
    },
  },
  setup() {
    const data = ref({
      vaultName: "",
      supply: "",
      Symbol: "",
      Price: "",
      Vault_Owner: "",
      Token_Owner: "",
      Max_Fractions: "",
    });
    return { data };
  },
};
</script>