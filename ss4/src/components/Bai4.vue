<script setup>
import { ref, watch } from "vue"

const text = ref('')

const handle = (e) => {
  text.value = e.target.value
}
watch(text, (newValue, oldValue) => {
  console.log(`cũ: ${oldValue}, mới: ${newValue}`)
})
</script>

<template>
  <div>
    <p>Giá trị hiện tại: {{ text }}</p>
    <input @input="handle" type="text" />
  </div>
</template>

<style>

</style>