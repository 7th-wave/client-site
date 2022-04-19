<template>
  <!-- login modal -->
  <TransitionRoot as="template" :show="loginmodal">
    <Dialog as="div" @close="loginmodal = false; $emit('on:close')">
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="min-h-screen pt-4 px-2 pb-20 text-center sm:block sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
            <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <div class="inline-block w-full max-w-4xl align-middle bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-max sm:w-full sm:p-6">
              <div class="w-full mt-5 sm:mt-4 flex" v-if="!showInstallMetamask">
                  <div class="w-1/3 mx-2 text-center">
                    <a href="#" @click.prevent="doMetaMaskLogin()">
                        <img src="/images/wallet1.jpg" class="mb-8" alt="">
                    </a>
                    <a
                      class="text-black" 
                      href="https://metamask.io/download.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Metamask
                    </a>
                  </div>
                  <a href="#" class="w-1/3 mx-2" @click.prevent="doWalletConnectLogin()">
                    <div class="border w-full flex flex-col items-center" style="height: 159px">
                    <walletconnect />
                    </div>
                  </a>
                  <a href="#" class="w-1/3 mx-2" @click.prevent="doFortmaticLogin()">
                    <img src="/images/wallet2.jpg"  alt="">
                  </a>
                  <a href="#" class="w-1/3 mx-2" @click.prevent="doPortisLogin()">
                    <img src="/images/wallet3.jpg"  alt="">
                  </a>
              </div>       
              <div v-else>
                  <img src="/images/wallet1.jpg" class="mb-8" alt="">

                  <p class="text-center">Metamask is not installed, please <a
                      href="https://metamask.io/download.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >download it</a> and create an account</p>

                     <a
                      class="py-3 px-5 border border-primary-400 hover:bg-primary-400 hover:text-white rounded-md block m-auto w-1/4 mt-4 text-center" 
                      href="#"
                      @click.prevent="showWallets" 
                      rel="noopener noreferrer"
                    >
                      Back
                    </a>

              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <RegisterModal :open_modal="open" @on:close="closeModal" />
  
</template>



<script>
import { computed, ref, toRefs, watch } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import RegisterModal from './RegisterModal.vue'
import Walletconnect from '../Icons/Walletconnect.vue'
  
export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    RegisterModal,
    Walletconnect,
  },

  props: ['login_modal'],
  setup(props, {emit}) {
    let { login_modal } = toRefs(props)
    const publicPath =  ref(process.env.BASE_URL);
    const loginmodal =  ref(false);
    const login = ref(false);
    const router = useRouter();
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
        if(user.value.dbRef == "") {
          open.value = true;
        } else {
          router.push({
            name: 'MyAccount',
            params: {
              address: currentAddress.value
            }
          });
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