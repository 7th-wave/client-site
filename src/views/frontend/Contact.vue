<template>
  <div>
    <InteriorPage>
      <template class="relative" #header>
        <div class="relative">
            <div
              class="
                text-center
                mx-auto
                max-w-md
                px-4
                sm:max-w-3xl sm:px-6
                lg:px-8 lg:max-w-7xl
              "
            >
              <p
                class="
                  sm:mt-8 sm:text-4xl
                  text-2xl
                  font-inter
                  leading-10
                  font-medium
                  text-black
                  tracking-tight
                "
              >
                Contact Us
              </p>
            </div>
          </div>
      </template>

      <template class="relative" #body>
        <!-- <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
    </div> -->

        <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div
            class="
              bg-gray-50
              py-16
              px-4
              sm:px-6
              lg:col-span-2 lg:px-8 lg:py-24
              xl:pr-12
            "
          >
            <div class="max-w-lg mx-auto">
              <p class="mt-3 text-lg leading-6 text-gray-900 font-semibold">
                Please let us know if you have any questions
              </p>
              <dl class="mt-8 text-base text-gray-500">
                <div>
                  <dt class="sr-only">Postal address</dt>
                  <div
                    class="
                      flex flex-col
                      items-start
                      space-y-1
                      text-base text-gray-900
                      font-inter font-normal
                    "
                  >
                    <span>San Gwann SGN</span>
                    <span>9030</span>
                    <span>C 94666</span>
                    <span>Malta</span>
                    <span>Key West, FL 33040</span>
                  </div>
                </div>
                <div class="mt-6">
                  <dt class="sr-only">Phone number</dt>
                  <dd class="flex">
                    <PhoneIcon
                      class="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <a
                      class="
                        ml-3
                        text-base text-primary-500
                        font-inter font-normal
                      "
                      target="_blank"
                      rel="noopener noreferrer"
                      href="tel:+1 (000) 000.0000"
                    >
                      +1 (000) 000.0000
                    </a>
                  </dd>
                </div>
                <div class="mt-3">
                  <dt class="sr-only">Email</dt>
                  <dd class="flex">
                    <MailIcon
                      class="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <a
                      class="
                        ml-3
                        text-base text-primary-500
                        font-inter font-normal
                      "
                      target="_blank"
                      rel="noopener noreferrer"
                      href="mailto:info@galleryongreene.com"
                    >
                      info@nimbusplatform.io
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div
            class="
              bg-white
              py-16
              px-4
              sm:px-6
              lg:col-span-3 lg:py-24 lg:px-8
              xl:pl-12
            "
          >
            <div class="max-w-lg mx-auto lg:max-w-none">
              <form @submit.prevent="onSend" class="grid grid-cols-1 gap-y-6">
                <div class="mt-1 relative rounded-md shadow-sm">
                  <label for="full_name" class="sr-only">Full name</label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    autocomplete="name"
                    v-model="data.name"
                    :class="[
                      validations.name &&
                        'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300',
                    ]"
                    class="
                      block
                      w-full
                      shadow-sm
                      py-3
                      px-4
                      placeholder-gray-500
                      focus:ring-primary-500 focus:border-primary-500
                      border-gray-300
                      rounded-md
                    "
                    placeholder="Full name"
                  />
                  <div
                    v-if="validations.name"
                    class="
                      mb-0
                      absolute
                      inset-y-0
                      pr-3
                      right-0
                      sm:mt-px sm:pt-2
                      items-center
                      sm:max-w-xs sm:mt-0 sm:col-span-2
                      pointer-events-none
                    "
                  >
                    <ExclamationCircleIcon
                      class="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                  <p v-if="validations.name" class="mt-2 text-sm text-red-600">
                    {{ validations.name }}
                  </p>
                </div>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <label for="email" class="sr-only">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    v-model="data.email"
                    autocomplete="email"
                    :class="[
                      validations.email &&
                        'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300',
                    ]"
                    class="
                      block
                      w-full
                      shadow-sm
                      py-3
                      px-4
                      placeholder-gray-500
                      focus:ring-primary-500 focus:border-primary-500
                      border-gray-300
                      rounded-md
                    "
                    placeholder="Email"
                  />
                  <div
                    v-if="validations.email"
                    class="
                      mb-0
                      absolute
                      inset-y-0
                      pr-3
                      right-0
                      sm:mt-px sm:pt-2
                      items-center
                      sm:max-w-xs sm:mt-0 sm:col-span-2
                      pointer-events-none
                    "
                  >
                    <ExclamationCircleIcon
                      class="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                  <p v-if="validations.email" class="mt-2 text-sm text-red-600">
                    {{ validations.email }}
                  </p>
                </div>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <label for="phone" class="sr-only">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    v-model="data.phone"
                    autocomplete="tel"
                    :class="[
                      validations.phone &&
                        'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300',
                    ]"
                    class="
                      block
                      w-full
                      shadow-sm
                      py-3
                      px-4
                      placeholder-gray-500
                      focus:ring-primary-500 focus:border-primary-500
                      border-gray-300
                      rounded-md
                    "
                    placeholder="Phone"
                  />
                  <div
                    v-if="validations.phone"
                    class="
                      mb-0
                      absolute
                      inset-y-0
                      pr-3
                      right-0
                      sm:mt-px sm:pt-2
                      items-center
                      sm:max-w-xs sm:mt-0 sm:col-span-2
                      pointer-events-none
                    "
                  >
                    <ExclamationCircleIcon
                      class="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                  <p v-if="validations.phone" class="mt-2 text-sm text-red-600">
                    {{ validations.phone }}
                  </p>
                </div>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <label for="message" class="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    v-model="data.message"
                    :class="[
                      validations.message &&
                        'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300',
                    ]"
                    class="
                      block
                      w-full
                      shadow-sm
                      py-3
                      px-4
                      placeholder-gray-500
                      focus:ring-primary-500 focus:border-primary-500
                      border border-gray-300
                      rounded-md
                    "
                    placeholder="Message "
                  />
                  <div
                    v-if="validations.message"
                    class="
                      mb-0
                      absolute
                      inset-y-0
                      pr-3
                      right-0
                      sm:mt-px sm:pt-2
                      items-center
                      sm:max-w-xs sm:mt-0 sm:col-span-2
                      pointer-events-none
                    "
                  >
                    <ExclamationCircleIcon
                      class="h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  </div>
                  <p
                    v-if="validations.message"
                    class="mt-2 text-sm text-red-600"
                  >
                    {{ validations.message }}
                  </p>
                </div>
                <div>
                  <button
                    type="submit"
                    class="
                      inline-flex
                      justify-center
                      py-3
                      px-6
                      border border-transparent
                      shadow-sm
                      text-base
                      font-medium
                      rounded-md
                      text-white
                      bg-primary-400
                      hover:bg-primary-500
                      focus:outline-none
                    "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </template>
    </InteriorPage>
  </div>
