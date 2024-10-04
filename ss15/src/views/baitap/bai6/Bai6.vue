<template>
    <div>Bai6
         <nav>
      <router-link to="/bai6/home">home</router-link>
      <router-link  to="/bai6/contact">Contact</router-link>
    </nav>
    <router-view>

    </router-view>
    </div>
  </template>
  
  <script setup>
  
import { useRouter } from 'vue-router'
const router = useRouter()
  </script>
  
  <style>
  
  </style>