<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="loginmodal">
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="loginmodal = false; $emit('on:close')"
    >
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-4
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
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
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
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle sm:max-w-xs  w-full
            "
          >
            <div class="bg-white w-full">
              <div
                class="
                  w-full
                  bg-gray-50
                  flex
                  items-center
                  justify-between
                  py-4
                  px-4
                "
              >
                <span class="text-lg text-gray-900 font-inter"
                  >Connect or create your wallet</span
                >
                <div class="p-1 bg-white rounded-md shadow-sm cursor-pointer" @click="loginmodal = false; $emit('on:close')">
                  <XIcon class="w-5 h-5 text-primary-500" />
                </div>
              </div>
            </div>
            <div class="w-full flex flex-col items-start py-10 px-10 space-y-4">
              <div class=" mx-auto cursor-pointer " style="width:200px;" @click="doMetaMaskLogin()">
              <div class="border-2 border-b-0 rounded-t-md flex py-4 w-full">
                  <div class="m-auto rounded-full border-2 w-16 h-16 flex overflow-hidden flex items-center">
                    <div class="m-auto">
                        <metamask />
                      
                    </div>
                  </div>
                </div>
                <div class="border-2 rounded-b-md flex py-4 w-full">
                  <span
                    class="m-auto text-sm font-inter text-gray-900 font-medium"
                    >
                  <a
                        class="text-black" 
                        href="https://metamask.io/download.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Metamask
                      </a>
                  </span>
                </div>
              </div>
              <div class=" mx-auto cursor-pointer " style="width:200px;" @click="doWalletConnectLogin">
                
                <div class="border-2 border-b-0 rounded-t-md flex py-4 w-full">
                  <div class="m-auto rounded-full border-2 w-16 h-16 flex">
                    <div class="m-auto">
                      <svg
                        width="43"
                        height="27"
                        viewBox="0 0 43 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.87355 5.32744C15.7208 -1.37803 26.8198 -1.37803 33.6758 5.32744L34.4996 6.13352C34.8451 6.47012 34.8451 7.01046 34.4996 7.34706L31.6828 10.1107C31.5145 10.279 31.231 10.279 31.0627 10.1107L29.9289 9.00349C25.1545 4.32649 17.4038 4.32649 12.6293 9.00349L11.4158 10.1905C11.2475 10.3588 10.964 10.3588 10.7957 10.1905L7.97004 7.42678C7.62458 7.09018 7.62458 6.54984 7.97004 6.21324L8.87355 5.32744ZM39.5044 11.032L42.0112 13.4856C42.3566 13.8222 42.3566 14.3626 42.0112 14.6992L30.6996 25.7805C30.3541 26.1171 29.8049 26.1171 29.4594 25.7805L21.4253 17.9146C21.3367 17.8349 21.2038 17.8349 21.1152 17.9146L13.0899 25.7805C12.7445 26.1171 12.1953 26.1171 11.8498 25.7805L0.529359 14.708C0.183899 14.3714 0.183899 13.8311 0.529359 13.4945L3.03616 11.0408C3.38162 10.7042 3.93081 10.7042 4.27627 11.0408L12.3104 18.9067C12.399 18.9864 12.5319 18.9864 12.6205 18.9067L20.6458 11.0408C20.9912 10.7042 21.5404 10.7042 21.8859 11.0408L29.9201 18.9067C30.0086 18.9864 30.1415 18.9864 30.2301 18.9067L38.2642 11.0408C38.6009 10.6954 39.1589 10.6954 39.5044 11.032Z"
                          fill="#3A99FB"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="border-2 rounded-b-md flex py-4 w-full">
                  <span
                    class="m-auto text-sm font-inter text-gray-900 font-medium"
                    > Wallet Connect</span
                  >
                </div>
              </div>
              <div  class=" mx-auto cursor-pointer " style="width:200px;" @click="doFortmaticLogin">
                <div class="border-2 border-b-0 rounded-t-md flex py-4 w-full">
                  <div class="m-auto rounded-full border-2 w-16 h-16 flex">
                    <div class="m-auto">
                      <svg version="1.1" class="w-6 h-6" baseProfile="basic" id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35.9 36.7"
                        xml:space="preserve">
                      <path fill-rule="evenodd" clip-rule="evenodd" fill="#6851FF" d="M17.9,0h9h9v9.2h-9h-9H9v9.2V19v8.6v0.1v9.1H0v-9.1v-0.1V19v-0.6
                        V9.2V0h9H17.9z M26.9,27.5H18v-9.1h17.9v9.5c0,2.4-0.9,4.6-2.5,6.3c-1.6,1.7-3.8,2.6-6.1,2.6h-0.3V27.5z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="border-2 rounded-b-md flex py-4 w-full">
                  <span
                    class="m-auto text-sm font-inter text-gray-900 font-medium"
                    >Fortmatic</span
                  >
                </div>
              </div>
              <div  class=" mx-auto cursor-pointer " style="width:200px;" @click="doPortisLogin">
                <div class="border-2 border-b-0 rounded-t-md flex py-4 w-full">
                  <div class="m-auto rounded-full border-2 w-16 h-16 flex">
                    <div class="m-auto">
                      <svg
                        width="28"
                        height="44"
                        viewBox="0 0 28 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.456543 25.1855L1.47913 24.7439L14.0006 19.2562L27.5447 25.1855L22.4526 35.7824L10.0146 37.5486L0.665234 27.3721L0.456543 25.1855Z"
                          fill="#133444"
                        />
                        <path
                          d="M24.727 18.6673C22.4928 15.9548 19.3258 14.1905 15.8576 13.7263C15.7741 13.7263 15.7115 13.7053 15.628 13.7053C14.5465 13.5791 13.454 13.5791 12.3725 13.7053C12.289 13.7053 12.2264 13.7263 12.1429 13.7263C8.67475 14.1905 5.50773 15.9548 3.27352 18.6673L2.71006 19.6135L1.77095 21.1904L1.08226 22.3469C1.07704 22.3785 1.0625 22.4078 1.04053 22.431V22.452L2.5431 23.3561L12.1429 29.0751L14.0003 30.1684V16.5017L12.1429 17.3427V15.3032L14.0003 14.4622L15.8576 15.3032L25.2905 19.6135L24.727 18.6673Z"
                          fill="#C42370"
                        />
                        <path
                          d="M27.9616 28.5915C27.9481 30.8022 27.4512 32.9827 26.5062 34.9778C25.5611 36.9729 24.1912 38.7336 22.4939 40.1347C21.1827 41.2116 19.6916 42.0446 18.0905 42.5947C16.7786 43.0375 15.4046 43.2647 14.021 43.2675C6.29944 43.2675 0.0595703 36.35 0.0595703 28.5915C0.0620394 27.4434 0.202182 26.2997 0.476953 25.1854L14.021 33.2592L27.5651 25.1854C27.8228 26.3023 27.9558 27.4448 27.9616 28.5915Z"
                          fill="#1C4D6B"
                        />
                        <path
                          d="M12.3724 13.6844L14.0002 14.4413L12.1428 15.2823V13.6003L12.3724 13.6844Z"
                          fill="black"
                        />
                        <path
                          d="M12.1428 17.3429L14.0002 16.4808V30.1475L12.1428 29.0542V17.3429Z"
                          fill="black"
                        />
                        <path
                          d="M14 16.4808V30.1475L26.9806 22.4311L14 16.4808Z"
                          fill="#1D4259"
                        />
                        <path
                          d="M14 0.732422V16.4807L26.9806 22.431L14 0.732422Z"
                          fill="#4B6B9A"
                        />
                        <path
                          d="M14.0002 16.4808V30.1476L12.1429 29.0542L1.04053 22.4311C1.04575 22.3995 1.06029 22.3702 1.08226 22.347L2.71006 19.6347L12.1429 15.3244V17.3849L14.0002 16.4808Z"
                          fill="#343535"
                        />
                        <path
                          d="M13.9999 16.4808V30.1475L12.1425 29.0542L1.04016 22.4311H1.01929L1.04016 22.4101L12.1425 17.3429L13.9999 16.4808Z"
                          fill="#3E5578"
                        />
                        <path
                          d="M13.9999 0.732422V16.4807L1.01929 22.431L13.9999 0.732422Z"
                          fill="#6DB2D8"
                        />
                        <path
                          d="M8.74146 42.1531C8.92928 42.2372 9.13797 42.3213 9.32579 42.4054C9.13797 42.3213 8.95015 42.2372 8.74146 42.1531Z"
                          fill="#335F8A"
                        />
                        <path
                          d="M9.32593 42.3844C9.52314 42.4671 9.72526 42.5373 9.93113 42.5947C9.72244 42.5316 9.53462 42.4685 9.32593 42.3844Z"
                          fill="#335F8A"
                        />
                        <path
                          d="M10.4524 42.7628C10.6193 42.8049 10.7654 42.8469 10.9115 42.889L10.4524 42.7628Z"
                          fill="#335F8A"
                        />
                        <path
                          d="M0.456201 25.1854L14.0003 33.2593C13.821 34.4869 13.4916 35.6875 13.0194 36.8336C11.9342 39.4829 9.74296 42.2583 5.50653 40.1347C3.80531 38.7325 2.43292 36.9686 1.48765 34.9693C0.542375 32.9701 0.0476195 30.785 0.0388184 28.5705C0.0425792 27.4293 0.182715 26.2928 0.456201 25.1854Z"
                          fill="#6DB2D8"
                        />
                        <path
                          d="M22.4521 40.1558C22.3686 40.2188 22.4521 40.1558 22.1808 40.387L22.0556 40.4711L21.8677 40.5973L21.6382 40.7655C21.8677 40.5973 21.4504 40.8917 21.3669 40.9547C21.2874 40.999 21.2108 41.0481 21.1373 41.1019L20.9912 41.207C20.9391 41.237 20.8902 41.2722 20.8452 41.3122C20.8452 41.3122 20.7825 41.3753 20.7617 41.3753C20.8452 41.3122 20.6573 41.4173 20.5739 41.4804C20.4792 41.5212 20.3884 41.5704 20.3026 41.6276L20.0104 41.7747L19.8852 41.8378C19.8017 41.8799 19.8434 41.8378 19.76 41.9009C19.6765 41.964 19.5721 41.985 19.4678 42.0481C19.3634 42.1112 19.4678 42.0481 19.113 42.2163C19.4678 42.0481 19.113 42.2163 18.9252 42.3004C19.113 42.2163 18.5913 42.4265 18.3617 42.5106C18.2783 42.5317 17.8191 42.6788 17.7357 42.6999C17.6522 42.7209 17.5478 42.763 17.4644 42.784C17.2974 42.826 17.1513 42.8681 17.0052 42.9101C16.9426 42.9312 16.88 42.9312 16.8383 42.9522L16.7339 42.9732L16.4835 43.0363C16.4 43.0573 16.3374 43.0573 16.2539 43.0783C16.1705 43.0994 16.1079 43.0994 16.0453 43.1204C15.9826 43.1414 15.8783 43.1414 15.8157 43.1624C15.7795 43.157 15.7426 43.1644 15.7113 43.1835L15.5444 43.2045H15.4609C15.3983 43.2045 15.3357 43.2255 15.2731 43.2255C15.2105 43.2255 15.1061 43.2465 15.0227 43.2465H12.894C12.8105 43.2465 12.7271 43.2255 12.6436 43.2255C12.5803 43.2289 12.5168 43.2218 12.4558 43.2045H12.3723C12.3097 43.2045 12.2471 43.1835 12.2053 43.1835C12.1692 43.189 12.1323 43.1815 12.101 43.1624C12.0228 43.1606 11.9453 43.1464 11.8714 43.1204C11.8 43.1185 11.7294 43.1043 11.6627 43.0783C11.6001 43.0573 11.5167 43.0573 11.4332 43.0363L11.1827 42.9732L11.0784 42.9522C11.0203 42.9508 10.9633 42.9364 10.9114 42.9101C10.7445 42.8681 10.5984 42.826 10.4523 42.784L10.181 42.6999C10.0947 42.6814 10.0107 42.6532 9.9306 42.6158C9.72191 42.5527 9.53409 42.4686 9.32539 42.4055C9.1167 42.3424 8.92888 42.2373 8.74106 42.1532C8.65759 42.1112 8.55324 42.0691 8.4489 42.0271C8.34751 41.9865 8.24976 41.9373 8.15672 41.8799C8.06211 41.8391 7.97132 41.7898 7.88543 41.7327C7.80195 41.6906 7.69761 41.6276 7.61413 41.5855C7.54017 41.5513 7.47019 41.509 7.40544 41.4594C7.19675 41.3332 7.07153 41.2491 7.19675 41.3332L7.07153 41.2491L6.84197 41.1019L6.7585 41.0599L6.5498 40.9127C6.46633 40.8496 6.38285 40.8076 6.29937 40.7445C6.2159 40.6814 6.11155 40.6183 6.02808 40.5552C5.9446 40.4922 5.86112 40.4081 5.79851 40.366L5.71504 40.3029C5.64148 40.2521 5.57173 40.1959 5.50635 40.1347C9.74278 42.2583 11.9132 39.4409 12.9984 36.8127C13.4584 35.6624 13.7875 34.4633 13.9792 33.2383C14.1584 34.4796 14.4878 35.6941 14.9601 36.8547C16.087 39.4619 18.2156 42.2583 22.4521 40.1558Z"
                          fill="#529BBA"
                        />
                        <path
                          d="M17.0891 42.889C17.2561 42.8469 17.4021 42.8049 17.5482 42.7628L17.0891 42.889Z"
                          fill="#335F8A"
                        />
                        <path
                          d="M18.0701 42.5947C18.2788 42.5316 18.4666 42.4685 18.6753 42.3844C18.4666 42.4685 18.2788 42.5316 18.0701 42.5947Z"
                          fill="#335F8A"
                        />
                        <path
                          d="M18.6333 42.4055C18.8211 42.3214 19.0716 42.2373 19.2594 42.1321C19.0507 42.2373 18.8211 42.3214 18.6333 42.4055Z"
                          fill="#335F8A"
                        />
                        <path
                          d="M27.9615 28.5915C27.948 30.8022 27.4511 32.9827 26.506 34.9778C25.561 36.9729 24.191 38.7336 22.4937 40.1347C18.2573 42.2583 16.066 39.4618 14.9809 36.8336C14.5208 35.6834 14.1918 34.4842 14 33.2593L27.5441 25.1854C27.8188 26.2997 27.959 27.4434 27.9615 28.5915Z"
                          fill="#4B6B9A"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="border-2 rounded-b-md flex py-4 w-full">
                  <span
                    class="m-auto text-sm font-inter text-gray-900 font-medium"
                    >Portis Wallet</span
                  >
                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>

  <RegisterModal :open_modal="open" @on:close="closeModal" />

