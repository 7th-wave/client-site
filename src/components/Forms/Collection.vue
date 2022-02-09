<template>
    <form class="space-y-8 divide-y divide-gray-200">
        <div class="space-y-8 divide-y divide-gray-200">
        <div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-6">
                <label for="artist_name" class="block text-sm font-medium text-gray-700">
                Artist Name
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">

                <input type="text" :value="data.artist_name" name="artist_name" id="artist_name" autocomplete="Artist Name" class="flex-1 focus:ring-teal-500 focus:border-teal-500 block w-full min-w-0  rounded-md sm:text-sm border-gray-300" />
                </div>
            </div>
            <div class="sm:col-span-6">
                <label for="bio_title" class="block text-sm font-medium text-gray-700">
                Artist Bio Title
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                <input type="text" :value="data.bio_title" name="artist_name" id="bio_title" autocomplete="Artist Bio Title" class="flex-1 focus:ring-teal-500 focus:border-teal-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300" />
                </div>
            </div>
            <div class="sm:col-span-6">
                <label for="about" class="block text-sm font-medium text-gray-700">
                Artist Bio
                </label>
                <div class="mt-1">
                <textarea id="about" name="about" rows="10" class="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md" :value="data.bio" />
                </div>
            </div>

            <div class="sm:col-span-6">
                <label for="photo" class="block text-sm font-medium text-gray-700">
                Artist Featured Image
                </label>
                <div class="mt-1 lg:flex items-center">
                <span class="h-auto w-48 overflow-hidden bg-gray-100">
                    <img src="/images/art-7.jpg" alt="">
                </span>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div class=" ">
            
            <div class="pt-4">                         
            <fieldset >
                <div>
                <legend class="text-base font-medium text-gray-900">
                    Privacy
                </legend>
                </div>
                <div class="mt-4 space-y-4">
                <div class="flex items-center">
                    <input id="push_everything" name="push_notifications" checked type="radio" class="focus:ring-green-500 h-4 w-4 text-teal-400 border-gray-300" />
                    <label for="push_everything" class="ml-3 block text-sm font-medium text-gray-700">
                    Public access
                    </label>
                </div>
                <div class="flex items-center">
                    <input id="push_email" name="push_notifications" type="radio" class="focus:ring-green-500 h-4 w-4 text-teal-400 border-gray-300" />
                    <label for="push_email" class="ml-3 block text-sm font-medium text-gray-700">
                    Private to you (Draft)
                    </label>
                </div>
                <div class="flex items-center">
                    <input id="push_nothing" name="push_notifications" type="radio" class="focus:ring-green-500 h-4 w-4 text-teal-400 border-gray-300" />
                    <label for="push_nothing" class="ml-3 block text-sm font-medium text-gray-700">
                    Private to
                    </label>
                </div>
                </div>
            </fieldset>
            </div>
            <div class="mt-4  divide-y-8 devide-y divide-gray-300 ">
            <div>
                <a href="#" class="text-teal-400 flex">
                <LinkIcon class="h-4 w-4 mt-1 mr-2 text-teal-400" aria-hidden="true" />
                Copy Link
                </a>
            </div>
            
            </div>
        </div>
        </div>

        <div class="pt-5">
        <div class=" lg:flex justify-end">
            <button type="button" @click="confirm_modal = true" class="bg-white lg:w-auto w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
            DELETE COLLECTION
            </button>
            <button type="submit" class="lg:ml-3 mt-3 lg:mt-0 lg:w-auto w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-400 hover:bg-teal-400 focus:outline-none">
            Save
            </button>
        </div>
    </div>
    </form>
</template>