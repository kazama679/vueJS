<template>
  <div class="admin-layout">
    <header class="header">Header</header>
    <div class="content">
      <aside class="menu">Menu</aside>
      <main class="main">Main</main>
    </div>
    <footer class="footer">Footer</footer>
  </div>
</template>

<script>
export default {
  name: 'AdminLayout',
};
</script>

<style scoped>
.admin-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  background-color: #d3d3d3;
  padding: 10px;
  text-align: center;
  flex-shrink: 0;
}

.content {
  display: flex;
  flex: 1;
}

.menu {
  background-color: #4B0082;
  color: white;
  width: 200px;
  padding: 20px;
  flex-shrink: 0;
}

.main {
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
}

.footer {
  background-color: #d3d3d3;
  padding: 10px;
  text-align: center;
  flex-shrink: 0;
}
</style>