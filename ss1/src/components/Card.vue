<template>
  <div class="card">
    <div class="card-image">
      Image
    </div>
    <div class="card-content">
      <h3>Title</h3>
      <button>Add to card</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style scoped>
.card {
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.card-image {
  background-color: #888;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
}

.card-content {
  padding: 16px;
}

button {
  padding: 8px 16px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #f0f0f0;
}
</style>