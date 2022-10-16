<template>
  <div class="block">

    <h1>RightBlock</h1>
    <div
        v-for="block in getRightBottomBlock"
        :key="block.id"
        @click="addToRightBlock(block)"
    >
      <app-product :product="block" />
    </div>
  </div>
</template>

<script>
import {mapState} from 'pinia';
import {useBlocksStore} from "@/stores/blocks";
import AppProduct from "@/components/AppProduct.vue";

export default {
  name: "RightBottom",
  components: {AppProduct},
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
