<template>
  <div class="modal-all">
    <div class="modal">
      <h2>Add New Product</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input 
            v-model="product.name" 
            type="text" 
            id="name" 
            class="form-control" 
            ref="nameInput" 
          />
          <p v-if="err1" class="err">Tên không được để trống!</p>
          <p v-if="err2" class="err">Tên không được phép trùng!</p>
        </div>

        <div class="form-group">
          <label for="image">Image</label>
          <input 
            v-model="product.image" 
            type="text" 
            id="image" 
            class="form-control" 
          />
          <p v-if="err5" class="err">Hình ảnh không được để trống!</p>
        </div>

        <div class="form-group">
          <label for="price">Price</label>
          <input 
            v-model="product.price" 
            type="number" 
            id="price" 
            class="form-control" 
          />
          <p v-if="err3" class="err">Giá tối thiểu là 10.000 đ</p>
        </div>

        <div class="form-group">
          <label for="quantity">Quantity</label>
          <input 
            v-model="product.quantity" 
            type="number" 
            id="quantity" 
            class="form-control" 
          />
          <p v-if="err4" class="err">Số lượng tối thiểu là 1 và tối đa là 100</p>
        </div>

        <div class="form-actions">
          <button @click="handleClose" type="button" class="btn btn-close">Close</button>
          <button type="submit" class="btn btn-add">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";

const products = JSON.parse(localStorage.getItem("products")) || [];

const product = reactive({
  id: Math.ceil(Math.random() * 9999999),
  name: "",
  image: "",
  price: 0,
  quantity: 0,
});

const err1 = ref(false);
const err2 = ref(false);
const err3 = ref(false);
const err4 = ref(false);
const err5 = ref(false);

const emit = defineEmits(["onClose", "onAddProduct"]);
const nameInput = ref(null);

const handleClose = () => {
  emit("onClose");
};

const handleSubmit = () => {
  let isValid = true;

  if (!product.name) {
    err1.value = true;
    isValid = false;
  } else {
    err1.value = false;
  }

  const checkName = products.some((item) => item.name === product.name);
  if (checkName) {
    err2.value = true;
    isValid = false;
  } else {
    err2.value = false;
  }

  if (!product.image) {
    err5.value = true;
    isValid = false;
  } else {
    err5.value = false;
  }

  if (product.price < 10000) {
    err3.value = true;
    isValid = false;
  } else {
    err3.value = false;
  }

  if (product.quantity < 1 || product.quantity > 100) {
    err4.value = true;
    isValid = false;
  } else {
    err4.value = false;
  }

  if (isValid) {
    emit("onAddProduct", { ...product });
    handleClose();
  }
};

onMounted(() => {
    nameInput.value.focus();
});
</script>

<style scoped>
.modal-all {
  display: flex;
  justify-content: center;
}
.modal {
  margin-top: 100px;
  position: fixed;
  top: 0;
  height: 70%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.btn-close {
  background-color: #ccc;
}

.btn-add {
  background-color: #6a0dad;
  color: white;
}

.err {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>