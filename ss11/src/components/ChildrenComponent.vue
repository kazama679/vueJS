<template>
  <div>Children component
    <p>{{count}}</p>
    <input type="text" v-model="inputValue">
    <button @click="handleCount">count</button>
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from "vue";
const count=ref(0)
const inputValue=ref('')
// các phương thức trong giai đoạn mounting (Gắn kết)
onBeforeMount(()=>{
    // count.value=5
    console.log("Component before mount");
})

onMounted(() => {
    // count.value=6
  console.log('Component mounted');
})

// Các phương thức trong giai đoạn updation
onBeforeUpdate(() => {
    document.title = inputValue.value
  console.log('BeforeUpdate');
})

const handleCount = ()=>{
    count.value++
}

onUpdated(() => {
    inputValue.value = 'Nguyễn Xuân Quang'
  console.log('Update');
})

onBeforeUnmount(() => {
    console.log('BeforeUnmount');
})

onUnmounted(() => {
    console.log('Unmounted');
})
</script>

<style>

</style>