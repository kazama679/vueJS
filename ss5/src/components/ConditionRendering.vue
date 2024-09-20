<script setup>
import { ref } from "vue"
    const age=ref(19)
    const handle1=()=>{
        age.value++
    }
    const handle2=()=>{
        age.value--
    }

    const maybe='admin'
</script>

<template>
  <div>
    <p>Số tuổi: {{age}}</p>
    <button @click="handle1">tăng</button>
    <button @click="handle2">giảm</button>

    <p v-if="maybe== 'admin'">admin</p>
    <p v-else-if="maybe == 'user'">user</p>
    <p v-else-if="maybe == 'edit'">edit</p>
    <p v-else>other</p>
  </div>
</template>

<style>

</style>