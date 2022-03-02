<template>
  <div class="artist bg-gray-100 font-inter">
    <div class="relative font-inter py-8 sm:py-8 lg:py-8">
      <div class="relative">
        <Navbar :type="'admin'" />
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
              text-3xl
              font-semibold
              text-gray-900
              tracking-tight
              sm:text-4xl
            "
          >
            Nike Waffle Sneaker
          </p>
        </div>
        <div></div>
      </div>
    </div>
    <div class="lg:grid lg:grid-cols-7 lg:gap-6 rounded-lg sm:px-10">
      <div class="lg:col-span-2 lg:block flex flex-col items-start space-y-8">
        <Menu />
        <div>
          <NftCard>
            <template #image>
              <img
                class="w-full h-full object-cover"
                src="https://cdn.corporatefinanceinstitute.com/assets/types-of-assets-1024x575.jpeg"
                alt=""
              />
            </template>

            <template #title>
              <span class="text-gray-900 text-xl font-semibold font-inter"
                >Nike Waffle Sneakers</span
              >
            </template>
          </NftCard>
        </div>
      </div>

      <div class="mt-5 md:mt-0 lg:col-span-5">
        <div
          class="relative bg-white py-8 rounded-md sm:py-24 lg:pt-8 lg:pb-16"
        >
          <div class="relative">
            <div
              class="
                mx-auto
                max-w-md
                px-8
                sm:max-w-3xl sm:px-6
                lg:px-8 lg:max-w-5xl
              "
            >
              <form
                @submit.prevent="saveNFT"
                class="space-y-8 divide-y divide-gray-200"
              >
                <div class="space-y-8 divide-y divide-gray-200">
                  <div>
                    <div
                      class="
                        mt-6
                        grid grid-cols-1
                        gap-y-6 gap-x-4
                        sm:grid-cols-6
                      "
                    >
                     <div class="sm:col-span-6">
                        <label
                          for="title"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Collection
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            v-model="data.title"
                            name="Collection"
                            id="Collection"
                            autocomplete="Title"
                            class="
                              flex-1
                              focus:ring-teal-500 focus:border-teal-500
                              block
                              w-full
                              min-w-0
                              rounded-none rounded-md
                              sm:text-sm
                              border-gray-300
                            "
                          />
                        </div>
                      </div>
                      <div class="sm:col-span-6">
                        <label
                          for="title"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            v-model="data.title"
                            name="title"
                            id="title"
                            autocomplete="Title"
                            class="
                              flex-1
                              focus:ring-teal-500 focus:border-teal-500
                              block
                              w-full
                              min-w-0
                              rounded-none rounded-md
                              sm:text-sm
                              border-gray-300
                            "
                          />
                        </div>
                      </div>
                      <div class="sm:col-span-6">
                        <label
                          for="sub_title"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Sub Title
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            v-model="data.sub_title"
                            name="title"
                            id="sub_title"
                            autocomplete="Sub Title"
                            class="
                              flex-1
                              focus:ring-teal-500 focus:border-teal-500
                              block
                              w-full
                              min-w-0
                              rounded-none rounded-md
                              sm:text-sm
                              border-gray-300
                            "
                          />
                        </div>
                      </div>
                      <div class="sm:col-span-6">
                        <label
                          for="dimension"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Dimensions
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            v-model="data.dimension"
                            name="dimension"
                            id="dimension"
                            autocomplete="Dimensions"
                            class="
                              flex-1
                              focus:ring-teal-500 focus:border-teal-500
                              block
                              w-full
                              min-w-0
                              rounded-none rounded-md
                              sm:text-sm
                              border-gray-300
                            "
                          />
                        </div>
                      </div>
                      <div class="sm:col-span-6">
                        <label
                          for="medium"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Medium
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            v-model="data.medium"
                            name="dimension"
                            id="medium"
                            autocomplete="Medium"
                            class="
                              flex-1
                              focus:ring-teal-500 focus:border-teal-500
                              block
                              w-full
                              min-w-0
                              rounded-none rounded-md
                              sm:text-sm
                              border-gray-300
                            "
                          />
                        </div>
                      </div>
                      <div class="sm:col-span-6">
                        <label
                          for="description"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Description
                        </label>
                        <div class="mt-1">
                          <textarea
                            id="about"
                            name="description"
                            rows="5"
                            class="
                              shadow-sm
                              focus:ring-teal-500 focus:border-teal-500
                              block
                              w-full
                              sm:text-sm
                              border-gray-300
                              rounded-md
                            "
                            v-model="data.description"
                          />
                        </div>
                      </div>
                      <!-- <div class="sm:col-span-6 ">
                        <label
                          for="photo"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Artist Featured Image
                        </label>
                        <div class="mt-1 lg:flex items-center">
                          <div
                            class="
                              mt-1
                              lg:ml-4
                              flex
                              justify-center
                              px-6
                              pt-5
                              pb-6
                              border-2 border-gray-300 border-dashed
                              rounded-md
                            "
                          >
                            <div v-if="!img" class="space-y-1 text-center">
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
                                    text-teal-400
                                    hover:text-teal-500
                                    focus-within:outline-none
                                    focus-within:ring-2
                                    focus-within:ring-offset-2
                                    focus-within:ring-teal-500
                                    ml-5
                                  "
                                >
                                  <span v-if="!img">Upload a file</span>
                                  <span v-else>Change a file</span>

                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    @change="updatePhotoPreview"
                                    class="sr-only"
                                  />
                                </label>
                                <p class="pl-1">or drag and drop</p>
                              </div>
                              <p class="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                            <div
                              v-else
                              class="relative h-auto w-44 space-y-1 text-center"
                            >
                              <span
                                class="
                                  relative
                                  h-auto
                                  w-44
                                  overflow-hidden
                                  bg-gray-100
                                "
                              >
                                <img :src="img" />
                                <button
                                  type="button"
                                  class="
                                    absolute
                                    -top-3
                                    left-16
                                    p-1
                                    border border-transparent
                                    rounded-full
                                    shadow-sm
                                    text-white
                                    bg-teal-400
                                    hover:bg-teal-500
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-offset-2
                                    focus:ring-teal-500
                                  "
                                  @click="deleteImg"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div class="mt-1 lg:flex items-center">
                        <span class="h-auto w-48 overflow-hidden bg-gray-100">
                          <img src="/images/art-7.jpg" alt="">
                        </span>
                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div class="space-y-1 text-center" v-bind="getRootProps()" v-if="files.length == 0">
                              <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                              <div class="flex text-sm text-gray-600">
                                  <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-teal-400 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500">
                                  <span>Upload a file</span>
                                  <input v-bind="getInputProps()" />
                                  </label>
                                  <p class="pl-1">or drag and drop</p>
                              </div>
                              <p class="text-xs text-gray-500">
                                  PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                            <div class="space-y-1 text-center" v-if="files.length > 0">
                                <img :src="selectedFoto" />
                            </div>
                        </div>
                      </div>
                      </div> -->
                    </div>
                  </div>
                  <div>
                    <div class="sm:flex justify-between mt-4 items-center">
                      <div>
                        <fieldset>
                          <div>
                            <legend class="text-base font-medium text-gray-900">
                              Privacy
                            </legend>
                          </div>
                          <div class="mt-4 space-y-4">
                            <div class="flex items-start">
                              <div class="h-5 flex items-center">
                                <input
                                  id="push_everything"
                                  name="push_notifications"
                                  checked
                                  type="radio"
                                  class="
                                    focus:ring-teal-400
                                    h-4
                                    w-4
                                    text-teal-600
                                    border-teal-300
                                  "
                                />
                              </div>
                              <div class="ml-3 text-sm">
                                <label
                                  for="push_everything"
                                  class="font-medium text-gray-700"
                                >
                                  Public access</label
                                >
                                <p class="text-gray-500">
                                  Will display on the website artist list
                                </p>
                              </div>
                            </div>
                            <div class="flex items-start">
                              <div class="h-5 flex items-center">
                                <input
                                  id="push_email"
                                  name="push_notifications"
                                  type="radio"
                                  class="
                                    focus:ring-teal-500
                                    h-4
                                    w-4
                                    text-teal-600
                                    border-teal-300
                                  "
                                />
                              </div>
                              <div class="ml-3 text-sm">
                                <label
                                  for="push_email"
                                  class="font-medium text-gray-700"
                                >
                                  Private to you
                                </label>
                                <p class="text-gray-500">
                                  Only you can see this draft collection
                                </p>
                              </div>
                            </div>
                            <div class="flex items-start">
                              <div class="h-5 flex items-center">
                                <input
                                  id="push_nothing"
                                  name="push_notifications"
                                  type="radio"
                                  class="
                                    focus:ring-teal-500
                                    h-4
                                    w-4
                                    text-teal-600
                                    border-teal-300
                                  "
                                />
                              </div>
                              <div class="ml-3 text-sm">
                                <label
                                  for="push_nothing"
                                  class="font-medium text-gray-700"
                                >
                                  Private to</label
                                >
                                <p class="text-gray-500">
                                  Only people you share link with
                                </p>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div class="flex flex-col items-start space-y-2">
                        <div class="mt-1 sm:mt-0 sm:col-span-2 w-full">
                          <div class=" w-full flex rounded-md shadow-sm">
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
                              https://</span
                            >
                            <input
                              type="url"
                              name="username"
                              id="username"
                              autocomplete="username"
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

                        <div class="m-8 md:m-0 relative p-6 border">
                          <img
                            src="https://boofcv.org/images/3/35/Example_rendered_qrcode.png"
                            class="bg-white w-80 h-80"
                            alt=""
                          />
                        </div>
                        <div class="flex items-center space-x-2 w-full">
                          <button
                            class="
                              border
                              text-sm text-gray-700
                              font-inter font-medium
                              bg-white
                              w-full
                              py-2
                              rounded-md
                            "
                          >
                            PRINT
                          </button>
                          <button
                            class="
                              border
                              text-sm
                              font-inter font-medium
                              bg-black
                              w-full
                              py-2
                              rounded-md
                              text-white
                            "
                          >
                            SAVE
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="mt-4 divide-y-8 devide-y divide-gray-300"
                      v-if="data.ipfs"
                    >
                      <div>
                        <a
                          :href="data.ipfs"
                          target="_blank"
                          class="text-teal-400 flex"
                        >
                          <LinkIcon
                            class="h-4 w-4 mt-1 mr-2 text-teal-400"
                            aria-hidden="true"
                          />
                          {{
                            data.ipfs.replace(
                              "https://gateway.pinata.cloud/ipfs/",
                              ""
                            )
                          }}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="divide-y divide-gray-200">
                  <div class="flex items-center space-x-2 py-4 cursor-pointer">
                    <div>
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0116 3.08579C11.7926 2.30474 13.0589 2.30474 13.84 3.08579C14.621 3.86683 14.621 5.13316 13.84 5.91421L10.84 8.91421C10.0589 9.69526 8.7926 9.69526 8.01155 8.91421C7.62103 8.52369 6.98786 8.52369 6.59734 8.91421C6.20681 9.30474 6.20681 9.9379 6.59734 10.3284C8.15943 11.8905 10.6921 11.8905 12.2542 10.3284L15.2542 7.32843C16.8163 5.76633 16.8163 3.23367 15.2542 1.67157C13.6921 0.109476 11.1594 0.109476 9.59734 1.67157L8.09734 3.17157C7.70681 3.5621 7.70681 4.19526 8.09734 4.58579C8.48786 4.97631 9.12103 4.97631 9.51155 4.58579L11.0116 3.08579Z"
                          fill="#049AFF"
                        />
                        <path
                          d="M6.01157 8.08579C6.79262 7.30474 8.05895 7.30474 8.83999 8.08579C9.23052 8.47631 9.86368 8.47631 10.2542 8.08579C10.6447 7.69526 10.6447 7.0621 10.2542 6.67157C8.69211 5.10948 6.15945 5.10948 4.59735 6.67157L1.59735 9.67157C0.035257 11.2337 0.035257 13.7663 1.59735 15.3284C3.15945 16.8905 5.69211 16.8905 7.25421 15.3284L8.75421 13.8284C9.14473 13.4379 9.14473 12.8047 8.75421 12.4142C8.36368 12.0237 7.73052 12.0237 7.33999 12.4142L5.83999 13.9142C5.05895 14.6953 3.79262 14.6953 3.01157 13.9142C2.23052 13.1332 2.23052 11.8668 3.01157 11.0858L6.01157 8.08579Z"
                          fill="#049AFF"
                        />
                      </svg>
                    </div>
                    <span class="text-sm font-inter font-normal text-teal-400"
                      >HASHNUMBERNJSDNFKJSDNFKJNSDFSDFSDF</span
                    >
                  </div>
                </div>
                <div class="pt-5">
                  <div class="lg:flex justify-end">
                    <!-- <button
                      type="button"
                      @click="confirm_modal = true"
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
                      DELETE ART
                    </button> -->
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
                        bg-teal-400
                        hover:bg-teal-500
                        focus:outline-none
                      "
                    >
                      Save
                    </button>
                    <button
                      type="button"
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
                        bg-teal-400
                        hover:bg-teal-500
                        focus:outline-none
                      "
                      v-if="isSaved && !data.isMinted"
                      @click="mint()"
                    >
                      Mint
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="" v-if="nftRef && data.isMinted">
          <div class="flex px-8 mt-4 lg:py-4 rounded-md justify-center">
            <h2
              class="
                text-2xl
                lg:mx-12 lg:mt-0 lg:py-0
                mx-1
                font-medium
                py-4
                lg:py-2
                mt-4
                text-gray-900
                sm:text-2xl
              "
            >
              Auctions
            </h2>
          </div>
          <div
            class="
              lg:pb-4 lg:px-12 lg:py-4
              md:grid
              grid-cols-1
              gap-3
              px-2
              sm:grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              min-w-full
              xl:grid-cols-4
              flex flex-col-reverse
              justify-start
              items-start
            "
          >
            <!-- blockchain data -->
            <div
              v-for="auction in auctions"
              v-bind:key="auction"
              class="md:col-span-1 md:col-span-1 w-full pb-2"
            >
              <div class="bg-white rounded-lg">
                <div
                  class="max-w-7xl mx-auto py-4 px-4 sm:py-2 sm:px-6 lg:px-4"
                >
                  <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    <dl
                      v-for="card in cards"
                      :key="card.id"
                      class="mt-6 card divide-y divide-gray-200"
                    >
                      <component
                        v-bind:is="card.component"
                        :token_id="data.blockchainId"
                        :ipfs="data.ipfs"
                        :auction="auction"
                        :auctions="data.auctions"
                      ></component>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <!-- specs -->
            <div class="md:col-span-1 w-full pb-2" v-if="!noNewAuction">
              <div class="bg-white rounded-lg">
                <div class="max-w-7xl mx-auto">
                  <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                    <dl
                      class="
                        bg-teal-400
                        h-48
                        flex flex-wrap
                        content-center
                        justify-center
                      "
                    >
                      <a href="#" @click.prevent="create_auction = true">
                        <img
                          src="/images/plus_circle.svg"
                          class="mx-auto"
                          alt=""
                        />
                      </a>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="px-2 mb-2" v-if="nftRef && showPegged">
        <NFTBox />
        <div class="mx-auto px-4 lg:mt-8 bg-gray-500 sm:px-6 lg:px-8 w-full">
          <div class="pb-12">
            <div
              class="
                flex
                justify-center
                py-8
                items-baseline
                text-2xl
                font-semibold
                text-white
              "
            >
              Pegged + NFT Series
            </div>
            <div>
              <form
                class="
                  space-y-8
                  divide-y divide-gray-200
                  bg-white
                  py-10
                  lg:px-10
                  px-4
                  rounded-md
                "
              >
                <div class="lg:px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-4 gap-6">
                    <div class="col-span-4 sm:col-span-1">
                      <label
                        for="amount"
                        class="block text-sm font-medium text-gray-700"
                        >Amount</label
                      >
                      <input
                        type="text"
                        name="amount"
                        id="amount"
                        autocomplete="Amount"
                        class="
                          mt-1
                          focus:ring-teal-500 focus:border-teal-500
                          block
                          w-full
                          shadow-sm
                          sm:text-sm
                          border-gray-300
                          rounded-md
                        "
                      />
                    </div>

                    <div class="col-span-4 sm:col-span-1">
                      <label
                        for="starting_value"
                        class="block text-sm font-medium text-gray-700"
                        >Starting Value Price
                      </label>
                      <input
                        type="text"
                        name="starting_value"
                        id="starting_value"
                        autocomplete="starting_value"
                        class="
                          mt-1
                          focus:ring-teal-500 focus:border-teal-500
                          block
                          w-full
                          shadow-sm
                          sm:text-sm
                          border-gray-300
                          rounded-md
                        "
                      />
                    </div>

                    <div class="col-span-4 sm:col-span-1">
                      <label
                        for="increase"
                        class="block text-sm font-medium text-gray-700"
                        >Value Increase Per view %</label
                      >
                      <input
                        type="text"
                        name="increase"
                        id="email_address"
                        autocomplete="increase"
                        class="
                          mt-1
                          focus:ring-teal-500 focus:border-teal-500
                          block
                          w-full
                          shadow-sm
                          sm:text-sm
                          border-gray-300
                          rounded-md
                        "
                      />
                    </div>

                    <div class="col-span-4 sm:col-span-1">
                      <label
                        for="peg"
                        class="block text-sm font-medium text-gray-700"
                        >Peg Base Original Total Value %</label
                      >
                      <input
                        type="text"
                        name="peg"
                        id="peg"
                        autocomplete="street-address"
                        class="
                          mt-1
                          focus:ring-teal-500 focus:border-teal-500
                          block
                          w-full
                          shadow-sm
                          sm:text-sm
                          border-gray-300
                          rounded-md
                        "
                      />
                    </div>
                    <div class="col-span-4 sm:col-span-4">
                      <label
                        for="about"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div class="mt-1">
                        <textarea
                          v-model="description"
                          id="description"
                          name="description"
                          rows="5"
                          class="
                            shadow-sm
                            focus:ring-teal-500 focus:border-teal-500
                            mt-1
                            block
                            w-full
                            sm:text-sm
                            border-gray-300
                            rounded-md
                          "
                          placeholder="Each NFT includes a numbered physical print of the pegged original"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="
                    flex
                    justify-end
                    divide-y-8
                    devide-y devide-y-8
                    divide-gray-500
                  "
                >
                  <button
                    type="submit"
                    class="
                      w-full
                      lg:w-auto
                      inline-flex
                      uppercase
                      justify-center
                      bg-teal-400
                      mt-5
                      py-2
                      px-4
                      border border-transparent
                      shadow-sm
                      text-sm
                      font-medium
                      rounded-md
                      text-white
                      hover:text-white hover:text-teal-500
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-white
                    "
                  >
                    Mint
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Create Auction  -->
      <TransitionRoot as="template" :show="create_auction">
        <Dialog
          as="div"
          static
          class="fixed z-10 inset-0 overflow-y-auto"
          @close="
            () => {
              create_auction = false;
              errorMessage = '';
            }
          "
          :open="create_auction"
        >
          <div
            class="
              flex
              items-end
              justify-center
              min-h-screen
              pt-4
              px-2
              pb-20
              text-center
              sm:block sm:p-0
            "
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in duration-200"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogOverlay
                class="
                  fixed
                  inset-0
                  bg-gray-500 bg-opacity-75
                  transition-opacity
                "
              />
            </TransitionChild>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span
              class="sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
              >&#8203;</span
            >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                class="
                  inline-block
                  align-bottom
                  bg-white
                  rounded-lg
                  text-left
                  shadow-xl
                  transform
                  transition-all
                  sm:my-8 sm:align-middle
                  lg:max-w-lg
                  w-full
                "
              >
                <div class="p-4 py-6 bg-gray-50 rounded-t-lg">
                  <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      class="
                        bg-white
                        rounded-md
                        text-teal-400
                        hover:text-teal-400
                        focus:outline-none
                      "
                      @click="create_auction = false"
                    >
                      <span class="sr-only">Close</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center sm:mt-0 sm:text-left">
                      <DialogTitle
                        as="h3"
                        class="text-lg leading-6 font-medium text-gray-900"
                      >
                        Create Auction
                      </DialogTitle>
                    </div>
                  </div>
                </div>

                <div class="p-4">
                  <div v-if="errorMessage" class="rounded-md bg-red-50 p-4">
                    <div class="flex">
                      <div class="ml-3">
                        <h3 class="text-sm font-medium text-red-800">
                          {{ errorMessage }}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div class="mt-3 sm:mt-0 sm:text-left">
                    <div>
                      <label
                        for="price"
                        class="block text-sm font-medium text-gray-700"
                        >Starting Price</label
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
                          <span class="text-gray-500 sm:text-sm"> $ </span>
                        </div>
                        <input
                          type="number"
                          name="price"
                          id="price"
                          class="
                            focus:ring-gray-200 focus:border-gray-200
                            block
                            w-full
                            pl-8
                            pr-12
                            sm:text-sm
                            border-gray-300
                            rounded-md
                          "
                          placeholder="0.00"
                          v-model="dataAuction.startingPrice"
                        />
                        <div
                          class="absolute inset-y-0 right-0 flex items-center"
                        >
                          <label for="currency" class="sr-only">Currency</label>
                          <select
                            id="currency"
                            name="currency"
                            class="
                              focus:ring-gray-200 focus:border-gray-200
                              h-full
                              py-0
                              pl-2
                              pr-7
                              border-transparent
                              bg-transparent
                              text-gray-500
                              sm:text-sm
                              rounded-md
                            "
                            v-model="dataAuction.startingPriceCoin"
                          >
                            <option value="ETH">ETH</option>
                            <option value="USD">USD</option>
                            <option value="CAD">CAD</option>
                            <option value="EUR">EUR</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4">
                      <label
                        for="price"
                        class="block text-sm font-medium text-gray-700"
                        >Minimum Price</label
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
                          <span class="text-gray-500 sm:text-sm"> $ </span>
                        </div>
                        <input
                          type="number"
                          name="price"
                          id="price"
                          class="
                            focus:ring-gray-200 focus:border-gray-200
                            block
                            w-full
                            pl-8
                            pr-12
                            sm:text-sm
                            border-gray-300
                            rounded-md
                          "
                          placeholder="0.00"
                          v-model="dataAuction.minimumPrice"
                        />
                        <div
                          class="absolute inset-y-0 right-0 flex items-center"
                        >
                          <label for="currency" class="sr-only">Currency</label>
                          <select
                            id="currency"
                            name="currency"
                            class="
                              focus:ring-gray-200 focus:border-gray-200
                              h-full
                              py-0
                              pl-2
                              pr-8
                              border-transparent
                              bg-transparent
                              text-gray-500
                              sm:text-sm
                              rounded-md
                            "
                            v-model="dataAuction.minimumPriceCoin"
                          >
                            <option value="ETH">ETH</option>
                            <option value="USD">USD</option>
                            <option value="CAD">CAD</option>
                            <option value="EUR">EUR</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4">
                      <label
                        for="price"
                        class="block text-sm font-medium text-gray-700"
                        >Minimum Price Increment</label
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
                          <span class="text-gray-500 sm:text-sm"> $ </span>
                        </div>
                        <input
                          type="number"
                          name="price"
                          id="price"
                          class="
                            focus:ring-gray-200 focus:border-gray-200
                            block
                            w-full
                            pl-7
                            pr-12
                            sm:text-sm
                            border-gray-300
                            rounded-md
                          "
                          placeholder="0.00"
                          v-model="dataAuction.minimumPriceIncrement"
                        />
                        <div
                          class="absolute inset-y-0 right-0 flex items-center"
                        >
                          <label for="currency" class="sr-only">Currency</label>
                          <select
                            id="currency"
                            name="currency"
                            class="
                              focus:ring-gray-200 focus:border-gray-200
                              h-full
                              py-0
                              pl-2
                              pr-7
                              border-transparent
                              bg-transparent
                              text-gray-500
                              sm:text-sm
                              rounded-md
                            "
                            v-model="dataAuction.minimumPriceIncrementCoin"
                          >
                            <option value="ETH">ETH</option>
                            <option value="USD">USD</option>
                            <option value="CAD">CAD</option>
                            <option value="EUR">EUR</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="mt-4 md:flex md:justify-between">
                      <div class="">
                        <label
                          for="email"
                          class="block text-sm font-medium text-gray-700"
                          >Auction Date Starts</label
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
                              cursor-pointer
                              z-10
                            "
                          >
                            <CalendarIcon
                              class="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <datepicker
                            class="
                              focus:ring-gray-200 focus:border-gray-200
                              block
                              lg:w-56
                              w-full
                              pl-10
                              sm:text-sm
                              border-gray-300
                              rounded-md
                            "
                            v-model="dateStart"
                          />
                        </div>
                      </div>
                      <div class="">
                        <label
                          for="email"
                          class="block text-sm font-medium text-gray-700"
                          >Auction Date End</label
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
                              cursor-pointer
                              z-10
                            "
                          >
                            <CalendarIcon
                              class="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <datepicker
                            class="
                              focus:ring-gray-200 focus:border-gray-200
                              block
                              lg:w-56
                              w-full
                              pl-10
                              sm:text-sm
                              border-gray-300
                              rounded-md
                            "
                            v-model="dateEnd"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="mt-4 md:flex md:justify-between">
                      <div class="">
                        <label
                          for="email"
                          class="block text-sm font-medium text-gray-700"
                          >Auction Time Starts</label
                        >
                        <div class="mt-1 relative rounded-md shadow-sm">
                          <input
                            type="time"
                            class="
                              focus:ring-gray-200
                              w-full
                              lg:w-56
                              focus:border-gray-200
                              block
                              pl-10
                              sm:text-sm
                              border-gray-300
                              rounded-md
                            "
                            v-model="dataAuction.timeStarts"
                          />
                        </div>
                      </div>
                      <div class="">
                        <label
                          for="email"
                          class="block text-sm font-medium text-gray-700"
                          >Auction Time End</label
                        >
                        <div class="mt-1 relative rounded-md shadow-sm">
                          <input
                            type="time"
                            class="
                              focus:ring-gray-200 focus:border-gray-200
                              block
                              lg:w-56
                              w-full
                              pl-10
                              sm:text-sm
                              border-gray-300
                              rounded-md
                            "
                            v-model="dataAuction.timeEnd"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="
                    sm:flex sm:flex-row-reverse
                    border-t border-gray-300
                    px-4
                    pt-3
                    pb-3
                  "
                >
                  <Button
                    name="Create"
                    @on:submit="onSaveAuction"
                    customClass="uppercase"
                  />
                  <Button
                    name="Cancel"
                    btnStyle="secondary"
                    @on:submit="
                      () => {
                        create_auction = false;
                        errorMessage = '';
                      }
                    "
                    customClass="uppercase mr-2"
                  />
                </div>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <!-- Confirmation -->
      <TransitionRoot as="template" :show="confirm_modal">
        <Dialog
          as="div"
          static
          class="fixed z-10 inset-0 overflow-y-auto"
          @close="confirm_modal = false"
          :open="confirm_modal"
        >
          <div
            class="
              flex
              items-end
              justify-center
              min-h-screen
              pt-4
              px-2
              pb-20
              text-center
              sm:block sm:p-0
            "
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in duration-200"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <DialogOverlay
                class="
                  fixed
                  inset-0
                  bg-gray-500 bg-opacity-75
                  transition-opacity
                "
              />
            </TransitionChild>
            <!-- This element is to trick the browser into centering the modal contents. -->
            <span
              class="sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
              >&#8203;</span
            >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                class="
                  inline-block
                  align-bottom
                  bg-white
                  rounded-lg
                  px-4
                  pt-5
                  pb-4
                  text-left
                  overflow-hidden
                  shadow-xl
                  transform
                  transition-all
                  sm:my-8 sm:align-middle
                  lg:max-w-sm
                  w-full
                  sm:p-6
                "
              >
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-lg leading-6 font-medium text-gray-900"
                    >
                      Delete Confirmation
                    </DialogTitle>
                  </div>
                </div>
                <p class="py-5 text-base text-black font-medium">
                  Are you sure you want to delete this artwork?
                </p>
                <div
                  class="
                    mt-5
                    sm:mt-2 sm:flex sm:flex-row-reverse
                    border-t border-gray-300
                    py-3
                  "
                >
                  <a
                    href="#"
                    @click.prevent="deleteNft()"
                    class="
                      uppercase
                      mt-3
                      w-full
                      inline-flex
                      justify-center
                      rounded-md
                      border border-transparent
                      shadow-sm
                      px-4
                      py-2
                      bg-teal-400
                      text-base
                      font-medium
                      text-white
                      hover:bg-teal-600
                      focus:outline-none
                      sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm
                    "
                  >
                    Delete
                  </a>
                  <button
                    type="button"
                    class="
                      uppercase
                      w-full
                      inline-flex
                      mt-2
                      lg:mt-0
                      justify-center
                      rounded-md
                      border border-gray-500
                      shadow-sm
                      px-4
                      py-2
                      bg-white
                      text-base
                      font-medium
                      text-gray-700
                      hover:bg-gray-50 hover:text-black
                      focus:outline-none
                      sm:w-auto sm:text-sm
                    "
                    @click="confirm_modal = false"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add the lines below */
