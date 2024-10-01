<template>
  <div>
        <div>Sở thích: 
            <input v-model='hobbies' value='Chơi game' type="checkbox" placeholder="">Chơi game
            <input v-model='hobbies' value='Code' type="checkbox" placeholder="">Code
            <input v-model='hobbies' value='Bay' type="checkbox" placeholder="">Bay
        </div>
    <h2>Sở thích: {{hobbies}}</h2>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hobbies=ref([])

</script>

<style>

</style>