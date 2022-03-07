<template>
 <div>
   <InteriorPage>
        <template #header>
          ELEMENTS
        </template>
        <template class="relative" #body>
            
          <h1>This is a Heading H1</h1>
          <h2>This is a Heading H2</h2>
          <h3>This is a Heading H3</h3>
          <h4>This is a Heading H4</h4>
          <h5>This is a Heading H5</h5>
          <h6>This is a Heading H6</h6>
          <div class="h-6" />
          <Button @click="makeOffer()" name="Normal Button" custom-class="mr-2" >Default Button</Button>
          <Button @click="makeOffer()" name="Normal Button" btn-style="primary" custom-class="mr-2" >Primary Button</Button>
          <Button @click="makeOffer()" name="Normal Button" btn-style="secondary" custom-class="mr-2">Secondary Button</Button>

          <div class="h-6" />
          <Button @click="makeOffer()" name="Normal Button" custom-class="mr-2" size="tiny">Button Tiny</Button>
          <Button @click="makeOffer()" name="Normal Button" btn-style="primary" custom-class="mr-2" size="small">Button Small</Button>
          <Button @click="makeOffer()" name="Normal Button" btn-style="secondary" custom-class="mr-2" size="medium">Button Medium</Button>
          <Button @click="makeOffer()" name="Normal Button" custom-class="mr-2" >Button Default</Button>
          <Button @click="makeOffer()" name="Normal Button" size="large">Button Large</Button>

          <div class="h-6" />
          <Button @click="makeOffer()" name="Normal Button" custom-class="mr-2">Button Default type</Button>
          <Button @click="makeOffer()" name="Normal Button" btn-style="primary" custom-class="mr-2" type="none">Button None Type</Button>
          <Button @click="makeOffer()" name="Normal Button" btn-style="secondary" custom-class="mr-2" type="full">Button Full Type</Button>
            
        </template>
  </InteriorPage>
 </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import InteriorPage from '../../components/Layouts/InteriorPage.vue'

import api from "../../axios/api";
import Button from '../../components/Layouts/Button.vue';

var reEmail =
  /^([a-zA-Z0-9_\-/.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9/-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/;

export default {
  components: {
    InteriorPage,
    Button,
  },

  setup() {
    const data = ref({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    const store = useStore();

    const isValid = ref(true);
    const validations = ref({
      name: computed(
        () =>
          !isValid.value &&
          data.value.name.trim() == "" &&
          "Full name required."
      ),

      email: computed(
        () =>
          (!isValid.value &&
            data.value.email.trim() == "" &&
            "Email is required.") ||
          (!isValid.value &&
            !reEmail.test(data.value.email.trim()) &&
            "Valid email is required.")
      ),

      phone: computed(
        () =>
          !isValid.value &&
          data.value.phone.trim() == "" &&
          "Phone is required."
      ),

      message: computed(
        () =>
          !isValid.value &&
          data.value.message.trim() == "" &&
          "Full name is required."
      ),
    });

    const onSend = async () => {
      isValid.value = false;
      let pass = true;
      let obj = validations.value;
      for (var property in obj) {
        if (obj[property]) {
          pass = false;
          break;
        }
      }

      if (pass) {
        isValid.value = true;

        try {
          await api
            .post("/contactus", data.value)
            .then(function (response) {
              console.log(response);
              store.dispatch("NotificationStore/setMessage", {
                message: "Success send!",
                type: "success",
              });
            })
            .catch(function (error) {
              console.log(error);
              console.log(error.message);
              store.dispatch("NotificationStore/setMessage", {
                message: error.message,
                type: "error",
              });
              // ..
            });
        } catch (error) {
          store.dispatch("NotificationStore/setMessage", {
            message: error.message,
            type: "error",
          });
          // ..
        }
      } else {
        store.dispatch("NotificationStore/setMessage", {
          message: "Error on invalid fields!",
          type: "error",
        });
      }
    };

    return {
      data,
      validations,
      onSend,
    };
  },
};
</script>
