<template>
  <div>
    <h3>User name: {{ userName }}</h3>
    <h3>Age: {{ age }}</h3>
  </div>
</template>

<script setup>
// Khu vực viết code JS
const userName = "Nguyễn Văn A";
const age = 20;

console.log("Username: ", userName);
console.log("Age: ", age);
</script>

<style></style>