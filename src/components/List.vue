<template>
  <ul class="todo-main">
    <!-- 创建每一项todo，并且发送信息 -->
    <Item
      v-for="todo in todoArr"
      :key="todo.id"
      :itemToDoArr="todo"
      :checkTodo="checkTodo"
      :deleteTodo="deleteTodo"
    />
  </ul>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "Footer",
  components: {
    Item,
  },
  props: ["todoArr", "checkTodo", "deleteTodo"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>