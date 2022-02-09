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
              <div class="w-full mt-5 sm:mt-4 flex">
                  <a href="#" class="w-1/3 mx-2" @click.prevent="doMetaMaskLogin()">
                      <img src="/images/wallet1.jpg" alt="">
                  </a>
                  <a href="#" class="w-1/3 mx-2" @click.prevent="doFortmaticLogin()">
                    <img src="/images/wallet2.jpg"  alt="">
                  </a>
                  <a href="#" class="w-1/3 mx-2" @click.prevent="doPortisLogin()">
                    <img src="/images/wallet3.jpg"  alt="">
                  </a>
              </div>       
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  
</template>



<script>
 import { computed, ref, toRefs, watch } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
  
export default {
  components: {
 
      
      Dialog,
      DialogOverlay,
    
      TransitionChild,
      TransitionRoot,
  
 
    //   XIcon,
 
  },

  props: ['login_modal'],
  setup(props) {
    let { login_modal } = toRefs(props)
    const publicPath =  ref(process.env.BASE_URL);
    const loginmodal =  ref(false);
    const login = ref(false);
    const router = useRouter();
    const store = useStore();
    const currentAddress = computed(() => store.getters['blockchain/getCurrentAddress']);
    const user = computed(() => store.getters['user/getUser']);

    watch(login_modal, (val) => {
      loginmodal.value = val
    })

    const goToMyAccount = () => {
      loginmodal.value = false;
      setTimeout(() => {
        router.push({
        name: user.value.dbRef !== "" ? 'MyAccount' : 'ClientRegister',
        params: {
          address: currentAddress.value
        }
      });
      }, 600);
      
    }

    watch(user, (value) => {
      console.log(value)
    })

    const doFortmaticLogin = async () => {
      login.value = true;
      await store.dispatch('blockchain/new', {type: 'fortmatic'});
      goToMyAccount();
    }

    const doPortisLogin = async () => {
      await store.dispatch('blockchain/new', {type: 'portis'});
      goToMyAccount();
    }

    const doMetaMaskLogin = async () => {
      await store.dispatch('blockchain/new', {type: 'metamask'});
      goToMyAccount();
    }

    return {
      loginmodal,
      publicPath,
      doFortmaticLogin,
      doPortisLogin,
      doMetaMaskLogin,
      login,
      currentAddress,
    }
  },
}
</script>