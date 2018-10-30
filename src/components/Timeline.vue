<template>
<div style="display:inline-block;">
  <div class="timeline-main">
    <Hour v-for="(hour, i) in hours" :key="i" :hour='i+1' :fill-background="hour.fillBackground" :start-percentage="(hour.active)?hour.start:[]" :fill-percentage="(hour.active)?hour.end:[]" :is-active="hour.active" :is-current="current"/>
  </div>
  <div class="all-events">
    <h2>All Events</h2>
    <Event v-for="(event, index) of events" :key="index" :event="event" :index="index"/>
  </div>
</div>
</template>

<script>
import Hour from "./Hour.vue";
import Event from "./Event.vue";
import moment from "moment";
export default {
  name: "Timeline",
  data: function() {
    return {
      fillArray: [
        "#FF6633",
        "#FFB399",
        "#FF33FF",
        "#FFFF99",
        "#00B3E6",
        "#E6B333",
        "#3366E6",
        "#999966",
        "#99FF99",
        "#B34D4D",
        "#80B300",
        "#809900",
        "#E6B3B3",
        "#6680B3",
        "#66991A",
        "#FF99E6",
        "#CCFF1A",
        "#FF1A66",
        "#E6331A",
        "#33FFCC",
        "#66994D",
        "#B366CC",
        "#4D8000",
        "#B33300",
        "#CC80CC",
        "#66664D",
        "#991AFF",
        "#E666FF",
        "#4DB3FF",
        "#1AB399",
        "#E666B3",
        "#33991A",
        "#CC9999",
        "#B3B31A",
        "#00E680",
        "#4D8066",
        "#809980",
        "#E6FF80",
        "#1AFF33",
        "#999933",
        "#FF3380",
        "#CCCC00",
        "#66E64D",
        "#4D80CC",
        "#9900B3",
        "#E64D66",
        "#4DB380",
        "#FF4D4D",
        "#99E6E6",
        "#6666FF"
      ],
      current: this.getTime(),
      events: [],
      hours: [
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        },
        {
          active: false,
          fillBackground: [],
          title: [],
          start: [],
          end: []
        }
      ]
    };
  },
  methods: {
    getTime() {
      return moment().format("HH");
    },
    addEvent(start, end, title) {
      let color = this.fillArray[Math.floor(Math.random() * 50)];
      this.events.push({
        title: title,
        start: start,
        end: end,
        background: color
      });
      this.displayEvent(start, end, title, color);
    },
    displayEvent(start, end, title, color) {
      let startIndex = moment(
        moment(start, "hh:mma").format("HHMM"),
        "HHMM"
      ).hour();
      let endIndex = moment(
        moment(end, "hh:mma").format("HHMM"),
        "HHMM"
      ).hour();
      let startPercentage = Math.ceil(
        (moment(start, "h:mma").minutes() / 60) * 100
      );
      let endPercentage = Math.ceil(
        (moment(end, "h:mma").minutes() / 60) * 100
      );
      this.hours[startIndex].active = true;
      this.hours[startIndex].title.push(title);
      this.hours[startIndex].fillBackground.push(color);
      this.hours[startIndex].start.push(`${startPercentage}%`);
      this.hours[startIndex].end.push(`${100 - startPercentage}%`);
      if (endIndex > startIndex) {
        for (let i = startIndex + 1; i < endIndex; i++) {
          this.hours[i].active = true;
          this.hours[i].title.push(title);
          this.hours[i].fillBackground.push(color);
          this.hours[i].start.push("0%");
          this.hours[i].end.push("100%");
        }
      }
      this.hours[endIndex].active = true;
      this.hours[endIndex].title.push(title);
      this.hours[endIndex].fillBackground.push(color);
      this.hours[endIndex].start.push(`0%`);
      this.hours[endIndex].end.push(`${endPercentage}%`);
    },
    editEvent(index, deleteEvent) {
      let title = this.events[index].title;
      let start = moment(this.events[index].start, "hh:mma");
      let end = moment(this.events[index].end, "hh:mma");
      let startHour = moment(start, "hh:mma").hours();
      let startMin = moment(start, "hh:mma").minute();
      let endHour = moment(end, "hh:mma").hours();
      let endMin = moment(end, "hh:mma").minute();
      let startAP = startHour > 12 ? "PM" : "AM";
      let endAP = endHour > 12 ? "PM" : "AM";
      startHour = startHour > 12 ? startHour - 12 : startHour;
      endHour = endHour > 12 ? endHour - 12 : endHour;
      this.removeEvent(index, start, end, title)
      if(!deleteEvent){
        this.$parent.editEvent(
          title,
          startHour,
          startMin,
          startAP,
          endHour,
          endMin,
          endAP
        );
      }
    },
    removeEvent(index, start, end, title){
      this.events.splice(index, 1);
      let startIndex = moment(
        moment(start, "hh:mma").format("HHMM"),
        "HHMM"
      ).hour();
      let endIndex = moment(
        moment(end, "hh:mma").format("HHMM"),
        "HHMM"
      ).hour();
      let sindex = this.hours[startIndex].title.indexOf(title)
      this.hours[startIndex].title.splice(sindex,1);
      this.hours[startIndex].fillBackground.splice(sindex,1);
      this.hours[startIndex].start.splice(sindex,1);
      this.hours[startIndex].end.splice(sindex,1);
      if (endIndex > startIndex) {
        for (let i = startIndex + 1; i < endIndex; i++) {
          let findex = this.hours[i].title.indexOf(title)
          this.hours[i].title.splice(findex,1);
          this.hours[i].fillBackground.splice(findex,1);
          this.hours[i].start.splice(findex,1);
          this.hours[i].end.splice(findex,1);
        }
      }
      let eindex = this.hours[endIndex].title.indexOf(title)
      this.hours[endIndex].title.splice(eindex,1);
      this.hours[endIndex].fillBackground.splice(eindex,1);
      this.hours[endIndex].start.splice(eindex,1);
      this.hours[endIndex].end.splice(eindex,1);
    }
  },
  components: {
    Hour,
    Event
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeline-main {
  width: 300px;
  display: inline-block;
  background: #fff;
  padding-bottom:30px 
}
.all-events {
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
}
.all-events h2 {
  font-family: sans-serif;
  text-align: center;
}
</style>
