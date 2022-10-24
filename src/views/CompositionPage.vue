<template>
  <div class="main">
    <h2>Composition</h2>
    <div class="blocks">
      <left-block :leftBlock="leftBlock"/>
      <right-block :rightBlock="rightBlock"/>
    </div>

    <div class="blocks">
      <left-bottom
          :leftBottomBlock="leftBottomBlock"
          @addToLeftBlock="addToLeftBlock($event)"
      />
      <right-bottom
          :rightBottomBlock="rightBottomBlock"
          @addToRightBlock="addToRightBlock($event)"
      />
    </div>

  </div>
</template>


<script>

import {useBlockData} from "@/hooks/useProductData";

import LeftBottom from "@/components/LeftBottom.vue";
import LeftBlock from "@/components/LeftBlock.vue";
import RightBlock from "@/components/RightBlock.vue";
import RightBottom from "@/components/RightBottom.vue";


export default {
  name: "CompositionPage.vue",
  components: {LeftBlock, LeftBottom, RightBlock, RightBottom},

  setup(props) {

      const blockData = useBlockData();
    const leftBottomBlock = blockData.leftBottomBlock,
        rightBottomBlock = blockData.rightBottomBlock,

        addToRightBlock = (block) => {
          blockData.addToRightBlock(block)
        },
        addToLeftBlock = (block) => {
          blockData.addToLeftBlock(block)
        },
        leftBlock = blockData.leftBlock,
        rightBlock = blockData.rightBlock;

    return {
      leftBottomBlock,
      rightBottomBlock,
      leftBlock,
      rightBlock,
      addToRightBlock,
      addToLeftBlock
    }
  }
}
</script>
