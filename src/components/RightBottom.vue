<template>
  <div class="block">

    <h1>RightBlock</h1>
    <div
        class="product-block"
        v-for="block in getRightBottomBlock"
        :key="block.id"
        @click="addToRightBlock(block)"
    >
      <p>{{block.id}}</p>
      <p>{{block.name}}</p>
    </div>
  </div>
</template>

<script>
import {mapState} from 'pinia';
import {useBlocksStore} from "@/stores/blocks";

export default {
  name: "RightBottom",
  computed: {
    ...mapState(useBlocksStore, ['getRightBottomBlock'])
  },
  methods: {
    addToRightBlock(block) {
      this.$emit('addToRightBlock', block)
    }
  }

}
</script>

<style scoped>

</style>
