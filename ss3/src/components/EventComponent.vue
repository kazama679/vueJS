<template>
  <button v-on:click='handleClick'>bấm vào tao</button>
  <button v-on:click='handleDelete(1)'>Delete</button>
  <button @click='handleGetEvent'>Event info</button>

  <form @submit="handleGetSubmit">
    <button type="submit">Submit</button>
  </form>
  <button @keydown.esc='keyDown1'>đóng form</button>
</template>

<script setup>
const handleClick=()=>{
    console.log('đã bấm 1');
}

const handleDelete=(id)=>{
    console.log(id);
}

const handleGetEvent=(e)=>{
    console.log(e);
}

const handleGetSubmit=()=>{
    alert('Submited')
}

const keyDown1=()=>{
    alert('Đóng form')
}
</script>

<style>

</style>