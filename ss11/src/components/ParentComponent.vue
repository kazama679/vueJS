<template>
  <div>Parent component
    <!-- <button @click="handleShow">Toggle</button> -->
    <!-- <div v-if="isShow"><ChildrenComponent></ChildrenComponent></div> -->
    <Time></Time>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildrenComponent from './ChildrenComponent.vue'
import Time from './Time.vue'
const isShow = ref(false);
const handleShow=()=>{
    isShow.value= !isShow.value
}
</script>

<style>

</style>