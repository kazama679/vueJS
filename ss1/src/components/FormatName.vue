<template>
  <div class="format-name">
    <p>Họ và tên: <strong>{{ formatName(user) }}</strong></p>
  </div>
</template>

<script>
export default {
  name: 'FormatName',
  data() {
    return {
      user: {
        firstName: 'Nguyễn Xuân',
        lastName: 'Quang',
      },
    };
  },
  methods: {
    formatName(user) {
      return `${user.firstName} ${user.lastName}`;
    },
  },
};
</script>

<style scoped>
.format-name {
  font-family: Arial, sans-serif;
  font-size: 18px;
  border: 1px solid #000;
  padding: 10px;
  width: 300px;
}

strong {
  font-weight: bold;
}
</style>