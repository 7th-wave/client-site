<template>
    <div class=" w-full max-h-96 h-full bg-white rounded-md overflow-hidden shadow-lg">
        <div class=" w-full h-72 cursor-pointer relative">
            <slot name="image"/>
            <slot name="badge"/>
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