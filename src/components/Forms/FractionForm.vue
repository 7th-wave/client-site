<template>
  <div>
    <h4>Create a Vault</h4>
    <form>
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
          <div class=" pt-1"> 
              <span class=" text-red-600 font-semibold font-inter text-base">Placeholder Error.</span>
          </div>
        </div>
        <div class="sm:col-span-3">
          <label for="supply" class="block text-sm font-medium text-gray-700">
            Supply
          </label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              v-model="data.bio_title"
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
              v-model="data.symbo"
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
              v-model="data.vaultName"
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
  setup() {
    const data = ref({ vaultName: "", supply: "", bio: "" });
    return { data };
  },
};
</script>