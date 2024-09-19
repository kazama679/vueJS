<template>
  <div class="list-course">
    <h2>Danh sách khóa học</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>ReactJS</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListCourse',
};
</script>

<style scoped>
.list-course {
  font-family: Arial, sans-serif;
  border: 1px solid #ddd;
  padding: 10px;
  width: 200px;
}

h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

ul {
  list-style-type: decimal;
  padding-left: 20px;
}

li {
  font-size: 16px;
  line-height: 1.5;
}
</style>