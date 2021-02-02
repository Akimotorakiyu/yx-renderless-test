<template>
  <div class="mt-16">
    <div class="w-2/3 mx-auto">
      <ComUse></ComUse>
    </div>

    <div class="w-2/3 mx-auto">
      <TodoList> </TodoList>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComUse from "./views/comUse/ComUse.vue";
import TodoList from "./views/todoList/TodoList.vue";

export default defineComponent({
  name: "App",
  components: {
    ComUse,
    TodoList,
  },
  setup() {
    return {};
  },
});
</script>
