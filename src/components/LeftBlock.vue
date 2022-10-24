<template>
  <div class="block">
    <h1>LeftBlock {{ leftBlock.length }} / 6</h1>

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
      type: Array,
    }
  }

}
</script>
