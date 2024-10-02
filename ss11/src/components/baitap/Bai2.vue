<template>
    <div>
        <p>{{ count }}</p>
        <button @click="handle">Counter</button>
    </div>
</template>

<script setup>
import { onMounted, onUpdated, ref } from "vue"
const count =ref(0)
const handle=()=>{
    count.value++
}
onUpdated(() => {
    console.log('Dữ liệu đã thay đổi');
})
</script>

<style></style>