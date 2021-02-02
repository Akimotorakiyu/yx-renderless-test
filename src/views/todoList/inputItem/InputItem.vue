<template>
  <input type="text" v-model="pageData.value.value" @keypress="pageData.add" />
  <button
    class="bg-blue-500 border rounded-lg px-2 py-1 text-white m-1"
    @click="pageData.add"
  >
    add
  </button>
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
