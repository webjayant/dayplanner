export default {
  minutesOfDay: function(m) {
    return m.minutes() + m.hours() * 60;
  }
};
