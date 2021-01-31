<template>
  <slot :runner="runner" :status="status"></slot>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, provide, PropType } from "vue";
import { useButtonCore } from "./buttonCore";
export default defineComponent({
  name: "ButtonCore",
  props: {
    logic: {
      type: Function as PropType<(event: Event) => void>,
      require: true,
    },
  },
  setup(props) {
    const { runner, status } = useButtonCore(props);

    return { runner, status };
  },
});
</script>
