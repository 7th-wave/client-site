<template>
  <div
    class="
      lg:col-span-3
      col-span-4
      w-full
      flex flex-col
      items-start
      space-y-5
      overflow-y-auto md:overflow-hidden
      max-w-7xl md:max-w-none
    "
  >
    <span class="text-2xl text-black font-inter font-medium md:block hidden"
      >Top 10 Vault Owner</span
    >
    <Table :headers="tableData.headers" :data="tableData.data">
      <template #body>
        <tbody
          class="bg-white divide-y divide-gray-200 shadow-md w-full h-full"
          v-for="n in 9"
          :key="n"
        >
          <td
            class="
              px-6
              py-2
              whitespace-nowrap
              text-sm
              font-medium
              text-gray-900
            "
          >
            #1
          </td>
          <td
            class="
              px-6
              py-2
              whitespace-nowrap
              text-sm
              font-medium
              text-gray-900
            "
          >
            <div class="flex items-center -space-x-2">
              <div class="w-10 h-10 rounded-full bg-gray-400 overflow-hidden">
                <img
                  class="w-full h-full object-cover"
                  src="/images/avatar.png"
                  alt=""
                />
              </div>
              <div class="flex flex-col items-start -space-y-8 cursor-pointer"  @click="UserDetails(n)">
                <span
                 
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-sm
                    font-medium
                    text-gray-900 
                  "
                  >0xb7BC...eA21</span
                >
                <span
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-sm
                    font-medium
                    text-gray-500
                  "
                  >0xb7BC...eA21</span
                >
              </div>
            </div>
          </td>
          <td
            class="
              px-6
              py-2
              whitespace-nowrap
              text-sm
              font-medium
              text-gray-900
            "
          >
            48,640,595.584
          </td>
          <td
            class="
              px-6
              py-2
              whitespace-nowrap
              text-sm
              font-medium
              text-gray-900
            "
          >
            <span
              class="
                whitespace-nowrap
                text-sm
                font-medium
                text-green-800
                bg-green-100
                rounded-2xl
                py-1
                px-6
              "
              >48.640%</span
            >
          </td>
          <td
            class="
              px-6
              py-2
              whitespace-nowrap
              text-sm
              font-medium
              text-gray-900
            "
          >
            <div class="flex flex-col items-start space-y-1">
              <span class="whitespace-nowrap text-sm font-medium text-gray-900"
                >Ξ 8,166.345</span
              >
              <span class="whitespace-nowrap text-sm font-medium text-gray-500"
                >≈ $19,917,308.65</span
              >
            </div>
          </td>
        </tbody>
      </template>
    </Table>
  </div>
</template>

<script>
import Table from "../../components/tables/table.vue";

export default {
  components: {
    Table,
  },
  data() {
    return {
      tableData: {
        headers: [
          {
            text: "RANK",
            key: "rank",
          },
          {
            text: "OWNERS",
            key: "owner",
          },
          {
            text: "QUANTITY",
            key: "quantity",
          },
          {
            text: "PERCENTAGE",
            key: "percentage",
          },
          {
            text: "VALUE",
            key: "value",
          },
        ],
        data: [
          {
            rank: "1",
            owner: "0x1",
            quantity: "6",
            percentage: "2",
            value: "100",
          },
          {
            rank: "2",
            owner: "0x2",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "3",
            owner: "0x3",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "4",
            owner: "0x4",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "5",
            owner: "0x5",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "6",
            owner: "0x6",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "7",
            owner: "0x7",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "8",
            owner: "0x8",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "9",
            owner: "0x9",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
          {
            rank: "10",
            owner: "0x10",
            quantity: "0",
            percentage: "0",
            value: "0",
          },
        ],
      },
    };
  },
  methods:{
    UserDetails(id){
      this.$router.push({
        name: "UserPortfolio",
        params: {
          id: id
        }
      });
    }
  }
};
</script>


<style scoped>
::-webkit-scrollbar {
  width: 0px;
}
</style>