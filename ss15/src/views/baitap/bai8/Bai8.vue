<template>
    <div>
      Bai8
      <nav>
        <router-link to="/bai8/dashboard" active-class='active'>Dashboard</router-link>
        <router-link to="/bai8/account" active-class='active'>Account</router-link>
        <router-link to="/bai8/product" active-class='active'>Product</router-link>
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