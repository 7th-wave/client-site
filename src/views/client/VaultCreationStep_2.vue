<template>
  <account-layout>
    <div class="xl:hidden">
      <Navbar />
    </div>
    <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="sm:text-4xl text-2xl font-normal">Vault Creation</h1>
    </div>
    <div class="xl:grid xl:grid-cols-7 xl:gap-8 sm:m-auto">
      <div class="sm:col-span-2 hidden xl:block">
        <Menu />
      </div>
      <div
        class="mt-5 md:mt-0 flex flex-col items-start space-y-4 lg:col-span-5 w-full"
      >
        <Step_2 @nextStep="nextStep" />
      </div>
    </div>
  </account-layout>
</template>

<script>
import Menu from "@/components/Layouts/Menu.vue";
import AccountLayout from "../../components/Layouts/AccountLayout.vue";
import Navbar from "@/components/Layouts/Navbar.vue";
import Step_2 from "../../components/Forms/Fractionalization/Step_2.vue";
import { useRouter } from "vue-router";

const steps = [
  {
    id: "1",
    name: "Propose New Vault",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "complete",
  },
  {
    id: "2",
    name: "Approve Vault",
    description: "Cursus semper viverra.",
    href: "#",
    status: "current",
  },
  {
    id: "3",
    name: "Fractionalize",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
];
export default {
  setup() {
    const router = useRouter();
    const nextStep = () => {
      // this.$emit("nextStep");
      router.push({ name: "VaultsCreateStep3" });
    }

    return {
      steps,
      nextStep
    };
  },
  components: {
    Menu,
    Navbar,
    AccountLayout,
    Step_2,
  },
};
</script>

<style scoped></style>
