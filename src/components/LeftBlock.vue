<template>
  <div class="block">
    <h1>LeftBlock</h1>
    <div
        v-for="block in leftBlock"
        :key="block.id"
    >
      <app-product :product="block" />
    </div>
  </div>
</template>

<script>
import AppProduct from "@/components/AppProduct.vue";

export default {
  name: "LeftBlock",
  components: {AppProduct},
  props: {
    leftBlock: {
      default: () => [],
      type: Array,
    }
  },
}
</script>

<style scoped>

</style>