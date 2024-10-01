<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>Tên sinh viên <input v-model='userInfo.userName' type="text"></div>
      <div>Email <input v-model='userInfo.email' type="text"></div>
      <div>Mật khẩu <input v-model='userInfo.password' type="password"></div>
      <div>Địa chỉ <input v-model='userInfo.address' type="text"></div>
      <button>Đăng ký</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const userInfo = reactive({
  userName: '',
  email: '',
  password: '',
  address: ''
});

let users = JSON.parse(localStorage.getItem('users')) || [];

const handleSubmit = () => {
  if (userInfo.userName === '') {
    alert('Tên sinh viên không được để trống!');
    return;
  }
  if (userInfo.email === '') {
    alert('Email không được để trống!');
    return;
  }
  if (userInfo.password === '') {
    alert('Mật khẩu không được để trống!');
    return;
  }

  const checkEmail = users.find(user => user.email === userInfo.email);
  if (checkEmail) {
    alert('Email đã tồn tại!');
    return;
  }

  users.push({...userInfo});
  localStorage.setItem('users', JSON.stringify(users));

  userInfo.userName = '';
  userInfo.email = '';
  userInfo.password = '';
  userInfo.address = '';

  alert('Đăng ký tài khoản thành công!');
};

</script>

<style>
</style>
