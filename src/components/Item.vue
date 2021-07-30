<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="itemToDoArr.done"
        @change="handleCheck(itemToDoArr.id)"
      />
      <span>{{ itemToDoArr.title }}</span>
    </label>
    <button class="btn btn-danger" @click.prevent="delItem(itemToDoArr.id)">
      删除
    </button>
  </li>
</template>

<script>
export default {
  name: "Item",
  //接收传递的todo相关信息
  props: ["itemToDoArr", "deleteTodo", "checkTodo"],
  data() {
    return {};
  },
  methods: {
    // 勾选和取消勾选
    handleCheck(id) {
      this.checkTodo(id);
    },
    delItem(id) {
      if (confirm("确定删除吗？")) {
        this.deleteTodo(id);
      }
    },
  },
};
</script>

<style lang="less" scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ccc;
}
li:hover .btn-danger {
  display: block;
}
</style>