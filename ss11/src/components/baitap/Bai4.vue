<template>
  <div>
    <h2>Child Component</h2>
    <p>Received Age: {{ age }}</p>
  </div>
</template>

<script setup>
import { watch } from "vue";

// Nhận props từ cha
const props = defineProps({
  age: {
    type: Number,
    required: true,
  },
});

// Sử dụng lifecycle hook để lắng nghe sự thay đổi của age
watch(
  () => props.age, () => {
    alert("Giá trị của biến age đã thay đổi");
  }
);
</script>

<style>
</style>