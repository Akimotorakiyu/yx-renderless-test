<template>
  <slot :runner="buttonCore.runner" :status="buttonCore.status"></slot>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, provide, PropType } from "vue";
import { ButtonCore } from "./buttonCore";
export default defineComponent({
  name: "ButtonCore",
  props: {
    logic: {
      type: Function as PropType<(event: Event) => void>,
      require: true,
    },
  },
  setup(props) {
    // const { runner, status } = useButtonCore(props);
    const buttonCore = new ButtonCore(props);

    return { buttonCore };
  },
});
</script>
