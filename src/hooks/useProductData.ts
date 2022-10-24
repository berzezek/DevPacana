import {ref} from "vue";
import {useBlocksStore} from "@/stores/blocks";

export function useBlockData() {
  const leftBottomBlock = ref([] as Array<Object>),
    rightBottomBlock = ref([] as Array<Object>),

    leftBlock = ref([] as Array<object>),
    rightBlock = ref({} as Object),

    addToLeftBlock = (block: Object) => {
      if (leftBlock.value.length < 6) {
        leftBlock.value.push(block)
      } else {
        alert('You can add only 6 items')
      }
    },

    addToRightBlock = (block: Object) => {
      rightBlock.value = block
    },

    store = useBlocksStore();

  leftBottomBlock.value = store.getLeftBottomBlock;
  rightBottomBlock.value = store.getRightBottomBlock;

  return {
    leftBottomBlock,
    rightBottomBlock,
    addToLeftBlock,
    addToRightBlock,
    rightBlock,
    leftBlock
  }
}