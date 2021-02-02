<template>
  <h2 class="mt-8">pendingList</h2>
  <ul>
    <template v-for="item in pageData.pendingList.value" :key="item.id">
      <li>
        <div class="flex justify-between">
          {{ item.todo }}
          <div>
            <button
              class="bg-red-500 border rounded-lg px-2 py-1 text-white m-1"
              @click="pageData.deleteItem(item.id)"
            >
              delete
            </button>
            <button
              class="bg-green-500 border rounded-lg px-2 py-1 text-white m-1"
              @click="pageData.doneItem(item)"
            >
              done
            </button>
          </div>
        </div>
      </li>
    </template>
  </ul>

  <h2 class="mt-8">doneList</h2>
  <ul>
    <template v-for="item in pageData.doneList.value" :key="item.id">
      <li>
        <div class="flex justify-between">
          {{ item.todo }}
          <div>
            <button
              class="bg-red-500 border rounded-lg px-2 py-1 text-white m-1"
              @click="pageData.deleteItem(item.id)"
            >
              delete
            </button>
          </div>
        </div>
      </li>
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
