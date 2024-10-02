<template>
    <div>
      <p>Thời gian hiện tại: {{ currentTime }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  const currentTime = ref('')
  
  const updateCurrentTime = () => {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0') 
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0') 
    currentTime.value = `${hours}:${minutes}:${seconds}`
  }
  
  let intervalId
  onMounted(() => {
    updateCurrentTime() 
    intervalId = setInterval(updateCurrentTime, 1000) 
  })
  
  onBeforeUnmount(() => {
    clearInterval(intervalId)
  })
  </script>
  
  <style>
  /* Thêm style nếu cần */
  </style>
  