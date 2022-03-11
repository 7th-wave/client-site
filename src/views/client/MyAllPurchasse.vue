<template>
  <div
    class="
      account
      sm:px-8
      py-4
      sm:py-4
      lg:py-16
      relative
      mx-auto
      bg-gray-100
      2xl:max-w-8xl
      w-full
      font-inter
    "
  >
    <div class="lg:hidden">
      <Navbar :type="'customer'" />
    </div>
    <div class="py-0 sm:py-4 md:pb-8 md:pt-4 lg:pt-0 lg:pb-8 text-center">
      <h1 class="text-4xl font-medium">Purchasse History</h1>
    </div>

    <div>
      <div class="lg:grid lg:grid-cols-7 lg:gap-6 rounded-lg">
        <div class="lg:col-span-2">
          <Menu />
        </div>
        <div class="w-full mt-5 md:mt-0 lg:col-span-5 space-y-4">
          <div
            class="
              w-full
              p-4
              rounded-md
              shadow-md
              bg-white
              grid
              sm:grid-cols-6
              gap-2
            "
          >
            <div class="mt-1 relative rounded-md shadow-sm col-span-4">
              <div
                class="
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.55078 2C4.34164 2 2.55078 3.79086 2.55078 6C2.55078 8.20914 4.34164 10 6.55078 10C8.75992 10 10.5508 8.20914 10.5508 6C10.5508 3.79086 8.75992 2 6.55078 2ZM0.550781 6C0.550781 2.68629 3.23707 0 6.55078 0C9.86449 0 12.5508 2.68629 12.5508 6C12.5508 7.29583 12.14 8.49572 11.4415 9.47653L16.2579 14.2929C16.6484 14.6834 16.6484 15.3166 16.2579 15.7071C15.8674 16.0976 15.2342 16.0976 14.8437 15.7071L10.0273 10.8907C9.0465 11.5892 7.84661 12 6.55078 12C3.23707 12 0.550781 9.31371 0.550781 6Z"
                    fill="#9CA3AF"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="Search"
                id="Search"
                class="
                  focus:ring-primary-500 focus:border-primary-500 
                  block
                  w-full
                  pl-10
                  sm:text-sm
                  border-gray-300
                  rounded-md
                "
                placeholder="Search"
              />
            </div>
            <div class="w-full col-span-2">
              <DropDown />
              <!-- <select
                id="location"
                name="location"
                class="
                  mt-1
                  block
                  w-full
                  pl-3
                  pr-10
                  py-2
                  text-base
                  border-gray-300
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  sm:text-sm
                  rounded-md
                "
              >
                <option>Vault Ticker</option>
              </select> -->
            </div>
          </div>
          <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <Purchasse type="NIKE" />
            <Purchasse type="NIKE" />
            <Purchasse type="CVMAN" />
            <Purchasse type="CVMAN" />
            <Purchasse type="NIKE" />
            <Purchasse type="Banksy" />
            <Purchasse type="NIKE" />
            <Purchasse type="NIKE" />
            <Purchasse type="Banksy" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import Menu from "@/components/Layouts/Menu.vue";
import Navbar from "@/components/Layouts/Navbar_mobile.vue";
import Purchasse from "@/components/Drawers/Purchasse.vue";
import DropDown from "@/components/Drawers/DropDown.vue";
// @ is an alias to /src
export default {
  components: {
    Purchasse,
    Menu,
    Navbar,
    DropDown,
  },
  computed: {
    getParams() {
      return this.$route.params.id;
    },
  },
};
</script>
