<template>
  <div class="artist bg-gray-100 font-inter">
    <div class="relative font-inter py-8 sm:py-8 lg:py-8">
      <div class="relative">
        <div id="firebaseui-auth-container"></div>
      </div>
    </div>
  </div>
</template>
<script>
import * as firebaseui from "firebaseui";
import { onMounted, ref } from "@vue/runtime-core";
import { auth, authObject } from "../../firebase/firebase";
import { useRouter } from "vue-router"; 

export default {
  setup() {
    const ui = ref();

    const router = useRouter();

    const uiConfig = {
      signInSuccessUrl: "/admin/my-account",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        authObject.EmailAuthProvider.PROVIDER_ID,
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: "<your-tos-url>",
      // Privacy policy url/callback.
      privacyPolicyUrl: function() {
        window.location.assign("<your-privacy-policy-url>");
      },
    };

    auth.onAuthStateChanged((user) => {
      if (user) {
        router.push(`/admin/my-account`);
      }
    });

    onMounted(() => {
      ui.value = new firebaseui.auth.AuthUI(auth);
      ui.value.start("#firebaseui-auth-container", uiConfig);
    });

    return {
      ui,
    };
  },
};
</script>
