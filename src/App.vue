<template>
  <div>
    <ButtonCore :logic="run">
      <template #default="{ runner, status }">
        <button
          class="border rounded-lg px-2 py-1 m-1"
          @click="runner"
          :disabled="status.pending"
        >
          000
        </button>
      </template>
    </ButtonCore>
    <ButtonCore :logic="run">
      <template #default="{ runner, status }">
        <plain-button
          class="border rounded-lg px-2 py-1 m-1"
          :logic="runner"
          :status="status"
          >111</plain-button
        >
      </template>
    </ButtonCore>
    <ButtonCore :logic="run">
      <plain-button class="border rounded-lg px-2 py-1 m-1"
        ><div>111</div>
        <div>222</div></plain-button
      >
    </ButtonCore>
  </div>
  <div>
    <h2>常规使用</h2>
    <ButtonCore :logic="run">
      <plain-button class="border rounded-lg px-2 py-1 m-1">普通</plain-button>
    </ButtonCore>
    <ButtonCore :logic="run">
      <plain-button
        class="bg-blue-500 border rounded-lg px-2 py-1 text-white m-1"
        >主要</plain-button
      >
    </ButtonCore>
    <ButtonCore :logic="run">
      <plain-button
        class="bg-green-500 border rounded-lg px-2 py-1 text-white m-1"
        >成功</plain-button
      >
    </ButtonCore>
    <ButtonCore :logic="run">
      <plain-button
        class="bg-gray-500 border rounded-lg px-2 py-1 text-white m-1"
        >信息</plain-button
      >
    </ButtonCore>
    <ButtonCore :logic="run">
      <plain-button
        class="bg-yellow-500 border rounded-lg px-2 py-1 text-white m-1"
        >警告</plain-button
      >
    </ButtonCore>
    <ButtonCore :logic="run">
      <plain-button
        class="bg-red-500 border rounded-lg px-2 py-1 text-white m-1"
        >危险</plain-button
      >
    </ButtonCore>
    <div class="w-2/3 mx-auto">
      <TodoList> </TodoList>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonCore from "./components/ButtonCore.vue";
import PlainButton from "./components/PlainButton.vue";
import TodoList from "./views/todoList/TodoList.vue";
export default defineComponent({
  name: "App",
  components: {
    ButtonCore,
    PlainButton,
    TodoList,
  },
  setup() {
    function run() {
      return new Promise((reslove) => {
        setTimeout(reslove, 1000);
      });
    }
    return {
      run,
    };
  },
});
</script>
