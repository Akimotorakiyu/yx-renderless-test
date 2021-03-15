<template>
  <div class="mt-16 text-center">
    <router-link to="/">/</router-link>

    <div
      ref="nodeRef"
      class="text-center bg-green-500 h-64 m-6 flex justify-center overflow-auto"
    >
      <div class="w-24 bg-red-200 h-96"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import { autoRecoverscroll, onAfterRouterEnter } from "./routes";
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
      console.log("about load");
    });
    onBeforeRouteLeave(() => {
      console.log("onBeforeRouteLeave");
    });
    onBeforeRouteUpdate(() => {
      console.log("onBeforeRouteUpdate");
    });

    onAfterRouterEnter(() => {
      console.log("showing");
    });

    const nodeRef = ref<HTMLDivElement>() as Ref<HTMLDivElement>;

    autoRecoverscroll(nodeRef);

    return { nodeRef };
  },
});
</script>
