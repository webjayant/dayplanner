<template>
  <div>
      <div class="event-main" :style="{background:event.background}">
          <p class="title">{{event.title}}</p>
          <p><span class="bold">Start-time: </span>{{event.start}}</p>
          <p><span class="bold">End-time: </span>{{event.end}}</p>
          <div class="text-center">
          <button class="btn-edit-event" @click="editEvent(index)">
              Edit Event
          </button>
          <button class="btn-edit-event" @click="deleteEvent(index)">
              Delete Event
          </button>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "Event",
  props: {
    event: Object,
    index: Number
  },
  methods: {
    editEvent(index) {
      this.$parent.editEvent(index, false);
    },
    deleteEvent(index) {
      this.$parent.editEvent(index, true);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bold {
  font-weight: 600;
}
.event-main {
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 10px 0;
}
.event-main p {
  color: #f1f1f1;
}
.event-main p.title {
  text-align: center;
  font-size: 22px;
  margin-top: 0;
  font-weight: 600;
}
.btn-edit-event{
  background: #fff;
  color:#777;
  border: 2px solid #777;
  height: 32px;
  width: 100px;
  margin: 0 10px;
  display: inline-block;
  border-radius: 5px;
  transition: all .3s ease-in-out;
  cursor: pointer;
}
.btn-edit-event:hover, .btn-edit-event:focus, .btn-edit-event:active{
  background: #777;
  color: #fff;
}
.text-center{
  text-align: center;
}
</style>