</template>

<script>
import { computed, ref, toRefs, watch } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XIcon } from "@heroicons/vue/solid";

//import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import RegisterModal from './RegisterModal.vue'
import Metamask from '../Icons/Metamask.vue';
  
export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    RegisterModal,
    XIcon,
    Metamask
  },

  props: ['login_modal'],
  setup(props, {emit}) {
    let { login_modal } = toRefs(props)
    const publicPath =  ref(process.env.BASE_URL);
    const loginmodal =  ref(false);
    const login = ref(false);
    //const router = useRouter();
    const store = useStore();
    const currentAddress = computed(() => store.getters['blockchain/getCurrentAddress']);
    const user = computed(() => store.getters['user/getUser']);

    const open = ref(false);
    const showInstallMetamask = ref(false);

    watch(login_modal, (val) => {
      console.log(val);
      loginmodal.value = val
    })

   

    const closeModal = () => {
      open.value = false;
      loginmodal.value = false;
      emit('on:close')
    }

    const goToMyAccount = () => {
      loginmodal.value = false;
      emit('on:close')
      setTimeout(() => {
        if(!user.value.dbRef) {
          open.value = true;
        }
      }, 600);
      
    }

    watch(user, (value) => {
      console.log(value)
    })

    const doFortmaticLogin = async () => {
      login.value = true;
      try {
        await store.dispatch('blockchain/new', {type: 'fortmatic'});
        goToMyAccount();
      } catch(error) {
        console.log(error)
      }
    }

    const doWalletConnectLogin = async () => {
      login.value = true;
      try {
        await store.dispatch('blockchain/new', {type: 'walletconnect'});
        emit('on:walletconnect');
        goToMyAccount();
      } catch(error) {
        console.log(error)
      }
    }

    const doPortisLogin = async () => {
      try {
        await store.dispatch('blockchain/new', {type: 'portis'});
        goToMyAccount();
      } catch(error) {
        console.log(error)
      }
    }

    const doMetaMaskLogin = async () => {
      await store.dispatch('blockchain/new', {type: 'metamask'});
      emit('on:metamask');
      if (currentAddress.value) {
        goToMyAccount();
      } else {
        showInstallMetamask.value = true;
      }
    }

    const showWallets = () => {
      showInstallMetamask.value = false;
    }

    return {
      loginmodal,
      publicPath,
      doFortmaticLogin,
      doPortisLogin,
      doMetaMaskLogin,
      doWalletConnectLogin,
      closeModal,
      login,
      currentAddress,
      open,
      showInstallMetamask,
      showWallets
    }
  },
}
</script>