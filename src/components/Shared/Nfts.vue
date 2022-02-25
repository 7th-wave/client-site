<template>
    <div class="grid grid-cols-2 gap-4">
        <div class="col-span-1" v-for="(item, key) of data" :key="key">
            <nft :nft="item"></nft>
        </div>
    </div>
</template>
<script>
import Nft from './Nft.vue'
export default {
  components: { Nft },
    props: ['data'],
    setup() {
        
    },
}
</script>