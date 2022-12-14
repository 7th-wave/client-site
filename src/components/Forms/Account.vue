<template>
  <form
    @submit.prevent="onSave"
    class="space-y-8 divide-y divide-gray-200 bg-white py-10 px-4 rounded-md"
  >
    <div
      :class="[
        'space-y-8 divide-y divide-gray-200 sm:space-y-5',
        'md:mx-auto mx-0 px-0 sm:px-0 lg:px-8 ',
        'max-w-md sm:max-w-3xl lg:max-w-5xl',
      ]"
      v-if="isInitied"
    >
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Public Information
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          This information will be displayed publicly.
        </p>
      </div>

      <div
        class="mt-6 sm:mt-5 space-y-6 sm:space-y-5 divide-solid divide-y-1 divide-gray-300"
      >
        <div
          class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
        >
          <label
            for="username"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Username <span class="text-red-700 text-lg">*</span>
          </label>
          <div class="col-span-2 w-full">
            <div class="mt-1 w-full relative rounded-md shadow-sm sm:mt-0">
              <input
                type="text"
                v-model="user.username"
                name="username"
                id="username"
                autocomplete="given-name"
                :class="[
                  'relative  block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500  sm:text-sm border-gray-300 rounded-md ',
                  validations.username &&
                    'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300',
                ]"
              />
              <div
                v-if="validations.username"
                class="absolute inset-y-0 pr-3 right-0 sm:mt-px sm:pt-2 items-center sm:max-w-xs sm:mt-0 sm:col-span-2 pointer-events-none"
              >
                <ExclamationCircleIcon
                  class="h-5 w-5 text-red-500"
                  aria-hidden="true"
                />
              </div>
            </div>
            <p
              v-if="validations.username"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            >
              {{ validations.username }}
            </p>
          </div>
        </div>
        <div
          class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
        >
          <label
            for="first_name"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            Email address* <span class="text-red-700 text-lg">*</span>
          </label>
          <div class="col-span-2">
            <div
              class="mt-1 w-full relative rounded-md shadow-s sm:mt-0 col-span-2"
            >
              <div class="w-full flex rounded-md shadow-sm">
                
                <input
                  type="email"
                  v-model="user.email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  :class="[
                    'flex-1 block w-full focus:ring-primary-500 focus:border-primary-500 min-w-0 rounded-none rounded-r-md  sm:text-sm  border-gray-300',
                    validations.email &&
                      'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300',
                  ]"
                />
                <div
                  v-if="validations.email"
                  class="absolute inset-y-0 pr-3 right-0 sm:mt-px sm:pt-2 items-center sm:max-w-xs sm:mt-0 sm:col-span-2 pointer-events-none"
                >
                  <ExclamationCircleIcon
                    class="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <p
              v-if="validations.email"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            >
              {{validations.email}}
            </p>
          </div>
        </div>
        <div
          class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
        >
          <label
            for="about"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
          >
            About
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <textarea
              id="about"
              v-model="user.about"
              name="about"
              rows="3"
              class="max-w-lg shadow-sm block w-full focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
            />
            <p class="mt-2 text-sm text-gray-500">
              Write a few sentences about yourself.
            </p>
          </div>
        </div>

        <div
          class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5"
        >
          <label for="photo" class="block text-sm font-medium text-gray-700">
            Photo
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="flex items-center">
              <span class="h-full w-12 rounded-full overflow-hidden bg-white">
                <svg
                  v-if="!user.avatar"
                  class="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>

                <img :src="currentAvatar" v-if="user.avatar" />
              </span>
              <input
                type="file"
                class="hidden"
                ref="photo"
                @change="updatePhotoPreview"
              />
              <button
                type="button"
                class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                @click="selectFile"
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Personal Information -->
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Personal Information
        </h3>
        <div
          class="space-y-6 sm:space-y-5 divide-solid divide-y-1 divide-gray-300"
        >
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="first_name"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              First name <span class="text-red-700 text-lg"></span>
            </label>
            <div class="col-span-2">
              <div
                class="mt-1 w-full relative rounded-md shadow-sm sm:mt-0 sm:col-span-2"
              >
                <input
                  type="text"
                  v-model="user.firstName"
                  name="first_name"
                  id="first_name"
                  autocomplete="given-name"
                  :class="[
                    'relative  block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500  sm:text-sm border-gray-300 rounded-md ',
                    validations.firstName &&
                      'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300',
                  ]"
                />
                <div
                  v-if="validations.firstName"
                  class="absolute inset-y-0 pr-3 right-0 sm:mt-px sm:pt-2 items-center sm:max-w-xs sm:mt-0 sm:col-span-2 pointer-events-none"
                >
                  <ExclamationCircleIcon
                    class="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <p
                v-if="validations.firstName"
                class="mt-2 text-sm text-red-600"
                id="email-error"
              >
                {{ validations.firstName }}
              </p>
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="last_name"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Last name <span class="text-red-700 text-lg"></span>
            </label>
            <div class="col-span-2">
              <div
                class="mt-1 relative w-full rounded-md shadow-sm sm:mt-0 sm:col-span-2"
              >
                <input
                  type="text"
                  v-model="user.lastName"
                  name="last_name"
                  id="last_name"
                  autocomplete="family-name"
                  :class="[
                    validations.firstName &&
                      'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300',
                  ]"
                  class="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
                />
                <div
                  v-if="validations.lastName"
                  class="absolute inset-y-0 pr-3 right-0 sm:mt-px sm:pt-2 items-center sm:max-w-xs sm:mt-0 sm:col-span-2 pointer-events-none"
                >
                  <ExclamationCircleIcon
                    class="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <p
                v-if="validations.lastName"
                class="mt-2 text-sm text-red-600"
                id="email-error"
              >
                {{ validations.lastName }}
              </p>
            </div>
          </div>

          <div
            v-if="isAdmin && !isEdit"
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Password <span class="text-red-700 text-lg">*</span>
            </label>
            <div class="col-span-2">
              <div class="mt-1 relative rounded-md shadow-sm w-full">
                <input
                  type="password"
                  v-model="passwordAdmin"
                  name="password"
                  id="password"
                  :class="[
                    validations.password &&
                      'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300',
                  ]"
                  class="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
                />
                <div
                  v-if="validations.password"
                  class="absolute inset-y-0 right-0 pr-3 sm:mt-px sm:pt-2 items-center sm:mt-0 pointer-events-none"
                >
                  <ExclamationCircleIcon
                    class="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <p
                v-if="validations.password"
                class="mt-2 text-sm text-red-600"
                id="email-error"
              >
                {{ validations.password }}
              </p>
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="phone"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Phone <span class="text-red-700 text-lg"></span>
            </label>
            <div class="col-span-2">
              <div
                class="mt-1 relative rounded-md shadow-sm sm:mt-0 sm:col-span-2"
              >
                <input
                  id="phone"
                  name="phone"
                  v-model="user.phone"
                  type="text"
                  autocomplete="phone"
                  :class="[
                    validations.phone &&
                      'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300',
                  ]"
                  class="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
                />
                <div
                  v-if="validations.phone"
                  class="absolute inset-y-0 pr-3 right-0 sm:mt-px sm:pt-2 items-center sm:mt-0 sm:col-span-2 pointer-events-none"
                >
                  <ExclamationCircleIcon
                    class="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <p
                v-if="validations.phone"
                class="mt-2 text-sm text-red-600"
                id="email-error"
              >
                {{ validations.phone }}
              </p>
            </div>
          </div>

          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="country"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Country / Region
            </label>
            <div class="mt-1 sm:mt-0 col-span-2">
              <select
                id="country"
                name="country"
                v-model="user.country"
                autocomplete="country"
                class="block focus:ring-primary-500 focus:border-primary-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="street_address"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Street address
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                v-model="user.street"
                name="street_address"
                id="street_address"
                autocomplete="street-address"
                class="block max-w-full w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="city"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              City
            </label>
            <div class="mt-1 sm:mt-0 col-span-2">
              <input
                type="text"
                name="city"
                v-model="user.city"
                id="city"
                class="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="state"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              State / Province
            </label>
            <div class="mt-1 sm:mt-0 col-span-2">
              <input
                type="text"
                v-model="user.state"
                name="state"
                id="state"
                class="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div
            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
          >
            <label
              for="zip"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              ZIP / Postal
            </label>
            <div class="mt-1 sm:mt-0 col-span-2">
              <input
                type="text"
                name="zip"
                v-model="user.zipCode"
                id="zip"
                autocomplete="postal-code"
                class="block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          
        </div>
      </div>

      <!-- Notifications -->

      <div>
        <div
          class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700 py-4"
          id="label-email"
        >
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Notifications
          </h3>
        </div>
        <div
          class="pt-6 sm:pt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline"
        >
          <div class="">
            <span class="text-gray-700 font-medium font-inter text-sm"
              >By Email</span
            >
          </div>

          <div class="max-w-lg space-y-4 col-span-2">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="Promotions"
                  name="newsletter"
                  type="checkbox"
                  class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                />
              </div>
              <div class="ml-3 text-sm flex flex-col items-start">
                <label for="Promotions" class="font-medium text-gray-700"
                  >Promotions</label
                >
                <span class="text-sm font-inter text-gray-500"
                  >Get notified when new product and fractions are listed.</span
                >
              </div>
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="Security"
                  name="newsletter"
                  type="checkbox"
                  class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                />
              </div>
              <div class="ml-3 text-sm flex flex-col items-start">
                <label for="Security" class="font-medium text-gray-700"
                  >Security & New Features</label
                >
                <span class="text-sm font-inter text-gray-500"
                  >Get notified about security updates and when new features are
                  added.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full py-8">
        <div
          class="pt-6 sm:pt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline"
        >
          <div class="">
            <span class="text-gray-700 font-medium font-inter text-sm"
              >Delete your Account</span
            >
          </div>

          <div class="w-full">
            <button
              type="button"
              class="bg-black py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              @click="deleteAccount"
            >
              REQUEST ACCOUNT DELETION
            </button>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="pt-5 lg:flex justify-end">
        <!-- <button
          type="button"
          class="
            bg-white
            lg:w-auto
            w-full
            py-2
            px-4
            border border-gray-300
            rounded-md
            shadow-sm
            text-sm
            font-medium
            text-gray-700
            hover:bg-gray-50
            focus:outline-none
          "
        >
          Cancel
        </button> -->

        <button
          type="submit"
          class="lg:ml-3 mt-3 lg:mt-0 lg:w-auto w-full inline-flex justify-center py-2 px-14 border border-transparent shadow-sm text-sm font-medium rounded-md text-white hover:bg-primary-500 focus:outline-none uppercase"
          style="background-color: #049aff"
        >
          SAVE
        </button>
      </div>
    </div>
    <DeleteAccountModal ref="deleteAccountRef" />
  </form>
