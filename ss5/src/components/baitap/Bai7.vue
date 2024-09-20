<script setup>
import { ref } from "vue";

  const number = ref(1)
  const handle=(i)=>{
    number.value = i
  }
</script>

<template>
  <div>bài 7:
    <p>{{number}}</p>
    <button :class="{active: number==1}" @click="handle(1)">Button 1</button>
    <button :class="{active: number==2}" @click="handle(2)">Button 2</button>
    <button :class="{active: number==3}" @click="handle(3)">Button 3</button>
  </div>
</template>

<style>
.active{
  background-color:red;
  color: #fff
}
</style>