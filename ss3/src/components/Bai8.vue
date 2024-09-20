<template>
  <div>
    <a href="https://www.google.com" @click.prevent="checkLink($event)">link đúng</a>
    <a href="hhttp://www.google.com" @click.prevent="checkLink($event)">link sai</a>
  </div>
</template>

<script setup>
const checkLink = (event) => {
    console.log(1111111,event.target.href);
    
  const url = event.target.href;
  if (!url.startsWith('https://')) {
    alert('Đường dẫn không hợp lệ');
  } else {
    window.location.href = url; 
  }
};
</script>

<style>
</style>