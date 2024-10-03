<template>
  <!-- <v-btn @click="handleClick" variant="outlined">click me</v-btn>
  <v-combobox
    v-model="city"
    label="Chọn thành phố"
    :items="[
      'Hà Nội',
      'Hà Giang',
      'Hải Phòng',
      'Hồ Chí Minh',
      'Đan Phượng',
      'Nam Định',
    ]"
  ></v-combobox>
  <p>aaaaaaaaaa<i class="fa-solid fa-magnifying-glass"></i></p>

  <p>Thành phố: {{ city }}</p>
  <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="First name"
      ></v-text-field>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
  <p>{{ firstName }}</p> -->
  <div>
    <Baitaptonghop></Baitaptonghop>
    <Bai1></Bai1>
    <Bai2></Bai2>
    <Bai3></Bai3>
    <Bai4></Bai4>
    <Bai5></Bai5>
    <Bai6></Bai6>
    <Bai7></Bai7>
    <Bai8></Bai8>
    <h1>bài 9</h1>
    <Bai9></Bai9>
    <Bai10></Bai10>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Baitaptonghop from './components/Baitaptonghop.vue'
import Bai1 from './components/baitap/Bai1.vue'
import Bai2 from './components/baitap/Bai2.vue'
import Bai3 from './components/baitap/Bai3.vue'
import Bai4 from './components/baitap/Bai4.vue'
import Bai5 from './components/baitap/Bai5.vue'
import Bai6 from './components/baitap/Bai6.vue'
import Bai7 from './components/baitap/Bai7.vue'
import Bai8 from './components/baitap/Bai8.vue'
import Bai9 from './components/baitap/Bai9.vue'
import Bai10 from './components/baitap/Bai10.vue'
const handleClick = () => {
  console.log(1);
};
const city = ref("");
const firstName = ref("");
const rules = reactive([
  (value) => {
    if (value) return true;
    return "Tên k để trống";
  },
]);
</script>

<style>
</style>