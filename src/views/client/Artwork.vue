<template>


  <div
    class="
      account
      sm:px-2
      py-4
      sm:py-4
      lg:py-16
      relative
      mx-auto
      bg-gray-100
      font-inter
      2xl:max-w-8xl w-full
    "
  >
    <div class="lg:hidden">
      <Navbar :type="'customer'" />
    </div>
    <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="text-4xl font-medium">Artwork</h1>
    </div>
    <div>
      <div class="lg:grid lg:grid-cols-7 lg:gap-6 rounded-lg">
        <div class="lg:col-span-2 ">
          <div class="hidden lg:block"><Menu /></div>
           <div class="lg:mt-3 bg-white w-full mx-auto sm:max-w-lg md:max-w-lg lg:w-full">
            <img :src="img" class="w-full" alt="">
          </div>
          
        </div>
        <div class="mt-5 md:mt-0 lg:col-span-5">
          <div
            class="
              box-border
              max-w-7xl
              mx-auto
            "
          >
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
                    @submit.prevent="saveNFT"
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
                                readonly
                                disabled
                                type="text"
                                v-model="data.title"
                                name="title"
                                id="title"
                                autocomplete="Title"
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
                              for="sub_title"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Sub Title
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm">
                              <input
                                readonly
                                disabled
                                type="text"
                                v-model="data.sub_title"
                                name="title"
                                id="sub_title"
                                autocomplete="Sub Title"
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
                              for="dimension"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Dimensions
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm">
                              <input
                                readonly
                                disabled
                                type="text"
                                v-model="data.dimension"
                                name="dimension"
                                id="dimension"
                                autocomplete="Dimensions"
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
                              for="medium"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Medium
                            </label>
                            <div class="mt-1 flex rounded-md shadow-sm">
                              <input
                                readonly
                                disabled
                                type="text"
                                v-model="data.medium"
                                name="dimension"
                                id="medium"
                                autocomplete="Medium"
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
                              for="description"
                              class="block text-sm font-medium text-gray-700"
                            >
                              Description
                            </label>
                            <div class="mt-1">
                              <textarea
                                readonly
                                disabled
                                id="about"
                                name="description"
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
                                v-model="data.description"
                              />
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      <div>
                        <div class="sm:flex justify-between mt-4">
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
                                        focus:ring-primary-400
                                        h-4
                                        w-4
                                        text-primary-600
                                        border-primary-300
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
                                        focus:ring-primary-500
                                        h-4
                                        w-4
                                        text-primary-600
                                        border-primary-300
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
                                        focus:ring-primary-500
                                        h-4
                                        w-4
                                        text-primary-600
                                        border-primary-300
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
                          <div class="m-8 md:m-0 relative">
                            <img
                              :src="data.qrCodeImage"
                              class="bg-white hover:opacity-25 focus:opacity-15"
                              alt=""
                            />
                            <a
                              href="#"
                              class="
                                absolute
                                inset-0
                                z-10
                                bg-white
                                text-center
                                flex flex-col
                                items-center
                                justify-center
                                opacity-0
                                hover:opacity-100
                                bg-opacity-90
                                duration-100
                              "
                            >
                              <h1
                                class="
                                  text-base
                                  bg-gray-600
                                  px-4
                                  py-2
                                  rounded-sm
                                  text-white
                                  font-medium
                                  leading-6
                                  tracking-wider
                                  uppercase
                                "
                              >
                                print / save
                              </h1>
                            </a>
                          </div>
                        </div>
                        <div class="mt-4 divide-y-8 devide-y divide-gray-300" v-if="data.ipfs">
                          <div>
                            <a :href="data.ipfs" target="_blank" class="text-primary-400 flex">
                              <LinkIcon
                                class="h-4 w-4 mt-1 mr-2 text-primary-400"
                                aria-hidden="true"
                              />
                              {{data.ipfs.replace('https://gateway.pinata.cloud/ipfs/', '')}}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </form>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      <auctions :nft="data" :nft-ref="nftRef" :show-auctions="showPanels" :no-new-auction="noNewAuction" :client-ref="clientRef" :address="currentAddress"></auctions>
      <offers :nft="data" :nft-ref="nftRef" :show-offers="showPanels" :client-ref="clientRef" :address="currentAddress"></offers>
      <sales :nft="data" :nft-ref="nftRef" :show-sales="showPanels" :no-new-sale="noNewSale" :client-ref="clientRef" :address="currentAddress"></sales>
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
                    bg-primary-400
                    text-base
                    font-medium
                    text-white
                    hover:bg-primary-600
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
</style>

<script>
// @ is an alias to /src
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar_mobile.vue";
import { LinkIcon } from "@heroicons/vue/outline";
import { computed, onMounted, ref } from "vue";


import QRCode from "qrcode";


import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { useRoute, useRouter } from "vue-router";
import { db, storage, getClientByBlockChain } from "@/firebase/firebase";
import { pinFile, pinJson, mintNft, getDecimal} from "@/blockchain/index";
import { useStore } from 'vuex';
import Auctions from '@/components/Layouts/Auctions.vue';
import Offers from '@/components/Layouts/Offers.vue';
import Sales from '@/components/Layouts/Sales.vue';



