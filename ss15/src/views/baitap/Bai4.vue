<template>
    <div class="container">
      <div class="form-box">
        <h2>Login account</h2>
        <form>
          <label for="email">Your email</label>
          <input type="email" id="email" placeholder="name@company.com" required />
          
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="********" required />
          
          <button type="submit" class="submit-btn">Login an account</button>
        </form>
        <p>Already have an account? <a href="/register">Register here</a></p>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
  }
  
  .form-box {
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  input:focus {
    outline: none;
    border-color: #7f56da;
  }
  
  .submit-btn {
    width: 100%;
    padding: 0.75rem;
    background-color: #7f56da;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-btn:hover {
    background-color: #6e48b7;
  }
  
  p {
    text-align: center;
    margin-top: 1rem;
  }
  
  a {
    color: #7f56da;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>