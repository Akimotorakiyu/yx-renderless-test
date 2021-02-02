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
    <h2>带样式使用</h2>
    <ButtonCore :logic="run">
      <plain-button class="">普通</plain-button>
    </ButtonCore>
    <ButtonCore :logic="run">
      <plain-button class="btn-primary">主要</plain-button>
    </ButtonCore>
    <ButtonCore :logic="run">
      <plain-button class="btn-success">成功</plain-button>
    </ButtonCore>
    <ButtonCore :logic="run">
      <plain-button class="btn-info">信息</plain-button>
    </ButtonCore>
    <ButtonCore :logic="run">
      <plain-button class="btn-warning">警告</plain-button>
    </ButtonCore>
    <ButtonCore :logic="run">
      <plain-button class="btn-error">危险</plain-button>
    </ButtonCore>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonCore from "../../components/ButtonCore.vue";
import PlainButton from "../../components/PlainButton.vue";

export default defineComponent({
  name: "ComUse",
  components: {
    ButtonCore,
    PlainButton,
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
