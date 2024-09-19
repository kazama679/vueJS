<template>
  <div :style="{ backgroundColor: boxColor }" class="color-box">
    <p>Box</p>
  </div>
</template>

<script>
export default {
  name: 'ColorBox',
  props: {
    color: {
      type: String,
      required: true,
      validator: function (value) {
        return ['red', 'blue', 'green'].includes(value);
      },
    },
  },
  computed: {
    boxColor() {
      return this.color;
    },
  },
};
</script>

<style scoped>
.color-box {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: 1px solid #000;
}
</style>