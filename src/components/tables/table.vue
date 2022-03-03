<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col w-full">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-white">
              <tr>
                <th
                  v-for="(item, index, key) in headers"
                  :key="key"
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  {{ item.key }}
                </th>
              </tr>
            </thead>
             <slot  name="body" />
            
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: [Object, Array],
      required: true,
    },
    data: {
      type: [Object, Array],
      required: true,
    },
  },
};
</script>