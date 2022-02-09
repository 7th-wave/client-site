<template>
  <div class="loading" v-if="toggleLoading">
    <!-- <Circle2></Circle2> -->
    <loading 
      v-model:active="toggleLoading"
      :can-cancel="false"
      :is-full-page="false"
    />
    <div class="loading-text">
      {{loadingText}}
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// import { Circle2 } from 'vue-loading-spinner'
export default {
  components: {
    // Circle2
    Loading
  },
  setup() {
    const store = useStore();
    const toggleLoading = computed(
      () => store.getters['NotificationStore/toggleLoading']
    );
    const loadingText = computed(
      () => store.getters['NotificationStore/loadingText']
    );

    return {
      toggleLoading,
      loadingText
    }
  },
}
</script>

<style>
.loading {
  position: fixed;
  top: 0;
  left: 0;

  z-index: 99999;
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f946;
}

.loading-text {
  margin-top: 6rem;
  color: black;
  font-weight: 800;
  z-index: 99999999;
}
</style>