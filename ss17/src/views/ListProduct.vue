<template>
  <div>
    <h1>ListProduct</h1>
    <input v-model="keySearch" type="text" />
    <input v-model="priceValue" type="number" />
    <button @click="handleSearch">Search</button>
    <p>productName: {{ result.productName }}</p>
    <p>price: {{ result.price }}</p>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useRouter, useRoute } from 'vue-router';
const router = useRouter() // chuyển trang
const route = useRoute() // lấy dữ liệu url

// lấy giá trị trên URL
const result = computed(()=>{
    return {
        productName: route.query.productName,
        price: route.query.price,
    }
})

const keySearch = ref("");
const priceValue = ref(0);
const handleSearch = () =>{
    // router.push(`/listProduct?sreach=${keySearch.value}`);
    router.push({path: "listProduct", query: {productName: keySearch.value, price: priceValue.value}})
}
</script>

<style></style>