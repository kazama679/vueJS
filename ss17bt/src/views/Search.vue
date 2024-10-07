<template>
    <div>
        <h1>Search</h1>
        <input v-model="index" type="text">
        <button @click="handle">tìm kiếm</button>
        <p>Value: {{ index }}</p>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
  const index =ref('')
  const handle = () =>{
    // router.push({path: "search", query: {productName: value.value}})
    router.push(`/search?q=${index.value}`);
  }
  </script>
  
  <style>
  
  </style>