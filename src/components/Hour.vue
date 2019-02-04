<template>
  <div class="hour-main" :class="{active:isActive, 'current':(isCurrent == Hour-1)}">
    <span class="start-hour">
        {{Hour-1 | moment}}
    </span>
    <span class="end-hour">
        {{`${Hour-1}:59` | moment}}
    </span>
    <Filler v-for="(start, index) of startPercentage" :key="index" :fill-background="fillBackground[index]" :start-percentage="startPercentage[index]" :fill-percentage="fillPercentage[index]" :total="startPercentage.length"/>   
  </div>
</template>

<script>
import moment from "moment";
import Filler from "./Filler.vue";
export default {
  name: "Hour",
  props: {
    isActive: Boolean,
    Hour: Number,
    fillPercentage: Array,
    startPercentage: Array,
    fillBackground: Array,
    isCurrent: String
  },
  components: {
    Filler
  },
  filters: {
    moment: function(date) {
      return moment(date, "hh:mm").format("hh:mm a");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hour-main {
  position: relative;
  height: 30px;
  width: 300px;
  background: #fff;
  margin: 2px;
  border: 1px solid #000;
  border-radius:5px; 
  display:flex;
  flex-direction: column;
}
.hour-main.current {
  border: 1px solid #23bd51;
}
.start-hour,
.end-hour {
  font-size: 12px;
  vertical-align: bottom;
  position: absolute;
  bottom: 0;
  z-index: 2;
  padding: 0 5px;
}
.end-hour {
  right: 0;
}
</style>
