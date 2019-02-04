<template>
    <span class="filler" :style="{width:fillPercentage,left:startPercentage, background:fillBackground, height:this.height}">
    </span>   
</template>

<script>
export default {
  name: "Hour",
  props: {
    fillPercentage: String,
    startPercentage: String,
    fillBackground: String,
    total: Number
  },
  data() {
    return {
      height: `100%`
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span.filler {
  display: block;
  border-radius: 5px;
}
</style>