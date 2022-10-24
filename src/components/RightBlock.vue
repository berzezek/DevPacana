<template>
  <div class="block">

    <h1>RightBlock</h1>

    <div>
      <app-product
          :product="rightBlock"
          v-if="rightBlock.id"
      />
    </div>

  </div>
</template>

<script>
import AppProduct from "@/components/AppProduct.vue";
export default {
  name: "RightBlock",
  components: {AppProduct},
  props: {
    rightBlock: {
      type: Object,
    }
  }
}
</script>
