<template>
  <div class="space-y-4 w-full font-inter">
    <Steps :step="steps" />
    <div class="w-full bg-white rounded-md py-4 px-2">
      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="Title" class="block text-sm font-medium text-gray-700">
            Title
          </label>
          <div class="mt-1">
            <input
              v-model="form.title"
              placeholder="Cuco"
              type="text"
              name="Title"
              id="Title"
              autocomplete="Title"
              class="
                shadow-sm
                focus:ring-indigo-500 focus:border-indigo-500
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
              v-if="errors.title"
              class="text-red-600 font-inter text-sm font-normal"
              >{{ errors.title }}</span
            >
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="Sub-Title"
            class="block text-sm font-medium text-gray-700"
          >
            Sub Title
          </label>
          <div class="mt-1">
            <input
              v-model="form.subtitle"
              placeholder="Original + NFT"
              type="text"
              name="Sub-Title"
              id="Sub-Title"
              autocomplete="Sub-Title"
              class="
                shadow-sm
                focus:ring-indigo-500 focus:border-indigo-500
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
              v-if="errors.subtitle"
              class="text-red-600 font-inter text-sm font-normal"
              >{{ errors.subtitle }}</span
            >
          </div>
        </div>
        <div class="sm:col-span-6">
          <label for="comment" class="block text-sm font-medium text-gray-700"
            >Description</label
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
                focus:ring-indigo-500 focus:border-indigo-500
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
        <div class="sm:col-span-1">
          <label for="img" class="block text-sm font-medium text-gray-700">
            Main NFT Media
          </label>
          <div class="rounded-md overflow-hidden mt-1 h-36">
            <img
              src="/images/categories/caveman.png"
              class="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <div
            class="
              sm:mt-6
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
                    text-indigo-600
                    hover:text-indigo-500
                    focus-within:outline-none
                    focus-within:ring-2
                    focus-within:ring-offset-2
                    focus-within:ring-indigo-500
                  "
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    class="sr-only"
                  />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <div class="sm:col-span-3 space-y-4">
          <div>
            <label
              for="location"
              class="block text-sm font-medium text-gray-700"
              >Collection</label
            >
            <select
              v-model="form.collection"
              id="location"
              name="location"
              class="
                mt-1
                block
                w-full
                pl-3
                pr-10
                py-2
                text-base
                border-gray-300
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
                rounded-md
              "
            >
              <option value="Fine Art">Fine Art</option>
            </select>
            <div class="pt-1">
              <span
                v-if="errors.collection"
                class="text-red-600 font-inter text-sm font-normal"
                >{{ errors.collection }}</span
              >
            </div>
          </div>
          <div class="flex items-center space-x-2 cursor-pointer">
            <div>
              <svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.3281 4.17578V0.875H4.99609C4.5754 0.875 4.23438 1.21603 4.23438 1.63672V13.3164C4.23438 13.7371 4.5754 14.0781 4.99609 14.0781H13.6289C14.0496 14.0781 14.3906 13.7371 14.3906 13.3164V4.9375H11.0898C10.6709 4.9375 10.3281 4.59473 10.3281 4.17578ZM10.3281 15.0938V16.3633C10.3281 16.784 9.9871 17.125 9.56641 17.125H0.933594C0.512903 17.125 0.171875 16.784 0.171875 16.3633V4.68359C0.171875 4.2629 0.512903 3.92188 0.933594 3.92188H3.21875V13.3164C3.21875 14.2965 4.01605 15.0938 4.99609 15.0938H10.3281ZM12.0747 1.09809L14.1675 3.19097C14.3104 3.33382 14.3906 3.52756 14.3906 3.72957V3.92188H11.3438V0.875H11.5361C11.7381 0.875 11.9318 0.955248 12.0747 1.09809Z"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
            <span class="text-sm text-primary-500 font-normal"
              >HASHNUMBERNJSDNFKJSDNFKJNSDFSDFSDF</span
            >
          </div>
        </div>
      </div>
      <div>
        <div class="space-y-4 pt-4">
          <div
            class="w-full rounded-md py-2 px-4 bg-gray-100"
            v-for="(asset, index, key) in form.assets"
            :key="key"
          >
            <div class="w-full flex items-center justify-between">
              <span class="text-base text-gray-700 font-medium"
                >Atribute #{{ index + 1 }}</span
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
                    v-model="asset.name"
                    type="text"
                    name="Name"
                    id="Name"
                    autocomplete="given-name"
                    class="
                      shadow-sm
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <span
                  v-if="asset.errors.name"
                  class="text-red-600 font-inter text-sm font-normal"
                  >{{ asset.errors.name }}</span
                >
              </div>

              <div class="sm:col-span-3">
                <label
                  for="Value"
                  class="block text-sm font-medium text-gray-700"
                >
                  Value
                </label>
                <div class="mt-1">
                  <input
                    v-model="asset.value"
                    type="text"
                    name="Value"
                    id="Value"
                    autocomplete="Value"
                    class="
                      shadow-sm
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <span
                  v-if="asset.errors.value"
                  class="text-red-600 font-inter text-sm font-normal"
                  >{{ asset.errors.value }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="py-14">
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
      <div class="grid grid-cols-6 gap-8">
        <div class="sm:col-span-2 space-y-2">
          <div class="w-full h-60 rounded-md overflow-hidden border py-4 px-2">
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
        <div class="sm:col-span-4 space-y-2 sm:mt-16">
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
          <div>
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
                http://
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
                  focus:ring-indigo-500 focus:border-indigo-500
                  sm:text-sm
                  border-gray-300
                "
                placeholder="www.example.com"
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
</template>


<script>
// import Feed from '../../Drawers/Feed.vue'
import Steps from "../../Drawers/Steps.vue";
import IconClose from "../../Icons/IconCloseBlack.vue";

const steps = [
  {
    id: "1",
    name: "Propose New Asset",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "complete",
  },
  {
    id: "2",
    name: "Approve Curated Asset",
    description: "Cursus semper viverra.",
    href: "#",
    status: "current",
  },
  {
    id: "3",
    name: "Mint Asset",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
  {
    id: "4",
    name: "Create a Vault",
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
        title: "",
        subtitle: "",
        description: "",
        image: "gg",
        collection: "",
        access: "",
        url: "",
        assets: [],
      },
    };
  },
  methods: {
    AddAssets() {
      this.form.assets.push({
        name: "",
        value: "",
        errors: {
          name: "",
          value: "",
        },
      });
    },
    RemoveAsset(index) {
      this.form.assets.splice(index, 1);
    },
    AddAsset() {
      if (this.validateForm()) {
        //save data
      }
    },
    clearErrors() {
      this.errors = {
        title: "",
        subtitle: "",
        description: "",
        image: "",
        collection: "",
      };
    },
    validateForm() {
      this.clearErrors();
      let formIsValid = true;
      if (this.form.title == "") {
        this.errors.title = "Title is required";
        formIsValid = false;
      }
      if (this.form.subtitle == "") {
        this.errors.subtitle = "Subtitle is required";
        formIsValid = false;
      }
      if (this.form.description == "") {
        this.errors.description = "Description is required";
        formIsValid = false;
      }
      if (this.form.image == "") {
        this.errors.image = "Image is required";
        formIsValid = false;
      }
      if (this.form.collection == "") {
        this.errors.collection = "Collection is required";
        formIsValid = false;
      }
      if (this.form.access == "") {
        this.errors.access = "Access is required";
        formIsValid = false;
      }
      if (this.form.url == "") {
        this.errors.url = "Url is required";
        formIsValid = false;
      }
      //validat assets

      this.form.assets.forEach((item) => {
        item.errors = {
          name: "",
          value: "",
        };
        if (item.name == "") {
          item.errors.name = "Name is required";
          formIsValid = false;
        }
        if (item.value == "") {
          item.errors.value = "Value  is required";
          formIsValid = false;
        }
      });

      return formIsValid;
    },
  },
  components: {
    Steps,
    IconClose,
    // Feed
  },
};
</script>

<style scoped>
.img-container {
  height: 540.91px;
}
</style>