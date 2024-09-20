<template>
  <div>
    <h2>Tính tổng tiền trong giỏ hàng</h2>
    <input type="number" v-model="inputValue" placeholder="Nhập giá tiền" />
    <button @click="addToCart">Add to cart</button>
    <p>Tổng tiền trong giỏ hàng: {{ totalCost }}</p>
    <p>Giá trị hiện tại từ input: {{ inputValue }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const totalCost = ref(0);
const inputValue = ref(0);

const addToCart = () => {
  totalCost.value += parseFloat(inputValue.value);
  inputValue.value = 0; 
};
</script>

<style>
</style>