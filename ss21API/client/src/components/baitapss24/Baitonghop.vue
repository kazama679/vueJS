<template>
  <div>
    <!-- Phần tìm kiếm và lọc bài viết -->
    <div class="search-filter">
      <div class="search-input">
        <input
          type="text"
          placeholder="Nhập từ khóa tìm kiếm"
          v-model="searchKeyword"
          @input="handleSearch"
        />
      </div>
      <select class="filter-select" v-model="selectedFilter">
        <option value="">Lọc bài viết</option>
        <option value="published">Đã xuất bản</option>
        <option value="draft">Bản nháp</option>
      </select>
      <button class="add-new-post" @click="handleShowForm">
        Thêm mới sinh viên
      </button>
    </div>

    <!-- Phần loading -->
    <div v-if="loading" class="loading-overlay">
      <div class="spinner"></div>
    </div>

    <!-- Phần bảng quản lý sinh viên -->
    <table class="post-table" v-if="!loading">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Ngày tạo</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in paginatedStudents" :key="student.id">
          <td>{{ index + 1 }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.address }}</td>
          <td>{{ student.created_at }}</td>
          <td>
            <span :class="{'status-published': student.status, 'status-draft': !student.status}">
              {{ student.status ? 'Đã xuất bản' : 'Bản nháp' }}
            </span>
          </td>
          <td>
            <button class="block-button">Chặn</button>
            <button class="edit-button">Sửa</button>
            <button class="delete-button" @click="deleteStudentById(student.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Phân trang -->
    <div class="pagination" v-if="!loading">
      <button @click="prevPage" :disabled="currentPage === 1">Trước</button>
      <span>Trang {{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Sau</button>
    </div>

    <From v-if="StatusFrom" @onClose="handleCloseForm"></From>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import From from "../Form.vue";

const students = ref([]);
const loading = ref(false); // Trạng thái loading
const currentPage = ref(1);
const pageSize = 5;
const searchKeyword = ref("");
const selectedFilter = ref("");

// Lấy dữ liệu từ API
const fetchStudents = async () => {
  loading.value = true; // Bắt đầu loading
  try {
    const response = await axios.get("http://localhost:8080/students");
    students.value = response.data;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  } finally {
    loading.value = false; // Kết thúc loading
  }
};

// Lọc và tìm kiếm sinh viên
const filteredStudents = computed(() => {
  let filtered = students.value;

  if (searchKeyword.value) {
    filtered = filtered.filter((student) =>
      student.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
    );
  }

  return filtered;
});

// Phân trang
const totalPages = computed(() => Math.ceil(filteredStudents.value.length / pageSize));

const paginatedStudents = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredStudents.value.slice(start, end);
});

// Chuyển trang
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// Hàm xử lý tìm kiếm
const handleSearch = () => {
  currentPage.value = 1;
};

// Hiển thị form thêm sinh viên
const StatusFrom = ref(false);
const handleShowForm = () => {
  StatusFrom.value = true;
};

const handleCloseForm = () => {
  StatusFrom.value = false;
};

onMounted(() => {
  fetchStudents();
});


const deleteStudentById = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/students/${id}`);
    console.log(response.data);
    fetchStudents();
  } catch (err) {
    console.log(err);
  }
};
</script>

<style scoped>
.search-filter {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  margin-right: 10px;
}

.search-input input {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.filter-select {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.add-new-post {
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 5px;
}

.post-table {
  width: 100%;
  border-collapse: collapse;
}

.post-table th,
.post-table td {
  padding: 10px;
  border: 1px solid #ddd;
}

.post-table thead tr {
  background-color: #f3f3f3;
}

.post-table td img {
  border-radius: 50%;
}

.status-published {
  background-color: #d4edda;
  color: #155724;
  padding: 5px 10px;
  border-radius: 5px;
}

.status-draft {
  background-color: #f8d7da;
  color: #721c24;
  padding: 5px 10px;
  border-radius: 5px;
}

.block-button {
  background-color: #ffc107;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
}

.edit-button {
  background-color: #17a2b8;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
}

.delete-button {
  background-color: #dc3545;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
}

/* Loading overlay */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  border: 8px solid #ddd;
  border-top: 8px solid #6c63ff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.pagination button {
  padding: 8px 12px;
  border: none;
  background-color: #6c63ff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
