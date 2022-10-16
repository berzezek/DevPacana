<template>
  <div class="main">

    <div class="top-blocks">
      <left-block :leftBlock="leftBlock"/>
      <right-block :rightBlock="rightBlock"/>
    </div>

    <div class="bottom-blocks">
      <left-bottom @addToLeftBlock="addToLeftBlock"/>
      <right-bottom @addToRightBlock="addToRightBlock" />
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
  data() {
    return {
      rightBlock: {},
      leftBlock: []
    }
  },
  methods: {
    addToRightBlock(block) {
      this.rightBlock = block;
    },
    addToLeftBlock(block) {
      if(this.leftBlock.length < 6) {
        this.leftBlock.push(block);
      } else {
        alert('You can add only 6 blocks')
      }

    }
  }
}
</script>

<style scoped>

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.top-blocks {
  display: flex;
  justify-content: space-between;
}

.bottom-blocks {
  display: flex;
  justify-content: space-between;
}

</style>