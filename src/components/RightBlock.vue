<template>
  <div class="block">


    <h1>RigthBlock</h1>
    <div class="product-block">
      <p>{{rightBlock.id}}</p>
      <p>{{rightBlock.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightBlock",
  props: {
    rightBlock: {
      type: Object,
      default: () => {}
    }
  },

}
</script>

<style scoped>

</style>