export default {
  components: {
    Navbar,
    LinkIcon,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    Auctions,
    Offers,
    Sales,
    Menu,
  },
  setup() {

    const currentAddress = computed(
			() => store.getters["blockchain/getCurrentAddress"]
		);

    const clientRef = ref(null);

    const open = ref(false);
    
    const confirm_modal = ref(false);

    const route = useRoute();
    const router = useRouter();
    const nftRef = ref(route.params.ref);
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
      offers: [],
      sales: []
    });

    

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
    const sales = ref([]);
    const admin = computed(() => store.getters['admin/getAdmin']);
    const noNewAuction = ref(false);
    const noNewSale = ref(false);
    const showPanels = computed(() => {
      return nftRef.value && data.value.isMinted;
    });
    

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

      router.push("/collection/detail/" + collectionRef.value);
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
      store.dispatch('NotificationStore/TOGGLE_LOADING');
      const image = e.target.files[0];
      const reader = new FileReader();

      var storageRef = storage.ref();
      var imageRef = storageRef.child("nfts/" + e.target.files[0].name);

      try {
        await imageRef.put(e.target.files[0])

        if (imageRef.fullPath) {
          data.value.imageUrl = imageRef.fullPath;

          await pinImageNow(e.target.files[0]);

        }


        await generateQR();
        store.dispatch('NotificationStore/TOGGLE_LOADING');
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
        .getDownloadURL()

        img.value = url;

      } catch(error) {
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
      data.value.offers = dbResult.data().offers || [];
      data.value.sales = dbResult.data().sales || [];
      auctions.value = data.value.auctions;
      sales.value = data.value.sales;
      isSaved.value = true;

      for(let auction of auctions.value) {
        
        const acDb = await db.collection("auctions").doc(auction).get();
        if (acDb.exists && acDb.data().status == 'active') {
          
          noNewAuction.value = true;
          
        }

      }

      for(let sale of sales.value) {
        
        const saleDb = await db.collection("sales").doc(sale).get();
        if (saleDb.data().status == 'active') {
          
          noNewSale.value = true;
          
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

    const moveToArchive = async(nftRef) => {
      const hiddenCollection = await db.collection("collections").doc('archives').get();
      const data = hiddenCollection.data();
      const gallery = data.gallery.push(nftRef);
      await db.collection("collections").doc('hidden_collection').update({
          gallery: gallery
      });
    }

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

      router.push("/collection/detail/" + collectionRef.value);
    };

    const pinImageNow = async(file) => {
      if (data.value.title) {
        const pinata = await pinFile(file, data.value.title) 
        data.value.ipfs = 'https://gateway.pinata.cloud/ipfs/'+pinata.data.IpfsHash;
      
      } else {
        store.dispatch("NotificationStore/setMessage", {
          message: "Before uploading an image give the NFT a name",
          type: "error",
        });
      }
    }

    const mint = async() => {
      store.dispatch('NotificationStore/TOGGLE_LOADING');
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

        const description = "\n\nArtist Bio:\n\n#"+currentData.data().artistBioTitle+"\n "+currentData.data().artistBio+"\n\n"+data.value.description+"\n\n #About GOG: \n\nThe Gallery on Greene has consistently fomented curatorial and artistic practice through ambitious exhibitions programs, created in close collaboration with its artists with museums from New York, MCNY, AFAM, SSSM to Havana's National Museum of Fine Art. Visit our curated NFT auction marketplace [gog.auction](https://gog.auction)";


        const metadata = {
            pinataMetadata: {
                name: data.value.title,
            },
            pinataContent: {
              name: data.value.title,
              description: description,
              image: data.value.ipfs,
              external_url: "https://gog.auction/artwork/"+collectionRef.value+'/'+nftRef.value, 
              attributes: [
                  { trait_type: "Collection", value: currentData.data().title },
                  { trait_type: "Artist Name", value: currentData.data().artistName },
                  { trait_type: "Type", value: data.value.sub_title },
                  { trait_type: "Dimensions", value: data.value.dimension || '' },
                  { trait_type: "Medium", value: data.value.medium || '' },
                ]
            }
        }
        

        const metadataIpfs = await pinJson(metadata);
        
        data.value.metadataIpfs = 'https://gateway.pinata.cloud/ipfs/'+metadataIpfs.IpfsHash;
        
        console.log(admin);

        const receipt = await mintNft(data.value.metadataIpfs);
        console.log(receipt);

        const { events: { Transfer: { raw: { topics } } }, transactionHash, from } = receipt; 

        data.value.blockchainId = getDecimal(topics[3]);
        data.value.isMinted = true;
        data.value.blockChainOwner = from;
        data.value.transactionHash = transactionHash;


        await db.collection("nfts").doc(nftRef.value).set(data.value);

        store.dispatch('NotificationStore/TOGGLE_LOADING');

        store.dispatch("NotificationStore/setMessage", {
          message: "Your NFT is minted!",
          type: "success",
        });

      }
      
    }

    onMounted(async () => {
      await getGalleryImages();

      if (nftRef.value) {
        await getNFTInfo();
      }

      clientRef.value = await getClientByBlockChain(currentAddress.value);
      console.log(clientRef.value)
    });

    return {
      auctions,
      data,
      img,
      open,
      errorMessage,
      confirm_modal,
      nftRef,
      saveNFT,
      updatePhotoPreview,
      files,
      selectedFoto,
      deleteImg,
      deleteNft,
      isSaved,
      mint,
      showPegged,
      noNewAuction,
      showPanels,
      noNewSale,
      sales,
      currentAddress,
      clientRef
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