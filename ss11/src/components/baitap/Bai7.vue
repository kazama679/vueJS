<template>
    <div>
        <!-- <p>{{ index }}</p> -->
        <input type="text" v-model="index">
    </div>
</template>

<script setup>
import { onUpdated, ref } from "vue";

const index = ref('')
const handle=()=>{
    index.value++
}
onUpdated(() => {
    document.title = index.value
})
</script>

<style></style>