<template>
  <div class="space-y-4">
    <Steps :step="steps" />
    <div class="w-full font-inter divide-gray-200 space-y-4">
      <div
        class="bg-white w-full py-8 px-8 divide-y divide-gray-200 space-y-14"
      >
        <div class="divide-y divide-gray-200 space-y-4">
          <div class="flex w-full">
            <div class="m-auto flex flex-col space-y-1 items-center">
              <span class="text-gray-900 font-medium text-lg"
                >We curate every asset to be fractionalized.</span
              >
              <p class="font-normal text-sm text-gray-500">
                Please complete this application and we’ll get back to you
                shorthly to guide you through the process.
              </p>
            </div>
          </div>
          <div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="first-name"
                  class="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div class="mt-1">
                  <input
                    v-model="form.First_name"
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
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
                    v-if="errors.First_name"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.First_name }}</span
                  >
                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div class="mt-1">
                  <input
                    v-model="form.Last_name"
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
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
                    v-if="errors.Last_name"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.Last_name }}</span
                  >
                </div>
              </div>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-5">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Email</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
                  <div
                    class="
                      absolute
                      inset-y-0
                      left-0
                      pl-3
                      flex
                      items-center
                      pointer-events-none
                    "
                  >
                    <MailIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    v-model="form.Email"
                    type="email"
                    name="email"
                    id="email"
                    class="
                      focus:ring-primary-500 focus:border-primary-500
                      block
                      w-full
                      pl-10
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <div class="pt-1">
                  <span
                    v-if="errors.Email"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.Email }}</span
                  >
                </div>
              </div>

              <div class="sm:col-span-1">
                <label
                  for="Phone"
                  class="block text-sm font-medium text-gray-700"
                  >Phone</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
                  <div
                    class="
                      absolute
                      inset-y-0
                      left-0
                      pl-3
                      flex
                      items-center
                      pointer-events-none
                    "
                  >
                    <PhoneIcon
                      class="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    v-model="form.Phone"
                    type="text"
                    name="Phone"
                    id="Phone"
                    class="
                      focus:ring-primary-500 focus:border-primary-500
                      block
                      w-full
                      pl-10
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <div class="pt-1">
                  <span
                    v-if="errors.Phone"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.Phone }}</span
                  >
                </div>
              </div>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-6">
                <label
                  for="Crypto"
                  class="block text-sm font-medium text-gray-700"
                  >Crypto Wallet Address</label
                >
                <div class="mt-1 relative rounded-md shadow-sm">
                  <div
                    class="
                      absolute
                      inset-y-0
                      left-0
                      pl-3
                      flex
                      items-center
                      pointer-events-none
                    "
                  >
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.41406 3.9375H15.5127C16.402 3.9375 17.125 4.62083 17.125 5.46094V13.5859C17.125 14.4261 16.402 15.1094 15.5127 15.1094H2.90625C1.7843 15.1094 0.875 14.2001 0.875 13.0781V2.92188C0.875 1.79993 1.7843 0.890625 2.90625 0.890625H14.5859C15.4273 0.890625 16.1094 1.57268 16.1094 2.41406C16.1094 2.69463 15.8821 2.92188 15.6016 2.92188H3.41406C3.1335 2.92188 2.90625 3.14912 2.90625 3.42969C2.90625 3.71025 3.1335 3.9375 3.41406 3.9375ZM13.0625 9.52344C13.0625 10.0843 13.5173 10.5391 14.0781 10.5391C14.6389 10.5391 15.0938 10.0843 15.0938 9.52344C15.0938 8.96262 14.6389 8.50781 14.0781 8.50781C13.5173 8.50781 13.0625 8.96262 13.0625 9.52344Z"
                        fill="#9CA3AF"
                      />
                    </svg>
                  </div>
                  <input
                    v-model="form.Wallet"
                    type="text"
                    name="Crypto"
                    id="Crypto"
                    class="
                      focus:ring-primary-500 focus:border-primary-500
                      block
                      w-full
                      pl-10
                      sm:text-sm
                      border-gray-300
                      rounded-md
                      text-sm text-primary-link
                      placeholder-primary-link
                    "
                    placeholder="0xE88123fd6bc0add59e62ac25578270cff1b94567"
                  />
                </div>
                <div class="pt-1">
                  <span
                    v-if="errors.Wallet"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.Wallet }}</span
                  >
                </div>
              </div>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8">
              <div class="sm:col-span-3">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700"
                  >Country / Region</label
                >
                <select
                  v-model="form.Country"
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="
                    mt-1
                    block
                    w-full
                    py-2
                    px-3
                    border border-gray-300
                    bg-white
                    rounded-md
                    shadow-sm
                    focus:outline-none
                    focus:ring-primary-500
                    focus:border-primary-500
                    sm:text-sm
                  "
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                <div class="pt-1">
                  <span
                    v-if="errors.Country"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.Country }}</span
                  >
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="State-name"
                  class="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <div class="mt-1">
                  <input
                    v-model="form.State"
                    type="text"
                    name="State-name"
                    id="State-name"
                    autocomplete="given-name"
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
                    v-if="errors.State"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.State }}</span
                  >
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="City"
                  class="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <div class="mt-1">
                  <input
                    v-model="form.City"
                    type="text"
                    name="City"
                    id="City"
                    autocomplete="City"
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
                    v-if="errors.City"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.City }}</span
                  >
                </div>
              </div>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="wallet"
                  class="block text-sm font-medium text-gray-700"
                >
                  Do you have a crypto wallet?
                </label>
                <div class="mt-1 flex items-center space-x-2">
                  <div class="flex items-center">
                    <input
                      v-model="form.Crypto_wallet"
                      id="walletYes"
                      name="wallet"
                      type="radio"
                      class="
                        focus:ring-primary-500
                        h-4
                        w-4
                        text-primary-600
                        border-gray-300
                      "
                      value="yes"
                    />
                    <label
                      for="walletYes"
                      class="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Yes
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      v-model="form.Crypto_wallet"
                      id="walletNO"
                      name="wallet"
                      type="radio"
                      class="
                        focus:ring-primary-500
                        h-4
                        w-4
                        text-primary-600
                        border-gray-300
                      "
                      value="no"
                    />
                    <label
                      for="walletNO"
                      class="ml-3 block text-sm font-medium text-gray-700"
                    >
                      No
                    </label>
                  </div>
                </div>
                <div class="pt-1">
                  <span
                    v-if="errors.Crypto_wallet"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.Phone }}</span
                  >
                </div>
              </div>
              <div class="sm:col-span-3">
                <label
                  for="trading"
                  class="block text-sm font-medium text-gray-700"
                >
                  Are you familiar with trading exchanges?
                </label>
                <div class="mt-1 flex items-center space-x-2">
                  <div class="flex items-center">
                    <input
                      v-model="form.Trading"
                      id="tradingYes"
                      name="trading"
                      type="radio"
                      class="
                        focus:ring-primary-500
                        h-4
                        w-4
                        text-primary-600
                        border-gray-300
                      "
                      value="yes"
                    />
                    <label
                      for="tradingYes"
                      class="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Yes
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      v-model="form.Trading"
                      id="tradingNO"
                      name="trading"
                      type="radio"
                      class="
                        focus:ring-primary-500
                        h-4
                        w-4
                        text-primary-600
                        border-gray-300
                      "
                      value="no"
                    />
                    <label
                      for="tradingNO"
                      class="ml-3 block text-sm font-medium text-gray-700"
                    >
                      No
                    </label>
                  </div>
                </div>
                <div class="pt-1">
                  <span
                    v-if="errors.Trading"
                    class="text-red-600 font-inter text-sm font-normal"
                    >{{ errors.Trading }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="divide-y py-4 divide-gray-200 space-y-4">
          <div class="flex w-full">
            <div class="m-auto flex flex-col space-y-1 items-center">
              <span class="text-gray-900 font-medium text-lg"
                >List the asset(s) you would like to fractionalize</span
              >
            </div>
          </div>
          <div
            class="w-full rounded-md py-2 px-4 bg-gray-100"
            v-for="(asset, index, key) in form.assets"
            :key="key"
          >
            <div class="w-full flex items-center justify-between">
              <span class="text-base text-gray-700 font-medium"
                >Asset #{{ index + 1 }}</span
              >
              <div @click="RemoveAsset(index)" class="cursor-pointer">
                <IconClose />
              </div>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label
                  for="Name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div class="mt-1">
                  <input
                    v-model="asset.Name"
                    type="text"
                    name="Name"
                    id="Name"
                    autocomplete="given-name"
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
                <span
                  v-if="asset.errors.Name"
                  class="text-red-600 font-inter text-sm font-normal"
                  >{{ asset.errors.Name }}</span
                >
              </div>

              <div class="sm:col-span-3">
                <label
                  for="Valuation"
                  class="block text-sm font-medium text-gray-700"
                >
                  Valuation (USD)
                </label>
                <div class="mt-1">
                  <input
                    v-model="asset.Valuation"
                    type="text"
                    name="Valuation"
                    id="Valuation"
                    autocomplete="family-name"
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
                <span
                  v-if="asset.errors.Valuation"
                  class="text-red-600 font-inter text-sm font-normal"
                  >{{ asset.errors.Valuation }}</span
                >
              </div>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-6">
                <label
                  for="Description"
                  class="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <div class="mt-1">
                  <textarea
                    v-model="asset.Description"
                    id="Description"
                    name="Description"
                    rows="3"
                    class="
                      shadow-sm
                      block
                      w-full
                      focus:ring-primary-500 focus:border-primary-500
                      sm:text-sm
                      border border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <span
                  v-if="asset.errors.Description"
                  class="text-red-600 font-inter text-sm font-normal"
                  >{{ asset.errors.Description }}</span
                >
              </div>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-2">
                <div
                  class="
                    mt-1
                    border-2 border-gray-300 border-dashed
                    rounded-md
                    px-6
                    pt-5
                    pb-6
                    flex
                    justify-center
                  "
                >
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="
                          relative
                          cursor-pointer
                          bg-white
                          rounded-md
                          font-medium
                          text-primary-500
                          hover:text-primary-500
                          focus-within:outline-none
                          focus-within:ring-2
                          focus-within:ring-offset-2
                          focus-within:ring-primary-500
                        "
                      >
                        <span>Upload</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          class="sr-only"
                          @change="UploadFile($event, index)"
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF, SVG up to 100MB
                    </p>
                  </div>
                </div>
                <span
                  v-if="asset.errors.Images"
                  class="text-red-600 font-inter text-sm font-normal"
                  >{{ asset.errors.Images }}</span
                >
              </div>
              <div class="sm:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div
                  class="relative w-full sm:w-32 h-36 bg-gray-300 rounded-md"
                  v-for="(image, imageIndex, imagekey) in asset.Images"
                  :key="imagekey"
                >
                  <div class="rounded-md overflow-hidden w-full h-full">
                    <img
                      :src="image"
                      alt=""
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    class="absolute -top-3 -right-3 cursor-pointer"
                    @click="RemoveImage(imageIndex, index)"
                  >
                    <IconClose />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="py-4">
            <button
              @click="AddAssets"
              class="
                flex
                items-center
                space-x-2
                bg-gray-100
                py-2
                px-6
                rounded-md
                float-right
              "
            >
              <span>ADD ASSET</span>
              <span
                ><svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.5557 32.6411C25.3922 32.6411 32.5556 25.4777 32.5556 16.6411C32.5556 7.80456 25.3922 0.641113 16.5557 0.641113C7.7191 0.641113 0.555664 7.80456 0.555664 16.6411C0.555664 25.4777 7.7191 32.6411 16.5557 32.6411ZM18.5557 10.6411C18.5557 9.53654 17.6602 8.64111 16.5557 8.64111C15.4511 8.64111 14.5557 9.53654 14.5557 10.6411V14.6411H10.5557C9.45109 14.6411 8.55566 15.5365 8.55566 16.6411C8.55566 17.7457 9.45109 18.6411 10.5557 18.6411H14.5557V22.6411C14.5557 23.7457 15.4511 24.6411 16.5557 24.6411C17.6602 24.6411 18.5557 23.7457 18.5557 22.6411V18.6411H22.5556C23.6602 18.6411 24.5556 17.7457 24.5556 16.6411C24.5556 15.5365 23.6602 14.6411 22.5556 14.6411H18.5557V10.6411Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div class="py-14">
          <button
            @click="SubmitForm"
            class="
              flex
              items-center
              space-x-2
              bg-primary-link
              py-4
              px-6
              rounded-md
              float-right
            "
          >
            <span class="text-white font-normal">SUBMIT APPLICATION</span>
          </button>
        </div>
      </div>
    </div>
    <ConfirmDelete ref="deleteModal" @deleteItem="DeleteImage" />
  </div>
</template>



<script>
import { MailIcon, PhoneIcon } from "@heroicons/vue/solid";
import IconClose from "../../Icons/IconCloseBlack.vue";
import Steps from "../../Drawers/Steps.vue";
import ConfirmDelete from "../../Modals/ConfirmDelete.vue";
const steps = [
  {
    id: "1",
    name: "Propose New Asset",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "current",
  },
  {
    id: "2",
    name: "Mint your NFT",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
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
  components: {
    MailIcon,
    PhoneIcon,
    IconClose,
    Steps,
    ConfirmDelete,
  },
  data() {
    return {
      indexDelete: null,
      RemoveImageIndex: null,
      AssetIndex: null,
      errors: {
        First_name: "",
        Last_name: "",
        Email: "",
        Phone: "",
        Wallet: "",
        Country: "",
        City: "",
        State: "",
        Crypto_wallet: "",
        Trading: "",
      },
      form: {
        First_name: "",
        Last_name: "",
        Email: "",
        Phone: "",
        Wallet: "",
        Country: "",
        City: "",
        State: "",
        Crypto_wallet: "",
        Trading: "",
        assets: [],
      },
    };
  },
  methods: {
    DeleteImage() {
      if (this.indexDelete != null) {
        this.form.assets[this.indexDelete].Images.splice(
          this.RemoveImageIndex,
          1
        );
      } else {
        this.form.assets.splice(this.AssetIndex, 1);
      }

      this.$refs.deleteModal.open = false;
      this.indexDelete = null;
      this.RemoveImageIndex = null;
      this.AssetIndex = null;
    },
    clearErrors() {
      this.errors = {
        First_name: "",
        Last_name: "",
        Email: "",
        Phone: "",
        Wallet: "",
        Country: "",
        City: "",
        State: "",
        Crypto_wallet: "",
        Trading: "",
      };
    },

    validateForm() {
      this.clearErrors();
      let formIsValid = true;
      if (this.form.First_name == "") {
        this.errors.First_name = "First name is required";
        formIsValid = false;
      }
      if (this.form.Last_name == "") {
        this.errors.Last_name = "Last name is required";
        formIsValid = false;
      }
      if (this.form.Email == "") {
        this.errors.Email = "Email is required";
        formIsValid = false;
      }
      if (this.form.Phone == "") {
        this.errors.Phone = "Phone is required";
        formIsValid = false;
      }
      if (this.form.Wallet == "") {
        this.errors.Wallet = "Wallet is required";
        formIsValid = false;
      }
      if (this.form.Country == "") {
        this.errors.Country = "Country is required";
        formIsValid = false;
      }
      if (this.form.City == "") {
        this.errors.City = "City is required";
        formIsValid = false;
      }
      if (this.form.State == "") {
        this.errors.State = "State is required";
        formIsValid = false;
      }
      if (this.form.Crypto_wallet == "") {
        this.errors.Crypto_wallet = "Crypto wallet is required";
        formIsValid = false;
      }
      if (this.form.Trading == "") {
        this.errors.Trading = "Trading is required";
        formIsValid = false;
      }

      //validat assets

      this.form.assets.forEach((item) => {
        item.errors = {
          Name: "",
          Valuation: "",
          Description: "",
          Images: "",
        };
        if (item.Name == "") {
          item.errors.Name = "Asset name is required";
          formIsValid = false;
        }
        if (item.Valuation == "") {
          item.errors.Valuation = "Valuation  is required";
          formIsValid = false;
        }
        if (item.Description == "") {
          item.errors.Description = "Description is required";
          formIsValid = false;
        }
        if (item.Images.length == 0) {
          item.errors.Images = "Asset Images is required";
          formIsValid = false;
        }
      });

      return formIsValid;
    },
    AddAssets() {
      this.form.assets.push({
        Name: "",
        Valuation: "",
        Description: "",
        Images: [],
        errors: {
          Name: "",
          Valuation: "",
          Description: "",
          Images: "",
        },
      });
    },
    RemoveAsset(index) {
      this.AssetIndex = index;
      this.$refs.deleteModal.open = true;
    },
    UploadFile(e, index) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.form.assets[index].Images.push(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    RemoveImage(RemoveImage, index) {
      this.indexDelete = index;
      this.RemoveImageIndex = RemoveImage;
      this.$refs.deleteModal.open = true;
    },
    SubmitForm() {
      // if (this.validateForm()) {
      //   console.log(this.form);
      // }
      this.$emit("nextStep");
    },
  },
};
</script>