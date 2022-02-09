<template>
    <div class="menu px-4 sm:px-0 font-inter">
        <ul class=" ">
        <li class="relative bg-white rounded-t-md px-4 pb-4 pt-12 ocus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-50">
            <div class="flex justify-between space-x-3">
                <div class="min-w-0 flex-1">
                    <router-link :to="'/my-account/'+currentAddress" class="block focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true" />
                     <p v-if="route.name === 'MyAccount'" class="text-base font-bold text-black truncate">My Account</p>
                     <p v-else class="text-base font-medium text-gray-900 truncate">My Account</p>
                     </router-link>
                </div>
            </div>
        </li>
        <li   class="relative bg-white py-4 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-50">
            <div class="flex justify-between space-x-3 ">
                <div class="min-w-0 flex-1">
                    <router-link to="/my-collections" class="block focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true" />
                     <p v-if="route.name === 'My_collections'" class="text-base font-bold text-black truncate">My Collections</p>
                     <p v-else class="text-base font-medium text-gray-900 truncate">My Collection</p>
                    </router-link>
                </div>
            </div>
        </li>
        <li   class="relative bg-white py-4 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-50">
            <div class="flex justify-between space-x-3">
                <div class="min-w-0 flex-1">
                    <router-link to="/my-wallets" class="block focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true" />
                     <p v-if="route.name === 'My_wallets'" class="text-base font-bold text-black truncate">My Wallets</p>
                     <p v-else class="text-base font-medium text-gray-900 truncate">My Wallets</p>
                    </router-link>
                </div>
            </div>
        </li>
        <li   class="relative bg-white pb-16 pt-4 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-50">
            <div class="flex justify-between space-x-3">
                <div class="min-w-0 flex-1">
                    <router-link to="/my-bids" class="block focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true" />
                     <p v-if="route.name === 'My_bids'" class="text-base font-bold text-black truncate">My Bids</p>
                     <p v-else class="text-base font-medium text-gray-900 truncate">My Bids</p>
                    </router-link>
                </div>
            </div>
        </li>
        <li class="relative bg-gray-700 rounded-b-lg py-4 px-4   focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-50">
            
            <div class="flex justify-between">
                <div class="flex">
                    <div>
                        <router-link :to="'/my-account/'+currentAddress">
                            <img class="inline-block h-10 w-10 rounded-full" :src="avatar" v-if="avatar" alt="" />
                        </router-link>
                    </div>
                    <div class="ml-3">
                        <router-link :to="'/my-account/'+currentAddress">
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
                    <span @click.prevent="openModal()">
                        <LockClosedIcon class="w-8 h-8 rounded-full p-1 bg-white inline-block text-gray-600" />
                    </span>
                </div>
            </div>
                              
        </li>
        </ul>
    </div>
</template>
<script>
import {  LockClosedIcon  } from '@heroicons/vue/solid'
import { computed, onMounted, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { auth, storage } from '../../firebase/firebase'
 
 
export default {
  components: {
    LockClosedIcon 
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const fullName = computed(() => store.getters['user/getFullName']);
        
    const email = computed(() => store.getters['user/getEmail']);

    const avatar = ref('');

    const openModal = async () => {
        await store.dispatch("NotificationStore/SET_MODAL_TITLE", { title: 'Are you sure you want to log out?' });
        await store.dispatch("NotificationStore/SET_MODAL_MESSAGE", { message: '' });
        await store.dispatch("NotificationStore/SET_MODAL_BUTTONS", { buttons: [
                {
                    name: 'Cancel', 
                    btnStyle: 'secondary',
                    action: async function() {
                        await store.dispatch("NotificationStore/SET_OPEN_MODAL");
                    }
                },
                {
                    name: 'Log out', 
                    action: async function() {
                        logout();
                        await store.dispatch("NotificationStore/SET_OPEN_MODAL");
                    }
                },
            ] 
        });
        await store.dispatch("NotificationStore/SET_OPEN_MODAL");
    }
      
      const logout = async () => {
        if (props.type == 'admin') {
            await auth.signOut();
            router.push('/admin/login');

        } else {
            await store.dispatch('user/logoutUser');
            router.push('/');
            
        }
      }

      const getAvatar = async () => 
        {
            const image = store.getters['user/getAvatar'];

            if (image) {
                var storageRef = storage.ref();
                const url = await storageRef.child(image).getDownloadURL();
                avatar.value = url;
            }
        };

    onMounted(async() => {
        await getAvatar();
    })

    return {
        route,
        currentAddress: computed(() => store.getters['blockchain/getCurrentAddress']),
        logout,
        fullName,
        email,
        avatar,
        openModal
    }
  },
}
</script>