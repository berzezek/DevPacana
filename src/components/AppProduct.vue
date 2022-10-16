<template>
<div class="product-block">
  <p>{{product.id}}</p>
  <p>{{product.name}}</p>
</div>
</template>

<script>
export default {
  name: "AppProduct",
  props: {
    product: {
      type: Object,
    }
  }
}
</script>

<style scoped>
.product-block {
  border: 1px solid black;
  padding: 10px;
  width: 50%;
  height: 50%;
  background-color: #f0f0f0;
  margin-bottom: 20px;
}

</style>