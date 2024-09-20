<script setup>
import { ref, computed } from "vue";

    const index=ref(0)

    const caculateFibonacy=()=>{
        const fib=(n)=>{
            if(n<=1)return n;
            return fib(n-1)+fib(n-2)
        }
        return fib(index.value)
    }
    const handle=()=>{
        index.value++
    }
</script>

<template>
  <div>
    <h1>Computed</h1>
    <p>Tại vị trị thứ {{ index }} thì số Fib = {{ caculateFibonacy }}</p>
    <button @click="handle">aaa</button>
  </div>
</template>

<style>

</style>