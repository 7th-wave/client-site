<template>
    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl font-inter z-50">
        <Listbox as="div" v-model="selected">
        <ListboxLabel class="sr-only">
            Change published status
        </ListboxLabel>
        <div class="relative">
            <div class="inline-flex shadow-sm rounded-md divide-x divide-primary-600">
            <div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-primary-600">
                <ListboxButton class="relative inline-flex items-center text-gray-400 bg-white p-2 rounded-md text-sm font-medium hover:bg-gray-100 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-100">
                <span class="sr-only">Change published status</span>
                <MenuIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </ListboxButton>
            </div>
            </div>
            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <ListboxOptions class="origin-top-left absolute z-10  mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <ListboxOption  >
                <!-- <li class="text-gray-900 cursor-default select-none relative p-4 text-sm">
                    <div class="flex flex-col">
                    <div class="flex justify-between">
                        <router-link to="/admin/my-account">
                            <p v-if="$route.name === 'AdminMyAccount'" class="text-base text-gray-900 mb-0 font-bold"> My Account</p>  
                            <p v-else class="text-base text-gray-900 mb-0 font-medium"> My Account</p>  
                        </router-link>
                       
                    </div>
                    </div>
                </li>

                <li class="text-gray-900 cursor-default select-none relative p-4 text-sm">
                    <div class="flex flex-col">
                    <div class="flex justify-between">
                        <router-link to="/admin/my-wallet">
                            <p v-if="$route.name === 'AdminMyWallet'" class="text-base text-gray-900 mb-0 font-bold"> My Wallet</p>  
                            <p v-else class="text-base text-gray-900 mb-0 font-medium"> My Wallet</p>  
                        </router-link>
                       
                    </div>
                    </div>
                </li>
                
                <li class="text-gray-900', 'cursor-default select-none relative p-4 text-sm">
                    <div class="flex flex-col">
                    <div class="flex justify-between">
                        <router-link to="/admin/settings">
                            <p v-if="$route.name === 'Admin_settings'" class="text-base text-gray-900 mb-0 font-bold">Users</p>  
                            <p v-else class="text-base text-gray-900 mb-0 font-medium"> Users </p>  
                        </router-link>
                    </div>
                    </div>
                </li>
                <li class="text-gray-900', 'cursor-default select-none relative p-4 text-sm">
                    <div class="flex flex-col">
                    <div class="flex justify-between">
                        <router-link to="/admin/collections">
                            <p v-if="$route.name === 'Admin_collections'" class="text-base text-gray-900 mb-0 font-bold"> Admin Collections</p>  
                            <p v-else class="text-base text-gray-900 mb-0 font-medium"> Admin Collections</p>  
                        </router-link> 
                    </div>
                    </div>
                </li>
                <li class="text-gray-900', 'cursor-default select-none relative p-4 text-sm  bg-gray-600">
                    <div class="flex justify-between">
                        <div class="flex">
                            <div>
                                <router-link to="/admin/my-account">
                                    <img class="inline-block h-10 w-10 rounded-full" :src="avatar" v-if="avatar" alt="" />
                                </router-link>
                            </div>
                            <div class="ml-3">
                                <router-link to="/admin/my-account">
                                    <p class="text-md font-medium text-white group-hover:text-gray-100">
                                        {{ fullName }}
                                    </p>
                                    <p class="text-xs font-medium text-white group-hover:text-gray-100">
                                       {{ email }}
                                    </p>
                                </router-link>
                                
                            </div>
                        </div>
                    
                        <div class="self-center	" >
                            <a href="#" @click.prevent="logout()">
                                <LockClosedIcon class="w-8 h-8 rounded-full p-1 bg-white inline-block text-gray-600" />
                            </a>
                        </div>
                    </div>
                </li> -->
            
              <Menu />
                </ListboxOption>
                
            </ListboxOptions>
            </transition>
        </div>
        </Listbox>
        
    </div>
</template>
<script>
// @ is an alias to /src
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import {  MenuIcon } from '@heroicons/vue/solid'
import { auth, storage } from "../../firebase/firebase";
import Menu from './Menu.vue'
import { useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex';

export default {
  components: {
     Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    Menu,
    MenuIcon,
  },
  props: ['type'],
  setup(props) {

       const router = useRouter();
       const store = useStore();

        const fullName = computed(() => store.getters['admin/getFullName']);
        
        const email = computed(() => store.getters['admin/getEmail']);

        const avatar = ref('');
      
      const logout = async () => {
        if (props.type == 'admin') {
            await auth.signOut();
            router.push(`/admin/login`);
        } else {
            router.push(`/`);
        }
      }

      const getAvatar = async () => 
        {
            const image = store.getters['admin/getAvatar'];

            if (image) {
                var storageRef = storage.ref();
                const url = await storageRef.child(image).getDownloadURL();
                avatar.value = url;
            }
        };

      const currentAddress = computed(() => {
          if (props.type == 'customer') {
            return store.getters['blockchain/getCurrentAddress'];
          } else {
            return '';
          }
      });

      onMounted(async () => {
          await getAvatar();
      })
  
    return {
      logout,
      currentAddress,
      fullName,
      avatar,
      email
    }
  },
}
</script>