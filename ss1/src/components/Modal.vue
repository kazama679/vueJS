<template>
  <teleport to="body">
    <div class="modal">
      <h3>Modal Component</h3>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>