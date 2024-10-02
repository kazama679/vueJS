<template>
  <div>Time
    <p>{{ time }}</p>
  </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from "vue";
const time=ref(0)
let timerId;
onBeforeMount(()=>{
    console.log("Component before mount");
})
// chỉ được gọi một lần sau khi component đã được render hoàn chỉnh, vì vậy nếu bạn muốn bắt đầu bộ đếm 
// thời gian (hoặc một hành động nào đó lặp đi lặp lại) ngay sau khi component hiển thị, thì đây là nơi thích hợp để đặt

onMounted(() => {
  console.log('Component mounted');
//   timerId = setInterval(() => {
//     time.value++
//   }, 1000);
})

onBeforeUpdate(() => {
  console.log('BeforeUpdate');
})

onUpdated(() => {
  console.log('Update');
})

onBeforeUnmount(() => {
    console.log('BeforeUnmount');
    clearInterval(timerId);
})

onUnmounted(() => {
    console.log('Unmounted');
})
</script>

<style>

</style>