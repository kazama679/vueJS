<template>
  <div v-bind:class="{colorDiv:isActive}">block</div>
  <div v-bind:style="{color:backgroundColor}">block</div>
</template>

<script setup>
const isActive=true
const backgroundColor = "blue"
</script>

<style>
.colorDiv{
    color:aqua
}
</style>