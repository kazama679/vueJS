<template>
  <div>App
    <!-- <nav>
      <router-link to="/">home</router-link>
      <router-link :to="{name: 'about'}">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav> -->

    <nav>
      <!-- <button @click="toHome">Home</button>
      <button @click="toAbout">About</button>
      <button @click="toContact">Contact</button> -->
    </nav>
    <router-view>
      
    </router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const toHome = () =>{
  // Điều hướng qua trang home
  router.push('/home')
}
const toAbout = () =>{
  // Điều hướng qua trang home
  router.replace({ name: "about"})
}
const toContact = () =>{
  // Điều hướng qua trang home
  router.push('/contact')
}
</script>

<style>

</style>