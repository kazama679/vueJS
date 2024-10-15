<template>
  <div>
    <h1>Count</h1>
    <p>{{ count }}</p>
    <button @click="handle">tăng</button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const count = computed(() => store.state.countModule.count);
const handle = () => {
  store.commit("increment");
};
</script>

<style></style>