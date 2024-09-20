<template>
  <form @submit="handleSubmit" action="">
    <input type="text">
    <button>Submit</button>
  </form>
</template>

<script setup>
const handleSubmit=()=>{
    alert('Form submission prevented!')
}
</script>

<style>

</style>