<template>
  <div>
    <!-- Form thêm mới nhân viên -->
    <div class="overlay" h>
      <form class="form">
        <div class="d-flex justify-content-between align-items-center">
          <h4>Chỉnh sửa nhân viên</h4>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div>
          <label class="form-label" for="userName">Họ và tên</label>
          <input id="userName" type="email" class="form-control" />
          <!-- <div class="form-text error">Họ và tên không được để trống.</div> -->
        </div>
        <div>
          <label class="form-label" for="dateOfBirth">Ngày sinh</label>
          <input id="dateOfBirth" type="date" class="form-control" />
        </div>
        <!-- <div class="form-text error">
          Ngày sinh không được lớn hơn ngày hiện tại.
        </div> -->
        <div>
          <label class="form-label" for="email">Email</label>
          <input id="email" type="text" class="form-control" />
        </div>
        <!-- <div class="form-text error">Email không được để trống.</div> -->
        <div>
          <label class="form-label" for="address">Địa chỉ</label>
          <textarea class="form-control" id="address" rows="3"></textarea>
        </div>
        <div>
          <button class="w-100 btn btn-primary">Thêm mới</button>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script setup>
</script>
  
<style>
</style>