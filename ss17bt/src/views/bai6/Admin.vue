<template>
    <div>Admin
      <nav>
        <router-link to="/admin/settings" exact-active-class="active">Settings</router-link><br>
        <router-link to="/admin/manager-user" exact-active-class="active">Manager User</router-link><br>
        <router-link to="/admin/manager-product" exact-active-class="active">Manager Product</router-link>    
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style>
  
  </style>