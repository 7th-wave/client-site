<template>
    <div class="rounded-xl overflow-hidden">
        <img :src="'/images/sneakers/'+nft.image" />
    </div>
</template>
<script>
export default {
    props: ['nft'],
    setup() {
        
        return {

        }
    },
}
</script>