<script setup>
import { reactive } from "vue";

const state=reactive({arr:[]})
const handle=()=>{
  state.arr.push(Math.ceil(Math.random()*9))
}
</script>

<template>
  <div>
    <button @click="handle">Random number</button>
    [<b v-for="(item, index) in state.arr" :key="index">
      {{item}}{{ index < state.arr.length - 1 ? ',' : '' }}
    </b>]
  </div>
</template>

<style>

</style>