<template>
  <div>
    Đăng nhập tài khoản
    <div>Email <input v-model="userLogin.email" type="email"></div>
    <div>Mật khẩu <input v-model="userLogin.password" type="password"></div>
    <button @click="handle">Đăng nhập</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";

let users = JSON.parse(localStorage.getItem('users')) || [];
const userLogin = reactive({
  email: '',
  password: '',
});
const handle=()=>{
  const check1 = users.find(user => user.email === userLogin.email);
  const check2 = users.find(user => user.password === userLogin.password);
  if(check2&&check1){
    alert("Đăng nhập thành công")
  }else{
    alert("Đăng nhập thất bại")
  }
}
</script>

<style>

</style>