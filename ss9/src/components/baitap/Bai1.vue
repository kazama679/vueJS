<template>
  <div>
    <input v-model="email" type="text">
    <p>Giá trị: {{email}}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email=ref('')
</script>

<style>

</style>