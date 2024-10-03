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
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Baitaptonghop from './components/Baitaptonghop.vue'
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