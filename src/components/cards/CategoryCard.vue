<template>
    <div class=" w-full bg-white rounded-md overflow-hidden shadow-lg">
        <div class=" w-full h-72 cursor-pointer">
            <slot name="image"/>
        </div>
        <div class=" flex flex-col items-start space-y-2 w-full bg-white py-4 px-6">
            <slot  name="subtitle"/>
            <slot name="title"/>
        </div>
    </div>
</template>



<script>
export default {
   
}
</script>