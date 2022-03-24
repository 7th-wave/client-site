<template>
  <div class="space-y-4">
    <Steps :step="steps" />
    <div class="">
      <p class="text-center mb-8 rounded-lg px-4 py-8 bg-white shadow-lg">Choose the NFT(s) to send to a new vault, select your desired fraction type, set your vault’s details, then continue to fractionalize. Once complete, all fractions will appear in your wallet. Be aware, you cannot add to the NFTs in a vault once created. Read our guides for more information.</p>
    </div>
    <div class="flex md:flex-row flex-col space-y-4 md:space-y-0 ">
        <div class="md:w-2/3 w-full md:pr-4">
          <nfts :data="nfts"></nfts>
        </div>
        <div class="md:w-1/3 w-full">
          <fraction-form></fraction-form>
        </div>
    </div>
    <ConfirmDelete ref="deleteModal" @deleteItem="DeleteImage" />
  </div>
</template>



<script>
import Steps from "../../Drawers/Steps.vue";
import ConfirmDelete from "../../Modals/ConfirmDelete.vue";
import Nfts from '../../Shared/Nfts.vue';
import FractionForm from '../FractionForm.vue';
const steps = [
  {
    id: "1",
    name: "Propose New Vault",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "current",
  },
  {
    id: "2",
    name: "Approve Vault",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
  {
    id: "3",
    name: "Fractionalize",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
];

const nfts = [
        {
            name: "Nft1",
            image: "01.png"
        },
        {
            name: "Nft2",
            image: "02.png"
        },
        {
            name: "Nft3",
            image: "03.png"
        },
        {
            name: "Nft4",
            image: "04.png"
        },
        {
            name: "Nft5",
            image: "05.png"
        },
        {
            name: "Nft6",
            image: "06.png"
        }
];
export default {
  setup() {
    return {
      steps,
      nfts,
    };
  },
  components: {
    Steps,
    ConfirmDelete,
    FractionForm,
    Nfts,
  },
  data() {
    return {
      indexDelete: null,
      RemoveImageIndex: null,
      errors: {
        First_name: "",
        Last_name: "",
        Email: "",
        Phone: "",
        Wallet: "",
        Country: "",
        City: "",
        State: "",
        Crypto_wallet: "",
        Trading: "",
      },
      form: {
        First_name: "",
        Last_name: "",
        Email: "",
        Phone: "",
        Wallet: "",
        Country: "",
        City: "",
        State: "",
        Crypto_wallet: "",
        Trading: "",
        assets: [],
      },
    };
  },
  methods: {
    DeleteImage() {
      this.form.assets[this.indexDelete].Images.splice(
        this.RemoveImageIndex,
        1
      );
      this.$refs.deleteModal.open = false
      this.indexDelete = null;
      this.RemoveImageIndex = null;
    },
    clearErrors() {
      this.errors = {
        First_name: "",
        Last_name: "",
        Email: "",
        Phone: "",
        Wallet: "",
        Country: "",
        City: "",
        State: "",
        Crypto_wallet: "",
        Trading: "",
      };
    },

    validateForm() {
      this.clearErrors();
      let formIsValid = true;
      if (this.form.First_name == "") {
        this.errors.First_name = "First name is required";
        formIsValid = false;
      }
      if (this.form.Last_name == "") {
        this.errors.Last_name = "Last name is required";
        formIsValid = false;
      }
      if (this.form.Email == "") {
        this.errors.Email = "Email is required";
        formIsValid = false;
      }
      if (this.form.Phone == "") {
        this.errors.Phone = "Phone is required";
        formIsValid = false;
      }
      if (this.form.Wallet == "") {
        this.errors.Wallet = "Wallet is required";
        formIsValid = false;
      }
      if (this.form.Country == "") {
        this.errors.Country = "Country is required";
        formIsValid = false;
      }
      if (this.form.City == "") {
        this.errors.City = "City is required";
        formIsValid = false;
      }
      if (this.form.State == "") {
        this.errors.State = "State is required";
        formIsValid = false;
      }
      if (this.form.Crypto_wallet == "") {
        this.errors.Crypto_wallet = "Crypto wallet is required";
        formIsValid = false;
      }
      if (this.form.Trading == "") {
        this.errors.Trading = "Trading is required";
        formIsValid = false;
      }

      //validat assets

      this.form.assets.forEach((item) => {
        item.errors = {
          Name: "",
          Valuation: "",
          Description: "",
          Images: "",
        };
        if (item.Name == "") {
          item.errors.Name = "Asset name is required";
          formIsValid = false;
        }
        if (item.Valuation == "") {
          item.errors.Valuation = "Valuation  is required";
          formIsValid = false;
        }
        if (item.Description == "") {
          item.errors.Description = "Description is required";
          formIsValid = false;
        }
        if (item.Images.length == 0) {
          item.errors.Images = "Asset Images is required";
          formIsValid = false;
        }
      });

      return formIsValid;
    },
    AddAssets() {
      this.form.assets.push({
        Name: "",
        Valuation: "",
        Description: "",
        Images: [],
        errors: {
          Name: "",
          Valuation: "",
          Description: "",
          Images: "",
        },
      });
    },
    RemoveAsset(index) {
      this.form.assets.splice(index, 1);
    },
    UploadFile(e, index) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.form.assets[index].Images.push(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    RemoveImage(RemoveImage, index) {
      this.indexDelete = index;
      this.RemoveImageIndex = RemoveImage;
      this.$refs.deleteModal.open = true;
    },
    SubmitForm() {
      // if (this.validateForm()) {
      //   console.log(this.form);
      // }
      this.$emit("nextStep");
    },
  },
};
</script>