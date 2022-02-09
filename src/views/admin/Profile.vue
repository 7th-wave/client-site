<template>
<div class="artist bg-gray-100 font-inter">
  
  <div class="relative font-inter py-8 sm:py-8 lg:py-8">
    <div class="relative">
      <Navbar :type="'admin'" />
      <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p class=" text-3xl font-semibold text-gray-900 tracking-tight sm:text-4xl">
          {{currentUser.name}}
        </p>             
      </div>


      <div class="bg-white my-8 px-3">

        <div 
          :class="[
            'relative max-w-full',
            'px-1 py-8',
          ]"
        >
          <div class="grid xl:grid-cols-5 relative">
            <div class="xl:col-span-1 col-span-4 w-full xl:my-0 my-5 flex justify-center">
              <user-image :src="currentUser.avatar" v-if="currentUser.avatar" custom_height="56" />
            </div>
            <div class="col-span-4 grid xl:grid-cols-5 gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:divide-x md:divide-y-0 divide-x-0 divide-y divide-gray-200">
              <!-- profile -->
              <div class="text-gray-400 py-2 w-full font-bold sm:text-left text-center flex flex-col md:px-2 px-16">
                <div class="flex justify-between">
                  Profile
                  <Button :name="currentUser.userType || 'Costumer'" type="full" size="tiny" customClass="uppercase" @on:submit="open = true"/>
                </div>
                <div class="my-3">
                  <div class="flex text-md font-normal items-center justify-start text-gray-400">
                    <UserIcon class="h-5 w-5 mr-2 rounded-full " /> 
                    <div class="col-span-2">
                      {{currentUser.name}}
                    </div>
                  </div>
                  <div class="mt-2 flex text-md font-normal items-center justify-start text-teal-400">
                    <BadgeCheckIcon class="h-5 w-5 mr-2 rounded-full text-gray-400" /> 
                    <a v-if="galleryType != 'admin'" :href="'/client-page/' + currentUser.username" class="cursor-pointer">
                      {{currentUser.username}}
                    </a>
                    <div v-else>
                      {{currentUser.username}}
                    </div>
                  </div>
                  <div class="mt-2 flex flex-wrap text-md font-normal items-center justify-start text-teal-400">
                    <MailIcon class="h-5 w-5 mr-2 rounded-full text-gray-400" /> 
                    <a :href="'mailto:'+currentUser.email" target="_blank" :class="currentUser.email.length < 20 ? 'text-sm' : 'text-xs'" rel="noopener noreferrer">
                      {{currentUser.email}} 
                    </a>
                  </div>
                  <div class="mt-2 flex flex-wrap text-md font-normal items-center justify-start text-teal-400">
                    <PhoneIcon class="h-5 w-5 mr-2 rounded-full text-gray-400" /> 
                    <a :href="'tel:'+currentUser.phone" target="_blank" rel="noopener noreferrer">
                      {{currentUser.phone}}
                    </a>
                  </div>
                </div>
              </div>

              <!-- address -->
              <div v-if="currentUser.street !== ''" class="text-gray-400 py-2 w-full font-bold sm:text-left md:px-2 px-16">
                Address
                <div class="my-3 flex">
                  <div class= "flex text-md font-normal items-start justify-start text-gray-400">
                    <LocationMarkerIcon class="h-5 w-5 mr-2 rounded-full justify-self-start" /> 
                  </div>
                  <div class="col-span-2">
                    <div class= "flex text-md font-normal items-center justify-start text-gray-400">
                      <div class="col-span-2">
                        {{currentUser.street}}
                      </div>
                    </div>
                    <div class= "flex text-md font-normal text-gray-400 mt-2">
                      <div class="col-start-2">
                        {{currentUser.state}}
                      </div>
                    </div>
                    <div class= "flex text-md font-normal text-gray-400 mt-2">
                      <div class="col-start-2">
                        {{currentUser.zipCode}}
                      </div>
                    </div>
                    <div class= "flex text-md font-normal text-gray-400 mt-2">
                      <div class="col-start-2">
                        {{currentUser.country}}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- notification -->
              <div class="text-gray-400 py-2 w-full font-bold sm:text-left md:px-2 px-16">
                Notification
                <div class="my-3">
                  <div class= "flex text-md font-normal items-center justify-start text-gray-400">
                    <CheckCircleIcon v-if="currentUser.newsletter_push" class="h-5 w-5 mr-2 rounded-full justify-self-start" /> 
                    <XIcon v-else class="h-5 w-5 mr-2 rounded-full justify-self-start" />
                    <div class="col-span-2">
                      Newsletter
                    </div>
                  </div>
                  <div class= "flex text-md font-normal items-center justify-start text-gray-400">
                    <CheckCircleIcon v-if="currentUser.email_push" class="h-5 w-5 mr-2 rounded-full justify-self-start" />  
                    <XIcon v-else class="h-5 w-5 mr-2 rounded-full justify-self-start" />
                    <div class="col-span-2">
                      E-mail
                    </div>
                  </div>
                </div>
              </div>

              <!-- wallets -->
              <div class="text-gray-400 py-2 w-full sm:text-left font-bold md:px-2 px-16 xl:col-span-2">
                Wallets
                <div class="my-3">
                  <!-- metamask -->
                  <div v-if="wallet.metamask">
                    <div class="flex xl:hidden flex-wrap flex-col items-center font-normal text-teal-400">
                      <div class= "flex w-full font-normal items-center justify-start text-gray-400">
                        <CashIcon class="h-5 w-5 mr-2 rounded-full" /> 
                        <div class="col-span-2">
                          Metamask
                        </div>
                      </div>
                      <a href="https://metamask.io" target="_blank" rel="noopener noreferrer" class="cursor-pointer">
                        {{wallet.metamask.replace(wallet.metamask.substring(8,wallet.metamask.length - 5), "****")}}
                      </a>
                    </div>

                    <div class="xl:flex hidden flex-wrap flex-col items-start font-normal text-teal-400">
                      <div class= "flex w-full font-normal items-center justify-start text-gray-400">
                        <CashIcon class="h-5 w-5 mr-2 rounded-full" /> 
                        <div class="col-span-2">
                          Metamask
                        </div>
                      </div>
                      <a href="https://metamask.io" target="_blank" rel="noopener noreferrer" class="cursor-pointer">
                        {{wallet.metamask}}
                      </a>
                    </div>
                  </div>

                  <!-- fortmatic -->
                  <div v-if="wallet.fortmatic">
                    <div class="flex xl:hidden flex-wrap flex-col items-center font-normal text-teal-400 mt-2"> 
                      <div class= "flex w-full font-normal items-center justify-start text-gray-400">
                        <CashIcon class="h-5 w-5 mr-2 rounded-full" /> 
                        <div class="col-span-2">
                          Fortmatic
                        </div>
                      </div>
                      <a href="https://fortmatic.com" target="_blank" rel="noopener noreferrer" class="cursor-pointer">
                        {{wallet.fortmatic.replace(wallet.fortmatic.substring(8,wallet.fortmatic.length - 5), "****")}}
                      </a>
                    </div>

                    <div class="xl:flex hidden flex-wrap flex-col items-start font-normal text-teal-400 mt-2"> 
                      <div class= "flex w-full font-normal items-center justify-start text-gray-400">
                        <CashIcon class="h-5 w-5 mr-2 rounded-full" /> 
                        <div class="col-span-2">
                          Fortmatic
                        </div>
                      </div>
                      <a href="https://fortmatic.com" target="_blank" rel="noopener noreferrer" class="cursor-pointer">
                        {{wallet.fortmatic}}
                      </a>
                    </div>
                  </div>

                  <!-- portis -->
                  <div v-if="wallet.portis">
                    <div class="flex xl:hidden flex-wrap flex-col items-center font-normal text-teal-400 mt-2"> 
                      <div class= "flex w-full font-normal items-center justify-start text-gray-400">
                        <CashIcon class="h-5 w-5 mr-2 rounded-full" /> 
                        <div class="col-span-2">
                          Portis
                        </div>
                      </div>
                      <a href="https://portis.com" target="_blank" rel="noopener noreferrer" class="cursor-pointer">
                        {{wallet.portis.replace(wallet.portis.substring(8,wallet.portis.length - 5), "****")}}
                      </a>
                    </div>

                    <div class="xl:flex hidden flex-wrap flex-col items-start font-normal text-teal-400 mt-2"> 
                      <div class= "flex w-full font-normal items-center justify-start text-gray-400">
                        <CashIcon class="h-5 w-5 mr-2 rounded-full" /> 
                        <div class="col-span-2">
                          Portis
                        </div>
                      </div>
                      <a href="https://portis.com" target="_blank" rel="noopener noreferrer" class="cursor-pointer">
                        {{wallet.portis}}
                      </a>
                    </div>
                  </div>
                </div>
                Operations
                <div class="grid grid-cols-2 gap-2">
                  <Button name="Add as token operator" size="tiny" v-if="collectionType == 'admins' && !currentUser.isERC721Operator" @on:submit="addERC721Operator" />
                  <Button name="Add as auction operator" size="tiny" v-if="collectionType == 'admins' && !currentUser.isAuctionOperator"  @on:submit="addAuctionOperator" />

                  <span v-if="collectionType == 'admins' && currentUser.isERC721Operator">Already an ERC721 Operator</span>
                   <span v-if="collectionType == 'admins' && currentUser.isAuctionOperator">Already an Auction Operator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        :class="[
          'relative max-w-md sm:max-w-3xl lg:max-w-7xl',
          'mx-auto px-1 py-8 sm:px-6 lg:px-8',
        ]"
      >
        <div v-if="currentUser.gallery && currentUser.gallery.length > 0" class="box-border max-w-7xl mx-auto md:masonry before:box-inherit after:box-inherit">
          <gallery-client :src="galleryType" :gallery="currentUser.gallery" />
        </div>
      </div>

    </div>
  </div>

  <!-- Place Bid note -->
