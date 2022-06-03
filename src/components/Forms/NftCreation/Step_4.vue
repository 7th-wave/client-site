<template>
    <div class="space-y-4 w-full font-inter">
        <Steps :step="steps" />
        <div class="w-full bg-white rounded-md py-4 px-2">
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label
                        for="Title"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Title
                    </label>
                    <div class="mt-1">
                        <input
                            v-model="form.title"
                            type="text"
                            name="Title"
                            id="Title"
                            autocomplete="Title"
                            class="
                                shadow-sm
                                focus:ring-primary-500 focus:border-primary-500
                                block
                                w-full
                                sm:text-sm
                                border-gray-300
                                rounded-md
                            "
                        />
                    </div>
                    <div class="pt-1">
                        <span
                            v-if="errors.title"
                            class="text-red-600 font-inter text-sm font-normal"
                            >{{ errors.title }}</span
                        >
                    </div>
                </div>

                <div class="sm:col-span-3">
                    <label
                        for="Sub-Title"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Sub Title
                    </label>
                    <div class="mt-1">
                        <input
                            v-model="form.subtitle"
                            type="text"
                            name="Sub-Title"
                            id="Sub-Title"
                            autocomplete="Sub-Title"
                            class="
                                shadow-sm
                                focus:ring-primary-500 focus:border-primary-500
                                block
                                w-full
                                sm:text-sm
                                border-gray-300
                                rounded-md
                            "
                        />
                    </div>
                    <div class="pt-1">
                        <span
                            v-if="errors.subtitle"
                            class="text-red-600 font-inter text-sm font-normal"
                            >{{ errors.subtitle }}</span
                        >
                    </div>
                </div>
                <div class="sm:col-span-6">
                    <label
                        for="comment"
                        class="block text-sm font-medium text-gray-700"
                        >Description</label
                    >
                    <div class="mt-1">
                        <textarea
                            v-model="form.description"
                            rows="4"
                            name="comment"
                            id="comment"
                            class="
                                shadow-sm
                                focus:ring-primary-500 focus:border-primary-500
                                block
                                w-full
                                sm:text-sm
                                border-gray-300
                                rounded-md
                            "
                        />
                    </div>
                    <div class="pt-1">
                        <span
                            v-if="errors.description"
                            class="text-red-600 font-inter text-sm font-normal"
                            >{{ errors.description }}</span
                        >
                    </div>
                </div>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-1" v-if="hasMedia">
                    <label
                        for="img"
                        class="block text-sm font-medium text-gray-700"
                    >
                        Main NFT Media
                    </label>
                    <div class="rounded-md overflow-hidden mt-1 h-36">
                        <img
                            :src="img"
                            class="w-full h-full object-cover"
                            alt=""
                        />
                    </div>
                </div>
                <div class="sm:col-span-3" v-if="!hasMedia">
                    <div v-bind="getRootProps()">
                        <div
                            class="
                                sm:mt-6
                                border-2 border-dashed
                                rounded-md
                                px-6
                                pt-5
                                pb-6
                                flex
                                justify-center
                            "
                            :class="{
                                'border-primary-300': isDragActive,
                                'border-gray-300': !isDragActive,
                            }"
                        >
                            <div class="space-y-1 text-center">
                                <svg
                                    class="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <div class="flex text-sm text-gray-600">
                                    <label
                                        for="file-upload"
                                        class="
                                            relative
                                            cursor-pointer
                                            bg-white
                                            rounded-md
                                            font-medium
                                            text-primary-500
                                            hover:text-primary-500
                                            focus-within:outline-none
                                            focus-within:ring-2
                                            focus-within:ring-offset-2
                                            focus-within:ring-primary-500
                                        "
                                    >
                                        <span>Upload a file</span>
                                        <input
                                            id="file-upload"
                                            name="file-upload"
                                            type="file"
                                            class="sr-only"
                                            v-bind="getInputProps()"
                                        />
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
                <div class="sm:col-span-3 space-y-4">
                    <div>
                        <label
                            for="location"
                            class="block text-sm font-medium text-gray-700"
                            >Collection</label
                        >
                        <select
                            v-model="form.collection"
                            id="location"
                            name="location"
                            class="
                                mt-1
                                block
                                w-full
                                pl-3
                                pr-10
                                py-2
                                text-base
                                border-gray-300
                                focus:outline-none
                                focus:ring-primary-500
                                focus:border-primary-500
                                sm:text-sm
                                rounded-md
                            "
                        >
                            <option
                                v-for="(category, index) in categories"
                                :key="index"
                                :value="category.dbRef"
                            >
                                {{ category.name }}
                            </option>
                        </select>
                        <div class="pt-1">
                            <span
                                v-if="errors.collection"
                                class="
                                    text-red-600
                                    font-inter
                                    text-sm
                                    font-normal
                                "
                                >{{ errors.collection }}</span
                            >
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div>
                <div class="space-y-4 pt-4 w-full">
                    <div
                        class="w-full rounded-md py-2 px-4 bg-gray-100"
                        v-for="(attribute, index, key) in form.attributes"
                        :key="key"
                    >
                        <div class="w-full flex items-center justify-between">
                            <span class="text-base text-gray-700 font-medium"
                                >Atribute #{{ index + 1 }}</span
                            >
                            <div
                                @click="RemoveAttibute(index)"
                                class="cursor-pointer"
                            >
                                <IconClose />
                            </div>
                        </div>
                        <div
                            class="
                                mt-6
                                grid grid-cols-1
                                gap-y-6 gap-x-4
                                sm:grid-cols-6
                            "
                        >
                            <div class="sm:col-span-3">
                                <label
                                    for="Name"
                                    class="
                                        block
                                        text-sm
                                        font-medium
                                        text-gray-700
                                    "
                                >
                                    Name
                                </label>
                                <div class="mt-1">
                                    <input
                                        v-model="attribute.name"
                                        type="text"
                                        name="Name"
                                        id="Name"
                                        autocomplete="given-name"
                                        class="
                                            shadow-sm
                                            focus:ring-primary-500
                                            focus:border-primary-500
                                            block
                                            w-full
                                            sm:text-sm
                                            border-gray-300
                                            rounded-md
                                        "
                                    />
                                </div>
                                <span
                                    v-if="attribute.errors.name"
                                    class="
                                        text-red-600
                                        font-inter
                                        text-sm
                                        font-normal
                                    "
                                    >{{ attribute.errors.name }}</span
                                >
                            </div>

                            <div class="sm:col-span-3">
                                <label
                                    for="Value"
                                    class="
                                        block
                                        text-sm
                                        font-medium
                                        text-gray-700
                                    "
                                >
                                    Value
                                </label>
                                <div class="mt-1">
                                    <input
                                        v-model="attribute.value"
                                        type="text"
                                        name="Value"
                                        id="Value"
                                        autocomplete="Value"
                                        class="
                                            shadow-sm
                                            focus:ring-primary-500
                                            focus:border-primary-500
                                            block
                                            w-full
                                            sm:text-sm
                                            border-gray-300
                                            rounded-md
                                        "
                                    />
                                </div>
                                <span
                                    v-if="attribute.errors.value"
                                    class="
                                        text-red-600
                                        font-inter
                                        text-sm
                                        font-normal
                                    "
                                    >{{ attribute.errors.value }}</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-14">
                    <button
                        @click="AddAttributes"
                        class="
                            flex
                            items-center
                            space-x-2
                            bg-gray-100
                            py-2
                            px-6
                            rounded-md
                            float-right
                        "
                    >
                        <span>ADD ATTRIBUTE</span>
                        <span
                            ><svg
                                width="33"
                                height="33"
                                viewBox="0 0 33 33"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M16.5557 32.6411C25.3922 32.6411 32.5556 25.4777 32.5556 16.6411C32.5556 7.80456 25.3922 0.641113 16.5557 0.641113C7.7191 0.641113 0.555664 7.80456 0.555664 16.6411C0.555664 25.4777 7.7191 32.6411 16.5557 32.6411ZM18.5557 10.6411C18.5557 9.53654 17.6602 8.64111 16.5557 8.64111C15.4511 8.64111 14.5557 9.53654 14.5557 10.6411V14.6411H10.5557C9.45109 14.6411 8.55566 15.5365 8.55566 16.6411C8.55566 17.7457 9.45109 18.6411 10.5557 18.6411H14.5557V22.6411C14.5557 23.7457 15.4511 24.6411 16.5557 24.6411C17.6602 24.6411 18.5557 23.7457 18.5557 22.6411V18.6411H22.5556C23.6602 18.6411 24.5556 17.7457 24.5556 16.6411C24.5556 15.5365 23.6602 14.6411 22.5556 14.6411H18.5557V10.6411Z"
                                    fill="black"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div class="w-full py-8">
                <div class="w-full bg-gray-200 h-px"></div>
            </div>
            <div class="grid lg:grid-cols-6 gap-8 pt-4">
                <div
                    class="sm:col-span-2 flex items-start space-x-16"
                    v-if="form.qrCodeImage"
                >
                    <div class="w-full space-y-2">
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <span
                                class="
                                    inline-flex
                                    items-center
                                    px-3
                                    rounded-l-md
                                    border border-r-0 border-gray-300
                                    bg-gray-50
                                    text-gray-500
                                    sm:text-sm
                                "
                            >
                                QR SHA
                            </span>
                            <input
                                value="0x648C......ECA32F3C"
                                type="text"
                                name="asset_launch"
                                id="asset_launch"
                                autocomplete="asset_launch"
                                class="
                                    flex-1
                                    text-primary-500
                                    focus:ring-primary-500
                                    focus:border-primary-500
                                    block
                                    w-full
                                    min-w-0
                                    rounded-none rounded-r-md
                                    sm:text-sm
                                    border-gray-300
                                "
                            />
                        </div>
                        <div
                            class="
                                w-full
                                h-60
                                rounded-md
                                overflow-hidden
                                border
                                py-4
                                px-2
                            "
                            v-if="form.qrCodeImage"
                        >
                            <img
                                class="w-full h-full object-cover"
                                :src="form.qrCodeImage"
                                alt=""
                            />
                        </div>
                        <button
                            class="
                                text-sm text-gray-700
                                font-medium
                                border
                                w-full
                                py-2.5
                                rounded-md
                            "
                        >
                            PRINT
                        </button>
                    </div>
                    <div class="h-full w-px bg-gray-200 hidden lg:block"></div>
                </div>
                <div class="sm:col-span-4 space-y-2">
                    <div class="sm:pb-10">
                        <span class="text-base text-gray-700 font-medium"
                            >NFT Privacy</span
                        >
                    </div>
                    <fieldset>
                        <legend class="sr-only">Settings</legend>
                        <div class="space-y-5">
                            <div class="relative flex items-start">
                                <div class="flex items-center h-5">
                                    <input
                                        v-model="form.access"
                                        id="small"
                                        aria-describedby="small-description"
                                        name="plan"
                                        type="radio"
                                        class="
                                            focus:ring-gray-800
                                            h-4
                                            w-4
                                            text-black
                                            border-gray-300
                                        "
                                    />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label
                                        for="small"
                                        class="font-medium text-gray-700"
                                        >Public access</label
                                    >
                                    <p
                                        id="small-description"
                                        class="text-gray-500"
                                    >
                                        Will display on the website artist list
                                    </p>
                                </div>
                            </div>

                            <div class="relative flex items-start">
                                <div class="flex items-center h-5">
                                    <input
                                        v-model="form.access"
                                        id="medium"
                                        aria-describedby="medium-description"
                                        name="plan"
                                        type="radio"
                                        class="
                                            focus:ring-gray-800
                                            h-4
                                            w-4
                                            text-black
                                            border-gray-300
                                        "
                                    />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label
                                        for="medium"
                                        class="font-medium text-gray-700"
                                        >Private to you</label
                                    >
                                    <p
                                        id="medium-description"
                                        class="text-gray-500"
                                    >
                                        Only you can see this draft collection
                                    </p>
                                </div>
                            </div>

                            <div class="relative flex items-start">
                                <div class="flex items-center h-5">
                                    <input
                                        v-model="form.access"
                                        id="large"
                                        aria-describedby="large-description"
                                        name="plan"
                                        type="radio"
                                        class="
                                            focus:ring-gray-800
                                            h-4
                                            w-4
                                            text-black
                                            border-gray-300
                                        "
                                    />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label
                                        for="large"
                                        class="font-medium text-gray-700"
                                        >Private to
                                    </label>
                                    <p
                                        id="large-description"
                                        class="text-gray-500"
                                    >
                                        Only people you share link with
                                    </p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div class="pt-1">
                        <span
                            v-if="errors.access"
                            class="text-red-600 font-inter text-sm font-normal"
                            >{{ errors.access }}</span
                        >
                    </div>
                    <div class="sm:pt-10">
                        <div class="mt-1 flex rounded-md shadow-sm">
                            <span
                                class="
                                    inline-flex
                                    items-center
                                    px-3
                                    rounded-l-md
                                    border border-r-0 border-gray-300
                                    bg-gray-50
                                    text-gray-500
                                    sm:text-sm
                                "
                            >
                                VAULT
                            </span>
                            <input
                                v-model="form.url"
                                disabled="disabled"
                                type="text"
                                name="company-website"
                                id="company-website"
                                class="
                                    flex-1
                                    min-w-0
                                    block
                                    w-full
                                    px-3
                                    py-2
                                    rounded-none rounded-r-md
                                    focus:ring-primary-500
                                    focus:border-primary-500
                                    sm:text-sm
                                    border-gray-300
                                "
                                placeholder="http://"
                            />
                        </div>
                        <div class="pt-1">
                            <span
                                v-if="errors.url"
                                class="
                                    text-red-600
                                    font-inter
                                    text-sm
                                    font-normal
                                "
                                >{{ errors.url }}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-10">
                <hr />
            </div>
            <div class="py-14">
                <button
                    @click="addNft"
                    class="
                        text-base text-white
                        font-medium
                        bg-black
                        py-2
                        px-20
                        rounded-md
                        float-right
                    "
                >
                    SAVE
                </button>
            </div>
        </div>
        <ConfirmDelete :show="showDeleteModal" @deleteItem="DeleteAttr" />
    </div>
