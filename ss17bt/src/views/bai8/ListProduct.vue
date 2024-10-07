<template>
    <div>
      <h1>Trang danh sách sản phẩm</h1>
      <div class="search-bar">
        <input v-model="searchQuery" type="text" placeholder="Tìm kiếm theo tên" />
        <button @click="searchProducts">Tìm kiếm</button>
      </div>
      
      <div class="product-list">
        <div v-for="product in products" :key="product.id" class="product-item">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <h2>{{ product.name }}</h2>
          <p>{{ product.price.toLocaleString() }} VND</p>
          <button @click="nextToCard(product.id)">Xem chi tiết</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
import { useRouter } from 'vue-router';
  const router = useRouter()
  const searchQuery = ref("")
  const products = ref([
    { id: 1, name: 'iPhone 15 Pro', price: 30000000, image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png' },
    { id: 2, name: 'OPPO Reno11 5G', price: 10600000, image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png' },
    { id: 3, name: 'Vivo Y17s', price: 3300000, image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png' },
    { id: 4, name: 'Nokia 8210 4G', price: 3300000, image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png' }
  ])
  const nextToCard=(id)=>{
    router.push(`/product-detail/${id}`)
  }
  const searchProducts=()=>{

  }
  </script>
  
  <style scoped>
  .product-list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .product-item {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    width: 200px;
  }
  
  .product-image {
    max-width: 100%;
    height: auto;
  }
  
  .search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .search-bar input {
    padding: 8px;
    font-size: 16px;
    width: 300px;
    margin-right: 10px;
  }
  
  .search-bar button {
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  