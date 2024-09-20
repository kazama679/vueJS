<script setup>
import { reactive, ref } from "vue";

const inputValue = ref('')
const listJob=reactive(JSON.parse(localStorage.getItem('jobs')||'[]'))
const saveData=(key,data)=>{
    localStorage.setItem(key, JSON.stringify(data))
}
const handleAddJob=()=>{
    // validate
    if(!inputValue.value){
        alert("Tên công việc k đc để trống")
        return
    }

    // kiểm tra trùng tên
    const findJobByName = listJob.find((item)=>item.name===inputValue)
    console.log(1111111,findJobByName);
    if(findJobByName){
        alert(`Tên công việc ${inputValue} đã tồn tại`)
        return
    }
    // thêm dữ liệu vào 1 mảng
    listJob.push({
        id: Math.ceil(Math.random()*9999999),
        name: inputValue.value,
        status: false
    })
    // lưu dữ liệu lên local
    saveData('jobs',listJob)
    // reset 
    inputValue.value =''
}

const handleUpdateStatus=(id)=>{
    console.log(id);
    const updateJob = listJob.findIndex((item)=>{
        return item.id === id
    })
    console.log(updateJob);
    listJob[updateJob].status = !listJob[updateJob].status
    saveData('jobs',listJob)
}

const handleDelete=(id)=>{
    const isConfirm = confirm(`bạn có chắc chắn công việc ${id.name} hay k?`)
    if(isConfirm){
    const deleteJob = listJob.filter((item)=>{
        return item.id !== id.id
    })
    console.log(22222222222,deleteJob);
    listJob.splice(0, listJob.length, ...deleteJob)
    saveData('jobs',listJob)
    }
}

const jobHoanThanh=(job)=>{
    const newJob = listJob.filter((item)=>{
        return item.status ===true
    })
    return newJob
}
</script>

<template>
  <div class="container">
    <div class="todo">
      <h3>Danh sách công việc</h3>
      <header class="header">
        <input v-model="inputValue" type="text" class="input" />
        <button @click="handleAddJob" class="button button-add">Add job</button>
      </header>

      <ul v-for="item in listJob" :key="item.id" class="list-item">
        <li class="item">
          <div class="left">
            <input @click="handleUpdateStatus(item.id)" :checked="item.status" type="checkbox" id="" />
            <label :style="{textDecoration: item.status ? 'line-through' : 'none' }" for="">{{item.name}}</label>
          </div>
          <div class="right">
            <button @click="handleDelete(item)" class="button button-delete">Delete</button>
          </div>
        </li>
      </ul>

      <footer class="footer">
        <p>Công việc hoàn thành:</p>
        <p><b> {{jobHoanThanh(listJob).length}} </b> / <b> {{listJob.length}} </b></p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heading {
  text-align: center;
  font-size: 24px;
  padding-bottom: 24px;
  text-decoration: line-through; 
}

.todo {
  width: 600px;
  border: 1px solid #dadada;
  padding: 20px 24px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 12px;
}

.input {
  height: 36px;
  border: 1px solid #dadada;
  outline: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  flex: 1;
  padding: 0 16px;
}

.button {
  height: 36px;
  border: 1px solid transparent;
  color: #fff;
  outline: none;
  border-radius: 4px;
  padding: 0 16px;
  cursor: pointer;
}

.button-add {
  background-color: blue;
}

.button-delete {
  background-color: red;
}

.list-item {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

input[type="checkbox"] {
  height: 18px;
  width: 18px;
}

.left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer {
  display: flex;
  gap: 8px;
}
</style>