<template>
    <div>
    <footer class="bg-white" aria-labelledby="footerHeading">
      <h2 id="footerHeading" class="sr-only">Footer</h2>
      <div class="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-16 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="grid lg:grid-cols-2 grid-cols-1 gap-8 xl:col-span-2">
            <div class="grid grid-cols-2 md:gap-8">
              <div>
                <h3 >
                 <a href="/my-account" class="text-sm font-semibold text-gray-400 tracking-wider uppercase"> My Account</a>
                </h3>
                <ul class="no-bullet mt-4 space-y-4">
                  <li>
                    <a href="#" @click.prevent="loginmodal = true" class="text-base text-gray-400 hover:text-gray-100">
                      Login / Signup
                    </a>
                  </li>
                </ul>
              </div>
              <div class="  md:mt-0">
                <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Help & Legal
                </h3>
                <ul class="no-bullet mt-4 space-y-4">
                  <li v-for="item in footerNavigation.support" :key="item.name">
                    <a :href="item.href" class="text-base text-gray-400 hover:text-gray-100">
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
             
          </div>
          <div class="mt-12 xl:mt-0">
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p class="mt-4 text-base text-gray-400">
              The latest news, articles, and resources.
            </p>
            <form class="mt-4 sm:flex sm:max-w-md">
              <label for="emailAddress" class="sr-only">Email address</label>
              <input type="email" name="emailAddress" id="emailAddress" autocomplete="email" required="" class="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:placeholder-gray-400" placeholder="Enter your email" />
              <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button type="submit" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-xl uppercase font-normal rounded-md shadow-sm text-white text-primary-400 hover:text-primary-400">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
          <div class="flex space-x-6 md:order-3">
            <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
           <div class="flex space-x-6 md:order-2">
            <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            NFT DAPP by 7thw.com
            </p>
          </div>
          <p class="mt-8 md:mt-0 md:order-1">
            <a href="/admin/collections" class="text-base text-gray-400">&copy; 2022 CIRKOL COLLECTIVE All rights reserved.</a>
          </p>
        </div>
      </div>
    </footer>
  </div>

 <!-- login modal -->
 <!-- <TransitionRoot as="template" :show="login_modal">
    <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" @close="login_modal = false" :open="login_modal">
      <div class="flex items-end justify-center min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

         <span class="  sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-max sm:w-full sm:p-6">
            <div class="mt-5 sm:mt-4 lg:flex">
                 <a href="#" class="mx-2">
                    <img src="/images/wallet1.png" @click="login_modal = false; login=true" alt="">
                 </a>
                 <a href="#" class="mx-2">
                   <img src="/images/wallet2.png" @click="login_modal = false; phone_login1=true" alt="">
                 </a>
                 <a  class="mx-2">
                   <img src="/images/wallet3.png" alt="">
                 </a>
            </div>       
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot> -->
  <LoginModal :login_modal = "loginmodal" />
  <!-- Social login -->
  <TransitionRoot as="template" :show="login">
    <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" @close="login = false" :open="login">
      <div class="flex items-end justify-center min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
          <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" @click="modal_open = false">
            <span class="sr-only">Close</span>
            <XIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="  sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-transparent  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-max">
            <div class="">
                 <a href="/my-account" >
                    <img src="/images/login.png" alt="">
                 </a>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

  <!-- Login with phone stage 1 -->
    <TransitionRoot as="template" :show="phone_login1">
    <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" @close="phone_login1 = false" :open="phone_login1">
      <div class="flex items-end justify-center min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
          <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" @click="phone_login1 = false">
            <span class="sr-only">Close</span>
            <XIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="  sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-transparent  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-max">
            <div class="">
                 <a href="#" @click.prevent="phone_login1= false;phone_login2=true ">
                    <img src="/images/login/1.png" alt="">
                 </a>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
    <!-- Login with phone stage 2 -->
    <TransitionRoot as="template" :show="phone_login2">
    <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" @close="phone_login2 = false" :open="phone_login2">
      <div class="flex items-end justify-center min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
          <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" @click="phone_login2 = false">
            <span class="sr-only">Close</span>
            <XIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="  sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-transparent  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-max">
            <div class="">
                 <a href="#" @click.prevent="phone_login2= false;phone_login3=true ">
                    <img src="/images/login/2.png" alt="">
                 </a>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

    <!-- Login with phone stage 3 -->
    <TransitionRoot as="template" :show="phone_login3">
    <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" @close="phone_login3 = false" :open="phone_login3">
      <div class="flex items-end justify-center min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
          <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" @click="phone_login3 = false">
            <span class="sr-only">Close</span>
            <XIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="  sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-transparent  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-max">
            <div class="">
                 <a href="/my-account"  >
                    <img src="/images/login/3.png" alt="">
                 </a>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>


<script>
import { defineComponent, h } from 'vue'
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDownIcon,ArrowDownIcon,CalendarIcon  } from '@heroicons/vue/outline'
import {  ArrowSmUpIcon, MenuAlt1Icon, ClockIcon   } from '@heroicons/vue/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ViewGridAddIcon , XIcon } from '@heroicons/vue/outline'

import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
 
import LoginModal from '@/components/Modals/Login_Modal'
 

 const footerNavigation = {
  account: [
    { name: 'Login / Signup', href: '#' },
 
  ],
  support: [
    { name: 'Contact Us', href: '#' },
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
   
  social: [
    // {
    //   name: 'Facebook',
    //   href: '#',
    //   icon: defineComponent({
    //     render: () =>
    //       h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
    //         h('path', {
    //           'fill-rule': 'evenodd',
    //           d:
    //             'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
    //           'clip-rule': 'evenodd',
    //         }),
    //       ]),
    //   }),
    // },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/cirkol_/',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d:
                'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    
  ],
}
export default {
  components: {
 
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      ChevronDownIcon,
      ArrowSmUpIcon,
      Menu,
      MenuButton,
      MenuItem,
      MenuItems,
      ArrowDownIcon,
      MenuAlt1Icon ,
      Dialog,
      DialogOverlay,
      DialogTitle,
      TransitionChild,
      TransitionRoot,
      ViewGridAddIcon ,
      ClockIcon,
      XIcon,
      CalendarIcon,

      LoginModal
  },
  setup() {
 
    const login = ref(false)
    const phone_login1 = ref(false)
    const phone_login2 = ref(false)
    const phone_login3 = ref(false)
    const loginmodal = ref(false)
    return {
       footerNavigation,
        loginmodal,
       login,
       phone_login1,
       phone_login2,
       phone_login3,
    }
  },
}
</script>