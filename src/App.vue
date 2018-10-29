<template>
  <div class="container">
    <Timeline ref="Timeline"/>
    <div class="sidebar-main">
      <div class="event-title">
        <input type="text" v-model="eventTitle">
      </div>
      <div class="start-time">
        <select v-model="startHour">
          <option disabled selected='selected'>Select Start Hour</option>
          <option v-for="index in 12" :key="index">{{index}}</option>
        </select>
        <select v-model="startMin">
          <option disabled selected='selected'>Select Start Min</option>
          <option v-for="index in 59" :key="index">{{index}}</option>
        </select>
        <select v-model="startAP">
          <option disabled selected='selected'>Select AM/PM</option>
          <option>AM</option>
          <option>PM</option>
        </select>
      </div>
      <div class="end-time">
        <select v-model="endHour">
          <option disabled selected='selected'>Select end Hour</option>
          <option v-for="index in 12" :key="index">{{index}}</option>
        </select>
        <select v-model="endMin">
          <option disabled selected='selected'>Select end Min</option>
          <option v-for="index in 59" :key="index">{{index}}</option>
        </select>
        <select v-model="endAP">
          <option disabled selected='selected'>Select AM/PM</option>
          <option>AM</option>
          <option>PM</option>
        </select>
      </div>
      <p v-if="isTimeErr">{{timeErr}}</p>
      <button class="btn btn-add-event" @click="addEvent">
        Add Event
      </button>
    </div>
  </div>
</template>

<script>
import Timeline from "./components/Timeline.vue";
import moment from "moment";
export default {
  name: "app",
  components: {
    Timeline
  },
  data() {
    return {
      eventTitle: "",
      startHour: "",
      startMin: "",
      startAP: "",
      endHour: "",
      endMin: "",
      endAP: "",
      startTime: "",
      endTime: "",
      isTimeErr: false,
      timeErr: ""
    };
  },
  methods: {
    addEvent() {
      // this.$refs.Timeline.addEvent(start, end, title);
      this.startTime = moment(
        `${this.startHour}${this.startMin}${this.startAP}`,
        "hma"
      ).format("hh:mma");
      this.endTime = moment(
        `${this.endHour}${this.endMin}${this.endAP}`,
        "hma"
      ).format("hh:mma");
      if (
        this.minutesOfDay(moment(this.startTime, "h:mma")) >
        this.minutesOfDay(moment(this.endTime, "h:mma"))
      ) {
        this.isTimeErr = true;
        this.timeErr = "Start Time Cannot be Greater Than End Time";
      }
    },
    minutesOfDay(m) {
      console.log(m.minutes() + m.hours() * 60);
      return m.minutes() + m.hours() * 60;
    }
  }
};
</script>

<style >
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.sidebar-main {
  position: absolute;
  top: 0;
  right: 0;
  height: 95vh;
  width: 500px;
  background: #ccc;
}
</style>
