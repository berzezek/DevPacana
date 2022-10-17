<template>
  <div class="block">
    <h1>LeftBlock {{ getLeftBlock.length }} / 6</h1>
    <div
        v-for="block in getLeftBlock"
        :key="block.id"
    >
      <app-product :product="block" />
    </div>
  </div>
</template>

<script>
import AppProduct from "@/components/AppProduct.vue";
import { mapState } from 'pinia';
import { useBlocksStore } from "@/stores/blocks";

export default {
  name: "LeftBlock",
  components: {AppProduct},
  computed: {
    ...mapState(useBlocksStore, ['getLeftBlock'])
  },

}
</script>

<style scoped>

</style>