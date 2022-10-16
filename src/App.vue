<script setup lang="ts">
import MainPage from "@/views/MainPage.vue";
</script>

<template>
<div>
  <main-page />
</div>
</template>

<style>
.block {
  width: 50%;
  min-height: 500px;
  height: 50%;
  background-color: #f0f0f0;
  margin-bottom: 20px;
  border: 1px solid #000;
  padding: 10px;
}

.product-block {
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  width: 200px;
  height: 50px;
  margin: 10px;
}
</style>
