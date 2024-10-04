<template>
  <div>ProductDetail
    <p>id: {{ id }}</p>
  </div>
</template>
  
  <script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const id = route.params.id
console.log(route.fullPath);

</script>
  
  <style>
</style>