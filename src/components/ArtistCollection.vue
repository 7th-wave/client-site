<template>
  <div
    class="
      mt-8
      mx-auto
      max-w-md
      px-4
      grid
      gap-8
      sm:max-w-lg sm:px-6
      lg:px-8 lg:max-w-7xl
    "
    :class="{'lg:grid-cols-3' : src !== 'home', 'lg:grid-cols-2' : src == 'home'}"
  >
    <div
      v-for="collection in collection_artists"
      :key="collection.id"
      class="flex flex-col justify-between rounded-lg shadow-lg overflow-hidden"
      style="height: 22em"
    >
      <div class="flex h-60 items-center">
        <a
          v-if="collection.title === 'add'"
          href="#"
          @click.prevent="new_artist = true"
        >
          <div class="bg-primary-400 h-50 flex flex-wrap content-center">
            <img :src="collection.imageUrl" class="mx-auto" alt="" />
          </div>
        </a>
        <router-link v-else :to="collection.href">
          <img
            class="h-50 w-full object-cover"
            :src="collection.imageUrl"
            alt=""
          />
        </router-link>
      </div>
      <div class=" bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
          <p class="text-sm font-medium text-primary-400">
            <router-link :to="collection.href">
              <span class="hover:underline">
                {{ collection.items }}
              </span>
            </router-link>
          </p>
          <a class="block mt-2">
            <p
              v-if="collection.title === 'add'"
              class="text-xl font-semibold text-primary-400"
            >
              <a href="#" @click.prevent="new_artist = true"
                >Add a new collection</a
              >
            </p>
            <p v-else class="text-xl font-semibold text-gray-900">
              {{ collection.title }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>

  <TransitionRoot as="template" :show="new_artist">
    <Dialog
      as="div"
      static
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="new_artist = false"
      :open="new_artist"
    >
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-2
          pb-10
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
              pb-2
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:pb-2 sm:align-middle sm:max-w-lg
              w-full
              lg:max-w-lg
              sm:p-6
            "
          >
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                class="
                  bg-white
                  rounded-md
                  text-primary-400
                  hover:text-primary-500
                  focus:outline-none
                "
                @click="new_artist = false"
              >
                <span class="sr-only">Close</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="sm:flex sm:items-start">
              <div class="mt-3">
                <DialogTitle
                  as="h3"
                  class="text-lg leading-6 font-medium text-gray-900"
                >
                  New Artist Collection
                </DialogTitle>
              </div>
            </div>
            <div>
              <form class="space-y-8 divide-y divide-gray-200">
                <div class="">
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
                          for="artist_name"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Title
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            v-model="collection.title"
                            name="collection_name"
                            id="collection_name"
                            autocomplete="Artist Name"
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
                            v-model="collection.artistName"
                            name="artist_name"
                            id="artist_name"
                            autocomplete="Artist Name"
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
                            v-model="collection.artistBioTitle"
                            name="artist_name"
                            id="bio_title"
                            autocomplete="Artist Bio Title"
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
                            v-model="collection.artistBio"
                            name="about"
                            rows="5"
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
                      </div>

                      <div class="sm:col-span-6">
                        <label
                          for="photo"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Artist Featured Image
                        </label>

                        <div
                          class="
                            mt-1
                            flex
                            w-full
                            justify-center
                            px-6
                            pt-5
                            pb-6
                            border-2 border-gray-300 border-dashed
                            rounded-md
                          "
                        >
                          <div
                            class="space-y-1 text-center"
                            v-bind="getRootProps()"
                            v-if="files.length == 0"
                          >
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
                                "
                              >
                                <span>Upload a file</span>
                                <input v-bind="getInputProps()" />
                              </label>
                              <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                          <div
                            class="space-y-1 text-center"
                            v-if="files.length > 0"
                          >
                            <img :src="selectedFoto" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4">
                    <div class="">
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
                              v-model="collection.privacy"
                              name="push_notifications"
                              value="public"
                              type="radio"
                              class="
                                focus:ring-primary-500
                                h-4
                                w-4
                                text-primary-400
                                border-primary-500
                              "
                            />
                            <label
                              for="push_everything"
                              class="
                                ml-3
                                block
                                text-sm
                                font-medium
                                text-gray-700
                              "
                            >
                              Public access
                            </label>
                          </div>
                          <div class="flex items-center">
                            <input
                              id="push_email"
                              v-model="collection.privacy"
                              name="push_notifications"
                              value="private"
                              type="radio"
                              class="
                                focus:ring-primary-500
                                h-4
                                w-4
                                text-primary-400
                                border-primary-500
                              "
                            />
                            <label
                              for="push_email"
                              class="
                                ml-3
                                block
                                text-sm
                                font-medium
                                text-gray-700
                              "
                            >
                              Private to you (Draft)
                            </label>
                          </div>
                          <div class="flex items-center">
                            <input
                              id="push_nothing"
                              v-model="collection.privacy"
                              name="push_notifications"
                              type="radio"
                              value="private_to"
                              class="
                                focus:ring-primary-500
                                h-4
                                w-4
                                text-primary-400
                                border-primary-500
                              "
                            />
                            <label
                              for="push_nothing"
                              class="
                                ml-3
                                block
                                text-sm
                                font-medium
                                text-gray-700
                              "
                            >
                              Private to
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div class="mt-4 divide-y-8 devide-y divide-gray-300">
                      <div>
                        <a href="#" class="text-primary-400 flex">
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
                  <div class="flex justify-end">
                    <button
                      type="button"
                      class="
                        bg-white
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
                      @click="new_artist = false"
                    >
                      Cancel
                    </button>
                    <a
                      href="#"
                      :disabled="!canSave"
                      @click.prevent="newArtist"
                      class="
                        ml-3
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
                    >
                      Create
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { onMounted, ref } from "vue";
import { useDropzone } from "vue3-dropzone";

import { db, storage } from "../firebase/firebase";
import slugify from 'slugify';
import { LinkIcon, XIcon } from "@heroicons/vue/outline";
export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    LinkIcon,
    XIcon
  },
  props: ["src"],
  setup(props) {
    const files = ref([]);
    const selectedFoto = ref(null);
    const new_artist = ref(false);
    const collection = ref({
      title: "",
      artistName: "",
      artistBio: "",
      artistBioTitle: "",
      featuredImage: null,
      privacy: "",
      link: "",
      gallery: [],
    });
    const canSave = ref(false);

    const collection_artists = ref([]);

    const onDrop = async (acceptFiles, rejectReasons) => {
      console.log(acceptFiles);
      files.value = acceptFiles;
      updatePhotoPreview();
      var storageRef = storage.ref();
      var imageRef = storageRef.child("collections/" + files.value[0].name);
      await imageRef.put(files.value[0]);
      collection.value.featuredImage = imageRef.fullPath;
      canSave.value = true;
      console.log(rejectReasons);
    };

    const updatePhotoPreview = () => {
      const reader = new FileReader();
      reader.readAsDataURL(files.value[0]);

      return (reader.onload = (e) => {
        selectedFoto.value = e.target.result;
      });
    };

    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });

    const newArtist = async () => {
      if (collection.value.featuredImage) {
        const colectionRef = slugify(collection.value.artistName, {lower: true});
        await db.collection("collections").doc(colectionRef).set(collection.value);
        new_artist.value = false;
        await loadCollections();
      }
    };

    const loadCollections = async () => {
      collection_artists.value = [];
      const collections = await db.collection("collections").get();

      if (props.src !== "home") {
        const add = {
          id: 1,
          title: "add",
          href: "/admin/collection_detail",
          items: "",
          imageUrl: "/images/plus_circle.svg",
        };

        collection_artists.value.push(add);
      }

      const storageRef = storage.ref();


      for (let collection of collections.docs) {
        console.log(collection);
        
          const data = {
            id: collection.id,
            title: collection.data().title,
            href:
              props.src !== "home"
                ? "/admin/collection/detail/" + collection.id
                : "/artist/" + collection.id,
            privacy: collection.data().privacy,
            items: collection.data().gallery ? collection.data().gallery.length + ' items' : 0 + ' items'
          };

          try {

            data.imageUrl = await storageRef
              .child(collection.data().featuredImage)
              .getDownloadURL();

              console.log(collection.data());

            if (props.src == "home" && collection.data().privacy !== 'private') {
              collection_artists.value.push(data);
            } else if(props.src !== "home") {
              collection_artists.value.push(data);
            }
          } catch (error) {
            console.log(error);
          }
        
      }
     
    };

    onMounted(async () => {
      await loadCollections();
    });

    return {
      new_artist,
      // navigation,
      // features,
      collection_artists,
      newArtist,
      getRootProps,
      getInputProps,
      ...rest,
      collection,
      files,
      selectedFoto,
      // footerNavigation,
    };
  },
};
</script>
