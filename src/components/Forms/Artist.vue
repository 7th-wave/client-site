<template>
    <form class="space-y-8 divide-y divide-gray-200">
        <div class="space-y-8">
            <div>
                <div class="mt-5 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div class="sm:col-span-6">
                    <label for="collection" class="block text-sm font-medium text-gray-700">
                        Collection
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" :value="data.collection" name="collection" id="collection"  autocomplete="Collection" disabled class="text-gray-500 flex-1 focus:ring-teal-500 focus:border-teal-500 rounded-md block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" />
                    </div>
                    </div>
                    <div class="sm:col-span-6">
                    <label for="title" class="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" :value="data.title" name="title" id="title" autocomplete="Title" disabled class="flex-1 text-gray-500 focus:ring-teal-500 focus:border-teal-500 block w-full min-w-0 rounded-md rounded-none rounded-r-md sm:text-sm border-gray-300" />
                    </div>
                    </div>
                    <div class="sm:col-span-6">
                    <label for="sub_title" class="block text-sm font-medium text-gray-700">
                        Sub Title
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" :value="data.sub_title" name="title" id="sub_title" autocomplete="Sub Title" disabled class="flex-1 text-gray-500 focus:ring-teal-500 focus:border-teal-500 block w-full rounded-md min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" />
                    </div>
                    </div>
                    <div class="sm:col-span-6">
                    <label for="Dimensions" class="block text-sm font-medium text-gray-700">
                        Dimensions
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" :value="data.Dimensions" name="Dimensions" id="Dimensions" autocomplete="Dimensions" disabled class="text-gray-500 flex-1 focus:ring-teal-500 focus:border-teal-500 block rounded-md w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" />
                    </div>
                    </div>
                    <div class="sm:col-span-6">
                    <label for="medium" class="block text-sm font-medium text-gray-700">
                        Medium
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" :value="data.medium" name="Dimensions" id="medium" autocomplete="Medium" disabled class="flex-1 text-gray-500 focus:ring-teal-500 focus:border-teal-500 block w-full rounded-md min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" />
                    </div>
                    </div>
                    <div class="sm:col-span-6">
                    <label for="description" class="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <div class="mt-1">
                        <textarea id="about" name="description" rows="5" disabled class="shadow-sm text-gray-500 focus:ring-teal-500 focus:border-gray-300 rounded-md block w-full sm:text-sm border-gray-300 rounded-md" :value="data.description" />
                    </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="sm:flex justify-between"> 
                    <div>
                         <fieldset >
                            <div>
                                <legend class="text-sm font-medium text-gray-700">
                                Privacy
                                </legend>
                            </div>
                            <div class="mt-4 space-y-4">
                                
                                <div class="flex items-start">
                                <div class="h-5 flex items-center">
                                    <input id="push_everything" name="push_notifications" checked type="radio" class="focus:ring-teal-400 h-4 w-4 text-teal-600 border-gray-300" >
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="push_everything" class="font-medium text-gray-700"> Public access</label>
                                    <p class="text-gray-400">Will display on the website artist list</p>
                                </div>
                                </div>
                                <div class="flex items-start">
                                <div class="h-5 flex items-center">
                                    <input id="push_email" name="push_notifications"  type="radio" class="focus:ring-teal-400 h-4 w-4 text-teal-600 border-gray-300" >
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="push_email" class="font-medium text-gray-700"> Private to you </label>
                                    <p class="text-gray-500">Only you can see this draft collection</p>
                                </div>
                                </div>
                                <div class="flex items-start">
                                <div class="h-5 flex items-center">
                                    <input id="push_nothing" name="push_notifications"  type="radio" class="focus:ring-green-500 h-4 w-4 text-teal-400 border-gray-300" >
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="push_nothing" class="font-medium text-gray-700"> Private to</label>
                                    <p class="text-gray-500">Only people you share link with</p>
                                </div>
                                </div>
                            
                            </div>
                        </fieldset>    
                    </div>                        
                    <div class="m-8 md:m-0 relative">
                        <img src="/images/qrcode.svg" class="bg-white hover:opacity-25 focus:opacity-15 w-full" alt="">    
                        <a href="#" class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-100">
                            <h1 class="text-base bg-gray-600 px-4 py-2  rounded-sm text-white font-medium leading-6 tracking-wider uppercase  ">print / save</h1>
                       
                        </a>

                    </div>                        
                   
                </div>
                <div class="mt-6 border-t pt-8 ">
                    <div>
                    <a :href="data.link" class="text-teal-400 text-sm font-normal  flex">
                    <LinkIcon class="h-4 w-4 mt-1 mr-2 text-teal-400" aria-hidden="true" />
                        HASHNUMBERN...KJNSDFSDFSDF
                    </a>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="pt-8">
            <div class="flex justify-end">
            
            <button type="submit" class="ml-3 w-full lg:w-auto inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-400 hover:bg-teal-600 focus:outline-none ">
                Save
            </button>
            </div>
        </div>
    </form>
</template>

 
<script>
 import {LinkIcon } from '@heroicons/vue/outline'
   
// import { Menu, MenuButton } from '@headlessui/vue'
// @ is an alias to /src

const data = {
    title: 'Cuco',
    collection: 'Mario Sanchez',
    sub_title: 'Origin + NFT',
    Dimensions: '18x11',
    medium: 'Intagalo',
    description: 'This carved painting comes with a NFT proof of ownership on the blockchain',
    imageUrl: '/images/art-3.jpg',
    link: '#',
 }
 
export default {
  components: {
      LinkIcon,
  },
  setup() {
 
    return {
      data
    }
  },
}
</script>
