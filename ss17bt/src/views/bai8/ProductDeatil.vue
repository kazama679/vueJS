<template>
    <div>
        <div class="product-list">
        <div class="product-item">
          <img :src="products[id].image" :alt="products[id].name" class="product-image" />
          <h2>{{ products[id].name }}</h2>
          <p>{{ products[id].price.toLocaleString() }} VND</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

  const products = ref([
    { id: 1, name: 'iPhone 15 Pro', price: 30000000, image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png' },
    { id: 2, name: 'OPPO Reno11 5G', price: 10600000, image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png' },
    { id: 3, name: 'Vivo Y17s', price: 3300000, image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png' },
    { id: 4, name: 'Nokia 8210 4G', price: 3300000, image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png' }
  ])
const route = useRoute()
const id = (route.params.id)-=1;

  </script>
  
  <style>
  
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