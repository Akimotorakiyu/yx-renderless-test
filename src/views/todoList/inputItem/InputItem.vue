<template>
  <input type="text" v-model="pageData.value.value" />
  <button @click="pageData.add">add</button>
</template>

<script lang="ts">
import Vue, { defineComponent, PropType } from "vue";
import { PInputItem } from "./vmod";

export default defineComponent({
  props: {
    pageData: {
      type: Object as PropType<PInputItem>,
    },
  },
  components: {},
  setup(props) {},
});
</script>
