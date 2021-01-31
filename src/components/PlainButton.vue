<template>
  <button
    @click="logic?.() || injectData.runner()"
    :disabled="status ? status.pending : injectData.status.pending"
    class="disabled:opacity-50"
  >
    <span class="flex justify-center items-center">
      <slot></slot>
    </span>
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
