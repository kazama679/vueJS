<script setup>
import { reactive } from "vue"

    const userDemo=reactive ({
        Company:"rikkei",
        age:2
    })
    const handleUser=()=>{
        userDemo.age=1
    }
</script>

<template>
<div>
  <div>Company: {{userDemo.Company}}</div>
  <div>Age: {{userDemo.age}}</div>
  <button @click="handleUser">change</button>
</div>
</template>

<style>

</style>