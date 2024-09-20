<script setup>
import { reactive } from "vue";
const state=reactive({arr:[5,21,3,123,12,4,16,4]})
const up=()=>{
  state.arr.sort((a, b) => a - b);  
}
const down=()=>{
  state.arr.sort((a, b) => b - a);
}
</script>

<template>
  <div>Bai8
    <button @click="up">tăng dần</button>
    <button @click="down">giảm dần</button>
    <p v-for="item in state.arr" :key="item">{{item}}</p>
  </div>
</template>

<style>

</style>