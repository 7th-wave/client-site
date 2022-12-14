<template>
  <form
    @submit.prevent="onSave"
    class="space-y-8 divide-y divide-gray-200 bg-white py-10 px-10 rounded-md"
  >
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5" v-if="isInitied">
      <div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Public Information
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            This information will be displayed publicly.
          </p>
        </div>

        <div
          class="
            mt-6
            sm:mt-5
            space-y-6
            sm:space-y-5
            divide-solid divide-y-1 divide-gray-300
          "
        >
          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="username"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Username <span class="text-red-700 text-lg">*</span>
            </label>
            <div>
              <div
                class="mt-1 relative rounded-md shadow-s sm:mt-0 sm:col-span-2"
              >
                <div class="max-w-lg flex rounded-md shadow-sm">
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
                    @
                  </span>
                  <input
                    type="text"
                    v-model="user.username"
                    name="username"
                    id="username"
                    autocomplete="username"
                    :class="[
                      'flex-1 block w-full focus:ring-primary-500 focus:border-primary-500 min-w-0 rounded-none rounded-r-md  sm:text-sm  border-gray-300',
                      validations.username &&
                        'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300',
                    ]"
                  />
                  <div
                    v-if="validations.username"
                    class="
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
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
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
                class="
                  max-w-lg
                  shadow-sm
                  block
                  w-full
                  focus:ring-primary-500 focus:border-primary-500
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
              <p class="mt-2 text-sm text-gray-500">
                Write a few sentences about yourself.
              </p>
            </div>
          </div>

          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-center
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label for="photo" class="block text-sm font-medium text-gray-700">
              Photo
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="flex items-center">
                <span
                  class="h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                >
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
                  class="
                    ml-5
                    bg-white
                    py-2
                    px-3
                    border border-gray-300
                    rounded-md
                    shadow-sm
                    text-sm
                    leading-4
                    font-medium
                    text-gray-700
                    hover:bg-gray-50
                    focus:outline-none
                  "
                  @click="selectFile"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Personal Information
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div
          class="space-y-6 sm:space-y-5 divide-solid divide-y-1 divide-gray-300"
        >
          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="first_name"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              First name <span class="text-red-700 text-lg">*</span>
            </label>
            <div>
              <div
                class="
                  mt-1
                  max-w-lg
                  w-full
                  sm:max-w-xs
                  relative
                  rounded-md
                  shadow-sm
                  sm:mt-0 sm:col-span-2
                "
              >
                <input
                  type="text"
                  v-model="user.firstName"
                  name="first_name"
                  id="first_name"
                  autocomplete="given-name"
                  :class="[
                    'relative max-w-lg block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md ',
                    validations.firstName &&
                      'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300',
                  ]"
                />
                <div
                  v-if="validations.firstName"
                  class="
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
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="last_name"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Last name <span class="text-red-700 text-lg">*</span>
            </label>
            <div>
              <div
                class="
                  mt-1
                  relative
                  max-w-lg
                  w-full
                  sm:max-w-xs
                  rounded-md
                  shadow-sm
                  sm:mt-0 sm:col-span-2
                "
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
                  class="
                    max-w-lg
                    block
                    w-full
                    shadow-sm
                    focus:ring-primary-500 focus:border-primary-500
                    sm:max-w-xs sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                />
                <div
                  v-if="validations.lastName"
                  class="
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
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Email address <span class="text-red-700 text-lg">*</span>
            </label>
            <div>
              <div
                class="
                  mt-1
                  relative
                  max-w-lg
                  w-full
                  sm:max-w-xs
                  rounded-md
                  shadow-sm
                  sm:mt-0 sm:col-span-2
                "
              >
                <input
                  id="email"
                  v-model="user.email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  :class="[
                    validations.email &&
                      'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300',
                  ]"
                  class="
                    block
                    max-w-lg
                    w-full
                    shadow-sm
                    r
                    focus:ring-primary-500 focus:border-primary-500
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                />
                <div
                  v-if="validations.email"
                  class="
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
              </div>
              <p
                v-if="validations.email"
                class="mt-2 text-sm text-red-600"
                id="email-error"
              >
                {{ validations.email }}
              </p>
            </div>
          </div>

          <div
            v-if="isAdmin"
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Password <span class="text-red-700 text-lg">*</span>
            </label>
            <div>
              <div
                class="
                  mt-1
                  relative
                  rounded-md
                  shadow-sm
                  max-w-lg
                  w-full
                  sm:max-w-xs
                "
              >
                <input
                  type="password"
                  v-model="passwordAdmin"
                  name="password"
                  id="password"
                  :class="[
                    validations.password &&
                      'focus:outline-none focus:ring-red-500 focus:border-red-500 border-red-300',
                  ]"
                  class="
                    max-w-lg
                    block
                    w-full
                    shadow-sm
                    focus:ring-primary-500 focus:border-primary-500
                    sm:max-w-xs sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                />
                <div
                  v-if="validations.password"
                  class="
                    absolute
                    inset-y-0
                    right-0
                    pr-3
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
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="phone"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Phone <span class="text-red-700 text-lg">*</span>
            </label>
            <div>
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
                  class="
                    block
                    max-w-lg
                    w-full
                    shadow-sm
                    focus:ring-primary-500 focus:border-primary-500
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                />
                <div
                  v-if="validations.phone"
                  class="
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
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="country"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Country / Region
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <select
                id="country"
                name="country"
                v-model="user.country"
                autocomplete="country"
                class="
                  max-w-lg
                  block
                  focus:ring-primary-500 focus:border-primary-500
                  w-full
                  shadow-sm
                  sm:max-w-xs sm:text-sm
                  border-gray-300
                  rounded-md
                "
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
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
                class="
                  block
                  max-w-lg
                  w-full
                  shadow-sm
                  focus:ring-primary-500 focus:border-primary-500
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>
          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="city"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              City
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="city"
                v-model="user.city"
                id="city"
                class="
                  max-w-lg
                  block
                  w-full
                  shadow-sm
                  focus:ring-primary-500 focus:border-primary-500
                  sm:max-w-xs sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>
          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="state"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              State / Province
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                v-model="user.state"
                name="state"
                id="state"
                class="
                  max-w-lg
                  block
                  w-full
                  shadow-sm
                  focus:ring-primary-500 focus:border-primary-500
                  sm:max-w-xs sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>
          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-start
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="zip"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              ZIP / Postal
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="zip"
                v-model="user.zipCode"
                id="zip"
                autocomplete="postal-code"
                class="
                  max-w-lg
                  block
                  w-full
                  shadow-sm
                  focus:ring-primary-500 focus:border-primary-500
                  sm:max-w-xs sm:text-sm
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>
        </div>
      </div>

      <div
        class="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5"
      >
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Notifications
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>
        </div>
        <div class="space-y-6 sm:space-y-5 divide-y divide-gray-200">
          <div class="pt-6 sm:pt-5">
            <div role="group" aria-labelledby="label-email">
              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                <div>
                  <div
                    class="
                      text-base
                      font-medium
                      text-gray-900
                      sm:text-sm sm:text-gray-700
                    "
                    id="label-email"
                  >
                    By Email
                  </div>
                </div>
                <div class="mt-4 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg space-y-4">
                    <div class="relative flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="comments"
                          v-model="user.comments"
                          name="comments"
                          type="checkbox"
                          class="
                            focus:ring-primary-500
                            h-4
                            w-4
                            text-primary-600
                            border-gray-300
                            rounded
                          "
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="comments" class="font-medium text-gray-700"
                          >Comments</label
                        >
                        <p class="text-gray-500">
                          Get notified when someones posts a comment on a
                          posting.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="candidates"
                            name="candidates"
                            v-model="user.candidates"
                            type="checkbox"
                            class="
                              focus:ring-primary-500
                              h-4
                              w-4
                              text-primary-600
                              border-gray-300
                              rounded
                            "
                          />
                        </div>
                        <div class="ml-3 text-sm">
                          <label
                            for="candidates"
                            class="font-medium text-gray-700"
                            >Candidates</label
                          >
                          <p class="text-gray-500">
                            Get notified when a candidate applies for a job.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="offers"
                            name="offers"
                            v-model="user.offers"
                            type="checkbox"
                            class="
                              focus:ring-primary-500
                              h-4
                              w-4
                              text-primary-600
                              border-gray-300
                              rounded
                            "
                          />
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="offers" class="font-medium text-gray-700"
                            >Offers</label
                          >
                          <p class="text-gray-500">
                            Get notified when a candidate accepts or rejects an
                            offer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-6 sm:pt-5">
            <div role="group" aria-labelledby="label-notifications">
              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                <div>
                  <div
                    class="
                      text-base
                      font-medium
                      text-gray-900
                      sm:text-sm sm:text-gray-700
                    "
                    id="label-notifications"
                  >
                    Push Notifications
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="max-w-lg">
                    <p class="text-sm text-gray-500">
                      These are delivered via SMS to your mobile phone.
                    </p>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-center">
                        <input
                          id="push_everything"
                          name="push_notifications"
                          v-model="user.sms"
                          value="push_everything"
                          type="radio"
                          class="
                            focus:ring-primary-500
                            h-4
                            w-4
                            text-primary-600
                            border-gray-300
                          "
                        />
                        <label
                          for="push_everything"
                          class="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Everything
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="push_email"
                          name="push_notifications"
                          v-model="user.sms"
                          value="push_email"
                          type="radio"
                          class="
                            focus:ring-primary-500
                            h-4
                            w-4
                            text-primary-600
                            border-gray-300
                          "
                        />
                        <label
                          for="push_email"
                          class="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Same as email
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="push_nothing"
                          name="push_notifications"
                          v-model="user.sms"
                          type="radio"
                          value="push_nothing"
                          class="
                            focus:ring-primary-500
                            h-4
                            w-4
                            text-primary-600
                            border-gray-300
                          "
                        />
                        <label
                          for="push_nothing"
                          class="ml-3 block text-sm font-medium text-gray-700"
                        >
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="lg:flex justify-end">
        <button
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
        </button>
        <button
          type="submit"
          class="
            lg:ml-3
            mt-3
            lg:mt-0 lg:w-auto
            w-full
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-primary-400
            hover:bg-primary-500
            focus:outline-none
          "
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>
<script>
import { onMounted, ref, computed } from "vue";
import { storage, auth } from "../../firebase/firebase";
import { useStore } from "vuex";
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
import { useRouter } from 'vue-router';
var reEmail =
  /^([a-zA-Z0-9_\-/.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9/-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;

export default {
  components: {
    ExclamationCircleIcon,
  },
  props: {
    isAdmin: { type: Boolean, default: false },
  },
  setup(props) {
    const passwordAdmin = ref("");
    
    const user = ref();
    const isInitied = ref(false);

    const validations = ref({
      username: computed(
        () =>
          !isValid.value &&
          user.value.username.trim() == "" &&
          "Username required."
      ),
      firstName: computed(
        () =>
          !isValid.value &&
          user.value.firstName.trim() == "" &&
          "First name required."
      ),
      lastName: computed(
        () =>
          !isValid.value &&
          user.value.lastName.trim() == "" &&
          "Last name required."
      ),
      email: computed(
        () =>
          (!isValid.value &&
            user.value.email.trim() == "" &&
            "Email required.") ||
          (!isValid.value &&
            !reEmail.test(user.value.email.trim()) &&
            "Valid email required.")
      ),
      password: computed(
        () =>
          (!isValid.value &&
            passwordAdmin.value.trim() == "" &&
            "Password required.") ||
          (!isValid.value &&
            passwordAdmin.value.trim().length < 6 &&
            "Password must be greater than 6 digits")
      ),
      phone: computed(
        () =>
          !isValid.value && user.value.phone.trim() == "" && "Phone required."
      ),
    });

    const isValid = ref(true);
    const photo = ref(null);
    const currentAvatar = ref(null);
    const router = useRouter();
    const store = useStore();
    const provider = computed(
      () => store.getters["blockchain/getCurrentProvider"]
    );
    const address = computed(
      () => store.getters["blockchain/getCurrentAddress"]
    );

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
      let userObject;

      if (props.isAdmin) {
        userObject =  await store.getters['admin/getAdmin'];
      } else {
        userObject =  await store.getters['user/getUser'];
      }

      user.value = Object.assign({}, userObject);

      if (user.value.avatar) {
        var storageRef = storage.ref();
        currentAvatar.value = await storageRef.child(user.value.avatar).getDownloadURL();
      }

      console.log(user.value);

      isInitied.value = true;
      
    }

    onMounted(async () => {
      
      initUser();

    });

    const uploadFile = async () => {
      console.log(photo.value.files);
      if (photo.value.files.length) {
        var storageRef = storage.ref();
        var imageRef = storageRef.child("avatars/" + photo.value.files[0].name);

        await imageRef.put(photo.value.files[0]);
        return imageRef.fullPath;
      } else {
        return "";
      }
    };

    const saveCustomer = async (avatar) => {
      user.value.avatar = avatar;
      user.value[provider.value] = address.value;
      try {
        await store.dispatch("user/saveUser", user.value);

        store.dispatch("NotificationStore/setMessage", {
          message: "Your account is ready!",
          type: "success",
        });
     
      } catch (error) {
        store.dispatch("NotificationStore/setMessage", {
          message: "Error on invalid fields!",
          type: "error",
        });
      }
    };

    const saveAdmin = async(avatar) => {
      user.value.avatar = avatar;
      user.value[provider.value] = address.value;
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(
          user.value.email,
          passwordAdmin.value
        );

        user.value.firebaseUser = userCredential.user.uid;
        await store.dispatch("admin/saveAdmin", {admin: user.value});
        store.dispatch("NotificationStore/setMessage", {
          message: "You account is created!",
          type: "success",
        });

        router.push('/admin/my-account');

      } catch (error) {
        console.log(error.code);
        console.log(error.message);
        store.dispatch("NotificationStore/setMessage", {
          message: error.message,
          type: "error",
        });
      }
    } 

    const onSave = async () => {
      isValid.value = false;
      let pass = true;

      const imageUrl = await uploadFile();
      console.log(imageUrl);

      let obj = validations.value;
        for (var property in obj) {
          if (obj[property]) {
            pass = false;
            break;
          }
        }

        if (pass) {

          isValid.value = true;

          if (props.isAdmin) {

            await saveAdmin(imageUrl);
        
          } else {
            
            await saveCustomer(imageUrl);
          }

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
