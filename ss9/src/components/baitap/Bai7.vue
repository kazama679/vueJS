<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>Mã sản phẩm <input v-model='productInfo.id' type="text"></div>
      <div>Tên sản phẩm <input v-model='productInfo.name' type="text"></div>
      <div>Giá <input v-model='productInfo.price' type="text"></div>
      <div>Số lượng <input v-model='productInfo.quantity' type="number"></div>
      <button>Thêm mới</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const productInfo = reactive({
    id: '',
    name: '',
    price: 0,
    quantity: 0
})

const handleSubmit=()=>{
    console.log(111111111111,productInfo);
}
</script>

<style>

</style>