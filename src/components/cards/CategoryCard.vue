<template>
    <div class=" w-full bg-white rounded-md overflow-hidden shadow-lg">
        <div class=" w-full h-72 cursor-pointer">
            <img class=" w-full h-full object-cover" :src="category.image" alt="">
        </div>
        <div class=" flex flex-col items-start space-y-2 w-full bg-white py-4 px-6">
            <span class=" text-sm font-inter font-medium text-teal-500 cursor-pointer">{{category.items}} items</span>
            <span class=" text-gray-900 text-xl font-semibold font-inter">{{category.name}}</span>
        </div>
    </div>
</template>



<script>
export default {
    props: {
        category: {
            type: Object,
            required: true,
        },
    },
}
</script>