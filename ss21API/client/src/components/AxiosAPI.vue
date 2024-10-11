<template>
  <div>
    <h2>Danh sách sản phẩm</h2>
    <button @click="addProduct">Thêm mới sản phẩm</button>
    <table border="1">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody v-for="(product,index) in products" :key="product.id">
            <tr>
                <td>{{index+1}}</td>
                <td>{{product.name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.quantity}}</td>
                <td>{{product.description}}</td>
                <td @click="getProductById(product.id)">Info</td>
                <td>Edit</td>
                <td @click="deleteProductById(product.id)">Delete</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const products = ref([]);

const fetchData = async () => {
    try{
        const respones = await axios.get("http://localhost:8080/products");
        products.value = respones.data
    }catch(error){
        console.log(error)
    }
};
console.log(products.value);

onMounted(() => {
    fetchData()
})

// hàm lấy thông tin chi tiết 1 sản phẩm theo id
const getProductById=async(id)=>{
    try{
        const response = await axios.get(`http://localhost:8080/products/${id}`)
        console.log(response.data);
        fetchData()
    }catch(err){
        console.log(err);
    }
}

// hàm thêm mới sản phẩm
const addProduct=async()=>{
    try{
        await axios.post(`http://localhost:8080/products`, {name:'Xoài xanh', price:22000, quantity: 22, description: "Hơi khô"})
        fetchData()
    }catch(err){
        console.log(err);
    }
}
 
// hàm lấy xóa 1 sản phẩm theo id
const deleteProductById=async(id)=>{
    try{
        const response = await axios.delete(`http://localhost:8080/products/${id}`)
        console.log(response.data);
        fetchData()
    }catch(err){
        console.log(err);
    }
}

</script>

<style></style>
