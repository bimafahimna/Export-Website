<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="flex">
    <h1 class="font-merriweather">{{ msg }}</h1>
  </div>
</template>

<style scoped>
</style>
