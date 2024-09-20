<script setup>
import { ref } from "vue"

const check=ref(true)
const handle=()=>{
  check.value= !check.value
}
</script>

<template>
  <div>
    <button @click="handle">click</button>
    <p v-if="check">Rikkei</p>
  </div>
</template>

<style>

</style>