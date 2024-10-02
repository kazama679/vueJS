<template>
    <div>
        <p>Count: {{ count }}</p>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const count=ref(0)
onMounted(() => {
    setInterval(() => {
        count.value++
    }, 1000);
})
</script>

<style></style>