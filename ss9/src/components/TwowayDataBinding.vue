<template>
  <div>
    <form @submit.prevent="handleSubmit">
        <h3>Thêm mới người dùng</h3>
        <div>Họ và tên: 
            <input v-model='userInfo.userName' type="text" placeholder="Nhập tên">
        </div>
        <div>Ngày sinh: 
            <input v-model='userInfo.dateOfBirth' type="date" placeholder="">
        </div>
        <div>Giới tính: 
            <input name="gender" type="radio" value='0' v-model='userInfo.render' placeholder="">Nam
            <input name="gender" type="radio" value='1' v-model='userInfo.render' placeholder="">Nữ
            <input name="gender" type="radio" value='2' v-model='userInfo.render' placeholder="">Khác
        </div>
        <div>Sở thích: 
            <input v-model='userInfo.hobbies' value='Chơi game' type="checkbox" placeholder="">Chơi game
            <input v-model='userInfo.hobbies' value='Code' type="checkbox" placeholder="">Code
            <input v-model='userInfo.hobbies' value='Bay' type="checkbox" placeholder="">Bay
        </div>
        <button>Thêm</button>
    </form>
    <h2>TÊN: {{userInfo.userName}}</h2>
    <h2>Date: {{userInfo.dateOfBirth}}</h2>
    <h2>Giới tính: 
        <t v-if="userInfo.render==0">Nam</t>
        <t v-else-if='userInfo.render==1'>Nữ</t>
        <t v-else>Khác</t>
    </h2>
    <h2>Sở thích: {{userInfo.hobbies}}</h2>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

// const userName=ref('')
// const dateOfBirth=ref('')
// const render=ref('0')
// const hobbies=ref([])

const userInfo = reactive({
    userName: '',
    dateOfBirth: '',
    render: '0',
    hobbies: []
})

const handleSubmit=()=>{
    // ngăn chặn load trang
    // e.preventDefault();
    console.log('đajasjdsa');
    // const user={
    //     userName: userName.value,
    //     dateOfBirth: dateOfBirth.value,
    //     render: render.value,
    //     hobbies: hobbies.value
    // }
    console.log(111111111111,userInfo);
}
</script>

<style>

</style>