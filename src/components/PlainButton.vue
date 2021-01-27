<template>
    <button @click="logic?.()||injectData.runner()" :disabled="status?status.pending:injectData.status.pending">
        <slot>按钮</slot>
    </button>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, PropType, inject } from "vue";

export default defineComponent({
  name: "ButtonCore",
  props: {
    logic: Function,
    status:Object as PropType<{pending:boolean}>
  },
  setup(props) {
     const injectData =  inject<any>("ButtonCore")!
  
    return {injectData};
  },
});
</script>
