<template>
  <div
    class="account px-4 py-4 lg:py-16 relative bg-gray-100 font-inter w-full"
  >
    <div class="py-0 sm:py-2 lg:pt-0 lg:pb-8 text-center">
      <h1 class="sm:text-4xl text-2xl font-normal">Vault Creation</h1>
    </div>

    <div
      class="
        flex
        xl:flex-row
        lg:items-start lg:space-x-4
        w-full
        lg:space-y-0
        flex-col
        items-start
        space-y-4
      "
    >
      <div class="hidden xl:block">
        <Menu />
      </div>
      <div
        class="
          mt-5
          md:mt-0
          flex flex-col
          items-start
          space-y-4
          lg:col-span-5
          w-full
        "
      >
        <div class="space-y-4 w-full font-inter">
          <Steps :step="steps" />
          <div class="w-full bg-white rounded-md py-4 px-2">
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="vaultname"
                  class="block text-sm font-medium text-gray-700"
                >
                  Vault Name
                </label>
                <div class="mt-1">
                  <input
                    v-model="form.name"
                    placeholder="Cuco"
                    type="text"
                    name="vaultname"
                    id="vaultname"
                    autocomplete="vaultname"
                    class="
                      shadow-sm
                      focus:ring-primary-500 focus:border-primary-500
                      block
                      w-full
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <div class="pt-1">
                  <span
                    v-if="errors.name"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.name }}</span
                  >
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="category"
                  class="block text-sm font-medium text-gray-700"
                >
                  Vault Category
                </label>
                <div class="mt-1">
                  <select
                    name="category"
                    id="category"
                    class="
                      shadow-sm
                      focus:ring-primary-500 focus:border-primary-500
                      block
                      w-full
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                    v-model="form.category"
                  >
                    <option value="">Fine Art</option>
                  </select>
                </div>
                <div class="pt-1">
                  <span
                    v-if="errors.category"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.category }}</span
                  >
                </div>
              </div>
              <div class="sm:col-span-6">
                <label
                  for="comment"
                  class="block text-sm font-medium text-gray-700"
                  >Vault Description</label
                >
                <div class="mt-1">
                  <textarea
                    v-model="form.description"
                    placeholder="This carved painting comes with a NFT proof of ownership on the blockchain"
                    rows="4"
                    name="comment"
                    id="comment"
                    class="
                      shadow-sm
                      focus:ring-primary-500 focus:border-primary-500
                      block
                      w-full
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <div class="pt-1">
                  <span
                    v-if="errors.description"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.description }}</span
                  >
                </div>
              </div>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="Supply"
                  class="block text-sm font-medium text-gray-700"
                >
                  Supply
                </label>
                <div class="mt-1">
                  <input
                    v-model="form.supply"
                    type="text"
                    name="Supply"
                    id="Supply"
                    autocomplete="Supply"
                    class="
                      shadow-sm
                      focus:ring-primary-500 focus:border-primary-500
                      block
                      w-full
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <div class="pt-1">
                  <span
                    v-if="errors.supply"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.supply }}</span
                  >
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="Price"
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
                  >
                    USDC
                  </span>
                  <input
                    v-model="form.price"
                    type="text"
                    name="Price"
                    id="Price"
                    autocomplete="Price"
                    class="
                      flex-1
                      focus:ring-primary-500 focus:border-primary-500
                      block
                      w-full
                      min-w-0
                      rounded-none rounded-r-md
                      sm:text-sm
                      border-gray-300
                    "
                  />
                </div>
                <div class="pt-1">
                  <span
                    v-if="errors.price"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.price }}</span
                  >
                </div>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="asset_owner"
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
                  >
                    %
                  </span>
                  <input
                    v-model="form.asset_owner"
                    type="text"
                    name="asset_owner"
                    id="asset_owner"
                    autocomplete="asset_owner"
                    class="
                      flex-1
                      focus:ring-primary-500 focus:border-primary-500
                      block
                      w-full
                      min-w-0
                      rounded-none rounded-r-md
                      sm:text-sm
                      border-gray-300
                    "
                  />
                </div>
                <div class="pt-1">
                  <span
                    v-if="errors.asset_owner"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.asset_owner }}</span
                  >
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="asset_launch"
                  class="block text-sm font-medium text-gray-700"
                >
                  Asset Launch Fractions
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
                  >
                    %
                  </span>
                  <input
                    v-model="form.asset_launch"
                    type="text"
                    name="asset_launch"
                    id="asset_launch"
                    autocomplete="asset_launch"
                    class="
                      flex-1
                      focus:ring-primary-500 focus:border-primary-500
                      block
                      w-full
                      min-w-0
                      rounded-none rounded-r-md
                      sm:text-sm
                      border-gray-300
                    "
                  />
                </div>
                <div class="pt-1">
                  <span
                    v-if="errors.asset_launch"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.asset_launch }}</span
                  >
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="Price"
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
                  >
                    %
                  </span>
                  <input
                    v-model="form.jx_fractions"
                    type="text"
                    name="jx_fractions"
                    id="jx_fractions"
                    autocomplete="jx_fractions"
                    class="
                      flex-1
                      focus:ring-primary-500 focus:border-primary-500
                      block
                      w-full
                      min-w-0
                      rounded-none rounded-r-md
                      sm:text-sm
                      border-gray-300
                    "
                  />
                </div>
                <div class="pt-1">
                  <span
                    v-if="errors.jx_fractions"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.jx_fractions }}</span
                  >
                </div>
              </div>
            </div>

            <div class="w-full py-4">
              <div class="w-full bg-gray-300 h-px"></div>
              <div class="w-full py-2 space-y-4">
                <span class="text-sm font-inter text-gray-700 font-medium"
                  >Vault Asset(s)</span
                >
                <div
                  class="
                    grid
                    2xl:grid-cols-10
                    xl:grid-cols-8
                    lg:grid-cols-8
                    md:grid-cols-5
                    grid-cols-2
                    gap-2
                    pt-3
                  "
                >
                  <div
                    class="relative w-28 h-28"
                    v-for="(item, index, key) in form.assets"
                    :key="key"
                  >
                    <div
                      class="border rounded-md overflow-hidden w-full h-full"
                    >
                      <img :src="item" alt="" class="w-full h-full" />
                    </div>
                    <div
                      @click="RemoveItem(index)"
                      class="
                        cursor-pointer
                        absolute
                        -top-2
                        -right-2
                        bg-white
                        rounded-full
                      "
                    >
                      <svg
                        width="27"
                        height="26"
                        viewBox="0 0 27 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.5549 25.6615C20.6241 25.6615 26.3549 19.9308 26.3549 12.8615C26.3549 5.79228 20.6241 0.0615234 13.5549 0.0615234C6.48564 0.0615234 0.754883 5.79228 0.754883 12.8615C0.754883 19.9308 6.48564 25.6615 13.5549 25.6615ZM11.4863 8.53015C10.8614 7.90531 9.84835 7.90531 9.22351 8.53015C8.59867 9.15499 8.59867 10.1681 9.22351 10.7929L11.2921 12.8615L9.22351 14.9302C8.59867 15.555 8.59867 16.5681 9.22351 17.1929C9.84835 17.8177 10.8614 17.8177 11.4863 17.1929L13.5549 15.1243L15.6235 17.1929C16.2483 17.8177 17.2614 17.8177 17.8863 17.1929C18.5111 16.5681 18.5111 15.555 17.8863 14.9302L15.8176 12.8615L17.8863 10.7929C18.5111 10.1681 18.5111 9.15499 17.8863 8.53015C17.2614 7.90531 16.2483 7.90531 15.6235 8.53015L13.5549 10.5988L11.4863 8.53015Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                   @click="AddAssets"
                    class="
                      flex
                      items-center
                      space-x-2
                      bg-gray-100
                      px-6
                      py-4
                      rounded-md
                    "
                  >
                    <span class="text-base text-black font-medium font-inter">
                      ADD ASSET</span
                    >

                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 16.8613C12.4183 16.8613 16 13.2796 16 8.86133C16 4.44305 12.4183 0.861328 8 0.861328C3.58172 0.861328 0 4.44305 0 8.86133C0 13.2796 3.58172 16.8613 8 16.8613ZM6.70711 6.15422C6.31658 5.7637 5.68342 5.7637 5.29289 6.15422C4.90237 6.54475 4.90237 7.17791 5.29289 7.56843L6.58579 8.86133L5.29289 10.1542C4.90237 10.5447 4.90237 11.1779 5.29289 11.5684C5.68342 11.959 6.31658 11.959 6.70711 11.5684L8 10.2755L9.29289 11.5684C9.68342 11.959 10.3166 11.959 10.7071 11.5684C11.0976 11.1779 11.0976 10.5447 10.7071 10.1542L9.41421 8.86133L10.7071 7.56843C11.0976 7.17791 11.0976 6.54475 10.7071 6.15422C10.3166 5.7637 9.68342 5.7637 9.29289 6.15422L8 7.44711L6.70711 6.15422Z"
                        fill="black"
                      />
                    </svg>
                  </button>
                </div>
                <div class="w-full bg-gray-300 h-px"></div>
              </div>
            </div>

            <div class="grid lg:grid-cols-6 gap-8 pt-4">
              <div class="sm:col-span-2 flex items-start space-x-16">
                <div class="w-full space-y-2">
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
                    >
                      QR SHA
                    </span>
                    <input
                      value="0x648C......ECA32F3C"
                      type="text"
                      name="asset_launch"
                      id="asset_launch"
                      autocomplete="asset_launch"
                      class="
                        flex-1
                        text-primary-500
                        focus:ring-primary-500 focus:border-primary-500
                        block
                        w-full
                        min-w-0
                        rounded-none rounded-r-md
                        sm:text-sm
                        border-gray-300
                      "
                    />
                  </div>
                  <div
                    class="
                      w-full
                      h-60
                      rounded-md
                      overflow-hidden
                      border
                      py-4
                      px-2
                    "
                  >
                    <img
                      class="w-full h-full object-cover"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                      alt=""
                    />
                  </div>
                  <button
                    class="
                      text-sm text-gray-700
                      font-medium
                      border
                      w-full
                      py-2.5
                      rounded-md
                    "
                  >
                    PRINT
                  </button>
                </div>
                <div class="h-full w-px bg-gray-200 hidden lg:block"></div>
              </div>
              <div class="sm:col-span-4 space-y-2">
                <div class="sm:pb-10">
                  <span class="text-base text-gray-700 font-medium"
                    >Vault Page Privacy</span
                  >
                </div>
                <fieldset>
                  <legend class="sr-only">Settings</legend>
                  <div class="space-y-5">
                    <div class="relative flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          v-model="form.access"
                          id="small"
                          aria-describedby="small-description"
                          name="plan"
                          type="radio"
                          class="
                            focus:ring-gray-800
                            h-4
                            w-4
                            text-black
                            border-gray-300
                          "
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="small" class="font-medium text-gray-700"
                          >Public access</label
                        >
                        <p id="small-description" class="text-gray-500">
                          Will display on the website artist list
                        </p>
                      </div>
                    </div>

                    <div class="relative flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          v-model="form.access"
                          id="medium"
                          aria-describedby="medium-description"
                          name="plan"
                          type="radio"
                          class="
                            focus:ring-gray-800
                            h-4
                            w-4
                            text-black
                            border-gray-300
                          "
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="medium" class="font-medium text-gray-700"
                          >Private to you</label
                        >
                        <p id="medium-description" class="text-gray-500">
                          Only you can see this draft collection
                        </p>
                      </div>
                    </div>

                    <div class="relative flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          v-model="form.access"
                          id="large"
                          aria-describedby="large-description"
                          name="plan"
                          type="radio"
                          class="
                            focus:ring-gray-800
                            h-4
                            w-4
                            text-black
                            border-gray-300
                          "
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="large" class="font-medium text-gray-700"
                          >Private to
                        </label>
                        <p id="large-description" class="text-gray-500">
                          Only people you share link with
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <div class="pt-1">
                  <span
                    v-if="errors.access"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.access }}</span
                  >
                </div>
                <div class="sm:pt-10">
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
                    >
                      VAULT
                    </span>
                    <input
                      v-model="form.url"
                      type="text"
                      name="company-website"
                      id="company-website"
                      class="
                        flex-1
                        min-w-0
                        block
                        w-full
                        px-3
                        py-2
                        rounded-none rounded-r-md
                        focus:ring-primary-500 focus:border-primary-500
                        sm:text-sm
                        border-gray-300
                      "
                      placeholder="http://"
                    />
                  </div>
                  <div class="pt-1">
                    <span
                      v-if="errors.url"
                      class="text-red-600 font-inter text-sm font-normal"
                      >{{ errors.url }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-10">
              <hr />
            </div>
            <div class="py-14">
              <button
                @click="AddAsset"
                class="
                  text-base text-white
                  font-medium
                  bg-black
                  py-2
                  px-20
                  rounded-md
                  float-right
                "
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-6 space-y-4">
      <MintCard cardtype="edit" />
      <Feed />
    </div>
    <AddAssetsModal ref="AddAssetsModal" />
  </div>
</template>


<script>
import Feed from "@/components/Drawers/Feed.vue";
import Steps from "@/components/Drawers/Steps.vue";
import Menu from "@/components/Layouts/Menu.vue";
import MintCard from "@/components/cards/MintCard.vue";
import AddAssetsModal from  "@/components/Modals/AddAssetsModal.vue";
const steps = [
  {
    id: "1",
    name: "Propose New Vault",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "complete",
  },
  {
    id: "2",
    name: "Approve Vault",
    description: "Cursus semper viverra.",
    href: "#",
    status: "current",
  },
  {
    id: "3",
    name: "Fractionalize",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
];
export default {
  setup() {
    return {
      steps,
    };
  },
  data() {
    return {
      errors: {
        title: "",
        subtitle: "",
        description: "",
        image: "",
        collection: "",
        access: "",
        url: "",
      },
      form: {
        name: "",
        category: "",
        description: "",
        supply: "",
        price: "",
        ticker: "",
        max_fractions: "",
        asset_owner: "",
        asset_launch: "",
        jx_fractions: "",
        assets: [
          "/images/sneakers/01.png",
          "/images/sneakers/03.png",
          "/images/sneakers/06.png",
          "/images/sneakers/02.png",
        ],
      },
    };
  },
  methods: {
    RemoveItem(item) {
      this.form.assets.splice(item, 1);
    },
    AddAssets() {
      this.$refs.AddAssetsModal.open = true;
    },
    AddAsset() {
      if (this.validateForm()) {
        //save data
      }
    },
   
  },
  components: {
    Steps,
    Menu,
    Feed,
    MintCard,
    AddAssetsModal,
  },
};
</script>

<style scoped>
.img-container {
  height: 540.91px;
}
</style>