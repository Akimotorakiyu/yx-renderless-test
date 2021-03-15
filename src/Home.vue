<template>
  <div class="text-center">
    <router-link to="/about">/about</router-link>
  </div>

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
import { defineComponent, onMounted } from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import ComUse from "./views/comUse/ComUse.vue";
import TodoList from "./views/todoList/TodoList.vue";

export default defineComponent({
  name: "App",
  components: {
    ComUse,
    TodoList,
  },
  setup() {
    onMounted(() => {
      console.log("Home load");
    });

    onBeforeRouteLeave(() => {
      console.log("onBeforeRouteLeave");
    });
    onBeforeRouteUpdate(() => {
      console.log("onBeforeRouteUpdate");
    });
    return {};
  },
});
</script>
