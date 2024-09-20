<script setup>
    const maybe='admin'

</script>

<template>
  <div>
    <p v-if="maybe== 'admin'">admin</p>
    <p v-else-if="maybe == 'user'">user</p>
    <p v-else>guest</p>
  </div>
</template>

<style>

</style>