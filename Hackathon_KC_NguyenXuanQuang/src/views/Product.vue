<template>
    <div class="product-manager">
      <h2>Manager Product</h2>
      <div class="add-product">
        <button @click="addNewProduct" class="btn btn-add">
          Add New Product
        </button>
        <p>
          <input 
            type="text" 
            placeholder="Tìm kiếm theo tên" 
            v-model="searchQuery" 
            @input="filterProducts"
          />
        </p>
      </div>
  
      <table class="product-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in filteredProducts" :key="product.id">
            <td>{{ index + 1 }}</td>
            <td>
              <img
                :src="product.image"
                alt="Product Image"
                class="product-image"
              />
            </td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }} đ</td>
            <td>{{ product.quantity }}</td>
            <td>
              <button @click="editProduct(product)" class="btn btn-edit">
                Edit
              </button>
              <button @click="confirmDelete(product.id)" class="btn btn-delete">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <Form
        v-if="isShowForm"
        @onClose="handleCloseForm"
        @onAddProduct="addProduct"
        ref="formComponent"
      ></Form>
  
      <FormEdit
        v-if="isShowFormEdit"
        :product="selectedProduct"
        @onCloseEdit="handleCloseFormEdit"
        @onEditProduct="updateProduct"
        ref="formEditComponent"
      ></FormEdit>
  
      <div v-if="showDelete" class="modal">
        <div class="modal-content">
          <h3>Xác nhận</h3>
          <p>Bạn có chắc chắn muốn xóa sản phẩm này?</p>
          <div class="modal-actions">
            <button @click="cancelDelete" class="btn btn-cancel">Cancel</button>
            <button @click="deleteProduct" class="btn btn-delete-confirm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Form from "@/components/Form.vue";
  import FormEdit from "@/components/FormEdit.vue";
  
  const products = ref(JSON.parse(localStorage.getItem("products")) || []);
  const isShowForm = ref(false);
  const isShowFormEdit = ref(false);
  const showDelete = ref(false);
  let idDelete = ref(null);
  const selectedProduct = ref({});
  const searchQuery = ref("");
  const filteredProducts = ref(products.value);
  
  const addNewProduct = () => {
    isShowForm.value = true;
  };
  
  const handleCloseForm = () => {
    isShowForm.value = false;
  };
  
  const handleCloseFormEdit = () => {
    isShowFormEdit.value = false;
  };
  
  const addProduct = (newProduct) => {
    products.value.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products.value));
    isShowForm.value = false;
  };
  
  const editProduct = (product) => {
    selectedProduct.value = { ...product };
    isShowFormEdit.value = true;
  };
  
  const updateProduct = (updatedProduct) => {
    const index = products.value.findIndex(
      (product) => product.id === updatedProduct.id
    );
    if (index !== -1) {
      products.value[index] = updatedProduct;
      localStorage.setItem("products", JSON.stringify(products.value));
    }
    isShowFormEdit.value = false;
  };
  
  const confirmDelete = (id) => {
    idDelete.value = id;
    showDelete.value = true;
  };
  
  const cancelDelete = () => {
    idDelete.value = null;
    showDelete.value = false;
  };
  
  const deleteProduct = () => {
    if (idDelete.value != null) {
      const index = products.value.findIndex(
        (product) => product.id === idDelete.value
      );
      if (index !== -1) {
        products.value.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products.value));
      }
    }
    showDelete.value = false;
  };
  
  const filterProducts = () => {
    filteredProducts.value = products.value.filter(product => 
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  };
  
  </script>
  
<style scoped>
.product-manager {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h2 {
  margin-bottom: 20px;
}

.add-product {
  margin-bottom: 20px;
  text-align: right;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.btn-add {
  background-color: blue;
  color: white;
}

.btn-edit {
  background-color: #ffcc00;
  margin-right: 10px;
}

.btn-delete {
  background-color: #ff4500;
  color: white;
}

.product-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.product-table th,
.product-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.product-table th {
  background-color: #f2f2f2;
}

.product-image {
  width: 50px;
  height: 50px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn-cancel {
  background-color: #ccc;
}

.btn-delete-confirm {
  background-color: #ff4500;
  color: white;
}
</style>