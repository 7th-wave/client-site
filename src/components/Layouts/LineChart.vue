<script>
import { Line } from "vue3-chart-v2";
import moment from "moment";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LineChart",
  extends: Line,
  props: ["data"],
  mounted() {
    const labels = [];
    const data = [];

    this.data.map((el) => {
      labels.push(moment(el.dateStarts).format("D/MMM"));
      data.push(el.wonPrice);
    });

    const options = {
      legend: {
        display: false,
      },
      scales:{
        y: {
          display: false
        }
      }
    };
    const chartData = {
      labels: labels,
      datasets: [
        {
          label: "Price",
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "#cc65fe",
          data: data,
        },
      ],
    };

    this.renderChart(chartData, options);
  },
});
</script>

