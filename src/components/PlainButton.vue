<template>
  <button
    @click="logic?.() || injectData.runner()"
    :disabled="status ? status.pending : injectData.status.pending"
  >
    <slot>按钮</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, inject } from "vue";
import { injectButtonCore } from "./buttonCore";
export default defineComponent({
  name: "ButtonCore",
  props: {
    logic: Function,
    status: Object as PropType<{ pending: boolean }>,
  },
  setup(props) {
    const injectData = injectButtonCore();

    return { injectData };
  },
});
</script>