<TransitionRoot as="template" :show="open">
  <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" @close="open = false" :open="open">
    <div class="flex items-center justify-center min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0">
      <TransitionChild 
        as="template" 
        enter="ease-out duration-300" 
        enter-from="opacity-0" 
        enter-to="opacity-100" 
        leave="ease-in duration-200" 
        leave-from="opacity-100" 
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <span class="sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
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
          :class="[
          'inline-block align-bottom text-left overflow-hidden transform transition-all sm:align-middle lg:max-w-sm  w-full',
          'bg-white rounded-lg shadow-xl',
          ]"
        >
          <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4 focus:outline-none">
            <button type="button" class="bg-white rounded-md text-teal-400 focus:outline-none" @click="open = false">
              <span class="sr-only">Close</span>
              <XIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="sm:flex sm:items-start justify-start px-4 py-6 bg-gray-50">
          
            <div class="mt-3 text-left sm:mt-0">
              <DialogTitle 
                as="h3" 
                class="text-lg leading-6 font-medium text-gray-900"
              >
                User Role
              </DialogTitle>
                
            </div>
            
          </div>

          <div class="">
            <RadioGroup v-model="selected">
              <RadioGroupLabel class="sr-only">
                User Role
              </RadioGroupLabel>
              <div class="bg-white -space-y-px">
                <RadioGroupOption 
                  as="template" v-for="(setting) in settings" 
                  :key="setting.name" 
                  :value="setting" 
                  v-slot="{ checked, active }"
                >
                  <div 
                    :class="[
                      checked ? 'bg-teal-50 border-teal-200 z-10' : 'border-gray-200', 
                      'relative border p-4 flex cursor-pointer focus:outline-none'
                    ]"
                  >
                    <div class="w-1/12">
                      <span 
                        :class="[checked ? 'bg-teal-600 border-transparent' : 'bg-white border-gray-300', 
                        active ? 'ring-2 ring-offset-2 ring-teal-500' : '', 
                        'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                        ]" 
                        aria-hidden="true"
                      >
                        <span class="rounded-full bg-white w-2 h-2" />
                      </span>
                    </div>
                    <div class="ml-3 w-11/12 flex flex-col">
                      <RadioGroupLabel as="span" :class="[checked ? 'text-teal-900' : 'text-gray-900', 'block text-sm font-medium']">
                        {{ setting.name }}
                      </RadioGroupLabel>
                      <RadioGroupDescription as="span" :class="[checked ? 'text-teal-700' : 'text-gray-500', 'block text-sm']">
                        {{ setting.description }}
                      </RadioGroupDescription>
                    </div>
                  </div>
                </RadioGroupOption>
              </div>
            </RadioGroup>
          </div>
      
          <div class="flex justify-around py-5">
              
            <button 
              type="button"
              :class="[
                'w-2/5 inline-flex justify-center rounded-md border border-gray-200 shadow-sm',
                'bg-white text-base font-medium sm:text-sm',
                'focus:outline-none hover:bg-gray-50',
                'mt-3 px-4 py-2  sm:mt-0'
              ]"
              @click="open = false"
            >
              Cancel
            </button>
            <button 
              type="button"
              :class="[
                'w-2/5 inline-flex justify-center rounded-md border border-gray-200 shadow-sm',
                'bg-teal-400 text-base font-medium text-white sm:text-sm',
                'focus:outline-none hover:bg-teal-500',
                'mt-3 px-4 py-2  sm:mt-0'
              ]"
              @click="open = false"
            >
              Save
            </button>
          </div>
        </div>
      </TransitionChild>
    </div>
  </Dialog>
