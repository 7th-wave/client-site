<template>
  <div class="mt-5 py-2.5 px-2 bg-white shadow-md rounded-md space-y-4  w-full">
    <div class="flex items-center w-full justify-between">
      <div class="flex items-center space-x-2">
        <span class="text-primary-500 font-medium text-sm">60DAYS</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0.476196L5 5.4762L10 0.476196H0Z" fill="#049AFF" />
        </svg>
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-gray-500 font-medium text-sm"
          > Vault Valuation</span
        >
        <span class="text-black font-medium text-sm">≈ $2,000,000.00</span>
      </div>
    </div>
    <vue3-chart-js
      :id="lineChart.id"
      :type="lineChart.type"
      :data="lineChart.data"
      :options="lineChart.options"
      @before-render="beforeRenderLogic"
    ></vue3-chart-js>
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  components: {
    Vue3ChartJs,
  },
  setup() {
    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true,
        },
      },
    };
    const lineChart = {
      id: "line",
      type: "line",
      options: options,
      data: {
        labels: ["2/24", "2/25", "8/23", "11/21", "2/19", "5/1"],
        datasets: [
          {
            data: [50, 19, 3, 5, 2, 3],

            borderColor: [
              "#049AFF",
              "#049AFF",
              "#049AFF",
              "#049AFF",
              "#049AFF",
              "#049AFF",
            ],
            borderWidth: 1,
          },
        ],
      },
    };
    const beforeRenderLogic = (event) => {
      console.log(event);
      //...
      //if(a === b) {
      //  event.preventDefault()
      //}
    };
    return {
      lineChart,
      beforeRenderLogic,
    };
  },
};
</script>