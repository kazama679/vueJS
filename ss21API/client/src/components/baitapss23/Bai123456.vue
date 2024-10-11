<template>
  <div>
    <h2>Danh sách sản phẩm</h2>
    <p><input v-model="student.name" type="text" />Name</p>
    <p><input v-model="student.email" type="text" />Email</p>
    <p><input v-model="student.address" type="text" />Address</p>
    <p><input v-model="student.phone" type="text" />Phone</p>
    <button v-if="buttonStatus" @click="addStudent">Thêm mới</button>
    <button v-else @click="editStudent">Sửa</button>
    <table border="1">
      <thead>
        <tr>
          <th>STT</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Created at</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in students" :key="item.id">
        <tr>
          <td>{{ index }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.phone }}</td>
          <td>
            <button @click="patchtStudentById(item.id)">
              {{ item.status ? "True" : "False" }}
            </button>
          </td>
          <td>{{ item.created_at }}</td>
          <td>
            <button @click="getStudentById(item.id)">Chi tiết</button>
            <button @click="putStudentById(item.id)">sửa</button>
            <button @click="deleteStudentById(item.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";

const idEdit = ref(null);

const students = ref([]);
const buttonStatus = ref(true);

const fetchData = async () => {
  try {
    const respones = await axios.get("http://localhost:8080/students");
    students.value = respones.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchData();
});

const getStudentById = async (id) => {
  try {
    await axios.get(`http://localhost:8080/students/${id}`);
    fetchData();
  } catch (err) {
    console.log(err);
  }
};

const addStudent = async () => {
  try {
    await axios.post(`http://localhost:8080/students`, {
      name: student.name,
      email: student.email,
      address: student.address,
      phone: student.phone,
      status: student.status,
      created_at: student.created_at,
    });
    fetchData();
  } catch (err) {
    console.log(err);
  }
};

const deleteStudentById = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/students/${id}`);
    console.log(response.data);
    fetchData();
  } catch (err) {
    console.log(err);
  }
};

const getCurrentDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
};

const student = reactive({
  id: "",
  name: "",
  email: "",
  address: "",
  phone: "",
  status: true,
  created_at: getCurrentDate(),
});

// đổi trạng thái
const patchtStudentById = async (id) => {
  try {
    const response = await axios.patch(`http://localhost:8080/students/${id}`);

    const statusStudent = response.data.status;

    const responseUpdate = await axios.patch(
      `http://localhost:8080/students/${id}`,
      {
        status: !statusStudent,
      }
    );
    console.log(responseUpdate);
    fetchData();
  } catch (err) {
    console.log(err);
  }
};

const putStudentById = async (id) => {
  buttonStatus.value = false;
  idEdit.value = id;

  const response = await axios.get(`http://localhost:8080/students/${id}`);

  student.id = response.data.id;
  student.name = response.data.name;
  student.email = response.data.email;
  student.address = response.data.address;
  student.phone = response.data.phone;
  student.status = response.data.status;
  student.created_at = response.data.created_at;
};

const editStudent = async () => {
  try {
    const response = await axios.put(
      `http://localhost:8080/students/${idEdit.value}`,
      student
    );

    console.log("response: ", response);

    fetchData();
  } catch (err) {
    console.log(err);
  }
  buttonStatus.value = true;
  student.name=''
  student.email=''
  student.address=''
  student.phone=''
};
</script>

<style></style>