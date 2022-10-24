<template>
  <div class="block">
    <h1>LeftBottom</h1>

    <div
        v-for="block in leftBottomBlock"
        :key="block.id"
        @click="addToLeftBlock(block)"
    >
      <app-product :product="block" />
    </div>

  </div>
</template>

<script>
import AppProduct from "@/components/AppProduct.vue";

export default {
  name: "LeftBottom",
  components: {AppProduct},
  props: {
    leftBottomBlock: {
      type: Array
    }
  },

  methods: {
    addToLeftBlock(block) {
      this.$emit('addToLeftBlock', block)
    }
  }

}
</script>
