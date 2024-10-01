<template>
  <div>
    <h1>Oneway data binding</h1>
    <h3>Username: {{ userName }}</h3>
    <input type="text" :value="userName">
    <button @click="handleName">change name</button>
  </div>
</template>

<script setup>
    import { ref } from "vue";
    const userName=ref('Nguyễn Xuân Quang')
    const handleName=()=>{
        userName.value='Nguyễn Xuân Quang1'
    }
</script>

<style>

</style>