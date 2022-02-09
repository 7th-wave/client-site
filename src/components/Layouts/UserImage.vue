<template>
    <div>
        <img 
            :class="`h-${customHeight} w-${customHeight} rounded-full ${!imageIsLoaded && 'hidden'}`" 
            :src="avatar"
            alt=""
            :id="src"
        />
    </div>
    <div v-if="!imageIsLoaded">
        <span :class="`h-${customHeight} w-${customHeight} rounded-full overflow-hidden bg-gray-100 text-gray-300`">
            <svg
                :class="`h-${customHeight} w-${customHeight} rounded-full overflow-hidden bg-gray-100 text-gray-300`"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>

        </span>
    </div>
</template>
<script>
import { onMounted, ref, toRefs, watch } from '@vue/runtime-core';
import { storage } from '../../firebase/firebase';
export default {
    props: ['src', 'custom_height'],
    setup(props) {

        let { custom_height, src } = toRefs(props)
        
        const avatar = ref('');
        const customHeight = ref(10);
        const imageIsLoaded = ref(false);

        const loadImage = async (src) => {
            return await new Promise((resolve, reject) => {
                let element = document.getElementById(props.src)
                element.onload = () => resolve(element)
                element.onerror = reject;
                imageIsLoaded.value = true
                element.src = src;
            })
        }

        onMounted(async () => {
            var storageRef = storage.ref();
            if(custom_height) {customHeight.value = custom_height.value; }
            const url = await storageRef.child(props.src).getDownloadURL();
            avatar.value = url;
            loadImage(url);
        })

        watch(custom_height, function(val) {
            if(val) customHeight.value = val;
        })
        watch(src, function(val) {
            const storageRef = storage.ref();
            async function getUrl() {
                const url = await storageRef.child(val).getDownloadURL();
                avatar.value = url;
                loadImage(url);
            }
            getUrl()
        })

        return {
            avatar,
            customHeight,
            imageIsLoaded,
            loadImage
        }
    },
}
</script>