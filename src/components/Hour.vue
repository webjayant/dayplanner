<template>
  <div class="hour-main" :class="{active:isActive}">
    <span class="start-hour">
        {{Hour-1 | moment}}
    </span>
    <span class="end-hour">
        {{`${Hour-1}:59` | moment}}
    </span>
    <span :style="{width:fillPercentage,left:startPercentage, background:fillBackground||'#fff'}">
    </span>   
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Hour',
  props:{
      isActive:Boolean,
      fillPercentage:String,
      startPercentage:String,
      fillBackground:String,
      Hour:Number,
  },
  filters: {
  moment: function (date) {
    return moment(date,'hh:mm').format('hh:mm a');
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hour-main{
    position: relative;
    height:25px;
    width:300px;
    background:#666;
    border-bottom:1px solid #000;
  }

  .hour-main.active span:not(.start-hour):not(.end-hour){
    position: absolute;
    height:100%;
  }
  .start-hour,.end-hour{
    font-size:11px;
    vertical-align: bottom;
    position: absolute;
    bottom:0;
    z-index: 2;
  }
  .end-hour{
    right:0;
  }
</style>
