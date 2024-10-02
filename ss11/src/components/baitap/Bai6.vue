<template>
    <div>
        <p>{{ count }}</p>
        <button @click="handle">Increment</button>
    </div>
</template>

<script setup>
import { onUpdated, ref } from "vue";

const count = ref(0)
const handle=()=>{
    count.value++
}
onUpdated(() => {
    document.title = count.value
})
</script>

<style></style>