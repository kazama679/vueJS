<script setup>
  const arr=[1,2,3,4,5,6,7,8]
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