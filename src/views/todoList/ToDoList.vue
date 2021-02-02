<template>
  <InputItem :pageData="pToDoList.inputIntem" />
  <ListItems :pageData="pToDoList.itemList" />
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";
import { PToDoList } from "./vmod";
import InputItem from "./inputItem/InputItem.vue";
import ListItems from "./itemList/ListItems.vue";

export default defineComponent({
  components: {
    InputItem,
    ListItems,
  },
  setup(props) {
    return {
      pToDoList: new PToDoList(props),
    };
  },
});
</script>
