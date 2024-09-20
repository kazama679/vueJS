<script setup>
  const arr=[5,12,13,14,25,6,37,80]
  const newArr = arr.filter((item)=>{
    return item%2
  })
</script>

<template>
  <div>
    <p v-for="item1 in newArr" :key="item1">
      {{ item1 }}
    </p>
  </div>
</template>

<style>

</style>