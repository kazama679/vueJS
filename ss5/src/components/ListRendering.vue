<script setup>
const listUser=[
    {
        id:1,
        name:'A'
    },
    {
        id:2,
        name:'B'
    },
    {
        id:3,
        name:'C'
    }
]
</script>

<template>
  <div>
    <ul>
        <li :key="item.id" v-for="item in listUser">
            <span>id: {{item.id}}</span>
            <span>name: {{item.name}}</span>
        </li>
    </ul>
  </div>
</template>

<style>

</style>