<template>
  <div class="user-info">
    <h2>Thông tin cá nhân</h2>
    <ul>
      <li>Họ và tên: <strong>{{ user.fullName }}</strong></li>
      <li>Giới tính: {{ user.gender }}</li>
      <li>Ngày sinh: <strong>{{ user.birthDate }}</strong></li>
      <li>Email: <strong>{{ user.email }}</strong></li>
      <li>Địa chỉ: <strong>{{ user.address }}</strong></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      user: {
        fullName: 'Nguyễn Xuân Quang',
        gender: 'Nam',
        birthDate: '02/07/2005',
        email: 'quang@gmail.com',
        address: 'Tân Triều, Hà Nội',
      },
    };
  },
};
</script>

<style scoped>
.user-info {
  font-family: Arial, sans-serif;
  border: 1px solid #ddd;
  padding: 10px;
  width: 300px;
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

strong {
  font-weight: bold;
}
</style>