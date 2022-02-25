<template>
    <div>
        <h4>Create a Vault</h4>

        <form>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-6">
                    <label for="vault_name" class="block text-sm font-medium text-gray-700">
                    Vault Name
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">

                    <input type="text" v-model="data.vaultName" name="vault_name" id="vault_name" autocomplete="Vault Name" class="flex-1 focus:ring-teal-500 focus:border-teal-500 block w-full min-w-0  rounded-md sm:text-sm border-gray-300" />
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="supply" class="block text-sm font-medium text-gray-700">
                    Supply
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="text" v-model="data.bio_title" name="supply" id="v" autocomplete="100" class="flex-1 focus:ring-teal-500 focus:border-teal-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300" />
                    </div>
                </div>

                 <div class="sm:col-span-3">
                    <label for="bio_title" class="block text-sm font-medium text-gray-700">
                    Symbol
                    </label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                    <input type="text" v-model="data.symbo" name="artist_name" id="symbol" autocomplete="symbol" class="flex-1 focus:ring-teal-500 focus:border-teal-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300" />
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity';
export default {

    

    setup() {
        const data = ref({
            vaultName: '',
            supply: '',
            bio: '',

        });

        return {
            data
        }
    },
}
</script>