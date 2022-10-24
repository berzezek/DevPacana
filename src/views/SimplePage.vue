<template>
  <div class="main">
    <h2>Simple</h2>
    <div class="blocks">
      <left-block :leftBlock="getLeftBlock" />
      <right-block :rightBlock="getRightBlock" />
    </div>

    <div class="blocks">
      <left-bottom
          :leftBottomBlock="getLeftBottomBlock"
          @addToLeftBlock="addToLeftBlock($event)"
      />
      <right-bottom
          :rightBottomBlock="getRightBottomBlock"
          @addToRightBlock="addToRightBlock($event)"
      />
    </div>

  </div>
</template>

<script>
import RightBlock from "@/components/RightBlock.vue";
import LeftBlock from "@/components/LeftBlock.vue";
import RightBottom from "@/components/RightBottom.vue";
import LeftBottom from "@/components/LeftBottom.vue";
import {mapActions, mapState} from "pinia";
import {useBlocksStore} from "@/stores/blocks";
export default {
  name: "MainPage",
  components: {
    RightBlock,
    LeftBlock,
    RightBottom,
    LeftBottom
  },
  computed: {
    ...mapState(useBlocksStore, [
        'getLeftBottomBlock',
        'getRightBottomBlock',
        'getLeftBlock',
        'getRightBlock'
      ])
  },
  methods: {
    ...mapActions(useBlocksStore, [
      'addToLeftBlock',
      'addToRightBlock'
    ]),
  }
}
</script>

