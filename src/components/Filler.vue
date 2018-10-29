<template>
    <span class="filler" :style="{width:fillPercentage,left:startPercentage, background:fillBackground||'#fff'}">
    </span>   
</template>

<script>
import moment from "moment";
export default {
  name: "Hour",
  props: {
    fillPercentage: String,
    startPercentage: String,
    fillBackground: String
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
span.filler {
  position: absolute;
  height: 100%;
}
</style>