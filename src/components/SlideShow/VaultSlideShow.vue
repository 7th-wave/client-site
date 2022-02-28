<template>
    <div class=" w-full flex">
        <div class=" flex items-center space-x-4 m-auto">
            <div class=" w-80 h-80 bg-blue-400  bg-opacity-30 relative " v-if="slides.length >= 2">
                <img class="  w-full h-full object-cover opImage" :src="slides[index < slides.length - 1 ? index + 1 : 0 ].image" alt="">
                    <button @click="Next" class="  absolute h-14 w-14 rounded-full  bg-white flex -left-12 top-32 z-10 hover:bg-gray-300 group"><ArrowLeftIcon class="h-5 w-6 m-auto group-hover:text-white" /></button>
            </div>
             <div class=" w-96 h-96 bg-green-400 relative " v-if="slides.length >= 1">
                 <img class=" w-full h-full object-cover" :src="slides[index].image" alt="">
                 <div class=" absolute bottom-3 rounded-full left-28 bg-white shadow-sm py-px px-2 flex items-center space-x-1.5">
                     <span class=" text-gray-500 text-sm font-medium font-inter">{{index + 1}}/{{slides.length}} Assets</span>
                     <span class=" text-gray-900 text-sm font-semibold font-inter">{{slides[index].name}}</span>
                 </div>
            </div>
             <div class=" w-80 h-80 bg-red-400 bg-opacity-30 relative" v-if="slides.length >= 3">
                 <img class=" w-full h-full object-cover opImage" :src="slides[index == 0 ? slides.length - 1 : index - 1].image" alt="">
                 <button @click="Back" class="  absolute h-14 w-14 rounded-full  bg-white flex -right-12 top-32 z-10 hover:bg-gray-300 group"><ArrowRightIcon class="h-5 w-6 m-auto group-hover:text-white" /></button>
            </div>
        </div>
    </div>
</template>


<script>
import {ArrowLeftIcon,ArrowRightIcon} from "@heroicons/vue/solid"
export default {
    data(){
        return {
            index:0,
        }
    },
    props: {
        slides: {
            type: Object,
            required: true,
        },
    },
    components: {
        ArrowLeftIcon,
        ArrowRightIcon,
    },
    methods:{
        Next(){
            this.index = this.index == this.slides.length - 1 ? 0 : this.index + 1
        },
        Back(){
            this.index = this.index == 0 ? this.slides.length - 1 : this.index - 1
        },
    }
}
</script>


<style scoped>
.opImage {
  opacity: 0.3;
}
</style>