<script setup>
import { ref } from "vue";

const gender = ['nam', 'nữ', 'khác'];
const random = ref(0); 

const handle = () => {
  random.value = Math.floor(Math.random() * gender.length);
};
</script>

<template>
  <div>
    <p>Gender: {{ gender[random] }}</p>
    <button @click="handle">Random gender</button>
  </div>
</template>

<style>
</style>