<template>
  <div class="block">
    <h1>RightBlock</h1>

    <div>
      <app-product
          :product="getRightBlock"
          v-if="getRightBlock.id"
      />
    </div>

  </div>
</template>

<script>
import AppProduct from "@/components/AppProduct.vue";
import { mapState } from 'pinia';
import {useBlocksStore} from "@/stores/blocks";
export default {
  name: "RightBlock",
  components: {AppProduct},
  computed: {
    ...mapState(useBlocksStore, ['getRightBlock'])
  }
}
</script>
