<template>
    <div class="circle-container">
        <div class="circle red">
            <span v-if="flag === 0" class="number">{{ red }}</span>
        </div>
        <div class="circle green">
            <span v-if="flag === 1" class="number">{{ green }}</span>
        </div>
        <div class="circle yellow">
            <span v-if="flag === 2" class="number">{{ yellow }}</span>
        </div>
        <p v-if="flag === 0">Đèn đỏ, vui lòng dừng lại</p>
        <p v-if="flag === 1">Đèn xanh, được phép đi</p>
        <p v-if="flag === 2">Đèn vàng, vui lòng giảm tốc độ</p>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const flag = ref(0)
const red = ref(40)
const green = ref(60)
const yellow = ref(3)
let timer;

const startRedLight = () => {
    timer = setInterval(() => {
        red.value--
        if (red.value === 0) {
            clearInterval(timer)
            flag.value = 1
            red.value = 40
            startGreenLight()
        }
    }, 1000)
}

const startGreenLight = () => {
    timer = setInterval(() => {
        green.value--
        if (green.value === 0) {
            clearInterval(timer)
            flag.value = 2
            green.value = 60
            startYellowLight()
        }
    }, 1000)
}

const startYellowLight = () => {
    timer = setInterval(() => {
        yellow.value--
        if (yellow.value === 0) {
            clearInterval(timer)
            flag.value = 0
            yellow.value = 3
            startRedLight()
        }
    }, 1000)
}

onMounted(() => {
    startRedLight()
})
</script>

<style scoped>
.circle-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
}

.red {
    background-color: red;
}

.green {
    background-color: #66ff99;
}

.yellow {
    background-color: yellow;
}

.number {
    color: white;
    font-size: 24px;
    font-weight: bold;
}
</style>