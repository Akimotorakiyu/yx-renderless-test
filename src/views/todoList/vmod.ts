import { ref, computed, reactive } from "vue";
import { nanoid } from "nanoid";
export class PInputItem {
  value = ref("");
  placeHolder = "请输入待办事项";

  constructor(public toDoList: PToDoList) {}

  add = () => {
    this.toDoList.itemList.addItem(this.value.value);
    this.value.value = "";
  };
}

class TodoListItem {
  id = nanoid();
  icon = "😄";
  date = new Date();
  progress: "pending" | "done" = "pending";
  constructor(public todo: string) {}
}

export class PItemList {
  list = ref<TodoListItem[]>([]);
  doneList = computed(() => {
    return this.list.value.filter((item) => item.progress === "done");
  });
  pendingList = computed(() => {
    return this.list.value.filter((item) => item.progress === "pending");
  });
  constructor(public pToDoList: PToDoList) {
    this.addItem("1");
    this.addItem("2");
    this.addItem("3");
  }
  /**
   * 调用 API 拉取
   */
  getList = () => {};
  /**
   * 添加
   */
  addItem = (todo: string) => {
    this.list.value.unshift(new TodoListItem(todo));
  };
  /**
   * 更新
   */
  doneItem = (item: TodoListItem) => {
    item.progress = "done";
  };
  /**
   * 删除
   */
  deleteItem = (id: string) => {
    const index = this.list.value.findIndex((item) => item.id === id);
    this.list.value.splice(index, 1);
  };
}

export class PToDoList {
  inputIntem = new PInputItem(this);
  itemList = new PItemList(this);

  constructor(props: Record<string, any>) {}
}