</TransitionRoot>
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
.card:nth-child(4), .card:nth-child(3)  {
 margin-top: 0!important;
 }
</style>

<script>
import UserImage from '@/components/Layouts/UserImage.vue';
import { db } from '../../firebase/firebase';

import Navbar from '@/components/Layouts/Navbar.vue'

import { onMounted, ref } from 'vue'
import { UserIcon, BadgeCheckIcon, PhoneIcon, MailIcon, LocationMarkerIcon, CheckCircleIcon, XIcon, CashIcon } from "@heroicons/vue/solid"
import { 
  Dialog, 
  DialogOverlay, 
  DialogTitle, 
  TransitionChild, 
  TransitionRoot, 
  RadioGroup, 
  RadioGroupDescription, 
  RadioGroupLabel, 
  RadioGroupOption 
} from '@headlessui/vue'
// import Gallery from '../../components/Gallery/GalleryClient.vue'
import { useRouter } from 'vue-router';
import GalleryClient from '../../components/Gallery/GalleryClient.vue';
import Button from '../../components/Layouts/Button.vue';
import { useStore } from 'vuex';

export default {
  components: {
    Dialog, 
    DialogOverlay, 
    DialogTitle, 
    TransitionChild, 
    TransitionRoot, 
    RadioGroup, 
    RadioGroupDescription, 
    RadioGroupLabel, 
    RadioGroupOption,
    Navbar,
    UserIcon,
    BadgeCheckIcon,
    PhoneIcon, 
    MailIcon,
    LocationMarkerIcon,
    CheckCircleIcon,
    XIcon,
    CashIcon,
    // Gallery,
    UserImage,
    GalleryClient,
    Button,
  },
  setup() {
    const router = useRouter()
    const open = ref(false)
    const galleryType = ref('')
    const currentUser = ref({
      id: '',
      name: '',
      email: '',
      avatar: '',
      phone: '',
      username: '',
      metamask: '',
      fortmatic: '',
      street: '',
      state: '',
      zipCode: '',
      country: '',
      firebaseUser: '',
      gallery: '',
      defaultOperatorAddress: '',
      userType: '',
      newsletter_push: false,
      email_push: false,
      sms_push: false,
    });
    const collectionType = ref();

    const store = useStore();

    const settings = [
      { name: 'Costumer', description: 'Can manage their profile, create and bid on auctions' },
      { name: 'Staff', description: 'All access except user role and deleting auctions.' },
      { name: 'Admin', description: 'All Access' },
      { name: 'Disabled', description: 'All account access are paused, collection and profile are hidden from public view' },
    ]
    const selected = ref(settings[0])

    const wallet = ref({
      metamask: '',
      fortmatic: '',
      portis: '',
    })

    const loadAdmins = async () => {
      const { username } = router.currentRoute.value.params

      collectionType.value = router.currentRoute.value.name.replace('_profile', '') 

       db.collection(collectionType.value).where("username", "==", username).get().then((querySnapshot) => {

         galleryType.value = collectionType.value == 'admins' ? 'admin' : 'front'
          querySnapshot.forEach((doc) => {
            const data = {
              dbRef: doc.id,
              id: doc.id,
              name: doc.data().firstName + ' ' + doc.data().lastName,
              email: doc.data().email,
              avatar: doc.data().avatar,
              phone: doc.data().phone,
              username: doc.data().username,
              metamask: doc.data().metamask || '',
              fortmatic: doc.data().fortmatic || '',
              street: doc.data().street || '',
              state: doc.data().state || '',
              zipCode: doc.data().zipCode || '',
              country: doc.data().country || '',
              firebaseUser: doc.data().firebaseUser || '',
              gallery: doc.data().nfts || [],
              defaultOperatorAddress: doc.data().defaultOperatorAddress || '',
              userType: doc.data().userType || 'costumer',
              newsletter_push: doc.data().newsletter_push || false,
              email_push: doc.data().email_push || false,
              sms_push: doc.data().sms_push || false,
              isERC721Operator: doc.data().isERC721Operator || false,
              isAuctionOperator: doc.data().isAuctionOperator || false
            };


            settings.map((el) => {
              if(el.name.toLowerCase() === data.userType) selected.value = el
            })

            wallet.value['metamask'] = data.metamask
            wallet.value['fortmatic'] = data.fortmatic
            wallet.value['portis'] = data.portis
            if (collectionType.value == 'admins') {
               wallet.value['metamask'] = data.defaultOperatorAddress
            }
            currentUser.value = data;
          });
      });
    }

    const addERC721Operator = async () => {
      await store.dispatch('admin/makeERC721Operator', {address: currentUser.value.defaultOperatorAddress, ref: currentUser.value.id});
      currentUser.value.isERC721Operator = true;
      
    }
    

    const addAuctionOperator = async () => {
      await store.dispatch('admin/makeAuctionOperator', {address: currentUser.value.defaultOperatorAddress, ref: currentUser.value.id});
      currentUser.value.isAuctionOperator = true;
    }

    onMounted(async function() {
      await loadAdmins()
    })


     return {
      open,
      wallet,
      settings,
      selected,
      currentUser,
      galleryType,
      loadAdmins,
      collectionType,
      addERC721Operator,
      addAuctionOperator,
     }
  },
}
</script>
