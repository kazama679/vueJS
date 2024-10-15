<template>
  <div class="flex">
    <Sidebar />
    <main class="flex-1 p-5 bg-gray-50">
      <header class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Products</h1>
        <div class="flex items-center space-x-6">
          <div class="relative">
            <IoMdSearch class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input type="text" class="pl-8 pr-4 py-2 border rounded-full w-72 bg-gray-100"
              placeholder="Tìm kiếm theo tên sản phẩm" value={search} />
          </div>
        </div>
      </header>
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <div class="flex justify-between mb-4">
          <button class="bg-blue-500 text-white px-4 py-2 rounded">
            + Add Product
          </button>
          <div class="flex gap-2">
            <!-- Lọc theo trạng thái -->
            <select class="border px-4 py-2 rounded" value={filterStatus}>
              <option value="">Lọc theo trạng thái</option>
              <option value="true">Mở</option>
              <option value="false">Đóng</option>
            </select>

            <!-- Sắp xếp theo tên -->
            <select class="border px-4 py-2 rounded" value={sortOrder}>
              <option value="">Sắp xếp theo tên</option>
              <option value="az">Sắp xếp từ A đến Z</option>
              <option value="za">Sắp xếp từ Z đến A</option>
            </select>
          </div>
        </div>
        <table class="table-auto w-full border-collapse border border-gray-200">
          <thead class="bg-gray-100">
            <tr>
              <th class="px-4 py-2 border text-center">STT</th>
              <th class="px-4 py-2 border text-center">Name</th>
              <th class="px-4 py-2 border text-center">Trạng thái</th>
              <th class="px-4 py-2 border text-center">Mô tả</th>
              <th class="px-4 py-2 border text-center">Action</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in category" :key="item.id">
            <tr key={product.id} class="text-center">
              <td class="px-4 py-2 border">{{ index + 1 }}</td>
              <td class="px-4 py-2 border truncate max-w-xs">
                <p class="truncate overflow-hidden whitespace-nowrap">{{ item.name }}</p>
              </td>
              <td class="px-4 py-2 border">{{ item.status ? "Mở" : "Đóng" }}</td>
              <td class="px-4 py-2 border">{{ item.description }}</td>
              <td class="px-4 py-2 border">
                <div class="flex justify-center gap-2">
                  <button class="bg-blue-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                  <button @click="deleteProduct(product.id)" class="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-center space-x-2 mt-4">
          <button key={page} class="px-3 py-1 border rounded currentPage bg-blue-500 text-white">

          </button>
        </div>
      </div>
      <ProductForm product={editingProduct} categories={categories} onSubmit={handleSubmitForm} />

      <!-- form xác nhận xóa -->
      <div v-if="deleteComfirm" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-bold mb-4">Xác nhận xóa sản phẩm</h2>
          <p>Bạn có chắc chắn muốn xóa sản phẩm này?</p>
          <div class="flex justify-end gap-4 mt-6">
            <button @click="closeDelete" class="px-4 py-2 bg-gray-500 text-white rounded">
              Hủy
            </button>
            <button class="px-4 py-2 bg-red-500 text-white rounded">
              Xóa
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import Sidebar from '@/components/Sidebar.vue'

const category = ref([]);

const fetchData = async () => {
  try {
    const respones = await axios.get("http://localhost:8080/classify");
    category.value = respones.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchData();
});

// xóa danh mục
const deleteComfirm = ref(false)
const closeDelete = () => {
  deleteComfirm.value = false
}
const deleteProduct = (id) => {

}
</script>

<style></style>