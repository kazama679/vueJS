<template>
    <div class="login-form">
      <h2>Login account</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Your email</label>
          <input type="email" id="email" v-model="email" placeholder="name@company.com" required />
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        
        <button type="submit" class="btn">Login an account</button>
        
        <p class="register-text">Already have an account? 
      <router-link to="/register">Register here</router-link>
    </p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
//   router.push('/home')

const email=ref('')
const password=ref('')
const submitForm=()=>{
    if(email==''){
        alert("ko để trống email")
    }
    if(password==''){
        alert("ko để trống password")
    }
    if(!password==''&&!email==''){
        console.log(email,password);
    }
}
  </script>
  
  <style scoped>
  .login-form {
    width: 320px;
    margin: 50px auto;
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 0.9rem;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  input:focus {
    border-color: #6200ee;
    outline: none;
  }
  
  .btn {
    background-color: #6200ee;
    color: white;
    border: none;
    padding: 10px;
    width: 100%;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .btn:hover {
    background-color: #4500b0;
  }
  
  .register-text {
    margin-top: 15px;
    font-size: 0.9rem;
  }
  
  .register-text a {
    color: #6200ee;
    text-decoration: none;
  }
  
  .register-text a:hover {
    text-decoration: underline;
  }
  </style>
  