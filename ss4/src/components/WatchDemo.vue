<script setup>
import { ref, watch } from "vue"

    const count =ref(0)
    const handleCount = () =>{
        count.value++
    }
    watch(count,(newValue,oldValue)=>{
        // lắng nghe sự thay đổi của count
        console.log(`cũ: ${oldValue}, mới: ${newValue}`);
        
    })
</script>

<template>
  <div>
    <p>{{count}}</p>
    <button @click="handleCount">Up</button>
  </div>
</template>

<style>

</style>