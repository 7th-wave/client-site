<template>
  <div class="artist">
    <div class="relative bg-gray-100 py-8 sm:py-8 lg:py-8 font-inter">
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
              mt-2
              text-4xl
              font-medium
              text-black
              tracking-tight
              sm:text-4xl
            "
          >
            {{ data.title }}
          </p>
        </div>
      </div>
    </div>
    <div class="relative bg-white py-8 sm:py-24 lg:pt-8 lg:pb-16">
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
            @submit.prevent="onSave"
            class="space-y-8 divide-y divide-gray-200"
          >
            <div class="space-y-8 divide-y divide-gray-200">
              <div>
                <div
                  class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6"
                >
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
                        autocomplete="Artist Name"
                        class="
                          flex-1
                          focus:ring-primary-500 focus:border-primary-500
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
                      for="artist_name"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Artist Name
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        v-model="data.artist_name"
                        name="artist_name"
                        id="artist_name"
                        autocomplete="Artist Name"
                        class="
                          flex-1
                          focus:ring-primary-500 focus:border-primary-500
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
                      for="bio_title"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Artist Bio Title
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        v-model="data.bio_title"
                        name="artist_name"
                        id="bio_title"
                        autocomplete="Artist Bio Title"
                        class="
                          flex-1
                          focus:ring-primary-500 focus:border-primary-500
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
                      for="about"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Artist Bio
                    </label>
                    <div class="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows="10"
                        class="
                          shadow-sm
                          focus:ring-primary-500 focus:border-primary-500
                          block
                          w-full
                          sm:text-sm
                          border-gray-300
                          rounded-md
                        "
                        v-model="data.bio"
                      />
                    </div>
                  </div>

                  <div class="sm:col-span-6">
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
                                text-primary-400
                                hover:text-primary-500
                                focus-within:outline-none
                                focus-within:ring-2
                                focus-within:ring-offset-2
                                focus-within:ring-primary-500
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
                            <!-- <p class="pl-1">or drag and drop</p> -->
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
                                bg-primary-400
                                hover:bg-primary-500
                                focus:outline-none
                                focus:ring-2
                                focus:ring-offset-2
                                focus:ring-primary-500
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
                  </div>
                </div>
              </div>

              <div class="">
                <div class="pt-4">
                  <fieldset>
                    <div>
                      <legend class="text-base font-medium text-gray-900">
                        Privacy
                      </legend>
                    </div>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-center">
                        <input
                          id="push_everything"
                          name="push_notifications"
                          checked
                          type="radio"
                          value="public"
                          v-model="data.privacy"
                          class="
                            focus:ring-green-500
                            h-4
                            w-4
                            text-primary-400
                            border-gray-300
                          "
                        />
                        <label
                          for="push_everything"
                          class="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Public access
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="push_email"
                          name="push_notifications"
                          type="radio"
                          value="private"
                          v-model="data.privacy"
                          class="
                            focus:ring-green-500
                            h-4
                            w-4
                            text-primary-400
                            border-gray-300
                          "
                        />
                        <label
                          for="push_email"
                          class="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Private to you (Draft)
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="push_nothing"
                          name="push_notifications"
                          type="radio"
                          value="private_to"
                          v-model="data.privacy"
                          class="
                            focus:ring-green-500
                            h-4
                            w-4
                            text-primary-400
                            border-gray-300
                          "
                        />
                        <label
                          for="push_nothing"
                          class="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Private to
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="mt-4 divide-y-8 devide-y divide-gray-300">
                  <div>
                    <a @click="doCopy"
                      class="text-primary-400 flex cursor-pointer"
                      
                    >
                      <LinkIcon
                        class="h-4 w-4 mt-1 mr-2 text-primary-400"
                        aria-hidden="true"
                      />
                      Copy Link
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-5">
              <div class="lg:flex justify-end">
                <button
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
                  DELETE COLLECTION
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
                    hover:bg-primary-400
                    focus:outline-none
                  "
                  @click="onSave"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="min-h-screen pt-5 pb-20 white bg-gray-200">
      <div
        class="
          box-border
          max-w-7xl
          mx-auto
          md:masonry
          before:box-inherit
          after:box-inherit
        "
      >
        <Gallery :src="'admin'" :gallery="data.gallery" />
      </div>
    </div>
  </div>

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
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
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
              Are you sure you want to delete this collection?
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
                @click.prevent="confirm_modal = false"
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
                  bg-primary-400
                  text-base
                  font-medium
                  text-white
                  hover:bg-primary-600
                  focus:outline-none
                  sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm
                "
                @click="deleteCollection"
              >
                Delete
              </a>
              <button
                type="button"
                @click.prevent="newArtist"
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
      column-gap: 1.25em;
    }
    .break-inside {
      break-inside: avoid;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import { onMounted, ref } from "vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import { LinkIcon } from "@heroicons/vue/outline";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import Gallery from "@/components/Gallery/Gallery";
// import Collection from '@/components/Forms/Collection'

/* const data = {
    title: 'Mario Sanchez Collection',
    artist_name: 'Mario Sanchez',
    bio_title: 'Mario Sanchez October 7th, 1908 - April 28th, 2005',
    bio: 'Critically acclaimed as the most important Cuban American Folk Artist of the 20th Century he received one-man exhibitions in major museums from New York’s American Folk Art & Museum of the City of New York, Bacardi Museum & Cuba’s National Museum of Fine Art. His work resides in the Smithsonian, Whitney & American Folk Art Museums. His motto was "One Race, the Human Race". He believed in the Great American Dream with a humorous twist.  Mario Sanchez passion was depicting the people of Key West & Tampa.  His unique technique of sketches & intaglios of Florida & Cuba treasured history involve the humanistic values of a rich cultural community filled with the traditions of immigrants of diverse geographic and ethnic origins. ',
    img: '/images/art-7.jpg',
 } */

import { db, storage } from "../../firebase/firebase";
import { useRoute } from "vue-router";
import { useStore } from 'vuex';

export default {
  components: {
    Navbar,
    LinkIcon,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    Gallery,
    // Collection,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const collectionRef = route.params.ref;

    const confirm_modal = ref(false);
    const img = ref("");
    const data = ref({
      title: "",
      artist_name: "",
      bio_title: "",
      bio: "",
      featuredImage: "",
      privacy: "public",
      privateTo: [],
      gallery: [],
    });

    const copyContainer = ref('');


    const mylink = ref(null);

    const onSave = async (e) => {
      e.preventDefault();

      try {
        await db.collection("collections").doc(collectionRef).update({
          title: data.value.title,
          artistName: data.value.artist_name,
          artistBioTitle: data.value.bio_title,
          artistBio: data.value.bio,
          featuredImage: data.value.featuredImage,
          privacy: data.value.privacy
        });

        store.dispatch("NotificationStore/setMessage", {
          message: "Collection Saved!",
          type: "success",
        });
      } catch (error) {
        console.log(error.code);
        console.log(error.message);
        // ..

        store.dispatch("NotificationStore/setMessage", {
          message: "An Error Occurred.",
          type: "error",
        });
      }
    };
    const updatePhotoPreview = async (e) => {
      const image = e.target.files[0];
      const reader = new FileReader();

      var storageRef = storage.ref();
      var imageRef = storageRef.child("collections/" + e.target.files[0].name);

      try {
        await imageRef.put(e.target.files[0]).then(() => {
          data.value.featuredImage = imageRef.fullPath;
        });
      } catch (error) {
        console.log(error.code);
        console.log(error.message);
      }

      reader.readAsDataURL(image);
      reader.onload = (e) => {
        img.value = e.target.result;
      };
    };

    const getData = async () => {
      const currentData = await db
        .collection("collections")
        .doc(collectionRef)
        .get();

      var storageRef = storage.ref();

      await storageRef
        .child(currentData.data().featuredImage)
        .getDownloadURL()
        .then((url) => {
          // Or inserted into an <img> element:
          img.value = url;
        })
        .catch((error) => {
          console.log(error);
        });

      // doc.data() is never undefined for query doc snapshots
      data.value.artist_name = currentData.data().artistName;
      data.value.title = currentData.data().title;
      data.value.bio_title = currentData.data().artistBioTitle;
      data.value.bio = currentData.data().artistBio;
      data.value.featuredImage = currentData.data().featuredImage;
      data.value.privacy = currentData.data().privacy;
      data.value.gallery = currentData.data().gallery || [];
    };

    const doCopy = async () => {
      await navigator.clipboard.writeText('https://gog.auction/artist/'+data.value.title)
    };

    const deleteImg = () => {
      img.value = "";
      data.value.featuredImage = "";
    };

    const deleteCollection = async () => {
      db.collection("collections")
        .doc(collectionRef)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    };

    onMounted(async () => {
      await getData();
    });

    return {
      doCopy,
      img,
      data,
      mylink,
      confirm_modal,
      updatePhotoPreview,
      onSave,
      deleteImg,
      deleteCollection,
      copyContainer,
    };
  },
};
</script>
