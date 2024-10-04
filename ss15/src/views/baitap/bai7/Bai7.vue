<template>
  <div>
    Bai7
    <nav>
      <router-link to="/bai7/home" active-class='active'>Home</router-link>
      <router-link to="/bai7/product" active-class='active'>Product</router-link>
      <router-link to="/bai7/detail" active-class='active'>Detail</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style>
.active{
    background-color: blue;
    color: #fff;
    font-weight: 700
}</style>