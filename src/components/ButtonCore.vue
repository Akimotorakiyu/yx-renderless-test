<template>
  <slot :runner="runner" :status="status"></slot>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, provide } from "vue";

export default defineComponent({
  name: "ButtonCore",
  props: {
    logic: Function,
  },
  setup(props) {
    const status = reactive({
      pending: false,
    });
    async function runner() {
      status.pending = true;
      await props.logic?.();
      status.pending = false;
    }

    provide("ButtonCore", { status, runner });

    return { runner, status };
  },
});
</script>
