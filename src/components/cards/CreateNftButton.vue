<template>
    <div class=" w-full h-full bg-white rounded-md overflow-hidden shadow-lg" :class="{'max-h-96': type !== 'vault'}">
        <div class=" w-full  cursor-pointer relative bg-primary-500 flex flex-col items-center justify-center" :class="{'h-72': type !== 'vault', 'h-80': type == 'vault'}">
            <img class="w-24 h-24" src="/images/plus_circle.png" alt="" />
        </div>
        <div class=" flex flex-col items-start space-y-2 w-full bg-white border-t py-4 px-6">
            <slot  name="subtitle"/>
            <slot name="title"/>
        </div>
    </div>
</template>



<script>
export default {
   props: ['type']
}
</script>