</template>

<script>
import { MailIcon, PhoneIcon } from "@heroicons/vue/outline";
import { useStore } from "vuex";
import { ref, computed } from "vue";
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
import InteriorPage from "../../components/Layouts/InteriorPage.vue";

import api from "../../axios/api";

var reEmail =
  /^([a-zA-Z0-9_\-/.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9/-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;

export default {
  components: {
    MailIcon,
    PhoneIcon,
    ExclamationCircleIcon,
    InteriorPage,
  },

  setup() {
    const data = ref({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    const store = useStore();

    const isValid = ref(true);
    const validations = ref({
      name: computed(
        () =>
          !isValid.value &&
          data.value.name.trim() == "" &&
          "Full name required."
      ),

      email: computed(
        () =>
          (!isValid.value &&
            data.value.email.trim() == "" &&
            "Email is required.") ||
          (!isValid.value &&
            !reEmail.test(data.value.email.trim()) &&
            "Valid email is required.")
      ),

      phone: computed(
        () =>
          !isValid.value &&
          data.value.phone.trim() == "" &&
          "Phone is required."
      ),

      message: computed(
        () =>
          !isValid.value &&
          data.value.message.trim() == "" &&
          "Full name is required."
      ),
    });

    const onSend = async () => {
      isValid.value = false;
      let pass = true;
      let obj = validations.value;
      for (var property in obj) {
        if (obj[property]) {
          pass = false;
          break;
        }
      }

      if (pass) {
        isValid.value = true;

        try {
          await api
            .post("/contactus", data.value)
            .then(function (response) {
              console.log(response);
              store.dispatch("NotificationStore/setMessage", {
                message: "Success send!",
                type: "success",
              });
            })
            .catch(function (error) {
              console.log(error);
              console.log(error.message);
              store.dispatch("NotificationStore/setMessage", {
                message: error.message,
                type: "error",
              });
              // ..
            });
        } catch (error) {
          store.dispatch("NotificationStore/setMessage", {
            message: error.message,
            type: "error",
          });
          // ..
        }
      } else {
        store.dispatch("NotificationStore/setMessage", {
          message: "Error on invalid fields!",
          type: "error",
        });
      }
    };

    return {
      data,
      validations,
      onSend,
    };
  },
};
</script>
