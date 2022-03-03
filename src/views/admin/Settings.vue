<template>
<div class="settings bg-gray-100 font-inter">
  <div class="relative pt-4 lg:pt-4">
    <div class="relative">
      <Navbar :type="'admin'" />
      <div class="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p class="mt-2 text-4xl font-normal text-black tracking-tight sm:text-4xl">
          Admin Settings
        </p>             
      </div>
    </div>
  </div>

  <!-- lists -->
  <div 
    :class="[
      'relative max-w-md sm:max-w-3xl lg:max-w-7xl',
      'mx-auto px-1 lg:pb-16 py-8 sm:px-6 lg:px-8 '
    ]"
  >
    <div class="relative">
      <div class="lg:grid lg:grid-cols-2 grid-cols-1 gap-8">
        <div class="flex flex-col">
          <div 
            class="bg-gray-300 p-3 rounded-t-md grid items-center grid-cols-3 justify-items-stretch"
          >
            <h3 class="text-center text-2xl font-medium text-black col-start-2 col-end-3">Admin</h3>
            <PlusCircleIcon 
              class="h-12 w-12 text-white justify-self-end cursor-pointer" 
              aria-hidden="true"
              @click="createAdmin()"
            />
          </div>
          <div class="bg-white p-3 rounded-b-md divide-y divide-gray-200">
            <div 
              class="py-4 px-2 flex justify-between items-center w-full m-0"
              v-for="(user, index) in adminUsers"
              :key="index"
            >
              <div class="flex">
                <user-image :src="user.avatar" v-if="user.avatar" custom_height="12" />
                <span
                  class="h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                  v-else
                >
                  <svg
                    class="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>

                </span>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    {{ user.name }}
                  </div>
                  <div class="text-xs text-gray-500">
                    {{ user.email }}
                  </div>
                </div>
              </div>

              <div 
                class="sm:flex xs:hidden flex justify-self-end px-3 border rounded-full border-gray-300 cursor-pointer"
                @click="viewUser(user.username)"
              >
                View
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:pt-0 pt-6">
          <div 
            class="bg-gray-300 p-3 rounded-t-md grid items-center grid-cols-3 justify-items-stretch"
          >
            <h3 class="text-center text-2xl font-medium text-black col-start-2 col-end-3">Staff</h3>
            <PlusCircleIcon 
              class="h-12 w-12 text-white justify-self-end cursor-pointer" 
              aria-hidden="true"
              @click="createStaff"
            />
          </div>
          <div class="bg-white p-3 rounded-b-md divide-y divide-gray-200">
            <p v-if="staffUsers.length == 0" class="text-center">There are no Staff at the moment</p>
            <div 
              class="py-4 px-2 flex justify-between items-center w-full m-0"
              v-for="(user, index) in staffUsers"
              :key="index"
            >
              <div class="flex">
                <user-image :src="user.avatar" v-if="user.avatar" custom_height="12" />
                <span
                  class="h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                  v-else
                >
                  <svg
                    class="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>

                </span>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    {{ user.name }}
                  </div>
                  <div class="text-xs text-gray-500">
                    {{ user.email }}
                  </div>
                </div>
              </div>

              <div 
                class="justify-self-end px-3 border rounded-full border-gray-300 cursor-pointer"
                @click="viewUser(user.username)"
              >
                View
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative pt-6">
      <div class="flex flex-col">
        <div 
            class="bg-gray-300 p-3 rounded-t-md grid items-center grid-cols-3 justify-items-stretch"
          >
            <h3 class="text-center text-2xl font-medium text-black col-start-2 col-end-3">Clients</h3>
            <PlusCircleIcon 
              class="h-12 w-12 text-white justify-self-end cursor-pointer" 
              aria-hidden="true"
              @click="addCustomer()"
            />
          </div>
        <div class="bg-white p-3 pt-0 rounded-b-md ">
          <div class="flex items-center justify-center my-4 flex-wrap sm:flex-row flex-col">
            <!-- <MenuSelect :options="AuctionOptions" title="Auctions" @on:click="selectOption" />
            <MenuSelect :options="NFTOptions" title="NFT" @on:click="selectOption" /> -->
            <Search @on:change="search" />
          </div>
          <p v-if="customerUsers.length == 0" class="text-center">There are no Client at the moment</p>
          <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
          <div 
            class="py-4 px-2 flex justify-between items-center w-full border-t border-gray-200"
            v-for="(user, index) in customerUsers"
            :key="index"
          >
            <div class="flex">
              <user-image :src="user.avatar" v-if="user.avatar" custom_height="12" />
              <span
                class="h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                v-else
              >
                <svg
                  class="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>

              </span>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                  {{ user.name }}
                </div>
                <div class="text-xs text-gray-500">
                  {{ user.email }}
                </div>
              </div>
            </div>
            <div 
              class="justify-self-end px-3 border rounded-full border-gray-300 cursor-pointer"
              @click="viewUser(user.username, 'user-')"
            >
              View
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<TransitionRoot as="template" :show="openAddUser">
  <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" @close="openAddUser = false" :open="openAddUser">
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
            <button type="button" class="bg-white rounded-md text-primary-400 focus:outline-none" @click="openAddUser = false">
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
                Add User
              </DialogTitle>
                
            </div>
            
          </div>

          <div class="mt-5 sm:mt-4 p-2">
            <Input label="First Name" v-model="admin.firstName" type="text" name="first_name" />
            <Input label="Last Name" v-model="admin.lastName" type="text" name="last_name" />
            <Input label="User Name" v-model="admin.username" type="text" name="username" />
            <Input label="Email" v-model="admin.email" type="email" name="email" />
          </div>
      
          <div class="mt-5 sm:mt-4 p-2">
              
            <button 
              type="button"
              :class="[
                'w-full sm:w-full inline-flex justify-center rounded-md border border-gray-200 shadow-sm',
                'bg-primary-400 text-base font-medium text-white sm:text-sm',
                'focus:outline-none hover:bg-primary-500',
                'mt-3 px-4 py-2  sm:mt-0'
              ]"
              @click="inviteAdmin()"
            >
              Send Invitation
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

