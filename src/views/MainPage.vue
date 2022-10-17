<template>
  <div class="main">

    <div class="blocks">
      <left-block />
      <right-block />
    </div>

    <div class="blocks">
      <left-bottom />
      <right-bottom  />
    </div>

  </div>
</template>

<script>
import RightBlock from "@/components/RightBlock.vue";
import LeftBlock from "@/components/LeftBlock.vue";
import RightBottom from "@/components/RightBottom.vue";
import LeftBottom from "@/components/LeftBottom.vue";
export default {
  name: "MainPage",
  components: {
    RightBlock,
    LeftBlock,
    RightBottom,
    LeftBottom
  },
}
</script>

<style scoped>

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.blocks {
  display: flex;
  justify-content: space-between;
}


</style>