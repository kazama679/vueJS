<template>
    <div>Danh sách:
      <div class="div1" v-for="item in users" :key="item.id">
        <div>
            <p>id: {{ item.id }}</p>
            <p>UserName: {{ item.name }}</p>
            <p>Email: {{ item.email }}</p>
            <p>Address: {{ item.address }}</p>
            <button @click="nextDetail(item.id)">Xem chi tiết</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const users = [
    {
        id:1,
        name: 'quang1',
        email:"quang1@gmail.com",
        address:'Hà Nội'
    },
    {
        id:2,
        name: 'quang2',
        email:"quang2@gmail.com",
        address:'Hà Nội'
    },
    {
        id:3,
        name: 'quang3',
        email:"quang3@gmail.com",
        address:'Hà Nội'
    }
  ]
  
import { useRouter } from 'vue-router'
const router = useRouter()
const nextDetail = (id) =>{
  router.push(`/Bai9/${id}`)
}
  </script>
  
  <style>
  .div1{
    display: flex;
    gap: 10px;
  }
  </style>