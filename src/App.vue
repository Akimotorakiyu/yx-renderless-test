<template>
  <router-view>
    <template #default="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </template>
  </router-view>
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
