<template>
  <div>
    <ParentComponent></ParentComponent>
    <Bai1></Bai1>
    <Bai2></Bai2>
    <Bai3></Bai3>

    <h1>bài 4</h1>
    <button @click="handle">Increase age</button>
    <Bai4 :age="age"></Bai4>

    <h1>bài 5</h1>
    <button @click="handle5">Toggle</button>
    <p v-if="check5"><Bai5></Bai5></p>

    <h1>bài 6</h1>
    <Bai6></Bai6>

    <Bai7></Bai7>
    <Bai8></Bai8>
    <Bai9></Bai9>
    <Bai10></Bai10>
    <h1>bài 11</h1>
    <Bai11></Bai11>
  </div>
</template>

<script setup>
// import ParentComponent from './components/ParentComponent.vue'
import Bai1 from './components/baitap/Bai1.vue'
import Bai2 from './components/baitap/Bai2.vue'
import Bai3 from './components/baitap/Bai3.vue'
import Bai4 from './components/baitap/Bai4.vue'
import Bai5 from './components/baitap/Bai5.vue'
import Bai6 from './components/baitap/Bai6.vue'
import Bai7 from './components/baitap/Bai7.vue'
import Bai8 from './components/baitap/Bai8.vue'
import Bai9 from './components/baitap/Bai9.vue'
import Bai10 from './components/baitap/Bai10.vue'
import Bai11 from './components/baitap/Bai11.vue'
import { ref } from 'vue'

// bài 4
const age = ref(0)

const handle = () => {
  age.value++
}
// end-bài 4

// bài 5
const check5 = ref(false)

const handle5 = () => {
  check5.value = !check5.value
}
// end-bài 5

</script>

<style>

</style>