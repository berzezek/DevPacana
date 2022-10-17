<template>
  <div class="block">
    <h1>RightBottom</h1>

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
import {mapState, mapActions} from 'pinia';
import {useBlocksStore} from "@/stores/blocks";
import AppProduct from "@/components/AppProduct.vue";

export default {
  name: "RightBottom",
  components: {AppProduct},
  computed: {
    ...mapState(useBlocksStore, ['getRightBottomBlock'])
  },
  methods: {
    ...mapActions(useBlocksStore, ['addToRightBlock'])
  }
}
</script>
