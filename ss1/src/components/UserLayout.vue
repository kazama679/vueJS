<template>
  <div class="user-layout">
    <header class="header">Header</header>
    <nav class="navigation">Navigation</nav>
    <aside class="menu">Menu</aside>
    <main class="main">
      <div class="grid">
        <div class="cart" v-for="index in 12" :key="index">Cart</div>
      </div>
    </main>
    <article class="article">Article</article>
  </div>
</template>

<script>
export default {
  name: 'UserLayout',
};
</script>

<style scoped>
.user-layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "menu navigation article"
    "menu main article";
  grid-template-rows: 80px 50px 1fr;
  grid-template-columns: 200px 1fr 200px;
  height: 100vh;
}

.header {
  grid-area: header;
  background-color: #d3d3d3;
  text-align: center;
  padding: 10px;
}

.navigation {
  grid-area: navigation;
  background-color: #d3d3d3;
  text-align: center;
  padding: 10px;
}

.menu {
  grid-area: menu;
  background-color: #4CAF50;
  color: white;
  padding: 20px;
}

.main {
  grid-area: main;
  padding: 20px;
  background-color: #fff0f0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

.cart {
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
}

.article {
  grid-area: article;
  background-color: #87CEEB;
  padding: 20px;
  text-align: center;
}
</style>