</template>
<script>
import { onMounted, ref, computed } from "vue";
import { storage } from "../../firebase/firebase";
import { useStore } from "vuex";
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
import DeleteAccountModal from "@/components/Modals/DeleteAccountModal.vue";
const reEmail =
  /^([a-zA-Z0-9_\-/.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9/-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;

export default {
  methods: {
    deleteAccount() {
      this.$refs.deleteAccountRef.open = true;
    },
  },
  components: {
    ExclamationCircleIcon,
    DeleteAccountModal,
  },
  props: {
    isAdmin: { type: Boolean, default: false },
    isEdit: { type: Boolean, default: false },
  },
  setup() {
    const passwordAdmin = ref("");
    const user = ref();
    const isInitied = ref(false);
    const currentAddress = computed(() => store.getters['blockchain/getCurrentAddress']);


    const validations = ref({
      username: computed(
        () =>
          !isValid.value &&
          user.value.username == "" &&
          "Username required."
      ),
      
      email: computed(
        () =>
          (!isValid.value &&
            user.value.email == "" &&
            "Email required.") ||
          (!isValid.value &&
            !reEmail.test(user.value.email) &&
            "Valid email required.")
      ), 
      
      
    });

    const isValid = ref(true);
    const photo = ref(null);
    const currentAvatar = ref(null);
    const store = useStore();

    const selectFile = () => {
      photo.value.click();
    };

    const updatePhotoPreview = () => {
      const reader = new FileReader();

      reader.onload = (e) => {
        user.value.avatar = e.target.result;
        currentAvatar.value = user.value.avatar;
      };

      reader.readAsDataURL(photo.value.files[0]);
    };

    const initUser = async () => {
      await store.dispatch('user/getUser', {address: currentAddress.value});
      let userObject = store.getters["user/getUser"];

      user.value = Object.assign({}, userObject);

      if (user.value.avatar) {
        const storageRef = storage.ref();
        currentAvatar.value = await storageRef
          .child(user.value.avatar)
          .getDownloadURL();
      }

      isInitied.value = true;
    };

    onMounted(async () => {
      initUser();
    });


    const uploadFile = async () => {
      if (photo.value.files.length) {
        const storageRef = storage.ref();
        const imageRef = storageRef.child("avatars/" + photo.value.files[0].name);

        await imageRef.put(photo.value.files[0]);
        return imageRef.fullPath;
      } else {
        return "";
      }
    };

    const saveCustomer = async (avatar) => {
      store.dispatch("NotificationStore/TOGGLE_LOADING");
      user.value.avatar =
        avatar != "" && avatar != user.value.avatar
          ? avatar
          : user.value.avatar;

      try {
        await store.dispatch("user/updateUser", user.value );
        store.dispatch("NotificationStore/TOGGLE_LOADING");
        store.dispatch("NotificationStore/setMessage", {
          message: "Your account is ready!",
          type: "success",
        });
        //router.pop()
      } catch (error) {
        store.dispatch("NotificationStore/TOGGLE_LOADING");
        store.dispatch("NotificationStore/setMessage", {
          message: "Error Saving account!",
          type: "error",
        });
      }
    };

    const onSave = async () => {
      isValid.value = false;
      let pass = true;

      const imageUrl = await uploadFile();

      let obj = validations.value;

      for (let property in obj) {
        
        if (obj[property]) {
          pass = false;
          break;
        }
      }

      console.log(pass);

      if (pass) {

        isValid.value = true;
        console.log(imageUrl);
        await saveCustomer(imageUrl);
        
      } else {
        store.dispatch("NotificationStore/setMessage", {
          message: "Error on invalid fields!",
          type: "error",
        });
      }
    };

    return {
      onSave,
      user,
      passwordAdmin,
      selectFile,
      photo,
      updatePhotoPreview,
      validations,
      isValid,
      isInitied,
      currentAvatar
    };
  },
};
</script>