</style>

<script>
// @ is an alias to /src
import Navbar from '@/components/Layouts/Navbar.vue'
// import MenuSelect from '../../components/Layouts/MenuSelect.vue'
import Search from '../../components/Layouts/Search.vue'
import Input from '../../components/Layouts/Input.vue'
import { onMounted, ref, watch } from 'vue'
import { PlusCircleIcon, } from '@heroicons/vue/solid'
import {  XIcon, } from '@heroicons/vue/outline'
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const NFTOptions = [
  { id: 1, name: 'Original' },
  { id: 2, name: 'Pegged' },
  { id: 3, name: 'None' },
]
const AuctionOptions = [
  { id: 1, name: 'Active' },
  { id: 2, name: 'Sold' },
  { id: 3, name: 'Paused' },
  { id: 4, name: 'None' },
]

import { db } from '../../firebase/firebase';
import UserImage from '@/components/Layouts/UserImage.vue';
import { useRouter } from 'vue-router'
 
export default {
  components: {
    Navbar,
    // MenuSelect,
    Search,
    PlusCircleIcon,
    Dialog, 
    DialogOverlay, 
    DialogTitle, 
    TransitionChild, 
    TransitionRoot,
    XIcon,
    Input,
    UserImage,
  },
  setup() {
    const router = useRouter()

    const openAddUser = ref(false);
    const admin = ref({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      userType: ''
    });

    const adminUsers = ref([]);
    const staffUsers = ref([]);
    const customerUsers = ref([]);
    const customerUsersDefault = ref([]);

    const NTFSelected = ref()
    const AuctionSelected = ref()

    const selectOption = (val) => {
      switch (val.title) {
        case 'Auctions':
          AuctionSelected.value = val.option; 
        break;
        case 'NFT':
          NTFSelected.value = val.option; 
        break;
        default:
        break;
      }
    }

    const search = (e) => {
      const findCostumer = customerUsersDefault.value.filter((el) => 
        el.name.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1 || 
        el.email.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1
      )
      customerUsers.value = []
      return customerUsers.value = findCostumer
    }
    watch(customerUsers, (val) => {
      customerUsers.value = val
    })

    const viewUser = (name, type = '') => {
      router.push(`/admin/${type}profile/${name}`)
    }

    const createAdmin = () => {
      openAddUser.value = true;
      admin.value.userType = 'admin';
    }

    const createStaff = () => {
      openAddUser.value = true;
      admin.value.userType = 'staff';
    }

    const inviteAdmin = async () => {
      openAddUser.value = false;
      try {
        await db.collection("admins").add(admin.value);
        loadAdmins();
        loadStaff();
        loadCostumers();
      } catch(error) {
        console.log(error.code);
        console.log(error.message);
      }
    }

    const loadAdmins = async () => {
       db.collection("admins").where("userType", "==", 'admin').get().then((querySnapshot) => {
          adminUsers.value = []
          querySnapshot.forEach((doc) => {
              const data = {
                id: doc.id,
                username: doc.data().username,
                name: doc.data().firstName + ' ' + doc.data().lastName,
                email: doc.data().email,
                avatar: doc.data().avatar,
              };
              adminUsers.value.push(data);
          });
      });
    }

    const loadStaff = async () => {
      db.collection("admins").where("userType", "==", 'staff').get().then((querySnapshot) => {
          staffUsers.value = [];
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              const data = {
                id: doc.id,
                name: doc.data().firstName + ' ' + doc.data().lastName,
                email: doc.data().email,
                avatar: doc.data().avatar,
              };

              staffUsers.value.push(data);
          });
      });
    }

    const loadCostumers = async () => {
      db.collection("clients").get().then((querySnapshot) => {
          customerUsers.value = [];
          querySnapshot.forEach((doc) => {
              const data = {
                id: doc.id,
                name: doc.data().firstName + ' ' + doc.data().lastName,
                email: doc.data().email,
                avatar: doc.data().avatar,
                username: doc.data().username,
              };

              customerUsers.value.push(data);
              customerUsersDefault.value.push(data);
          });
      });
    }

    onMounted(async () => {
      await loadAdmins();
      await loadStaff();
      await loadCostumers();

      
    })

    return {
      adminUsers,
      viewUser,
      NFTOptions,
      NTFSelected,
      AuctionOptions,
      AuctionSelected,
      selectOption,
      search,
      openAddUser,
      inviteAdmin,
      admin,
      createStaff,
      createAdmin,
      staffUsers,
      customerUsers,
      loadCostumers,
      customerUsersDefault
    }
  },
}
</script>
