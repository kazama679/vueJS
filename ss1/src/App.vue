<script setup>
import Header from "./components/Header.vue";
import FooterComponent from "./components/FooterComponent.vue";
import UserInfo from "./components/UserInfo.vue";
import Modal from "./components/Modal.vue";
import ListCourse from "./components/ListCourse.vue";
import ColorBox from "./components/ColorBox.vue";
import Card from "./components/Card.vue";
import Calculation from "./components/Calculation.vue";
import FormatName from "./components/FormatName.vue";
</script>

<template>
  <div>
      <ListCourse />
      <div style="display: flex; gap: 10px;">
        <ColorBox color="red" />
        <ColorBox color="blue" />
        <ColorBox color="green" />
      <Card />
      <Calculation />
      <FormatName />
      <UserInfo />
      <Modal />
    <FooterComponent />
  </div>
</template>

<style>
section {
  margin-bottom: 30px;
}
</style>