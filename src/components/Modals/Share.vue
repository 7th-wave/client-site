<template>
  <a class="w-max text-primary-400 cursor-pointer" @click="open = true">
    <span class="sr-only">Share</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
      />
    </svg>
  </a>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      static
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="open = false"
      :open="open"
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
            <div
              class="
                hidden
                sm:block
                absolute
                top-0
                right-0
                pt-4
                pr-4
                focus:outline-none
              "
            >
              <button
                type="button"
                class="bg-white rounded-md text-gray-400 focus:outline-none"
                @click="open = false"
              >
                <span class="sr-only">Close</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-5 sm:mt-4 grid justify-items-center  grid-cols-2">
              <a class="cursor-pointer" href="https://www.facebook.com/The-Gallery-On-Greene-174703195932962" target="_blank" rel="noopener noreferrer">
                <svg
                  class="h-10 w-10"
                  viewBox="0 0 21 20" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M20.5 10C20.5 4.477 16.023 0 10.5 0C4.977 0 0.5 4.477 0.5 10C0.5 14.991 4.157 19.128 8.938 19.878V12.891H6.398V10H8.938V7.797C8.938 5.291 10.43 3.907 12.715 3.907C13.809 3.907 14.953 4.102 14.953 4.102V6.562H13.693C12.45 6.562 12.063 7.333 12.063 8.124V10H14.836L14.393 12.89H12.063V19.878C16.843 19.128 20.5 14.991 20.5 10Z" 
                    fill="#2DD4BF"
                  />
                </svg>
              </a>
              <!-- <a class="cursor-pointer" href="https://www.facebook.com/The-Gallery-On-Greene-174703195932962" target="_blank" rel="noopener noreferrer">
                <svg class="h-10 w-10" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.79 16.2534C14.337 16.2534 18.465 10.0004 18.465 4.5784C18.465 4.4004 18.465 4.2234 18.453 4.0484C19.2562 3.46693 19.9493 2.74701 20.5 1.9224C19.7511 2.2544 18.9566 2.47216 18.143 2.5684C18.9996 2.05546 19.6408 1.24875 19.947 0.298398C19.1417 0.776285 18.2607 1.11313 17.342 1.2944C16.7234 0.636163 15.905 0.200233 15.0136 0.0541031C14.1222 -0.0920265 13.2075 0.0597974 12.4111 0.486067C11.6147 0.912337 10.9811 1.58927 10.6083 2.41206C10.2355 3.23485 10.1444 4.15758 10.349 5.0374C8.71759 4.95564 7.1216 4.53172 5.66465 3.79317C4.20769 3.05461 2.92233 2.01792 1.892 0.750398C1.36732 1.6536 1.20659 2.72282 1.44254 3.74036C1.67848 4.75791 2.29337 5.64728 3.162 6.2274C2.50926 6.2085 1.87063 6.0329 1.3 5.7154V5.7674C1.30039 6.71469 1.6284 7.6327 2.2284 8.36576C2.8284 9.09881 3.66347 9.60179 4.592 9.7894C3.98781 9.95411 3.35389 9.97806 2.739 9.8594C3.00116 10.6749 3.51168 11.388 4.19913 11.899C4.88658 12.41 5.71657 12.6934 6.573 12.7094C5.72212 13.378 4.74779 13.8722 3.70573 14.1639C2.66367 14.4556 1.57432 14.539 0.5 14.4094C2.3766 15.6137 4.56019 16.2525 6.79 16.2494" fill="#2DD4BF"/>
                </svg>
              </a> -->
              <a class="cursor-pointer" href="https://www.instagram.com/thegalleryongreene/" target="_blank" rel="noopener noreferrer">
                <svg class="h-10 w-10" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.815 0C13.245 0 13.599 0.0129999 14.623 0.0599999C15.687 0.109 16.414 0.278 17.05 0.525C17.7175 0.775874 18.3222 1.16936 18.822 1.678C19.3306 2.17777 19.7241 2.7825 19.975 3.45C20.222 4.086 20.391 4.813 20.44 5.877C20.488 6.944 20.5 7.284 20.5 10V10.08C20.5 12.723 20.488 13.067 20.44 14.123C20.391 15.187 20.222 15.914 19.975 16.55C19.7241 17.2175 19.3306 17.8222 18.822 18.322C18.3222 18.8306 17.7175 19.2241 17.05 19.475C16.414 19.722 15.687 19.891 14.623 19.94C13.556 19.988 13.216 20 10.5 20H10.42C7.777 20 7.433 19.988 6.377 19.94C5.313 19.891 4.586 19.722 3.95 19.475C3.2825 19.2241 2.67777 18.8306 2.178 18.322C1.66936 17.8222 1.27587 17.2175 1.025 16.55C0.778 15.914 0.609 15.187 0.56 14.123C0.513 13.099 0.5 12.744 0.5 10.315V9.685C0.5 7.255 0.513 6.901 0.56 5.877C0.609 4.813 0.778 4.086 1.025 3.45C1.27587 2.7825 1.66936 2.17777 2.178 1.678C2.67777 1.16936 3.2825 0.775874 3.95 0.525C4.586 0.278 5.313 0.109 6.377 0.0599999C7.401 0.0129999 7.756 0 10.185 0H10.815ZM10.734 1.802H10.266C7.81 1.802 7.482 1.813 6.459 1.86C5.484 1.905 4.955 2.067 4.602 2.204C4.135 2.386 3.802 2.602 3.452 2.952C3.102 3.302 2.886 3.635 2.704 4.102C2.567 4.455 2.404 4.984 2.36 5.959C2.313 6.982 2.302 7.31 2.302 9.766V10.234C2.302 12.69 2.313 13.018 2.36 14.041C2.405 15.016 2.567 15.545 2.704 15.898C2.886 16.364 3.103 16.698 3.452 17.048C3.802 17.398 4.135 17.614 4.602 17.796C4.955 17.933 5.484 18.096 6.459 18.14C7.513 18.188 7.829 18.198 10.5 18.198H10.58C13.177 18.198 13.497 18.188 14.54 18.14C15.516 18.095 16.045 17.933 16.398 17.796C16.864 17.614 17.198 17.398 17.548 17.048C17.898 16.698 18.114 16.365 18.296 15.898C18.433 15.545 18.596 15.016 18.64 14.041C18.688 12.986 18.698 12.671 18.698 10V9.92C18.698 7.323 18.688 7.003 18.64 5.96C18.595 4.984 18.433 4.455 18.296 4.102C18.1358 3.66757 17.8802 3.2746 17.548 2.952C17.2254 2.61986 16.8324 2.36426 16.398 2.204C16.045 2.067 15.516 1.904 14.541 1.86C13.518 1.813 13.19 1.802 10.734 1.802ZM10.5 4.865C11.1743 4.865 11.8421 4.99782 12.4651 5.25588C13.0881 5.51394 13.6542 5.89218 14.131 6.36901C14.6078 6.84584 14.9861 7.41191 15.2441 8.03492C15.5022 8.65793 15.635 9.32566 15.635 10C15.635 10.6743 15.5022 11.3421 15.2441 11.9651C14.9861 12.5881 14.6078 13.1542 14.131 13.631C13.6542 14.1078 13.0881 14.4861 12.4651 14.7441C11.8421 15.0022 11.1743 15.135 10.5 15.135C9.13811 15.135 7.83201 14.594 6.86901 13.631C5.90601 12.668 5.365 11.3619 5.365 10C5.365 8.63811 5.90601 7.33201 6.86901 6.36901C7.83201 5.40601 9.13811 4.865 10.5 4.865ZM10.5 6.667C9.61603 6.667 8.76827 7.01815 8.14321 7.64321C7.51815 8.26827 7.167 9.11603 7.167 10C7.167 10.884 7.51815 11.7317 8.14321 12.3568C8.76827 12.9818 9.61603 13.333 10.5 13.333C11.384 13.333 12.2317 12.9818 12.8568 12.3568C13.4818 11.7317 13.833 10.884 13.833 10C13.833 9.11603 13.4818 8.26827 12.8568 7.64321C12.2317 7.01815 11.384 6.667 10.5 6.667ZM15.838 3.462C16.1563 3.462 16.4615 3.58843 16.6865 3.81347C16.9116 4.03852 17.038 4.34374 17.038 4.662C17.038 4.98026 16.9116 5.28548 16.6865 5.51053C16.4615 5.73557 16.1563 5.862 15.838 5.862C15.5197 5.862 15.2145 5.73557 14.9895 5.51053C14.7644 5.28548 14.638 4.98026 14.638 4.662C14.638 4.34374 14.7644 4.03852 14.9895 3.81347C15.2145 3.58843 15.5197 3.462 15.838 3.462Z" fill="#2DD4BF"/>
                </svg>
              </a>
            </div>

            <div class="mt-5 sm:mt-4">
              <div>
                <div class="mt-1">
                  <div
                    @click="copy(shareLink)"
                    class="flex py-3 truncate px-4 block w-full shadow-sm border-gray-600 bg-gray-200 rounded-md cursor-pointer" 
                  >
                    <div class="truncate">
                      {{shareLink}}
                    </div>
                    <div>
                      <DocumentDuplicateIcon class="h-7 w-7 text-primary-600"/>
                    </div>
                  </div>
                </div>
                <div :class="['text-center', style]">
                  {{message}}
                </div>
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import { DocumentDuplicateIcon } from "@heroicons/vue/outline"
export default {
  name: 'Share',
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    XIcon,
    DocumentDuplicateIcon
  },
  setup() {
    const open = ref(false)
    const shareLink = ref('link')
    const message = ref('')
    const style = ref('')
    onMounted(() => {
      shareLink.value = window.location.href 
    })

    watch(shareLink, (val) => {
      shareLink.value = val
    })

    const copy = (text) => {
      navigator.clipboard.writeText(text).then(function() {
        message.value = ('Copying to clipboard was successful!');
        style.value = 'text-green-500'

        setTimeout(() => {style.value = ''; message.value = ''}, 1500)
      }, function() {
        message.value = ('Could not copy text');
        style.value = 'text-red-500'
        setTimeout(() => style.value = '', 1500)
      });
    }


    return {
      open,
      shareLink,
      copy,
      message,
      style,
    }
  },
}
</script>