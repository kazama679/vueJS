<template>
  <div class="task-manager">
    <h1>Quản lý công việc</h1>
    <div class="input-container">
      <input type="text" placeholder="Nhập tên công việc" v-model="newTask" />
      <button v-if="!checkEdit" @click="addTask" class="add-task-button">Thêm công việc</button>
      <button v-else @click="editTaskSubmit" class="add-task-button">Sửa công việc</button>  
    </div>
    
    <div class="filter-container">
      <button :class="{'active': filter === 'all'}" @click="filterTasks('all')">Tất cả</button>
      <button :class="{'active': filter === 'status'}" @click="filterTasks('status')">Hoàn thành</button>
      <button :class="{'active': filter === 'in-progress'}" @click="filterTasks('in-progress')">Đang thực hiện</button>
    </div>

    <ul class="task-list">
      <li v-for="task in newArr" :key="task.id">
        <div>
          <input @click="editTaskStatus(task.id)" type="checkbox" v-model="task.status" />
          <span :class="{'status': task.status}">{{ task.name }}</span>
        </div>
        <div>
          <button @click="editTask(task)" class="edit-task"><i class="fas fa-pencil-alt"></i></button>
          <button @click="deleteTask(task.id)" class="delete-task"><i class="fas fa-trash-alt"></i></button>
        </div>
      </li>
    </ul>

    <div class="action-buttons">
      <button @click="deletestatusTasks" class="delete-status">Xóa công việc hoàn thành</button>
      <button @click="deleteAllTasks" class="delete-all">Xóa tất cả công việc</button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const tasks = ref([]);
const newArr = ref([]);
const newTask = ref(""); // Lưu trữ giá trị tên công việc (dùng cho cả thêm và sửa)
const checkEdit = ref(false); // Kiểm tra trạng thái sửa
const idEdit = ref(null); // Lưu ID của công việc đang chỉnh sửa

// Lấy dữ liệu từ API
const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/jobs");
    tasks.value = response.data;
    newArr.value = tasks.value; 
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchData();
});

// Thêm công việc mới
const addTask = async () => {
  if (newTask.value.trim() !== '') {
    const newTaskObject = {
      id: Math.ceil(Math.random() * 9999999),
      name: newTask.value,
      status: false
    };

    try {
      await axios.post("http://localhost:8080/jobs", newTaskObject);
      tasks.value.push(newTaskObject);
      newArr.value = tasks.value;
      newTask.value = ''; 
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  }
};

// Sửa trạng thái công việc (hoàn thành/chưa hoàn thành)
const editTaskStatus = async (id) => {
  const taskToEdit = tasks.value.find(task => task.id === id);
  if (taskToEdit) {
    taskToEdit.status = !taskToEdit.status;
    try {
      await axios.put(`http://localhost:8080/jobs/${id}`, taskToEdit);
      newArr.value = tasks.value; 
    } catch (error) {
      console.error("Failed to edit task:", error);
    }
  }
};

// Bắt đầu sửa công việc
const editTask = (task) => {
  checkEdit.value = true; // Chuyển sang chế độ sửa
  idEdit.value = task.id; // Lưu lại ID của công việc đang sửa
  newTask.value = task.name; // Hiển thị tên công việc trong ô input
};

// Xác nhận sửa công việc
const editTaskSubmit = async () => {
  if (idEdit.value !== null && newTask.value.trim() !== '') {
    const taskToEdit = tasks.value.find(task => task.id === idEdit.value);
    if (taskToEdit) {
      taskToEdit.name = newTask.value;
      try {
        await axios.put(`http://localhost:8080/jobs/${idEdit.value}`, taskToEdit);
        newArr.value = tasks.value; 
      } catch (error) {
        console.error("Failed to update task:", error);
      }
    }
    // Reset lại trạng thái sau khi sửa xong
    checkEdit.value = false;
    newTask.value = '';
    idEdit.value = null;
  }
};

// Xóa công việc
const deleteTask = async (id) => {
  try {
    await axios.delete(`http://localhost:8080/jobs/${id}`);
    tasks.value = tasks.value.filter(task => task.id !== id);
    newArr.value = tasks.value;
  } catch (error) {
    console.error("Failed to delete task:", error);
  }
};

// Lọc công việc theo trạng thái
const filterTasks = (filterType) => {
  if (filterType === 'all') {
    newArr.value = tasks.value; 
  } else if (filterType === 'status') {
    newArr.value = tasks.value.filter(item => item.status === true);
  } else if (filterType === 'in-progress') {
    newArr.value = tasks.value.filter(item => item.status === false);
  }
};
</script>



<style scoped>
.task-manager {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

.input-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.add-task-button {
  background-color: #6c63ff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
}

.filter-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button.active {
  background-color: #6c63ff;
  color: white;
}

.task-list {
  list-style-type: none;
  padding: 0;
}

.task-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.task-list li .status {
  text-decoration: line-through;
}

.edit-task, .delete-task {
  background: none;
  border: none;
  cursor: pointer;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.delete-status {
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 4px;
}

.delete-all {
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 4px;
}
</style>
