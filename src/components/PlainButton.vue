<template>
    <button @click="logic" :disabled="status.pending">
        <slot>按钮</slot>
    </button>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, PropType } from "vue";

export default defineComponent({
  name: "ButtonCore",
  props: {
    logic: Function,
    status:Object as PropType<{pending:boolean}>
  },
  setup(props) {
  
    return { };
  },
});
</script>
