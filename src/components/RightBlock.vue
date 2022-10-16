<template>
  <div class="block">
    <h1>RigthBlock</h1>
    <div>
      <app-product :product="rightBlock" v-if="rightBlock.id"/>
    </div>
  </div>
</template>

<script>
import AppProduct from "@/components/AppProduct.vue";
export default {
  name: "RightBlock",
  components: {AppProduct},
  props: {
    rightBlock: {
      type: Object,
      default: () => ({})
    },
  }
}

</script>

<style scoped>

</style>