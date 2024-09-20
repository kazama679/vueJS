<script setup>
import { reactive } from "vue"

    const userDemo=reactive ({
        width:5,
        height:10
    })
    const handle=()=>{
        userDemo.width+=10
    }
</script>

<template>
<div>
  <div>tổng: {{userDemo.width*userDemo.height}}</div>
  <button @click="handle">change</button>
</div>
</template>

<style>

</style>