@layer utilities {
  @variants responsive {
    .masonry {
      column-count: 3;
      column-gap: 1.5em;
    }
    .break-inside {
      break-inside: avoid;
    }
  }
}
.card:nth-child(4),
.card:nth-child(3) {
  margin-top: 0 !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>

<script>
// @ is an alias to /src
import Navbar from "@/components/Layouts/Navbar.vue";
import { LinkIcon } from "@heroicons/vue/outline";
import { computed, onMounted, ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon, CalendarIcon } from "@heroicons/vue/outline";
import { ClockIcon } from "@heroicons/vue/solid";
import { XIcon } from "@heroicons/vue/outline";
import NFTBox from "@/components/NFTBox";
import Trading from "@/components/Drawers/Trading_view";
import Bids from "@/components/Drawers/Bids";
import Blockchain from "@/components/Drawers/Blockchain_data";
import Auction from "@/components/Drawers/Auction_creation";
import QRCode from "qrcode";
import Datepicker from "vue3-datepicker";
import Menu from "@/components/Layouts/Menu";
import NftCard from "@/components/cards/NftCard.vue";

import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { useRoute, useRouter } from "vue-router";
import { db, storage } from "../../firebase/firebase";
import { pinFile, pinJson, mintNft } from "../../blockchain/index";
import { useStore } from "vuex";
import moment from "moment-timezone";
import { createAuction, getDecimal } from "../../blockchain";
import Button from "../../components/Layouts/Button.vue";

const cards = [
  {
    id: 1,
    component: <Auction />,
    class:
      "xl:w-full lg:w-6/12 w-full px-2 pb-2 self-start xl:order-1 lg:order-2 order-3",
  },
  {
    id: 2,
    component: <Bids />,
    class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 self-start order-2",
  },
  {
    id: 3,
    component: <Trading />,
    class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 xl:order-3 lg:order-1 order-1",
  },
  {
    id: 3,
    component: <Blockchain />,
    class: "xl:w-full lg:w-6/12 w-full px-2 pb-2 xl:order-3 lg:order-1 order-1",
  },
];

export default {
  components: {
    Navbar,
    LinkIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ClockIcon,
    XIcon,
    CalendarIcon,
    NFTBox,
    Blockchain,
    Trading,
    Auction,
    Bids,
    Datepicker,
    Button,
    Menu,
    NftCard,
  },
  setup() {
    const open = ref(false);
    const create_auction = ref(false);
    const confirm_modal = ref(false);

    const route = useRoute();
    const router = useRouter();
    const nftRef = ref(route.params.artid);
    const collectionRef = ref(route.params.collection);

    const files = ref([]);
    const selectedFoto = ref(null);
    const isSaved = ref(false);
    const showPegged = ref(false);

    const store = useStore();

    const img = ref("");
    const data = ref({
      title: "",
      collection: "",
      sub_title: "",
      dimension: "",
      medium: "",
      description: "",
      imageUrl: "",
      link: "",
      qrCodeImage: "",
      ipfs: "",
      metadataIpfs: "",
      isMinted: false,
      blockchainId: 0,
      blockChainOwner: "",
      transactionHash: "",
      auctions: [],
    });
    const dataAuction = ref({
      nftRef: nftRef.value,
      startingPrice: 0,
      startingPriceCoin: "ETH",
      minimumPrice: 0,
      minimumPriceCoin: "ETH",
      minimumPriceIncrement: 0,
      minimumPriceIncrementCoin: "ETH",
      dateStarts: "",
      dateEnd: "",
      timeStarts: "",
      timeEnd: "",
      timestampEnd: "",
      timestampStart: "",
      blockchainId: 0,
      receipt: {},
      draft: false,
    });

    const dateStart = ref(null);
    const dateEnd = ref(null);

    /* const dSTimestamp = computed(() => {

      if (dataAuction.value.timeStarts != "" && dateStart.value) {
        const ds = dateStart.value.split('T')[0];
        
        dataAuction.value.dateStarts = ds;
        return moment(dataAuction.value.dateStarts + "T" + dataAuction.value.timeStarts + ":00Z").unix();
      
      }

      return '';
      
    }); */

    const errorMessage = ref("");

    const gallery = ref([]);
    const auctions = ref([]);
    const admin = computed(() => store.getters["admin/getAdmin"]);
    const noNewAuction = ref(false);

    const saveNFT = async (e) => {
      e.preventDefault();

      if (nftRef.value == "1") {
        let nft = null;
        if (data.value.imageUrl) {
          data.value.collection = collectionRef.value;

          nft = await db
            .collection("nfts")
            .add({ ...data.value, auctions: [] });

          const doc = await nft.get();

          const currentData = await db
            .collection("collections")
            .doc(collectionRef.value)
            .get();

          let gallery = currentData.data().gallery;
          gallery.push(doc.id);

          await db.collection("collections").doc(collectionRef.value).update({
            gallery: gallery,
          });
        }
      } else {
        await db.collection("nfts").doc(nftRef.value).set(data.value);
      }

      router.push("/admin/collection/detail/" + collectionRef.value);
    };

    const generateQR = async () => {
      try {
        console.log(data.value.imageUrl);
        // todo: qr code na URL publica do NFT
        data.value.qrCodeImage = await QRCode.toDataURL(data.value.imageUrl);
      } catch (err) {
        console.error(err);
      }
    };

    const updatePhotoPreview = async (e) => {
      store.dispatch("NotificationStore/TOGGLE_LOADING");
      const image = e.target.files[0];
      const reader = new FileReader();

      var storageRef = storage.ref();
      var imageRef = storageRef.child("nfts/" + e.target.files[0].name);

      try {
        await imageRef.put(e.target.files[0]);

        if (imageRef.fullPath) {
          data.value.imageUrl = imageRef.fullPath;

          await pinImageNow(e.target.files[0]);
        }

        await generateQR();
        store.dispatch("NotificationStore/TOGGLE_LOADING");
      } catch (error) {
        console.log(error.code);
        console.log(error.message);
      }

      reader.readAsDataURL(image);
      reader.onload = (e) => {
        img.value = e.target.result;
      };
    };

    // const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });

    const deleteImg = () => {
      img.value = "";
      data.value.imageUrl = "";
      data.value.qrCodeImage = "";
    };

    const getNFTInfo = async () => {
      const dbResult = await db.collection("nfts").doc(nftRef.value).get();

      var storageRef = storage.ref();

      try {
        const url = await storageRef
          .child(dbResult.data().imageUrl)
          .getDownloadURL();

        img.value = url;
      } catch (error) {
        console.log(error);
      }

      data.value.title = dbResult.data().title;
      data.value.collection = dbResult.data().collection;
      data.value.sub_title = dbResult.data().sub_title;
      data.value.dimension = dbResult.data().dimension;
      data.value.description = dbResult.data().description;
      data.value.medium = dbResult.data().medium;
      data.value.imageUrl = dbResult.data().imageUrl;
      data.value.link = dbResult.data().link;
      data.value.qrCodeImage = dbResult.data().qrCodeImage;
      data.value.ipfs = dbResult.data().ipfs;
      data.value.isMinted = dbResult.data().isMinted;
      data.value.metadataIpfs = dbResult.data().metadataIpfs;
      data.value.blockchainId = dbResult.data().blockchainId;
      data.value.auctions = dbResult.data().auctions || [];
      auctions.value = data.value.auctions;
      isSaved.value = true;

      for (let auction of auctions.value) {
        const acDb = await db.collection("auctions").doc(auction).get();
        if (acDb.exists && acDb.data().status == "active") {
          noNewAuction.value = true;
        }
      }
    };

    const getGalleryImages = async () => {
      const dbResult = await db
        .collection("collections")
        .doc(collectionRef.value)
        .get();
      gallery.value = dbResult.data().gallery;
    };

    const onSaveAuction = async () => {
      const timezone = moment.tz.guess();

      dataAuction.value.dateStarts = moment(dateStart.value).format(
        "MM/DD/YYYY"
      );
      dataAuction.value.dateEnd = moment(dateStart.value).format("MM/DD/YYYY");

      const dsTimestamp = dateStart.value.toISOString().split("T")[0];
      const deTimestamp = dateEnd.value.toISOString().split("T")[0];

      dataAuction.value.timestampStart = moment
        .tz(dsTimestamp + "T" + dataAuction.value.timeStarts + ":00", timezone)
        .utc()
        .format();
      dataAuction.value.timestampEnd = moment
        .tz(deTimestamp + "T" + dataAuction.value.timeEnd + ":00", timezone)
        .utc()
        .format();

      errorMessage.value = "";
      if (
        dataAuction.value.startingPrice &&
        dataAuction.value.startingPriceCoin &&
        dataAuction.value.minimumPrice &&
        dataAuction.value.minimumPriceCoin &&
        dataAuction.value.minimumPriceIncrement &&
        dataAuction.value.minimumPriceIncrementCoin &&
        dataAuction.value.dateStarts &&
        dataAuction.value.dateEnd &&
        dataAuction.value.timeStarts &&
        dataAuction.value.timeEnd
      ) {
        store.dispatch("NotificationStore/TOGGLE_LOADING");

        let dataUp = dataAuction.value;
        dataUp.by = "";
        dataUp.status = "active";
        dataUp.wonBy = "";
        dataUp.wonPrice = "";
        try {
          const doc = await db.collection("auctions").add(dataUp);

          const timestapEnd = moment(dataAuction.value.timestampEnd).unix();
          const receipt = await createAuction(
            doc.id,
            timestapEnd,
            data.value.blockchainId,
            dataAuction.value.minimumPrice
          );
          console.log(receipt);
          dataUp.receipt = receipt;

          let auctionsUp = data.value.auctions || [];
          auctionsUp.push(doc.id);

          await db.collection("nfts").doc(nftRef.value).update({
            auctions: auctionsUp,
          });

          auctions.value.push(doc.id);
          create_auction.value = false;
          store.dispatch("NotificationStore/TOGGLE_LOADING");
        } catch (error) {
          store.dispatch("NotificationStore/TOGGLE_LOADING");
          console.log("error");
          console.log(error);
        }
      } else {
        errorMessage.value = "Please check that all fields are filled.!";
      }
    };

    const moveToArchive = async (nftRef) => {
      const hiddenCollection = await db
        .collection("collections")
        .doc("archives")
        .get();
      const data = hiddenCollection.data();
      const gallery = data.gallery.push(nftRef);
      await db.collection("collections").doc("hidden_collection").update({
        gallery: gallery,
      });
    };

    const deleteNft = async () => {
      confirm_modal.value = false;
      if (!data.value.isMinted) {
        await db.collection("nfts").doc(nftRef.value).delete();
      } else {
        moveToArchive(nftRef.value);
      }

      const currentData = await db
        .collection("collections")
        .doc(collectionRef.value)
        .get();

      let gallery = currentData.data().gallery;
      for (var i = 0; i < gallery.length; i++) {
        if (gallery[i] === nftRef.value) {
          gallery.splice(i, 1);
        }
      }

      await db.collection("collections").doc(collectionRef.value).update({
        gallery: gallery,
      });

      router.push("/admin/collection/detail/" + collectionRef.value);
    };

    const pinImageNow = async (file) => {
      if (data.value.title) {
        const pinata = await pinFile(file, data.value.title);
        data.value.ipfs =
          "https://gateway.pinata.cloud/ipfs/" + pinata.data.IpfsHash;
      } else {
        store.dispatch("NotificationStore/setMessage", {
          message: "Before uploading an image give the NFT a name",
          type: "error",
        });
      }
    };

    const mint = async () => {
      store.dispatch("NotificationStore/TOGGLE_LOADING");
      if (!data.value.ipfs) {
        store.dispatch("NotificationStore/setMessage", {
          message: "You need to upload a new image first",
          type: "error",
        });
      } else {
        const currentData = await db
          .collection("collections")
          .doc(collectionRef.value)
          .get();

        const description =
          "\n\nArtist Bio:\n\n#" +
          currentData.data().artistBioTitle +
          "\n " +
          currentData.data().artistBio +
          "\n\n" +
          data.value.description +
          "\n\n #About GOG: \n\nThe Gallery on Greene has consistently fomented curatorial and artistic practice through ambitious exhibitions programs, created in close collaboration with its artists with museums from New York, MCNY, AFAM, SSSM to Havana's National Museum of Fine Art. Visit our curated NFT auction marketplace [gog.auction](https://gog.auction)";

        const metadata = {
          pinataMetadata: {
            name: data.value.title,
          },
          pinataContent: {
            name: data.value.title,
            description: description,
            image: data.value.ipfs,
            external_url:
              "https://gog.auction/artwork/" +
              collectionRef.value +
              "/" +
              nftRef.value,
            attributes: [
              { trait_type: "Collection", value: currentData.data().title },
              {
                trait_type: "Artist Name",
                value: currentData.data().artistName,
              },
              { trait_type: "Type", value: data.value.sub_title },
              { trait_type: "Dimensions", value: data.value.dimension || "" },
              { trait_type: "Medium", value: data.value.medium || "" },
            ],
          },
        };

        const metadataIpfs = await pinJson(metadata);

        data.value.metadataIpfs =
          "https://gateway.pinata.cloud/ipfs/" + metadataIpfs.IpfsHash;

        console.log(admin);

        const receipt = await mintNft(data.value.metadataIpfs);
        console.log(receipt);

        const {
          events: {
            Transfer: {
              raw: { topics },
            },
          },
          transactionHash,
          from,
        } = receipt;

        data.value.blockchainId = getDecimal(topics[3]);
        data.value.isMinted = true;
        data.value.blockChainOwner = from;
        data.value.transactionHash = transactionHash;

        await db.collection("nfts").doc(nftRef.value).set(data.value);

        store.dispatch("NotificationStore/TOGGLE_LOADING");

        store.dispatch("NotificationStore/setMessage", {
          message: "Your NFT is minted!",
          type: "success",
        });
      }
    };

    onMounted(async () => {
      await getGalleryImages();

      if (nftRef.value) {
        await getNFTInfo();
      }
    });

    return {
      auctions,
      data,
      img,
      open,
      create_auction,
      errorMessage,
      confirm_modal,
      cards,
      nftRef,
      saveNFT,
      updatePhotoPreview,
      files,
      selectedFoto,
      deleteImg,
      dataAuction,
      onSaveAuction,
      deleteNft,
      isSaved,
      mint,
      showPegged,
      dateStart,
      dateEnd,
      noNewAuction,
    };
  },
};
</script>
<style scoped>
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
</style>