<template>
  <ul>
    <template v-for="item in pageData.list.value" :key="item.id">
      <li>{{ item.todo }}</li>
    </template>
  </ul>
</template>

<script lang="ts">
import Vue, { defineComponent, PropType } from "vue";
import { PItemList } from "./vmod";

export default defineComponent({
  props: {
    pageData: {
      type: Object as PropType<PItemList>,
    },
  },
  components: {},
  setup(props) {},
});
</script>
