<script setup>
import { ref } from "vue"

const check=ref(true)
const handle=()=>{
  check.value= !check.value
}
</script>

<template>
  <div>Bai2
    <button v-if="check" @click="handle">Hiện</button>
    <button v-else @click="handle">Ẩn</button>
  </div>
</template>

<style>

</style>