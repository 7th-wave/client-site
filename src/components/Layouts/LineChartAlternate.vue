<template>
  <div >
    <vue3-chart-js
        :id="chartData.id"
        :type="chartData.type"
        :data="chartData.data"
        :options="chartData.options"
    ></vue3-chart-js>
  </div>
</template>

<script>
import moment from "moment";
import { defineComponent } from "vue";
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'


export default defineComponent({
  name: "LineChartAlternate",
  components: {
    Vue3ChartJs,
  },
  props: ["data"],
  setup(props) {
    const labels = [];
    const data = [];

    props.data.map((el) => {
      labels.push(moment(el.dateStarts).format("D/MMM"));
      data.push(el.wonPrice);
    });

    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales:{
        y: {
          display: false,
          beginAtZero: true
        }
      }
    };
    const chartData = {
      id: 'line',
      type: 'line',
      options: options,
      data: {
        labels: labels,
        datasets: [
          {
            label: "Price",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#cc65fe",
            data: data,
          },
        ],
      }
    };

    return {
      chartData
    }


  },
});
</script>

