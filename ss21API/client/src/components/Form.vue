<template>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Thêm mới bài viết</h2>
          <button @click="handleClose"  class="close-btn">&times;</button>
        </div>
        <div class="modal-body">
          <form>
            <!-- Tên bài viết -->
            <div class="form-group">
              <label for="title">Tên bài viết</label>
              <input type="text" id="title" placeholder="Nhập tên bài viết" />
            </div>
  
            <!-- Hình ảnh -->
            <div class="form-group">
              <label for="image">Hình ảnh</label>
              <input type="text" id="image" placeholder="Nhập URL hình ảnh" />
            </div>
  
            <!-- Nội dung -->
            <div class="form-group">
              <label for="content">Nội dung</label>
              <textarea id="content" placeholder="Nhập nội dung" rows="6"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="reset-btn">Làm mới</button>
          <button class="publish-btn">Xuất bản</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const emit = defineEmits(["onClose"]);

const handleClose = () => {
  emit("onClose");
};
  </script>
  
  <style>
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    width: 500px;
    border-radius: 10px;
    position: relative;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .modal-header h2 {
    margin: 0;
  }
  
  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .modal-footer {
    display: flex;
    justify-content: flex-end;
  }
  
  .reset-btn {
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    padding: 10px 20px;
    margin-right: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .publish-btn {
    background-color: #6c63ff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  