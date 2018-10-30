<template>
  <div>
      <div class="event-main" :style="{background:event.background}">
          <p class="title">{{event.title}}</p>
          <p><span class="bold">Start-time: </span>{{event.start}}</p>
          <p><span class="bold">End-time: </span>{{event.end}}</p>
          <button class="btn-edit-event" @click="editEvent(index)">
              Edit Event
          </button>
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
      this.$parent.editEvent(index);
    }
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
</style>
