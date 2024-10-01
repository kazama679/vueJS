<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>Họ và tên <input v-model='userInfo.userName' type="text"></div>
      <div>Email <input v-model='userInfo.email' type="email"></div>
      <div>Mật khẩu <input v-model='userInfo.password' type="text"></div>
      <div>Nhập lại mật khẩu <input v-model='userInfo.rePassword' type="text"></div>
      <button>Đăng ký</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const userInfo = reactive({
    email: '',
    password: '',
    rePassword: '',
    userName: ''
})

const handleSubmit=()=>{
    console.log(111111111111,userInfo);
}
</script>

<style>

</style>