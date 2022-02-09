<template>
  <div>
    <span class="text-base font-normal text-black"
      >{{ countDownData.day
      }}<span class="text-gray-400 font-light text-sm font-bold">d</span>
      <span class="text-gray-400"> | </span> {{ unitPrefix(countDownData.hour) + countDownData.hour
      }}<span class="text-gray-400">:</span>{{ unitPrefix(countDownData.minute) + countDownData.minute
      }}<span class="text-gray-400">:</span>{{ unitPrefix(countDownData.second) + countDownData.second
      }}
    </span>
  </div>
</template>

<script>
import { ref, toRefs } from "vue";
import moment from 'moment';

export default {
  props: {
    dateEnd: String,
    timeEnd: String,
    timestamp: Number,
    placed: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['on:timerEnd'],
  setup(props, {emit}) {
    const countDownData = ref({
      day: "",
      hour: "",
      minute: "",
      second: "",
    });

    const { dateEnd, timeEnd, placed, timestamp } = toRefs(props);

    let distance = 1;

    const calculateDistance = (endDateTime) => {
      const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

      const now = moment().valueOf();
      
      if (placed.value) {
        distance = now - endDateTime;
      } else {
        distance = endDateTime - now;
      }

      countDownData.value.day = Math.floor(distance / day);
      countDownData.value.hour = Math.floor((distance % day) / hour);
      countDownData.value.minute = Math.floor((distance % hour) / minute);
      countDownData.value.second = Math.floor((distance % minute) / second);

      return distance;

    }
    const countdown = () => {
      if (timestamp.value) {

        const endDateTime = moment(
            timestamp.value
          ).valueOf();
        
        return calculateDistance(endDateTime);        
      } else if (dateEnd.value) {

        const endDateTime = moment(
            dateEnd.value + " " + timeEnd.value+":00", 'MM/DD/YYYY HH:mm:ss'
          ).valueOf();

      
        return calculateDistance(endDateTime);
        
      }

      return distance;

    };

    let x = setInterval(() => {
      let distance = countdown();

      if (distance < 0) {
        clearInterval(x);
        emit('on:timerEnd');
      }
    }, 1000);

    const unitPrefix = (unit) => {
      return parseInt(unit) < 10 ? '0' : '';
    }
    
    return {
      countDownData,
      unitPrefix
    };
  },
};
</script>
