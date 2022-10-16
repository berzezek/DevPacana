<template>
  <div class="block">

    <h1>LeftBlock</h1>
    <div
        class="product-block"
        v-for="block in leftBlock"
        :key="block.id"
    >
      <p>{{ block.id }}</p>
      <p>{{ block.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftBlock",
  props: {
    leftBlock: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style scoped>

.left-block {
  width: 50%;
  height: 50%;
  background-color: #f0f0f0;
}

</style>