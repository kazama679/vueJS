<template>
    <div>
      <p>Chiều rộng: {{ px }}px</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  const px = ref(window.innerWidth)
  
  const handleResize = () => {
    px.value = window.innerWidth
  }
  
  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
  })
  </script>
  
  <style>
  /* Thêm style nếu cần */
  </style>
  