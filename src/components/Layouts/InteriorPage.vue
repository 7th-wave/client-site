<template>
  <div class="artist font-inter">
    <div class="relative py-8 sm:py-24 lg:py-8">
      <div class="relative">
        <div
          class="
            text-center
            mx-auto
            max-w-md
            px-4
            sm:max-w-3xl sm:px-6
            lg:px-8 lg:max-w-7xl
          "
        >
          <p
            class="
              mt-8
              text-4xl
              font-inter
              leading-10
              font-medium
              text-black
              tracking-tight
              sm:text-4xl
            "
          >
            <slot name="header"></slot>
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto">
      <slot name="body"></slot>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>