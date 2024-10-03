<template>
  <div class="w-[100%] m-auto mt-4 h-[100vh]">
    <main class="main">
      <header class="d-flex justify-content-between mb-3">
        <h3>Nhân viên</h3>
        <button @click="handleShowForm" class="btn btn-primary">
          Thêm mới nhân viên
        </button>
      </header>
      <div class="d-flex align-items-center justify-content-end gap-2 mb-3">
        <input
          style="width: 350px"
          type="text"
          class="form-control"
          placeholder="Tìm kiếm theo email"
        />
        <i class="fa-solid fa-arrows-rotate" title="Refresh"></i>
      </div>
      <!-- Danh sách nhân viên -->
      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th colspan="2">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employeeItem, index) in listEmployee" :key="employeeItem.id">
            <td>{{ index + 1 }}</td>
            <td>{{ employeeItem.name }}</td>
            <td>{{ employeeItem.dateOfbBirth }}</td>
            <td>{{ employeeItem.email }}</td>
            <td>{{ employeeItem.address }}</td>
            <td>
              <div v-if="employeeItem.status" class="d-flex align-items-center gap-2">
                <div class="status status-active"></div>
                <span> Đang hoạt động</span>
              </div>
              <div v-else class="d-flex align-items-center gap-2">
                <div class="status status-stop"></div>
                <span> Ngừng hoạt động</span>
              </div>
            </td>
            <td>
              <span class="button button-edit" @click="handleEdit(employeeItem)">Sửa</span>
            </td>
            <td>
              <span class="button button-delete" @click="handleDelete(employeeItem.id)">Xóa</span>
            </td>
          </tr>
        </tbody>
      </table>
      <footer class="d-flex justify-content-end align-items-center gap-3">
        <select class="form-select">
          <option selected>Hiển thị 10 bản ghi trên trang</option>
          <option>Hiển thị 20 bản ghi trên trang</option>
          <option>Hiển thị 50 bản ghi trên trang</option>
          <option>Hiển thị 100 bản ghi trên trang</option>
        </select>
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </footer>
    </main>

    <!-- Form quản lý nhân viên -->
    <FormEmployee
      v-if="isShowForm"
      @onClose="handleCloseForm"
      :listEmployee="listEmployee"
      :employeeToEdit="employeeToEdit"
    />
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import FormEmployee from "./FormAdd.vue";

const listEmployee = reactive(
  JSON.parse(localStorage.getItem("employees")) || []
);

const isShowForm = ref(false);
const employeeToEdit = ref(null);

// Hàm mở form thêm hoặc sửa nhân viên
const handleShowForm = () => {
  employeeToEdit.value = null; // Thiết lập null nếu là thêm mới
  isShowForm.value = true;
};

const handleEdit = (employee) => {
  employeeToEdit.value = { ...employee }; // Copy thông tin nhân viên để sửa
  isShowForm.value = true;
};

// Hàm đóng form
const handleCloseForm = () => {
  isShowForm.value = false;
};

// Hàm xóa nhân viên
const handleDelete = (id) => {
  const index = listEmployee.findIndex(emp => emp.id === id);
  if (index !== -1) {
    listEmployee.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(listEmployee));
  }
};
</script>

<style>
</style>