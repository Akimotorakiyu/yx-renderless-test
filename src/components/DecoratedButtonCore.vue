<template>
  <PlainButton>
    <slot>按钮</slot>
  </PlainButton>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, provide, PropType } from "vue";
import { ButtonCore } from "./buttonCore";
import PlainButton from "./PlainButton.vue";
export default defineComponent({
  name: "ButtonCore",
  components: {
    PlainButton,
  },
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
