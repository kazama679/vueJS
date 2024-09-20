<script setup>
import { ref } from "vue";

let count=ref(0);
const handleCount=()=>{
    count.value++
}
</script>

<template>
    <div>
        <h1>đếm: {{count}}</h1>
        <button @click="handleCount">Count</button>
    </div>
</template>