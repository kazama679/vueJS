<template>
    <div>
        aaaaaaaaaa
      {{ id }}
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const id = route.params.id
  </script>
  
  <style>
  
  </style>