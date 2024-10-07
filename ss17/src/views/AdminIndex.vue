<template>
    <div>
      <h1>Admin</h1>
      <nav>
        <router-link to="/admin/dashboard" exact-active-class="active">Dashboard</router-link><br>
        <router-link to="/admin/manager-user" exact-active-class="active">Manager User</router-link><br>
        <router-link to="/admin/manager-product" exact-active-class="active">Manager Product</router-link>    
      </nav>
      <router-view/>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style>
  .active{
    color: red;
  }
  </style>