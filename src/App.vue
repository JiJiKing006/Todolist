<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodo"></MyHeader>
      <List
        :todoArr="this.todoArr"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
      ></List>
      <MyFooter
        :todoArr="this.todoArr"
        :allCheck="allCheck"
        :removeTodo="removeTodo"
      ></MyFooter>
    </div>
  </div>
</template>

<script>
import List from "./components/List.vue";
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",
  components: {
    MyHeader,
    List,
    MyFooter,
  },
  data() {
    return {
      todoArr: [
        { id: "001", title: "喝酒", done: true },
        { id: "002", title: "吃饭", done: true },
        { id: "003", title: "开车", done: true },
      ],
    };
  },
  methods: {
    // 添加todo
    addTodo(todos) {
      this.todoArr.splice(0, 0, todos);
    },
    // 勾选或者取消勾选
    checkTodo(id) {
      this.todoArr.forEach((val, index) => {
        if (val.id == id) {
          val.done = !val.done;
        }
      });
    },
    // 删除todo
    deleteTodo(id) {
      this.todoArr = this.todoArr.filter((val) => val.id != id);
    },
    // 全选和全不选
    allCheck(done) {
      this.todoArr.forEach((val) => (val.done = done));
    },
    // 删除选中的todo
    removeTodo() {
      this.todoArr = this.todoArr.filter((val) => !val.done);
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>