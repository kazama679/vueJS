<template>
  <div>
    <input v-model="email" type="color">
    <p>Giá trị: {{email}}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email=ref('')
</script>

<style>

</style>