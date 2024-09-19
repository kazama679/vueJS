<template>
  <div class="calculation">
    <h2>Danh sách kết quả</h2>
    <ul>
      <li>{{ a }} + {{ b }} = {{ add(a, b) }}</li>
      <li>{{ a }} - {{ b }} = {{ subtract(a, b) }}</li>
      <li>{{ a }} * {{ b }} = {{ multiply(a, b) }}</li>
      <li>{{ a }} / {{ b }} = {{ divide(a, b) }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Calculation',
  data() {
    return {
      a: 10,
      b: 10,
    };
  },
  methods: {
    add(x, y) {
      return x + y;
    },
    subtract(x, y) {
      return x - y;
    },
    multiply(x, y) {
      return x * y;
    },
    divide(x, y) {
      return x / y;
    },
  },
};
</script>

<style scoped>
.calculation {
  font-family: Arial, sans-serif;
  border: 1px solid #ddd;
  padding: 10px;
  width: 250px;
}

h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  font-size: 16px;
  line-height: 1.8;
}
</style>