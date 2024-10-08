<template>
  <div>
    <nav class="navbar">
      <router-link to="/admin" exact-active-class="active">Dashboard</router-link>
      <router-link to="/admin/manager-category" exact-active-class="active">Manager Category</router-link>
      <router-link to="/admin/manager-product" exact-active-class="active">Manager Product</router-link>
    </nav>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.navbar {
  background-color: black;
  padding: 10px;
  display: flex;
  gap: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
  padding: 10px;
  font-size: 16px;
}

.navbar .active {
  background-color: #444;
  border-radius: 5px;
}

.content {
  margin-top: 20px;
  padding: 20px;
}
</style>