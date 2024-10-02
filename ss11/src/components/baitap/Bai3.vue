<template>
    <div>
        <p>công ty: {{ arr[flag] }}</p>
        <p>tuổi: {{ age }}</p>
        <button @click="handle">random</button>
    </div>
</template>

<script setup>
import { ref } from "vue"

const flag=ref(0)
const arr=["Rikkei Academy", "Rikkei Education", "Rikkei Fukuoka"]
const age=ref(1)
const handle=()=>{
    age.value = Math.ceil(Math.random()*10);
    if(age.value==1||age.value==2||age.value==3){
        flag.value=0
    } else if(age.value==4||age.value==5||age.value==6){
        flag.value=1
    } else{
        flag.value=2
    }
}
</script>

<style></style>