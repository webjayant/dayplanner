<template>
  <div class="container">
    <h1>{{this.getDate()}}</h1>
    <Timeline ref="Timeline"/>
    <div class="addnewevent">
      <button class="btn btn-new-event" @click="addNewEvent">
        Creat New Event
      </button>
    </div>
    <div class="top-main" :style="{right:(this.isTopBar)?'520px':'-100%'}">
      <h2>Add New Event</h2>
      <a class="close" @click="addNewEvent">x</a>
      <div>
        <input type="text" placeholder="Enter Event Title" class="event-title" v-model="eventTitle">
      </div>
      <div class="start-time">
        <select class="select-option" v-model="startHour">
          <option disabled selected='selected'>Select Start Hour</option>
          <option v-for="index in 12" :key="index">{{index}}</option>
        </select>
        <select class="select-option" v-model="startMin">
          <option disabled selected='selected'>Select Start Min</option>
          <option v-for="index in 59" :key="index">{{index}}</option>
        </select>
        <select class="select-option" v-model="startAP">
          <option disabled selected='selected'>Select AM/PM</option>
          <option>AM</option>
          <option>PM</option>
        </select>
      </div>
      <div class="end-time">
        <select class="select-option" v-model="endHour">
          <option disabled selected='selected'>Select end Hour</option>
          <option v-for="index in 12" :key="index">{{index}}</option>
        </select>
        <select class="select-option" v-model="endMin">
          <option disabled selected='selected'>Select end Min</option>
          <option v-for="index in 59" :key="index">{{index}}</option>
        </select>
        <select class="select-option" v-model="endAP">
          <option disabled selected='selected'>Select AM/PM</option>
          <option>AM</option>
          <option>PM</option>
        </select>
      </div>
      <button class="btn-add-event" @click="addEvent(true)">
        Add Event
      </button>
    </div>
  </div>
</template>

<script>
import Timeline from "./components/Timeline.vue";
import moment from "moment";
import Helper from "./helper/helperfunctions.js";
export default {
  name: "app",
  components: {
    Timeline
  },
  data() {
    return {
      isTopBar: false,
      eventTitle: null,
      startHour: null,
      startMin: null,
      startAP: null,
      endHour: null,
      endMin: null,
      endAP: null,
      startTime: null,
      endTime: null,
      isTimeErr: false,
      timeErr: null
    };
  },
  methods: {
    addNewEvent(checkEdit) {
      if (checkEdit) {
        this.startHour = null;
        this.startMin = null;
        this.startAP = null;
        this.endHour = null;
        this.endMin = null;
        this.endAP = null;
        this.eventTitle = null;
      }
      this.isTopBar = !this.isTopBar;
    },
    addEvent() {
      if (!this.eventTitle && !this.isTimeErr) {
        this.isTimeErr = true;
        this.timeErr = "Event Title Cannot be Empty";
        return false;
      } else {
        this.isTimeErr = false;
      }
      console.log(this.startAP, this.endAP);
      if (
        this.startHour &&
        this.startMin &&
        this.startAP &&
        this.endHour &&
        this.endMin &&
        this.endAP &&
        !this.isTimeErr
      ) {
        this.startTime = moment(
          `${this.startHour}:${this.startMin}${this.startAP}`,
          "hma"
        ).format("hh:mma");
        this.endTime = moment(
          `${this.endHour}:${this.endMin}${this.endAP}`,
          "hma"
        ).format("hh:mma");
      } else {
        this.isTimeErr = true;
        this.timeErr = "Start or End time cannot be empty";
        return false;
      }
      if (
        (this.timeErr &&
          Helper.minutesOfDay(moment(this.startTime, "h:mma")) >
            Helper.minutesOfDay(moment(this.endTime, "h:mma"))) ||
        (this.startAP == "PM" && this.endAP == "AM")
      ) {
        this.isTimeErr = true;
        this.timeErr = "Start Time Cannot be Greater Than End Time";
        return false;
      } else {
        this.isTimeErr = false;
        this.timeErr = "";
      }
      if (!this.isTimeErr) {
        this.$refs.Timeline.addEvent(
          this.startTime,
          this.endTime,
          this.eventTitle
        );
        this.isTopBar = !this.isTopBar;
      }
    },
    editEvent(title, startHour, startMin, startAP, endHour, endMin, endAP) {
      this.startHour = startHour;
      this.endHour = endHour;
      this.startMin = startMin;
      this.endMin = endMin;
      this.startAP = startAP;
      this.endAP = endAP;
      this.title = title;
      this.addNewEvent(false);
    },
    getDate() {
      return moment().format("DD MMMM YYYY :: hh:mma");
    }
  },
  watch: {
    timeErr: function(value) {
      if (value) {
        this.$toaster.error(value);
      }
    }
  }
};
</script>

<style >
body {
  overflow-x: hidden;
}
* {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  box-sizing: border-box;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.top-main {
  position: absolute;
  top: 10px;
  transform: translateX(50%);
  z-index: 3;
  height: 300px;
  width: 400px;
  background: #ccc;
  border-radius: 5px;
  border: 2px solid #777;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: right 0.5s ease-in-out;
}
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: #777;
  font-weight: 700;
  cursor: pointer;
}
.top-main h2 {
  text-align: center;
}
.btn-new-event,
.addnewevent {
  width: 300px;
  display: inline-block;
  vertical-align: top;
}
.addnewevent {
  margin: 0 10px;
}
.event-title {
  margin: 0 auto;
  height: 30px;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #ccc;
}
.start-time,
.end-time {
  width: 100%;
  margin: 5px auto;
  text-align: center;
}
.select-option {
  height: 30px;
  width: calc((100% / 3) - 3px);
  background: #fff;
  border: 1px solid #cccccc;
  margin: 1px;
  border-radius: 5px;
}
.btn-add-event {
  background: transparent;
  color: #555;
  border: 2px solid #555;
  height: 30px;
  width: 150px;
  margin: 10px auto;
  display: block;
}
</style>
