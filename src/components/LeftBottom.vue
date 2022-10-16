<template>
  <div class="block">

    <h1>LeftBottom</h1>
    <div
        v-for="block in getLeftBottomBlock"
        :key="block.id"
        @click="addToLeftBlock(block)"
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
  name: "LeftBottom",
  components: {AppProduct},
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