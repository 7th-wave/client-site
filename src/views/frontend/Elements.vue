<template>
 <div>
   <InteriorPage>
        <template #header>
          ELEMENTS
        </template>
        <template  #body>
            
          <h1>This is a Heading H1</h1>
          <h2>This is a Heading H2</h2>
          <h3>This is a Heading H3</h3>
          <h4>This is a Heading H4</h4>
          <h5>This is a Heading H5</h5>
          <h6>This is a Heading H6</h6>
          <div class="h-6" />
          <Button @click="makeOffer()" name="Normal Button" custom-class="mr-2" >Default Button</Button>
          <Button @click="makeOffer()" name="Normal Button" btn-style="primary" custom-class="mr-2" >Primary Button</Button>
          <Button @click="makeOffer()" name="Outline Button" btn-style="outlined" custom-class="mr-2">Outline Button</Button>                <Button @click="makeOffer()" name="Normal Button" btn-style="secondary" custom-class="mr-2">Secondary Button</Button>

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

          <div class="h-6" />
          <p>Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. Pellentesque ut massa a arcu aliquam condimentum. Fusce maximus quam in ex pretium laoreet. Donec tristique elit nec diam volutpat, sed pretium enim ullamcorper. Duis a lacus dictum, convallis sem nec, aliquet ex. Proin non neque aliquet, aliquet leo ut, dictum felis. Vestibulum commodo vulputate justo a luctus. Nullam tortor erat, laoreet at enim in, eleifend scelerisque sapien. Nulla tincidunt, urna in sollicitudin tempor, massa erat tempor arcu, et efficitur tellus nisl eget metus. Duis sed nisl tincidunt, pretium neque et, luctus odio. Maecenas fringilla commodo dolor, congue efficitur est maximus a.</p>

          <p>Nam ut est sem. Sed erat diam, porta ut mattis cursus, dignissim eu ex. Vivamus posuere enim in orci tincidunt, vitae faucibus orci malesuada. Suspendisse fermentum consequat volutpat. Morbi condimentum ultricies vestibulum. Sed a venenatis purus. Mauris placerat sem lobortis risus tempus eleifend non eu lacus. Sed eu ornare erat. Aliquam at gravida enim, in dignissim lorem.</p>

          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="
                        shadow-sm
                        focus:ring-indigo-500 focus:border-indigo-500
                        block
                        w-full
                        sm:text-sm
                        border-gray-300
                        rounded-md
                      "
                    />
                  </div>
                </div>
          </div>
            
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
