<template>
    <div>Thông tin chi tiết
        <div>
            <p>id: {{ users[id].id }}</p>
            <p>UserName: {{ users[id].name }}</p>
            <p>Email: {{ users[id].email }}</p>
            <p>Address: {{ users[id].address }}</p>
        </div>
    </div>
  </template>
  
  <script setup>
import { useRoute } from 'vue-router';

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

  const route = useRoute()
  const id = route.params.id-1;
  
  </script>
  
  <style>
  
  </style>