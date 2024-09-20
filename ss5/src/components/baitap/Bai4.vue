<script setup>
import { ref } from "vue";

const check=ref(false)
const handle1=()=>{
check.value=true
}
const handle2=()=>{
check.value=false
}
</script>

<template>
  <div>
    <button @click="handle1">Hiển thị</button>
    <button @click="handle2">Ẩn</button>
    <p v-show="check">ahsdjgahfhlias </p>
  </div>
</template>

<style>

</style>