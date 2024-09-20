<script setup>
import { ref } from "vue";

let count=ref(0);
// khi dùng ref:
    // để cập nhập lại giá trị thì bắt buộc phải truy cập value
    // khi sử dụng thì k cần p dùng value vẫn render đc như bth
const handleCount=()=>{
    // cập nhập lại giá trị count
    count.value+=8
}

let random=ref(0)
let random2=ref(0)
let arr=ref([])
const handleRandom=()=>{
    random.value = Math.ceil(Math.random()*9);
}
const handleRandom2=()=>{
    random2.value = Math.ceil(Math.random()*9);
    // arr.value.push(random2)
    arr.value=[...arr.value, random2]
}
</script>

<template>
    <div>
        <h1>đếm: {{count}}</h1>
        <button @click="handleCount">Count</button>
        <h1>số ngẫu nhiên: {{random}}</h1>
        <h1>số ngẫu nhiên2: {{random2}}</h1>
        <h1>mảng: {{arr}}</h1>
        <button @click="handleRandom">random</button>
        <button @click="handleRandom2">push number</button>
    </div>
</template>