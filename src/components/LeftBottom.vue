<template>
  <div class="block">

    <h1>LeftBottom</h1>
    <div
        class="product-block"
        v-for="block in getLeftBottomBlock"
        :key="block.id"
        @click="addToLeftBlock(block)"
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
  name: "LeftBottom",
  computed: {
    ...mapState(useBlocksStore, ['getLeftBottomBlock'])
  },
  methods: {
    addToLeftBlock(block) {
      this.$emit('addToLeftBlock', block)
    }
  }

}
</script>

<style scoped>


</style>