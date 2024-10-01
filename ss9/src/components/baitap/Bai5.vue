<template>
  <div>
    <div><input v-model="email" value="0" type="radio">Nam</div>
    <div><input v-model="email" value="1" type="radio">Nữ</div>
    <div><input v-model="email" value="2" type="radio">Khác</div>
    <p>Giá trị: {{email}}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email=ref('')
</script>

<style>

</style>