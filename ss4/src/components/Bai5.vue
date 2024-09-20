<template>
  <div>
    <h2>Giỏ hàng</h2>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }} - Số lượng: {{ item.quantity }}
        <button @click="increaseQuantity(index)">Tăng số lượng</button>
      </li>
    </ul>
    <p>Tổng số lượng sản phẩm: {{ totalQuantity }}</p>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

const cartItems = reactive([
  { name: 'Mền Mền Loại 1', quantity: 3 },
  { name: 'Mền Mền Loại 2', quantity: 5 },
  { name: 'Mền Mền Loại 3', quantity: 1 }
]);

const totalQuantity = computed(() => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
});

const increaseQuantity = (index) => {
  cartItems[index].quantity++;
};
</script>

<style>
</style>