</template>

<script>
// import Feed from '../../Drawers/Feed.vue'
import { computed, onMounted, reactive, ref, toRefs } from 'vue'
import Steps from '../../Drawers/Steps.vue'
import IconClose from '../../Icons/IconCloseBlack.vue'
import ConfirmDelete from '../../Modals/ConfirmDelete.vue'
import { useDropzone } from 'vue3-dropzone'
import { pinFile, pinJson } from '../../../blockchain'
import { getCategories, storage } from '../../../firebase/firebase'
import { updateNft, getNft } from '../../../firebase/nfts'
import { useStore } from 'vuex'
import QRCode from 'qrcode'
import router from '../../../router'
//import MoralisFactory from '../../../moralis';

const steps = [
    {
        id: '1',
        name: 'Mint New Asset',
        description: 'Vitae sed mi luctus laoreet.',
        href: '#',
        status: 'current',
    },
    {
        id: '2',
        name: 'Mint your NFT',
        description: 'Penatibus eu quis ante.',
        href: '#',
        status: 'upcoming',
    },
    {
        id: '3',
        name: 'Fractionalize',
        description: 'Penatibus eu quis ante.',
        href: '/fractionalize',
        status: 'upcoming',
    },
]

export default {
  props: ['dbref'],
    setup(props, { emit }) {
        const store = useStore()
        //const moralisInstance = MoralisFactory.getInstance();

        const options = reactive({
            multiple: false,
            onDrop,
        })

        const { dbref } = toRefs(props);

        const { getRootProps, getInputProps, ...rest } = useDropzone(options)
        const img = ref()
        const admin = computed(() => store.getters['admin/getAdmin'])

        const categories = ref([])
        const owners = ref([])

        const form = ref({
            title: '',
            collection: '',
            sub_title: '',
            description: '',
            imageUrl: '',
            link: '',
            qrCodeImage: '',
            ipfs: '',
            metadataIpfs: '',
            isMinted: false,
            blockchainId: 0,
            blockChainOwner: '',
            transactionHash: '',
            auctions: [],
            offers: [],
            sales: [],
            attributes: [],
        })

        const errors = ref({
            title: '',
            collection: '',
            sub_title: '',
            description: '',
            imageUrl: '',
        })

        const qrsha = ref()

        const showDeleteModal = ref(false)

        const AttrIndex = ref()
        const hasMedia = ref(false)

        const fractionalize = () => {
            //router.push("/fractionalize");
            emit('fractionalize')
        }

        const AddAttributes = () => {
            form.value.attributes.push({
                name: '',
                value: '',
                errors: {
                    name: '',
                    value: '',
                },
            })
        }

        const RemoveAttibute = (index) => {
            AttrIndex.value = index
            showDeleteModal.value = true
        }

        const DeleteAttr = () => {
            form.value.attributes.splice(AttrIndex.value, 1)
            AttrIndex.value = null
            showDeleteModal.value = false
        }

        const validateForm = () => {
            clearErrors()
            let formIsValid = true
            if (form.value.title == '') {
                errors.value.title = 'Title is required'
                formIsValid = false
            }
            if (form.value.subtitle == '') {
                errors.value.subtitle = 'Subtitle is required'
                formIsValid = false
            }
            if (form.value.description == '') {
                errors.value.description = 'Description is required'
                formIsValid = false
            }
            if (form.value.image == '') {
                errors.value.image = 'Image is required'
                formIsValid = false
            }
            if (form.value.collection == '') {
                errors.value.collection = 'Collection is required'
                formIsValid = false
            }
            //validat attributes

            form.value.attributes.forEach((item) => {
                item.errors = {
                    name: '',
                    value: '',
                }
                if (item.name == '') {
                    item.errors.name = 'Name is required'
                    formIsValid = false
                }
                if (item.value == '') {
                    item.errors.value = 'Value  is required'
                    formIsValid = false
                }
            })

            return formIsValid
        }

        const clearErrors = () => {
            errors.value = {
                title: '',
                subtitle: '',
                description: '',
                image: '',
                collection: '',
            }
        }

        const pinImageNow = async (file) => {
            if (form.value.title) {
                const pinata = await pinFile(file, form.value.title)
                //const fileSaved = new moralisInstance.File(form.value.title, file);
                //await fileSaved.saveIPFS();
                //console.log(fileSaved.ipfs());
                form.value.ipfs =
                    'https://gateway.pinata.cloud/ipfs/' + pinata.data.IpfsHash
            } else {
                store.dispatch('NotificationStore/TOGGLE_LOADING')
                store.dispatch('NotificationStore/setMessage', {
                    message: 'Before uploading an image give the NFT a name',
                    type: 'error',
                })
            }
        }

        const pinQrCode = async (file) => {
            const pinata = await pinFile(file, form.value.title)
            form.value.qrCodeImage =
                'https://gateway.pinata.cloud/ipfs/' + pinata.data.IpfsHash
            console.log(form.value.qrCodeImage)
        }

        const generateQR = async () => {
            try {
                console.log(form.value.imageUrl)
                // todo: qr code na URL publica do NFT
                const data = await QRCode.toDataURL(form.value.imageUrl)
                qrsha.value = await QRCode.toString(form.value.imageUrl)
                const response = await fetch(data)
                const blob = await response.blob()
                const file = new File([blob], 'QRCODE', { type: 'image/png' })
                console.log(qrsha.value)

                pinQrCode(file)
            } catch (err) {
                console.error(err)
            }
        }

        const updatePhotoPreview = async (files) => {
            store.dispatch('NotificationStore/TOGGLE_LOADING')
            const image = files[0]
            const reader = new FileReader()

            var storageRef = storage.ref()
            var imageRef = storageRef.child('nfts/' + image.name)

            reader.readAsDataURL(image)
            reader.onload = (e) => {
                img.value = e.target.result
                hasMedia.value = true
            }

            try {
                await imageRef.put(image)

                if (imageRef.fullPath) {
                    form.value.imageUrl = imageRef.fullPath

                    await pinImageNow(image)
                }

                await generateQR()
                store.dispatch('NotificationStore/TOGGLE_LOADING')
            } catch (error) {
                console.log(error.code)
                console.log(error.message)
            }
        }

        function onDrop(acceptFiles) {
            console.log(acceptFiles)
            updatePhotoPreview(acceptFiles)
        }

        const lazyMint = async () => {
            store.dispatch('NotificationStore/TOGGLE_LOADING')
            if (!form.value.ipfs) {
                store.dispatch('NotificationStore/setMessage', {
                    message: 'You need to upload a new image first',
                    type: 'error',
                })
            } else {
                
                const description = form.value.description

                const attrs = form.value.attributes.map((item) => {
                    return { trait_type: item.name, value: item.value }
                })

                const metadata = {
                    pinataMetadata: {
                        name: form.value.title,
                    },
                    pinataContent: {
                        name: form.value.title,
                        description: description,
                        image: form.value.ipfs,
                        attributes: attrs,
                    },
                }

                const metadataIpfs = await pinJson(metadata)

                form.value.metadataIpfs =
                    'https://gateway.pinata.cloud/ipfs/' + metadataIpfs.IpfsHash

                console.log(admin)

                await updateNft(form.value);

                store.dispatch('NotificationStore/TOGGLE_LOADING');

                router.push('/nft-create/3/'+dbref.value);

                store.dispatch('NotificationStore/setMessage', {
                    message: 'Your NFT is lazy minted, it should show in the client\'s dashboard!',
                    type: 'success',
                })
            }
        }

        const addNft = () => {
            if (validateForm()) {
                lazyMint()
            }
        }

        const categoriesLoad = async () => {
            categories.value = await getCategories()
        }

        const nftLoad = async() => {
          form.value = await getNft(dbref.value)
        }

        onMounted(async () => {
            await categoriesLoad()
            await nftLoad();
        })

        return {
            getRootProps,
            getInputProps,
            ...rest,
            steps,
            fractionalize,
            form,
            showDeleteModal,
            AddAttributes,
            RemoveAttibute,
            DeleteAttr,
            addNft,
            errors,
            clearErrors,
            hasMedia,
            lazyMint,
            img,
            qrsha,
            categories,
            owners,
        }
    },

    components: {
        Steps,
        IconClose,
        ConfirmDelete,
        // Feed
    },
}
</script>

<style scoped>
.img-container {
    height: 540.91px;
}
</style>
