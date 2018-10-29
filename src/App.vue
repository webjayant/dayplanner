<template>
  <div class="container">
    <Timeline ref="Timeline"/>
    <div class="sidebar-main">
    
    </div>
  </div>
</template>

<script>
import Timeline from './components/Timeline.vue'
import moment from 'moment'
export default {
  name: 'app',
  components: {
    Timeline
  },
  methods:{
    addEvent(start, end, title){
      this.$refs.Timeline.addEvent(start, end, title)
    }
  }
}
</script>

<style >
  .container{
    max-width:1200px;
    margin:0 auto;
  }
  .sidebar-main{
    position: absolute;
    top:0;
    right:0;
    height:95vh;
    width:300px;
    background:#ccc;
  }
</style>
