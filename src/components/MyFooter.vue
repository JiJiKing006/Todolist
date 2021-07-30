<template>
  <div class="todo-footer" v-show="totalTodo">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAll" />
    </label>
    <span
      ><span>已完成{{ getDone }}</span> / 全部{{ totalTodo }}
    </span>
    <button class="btn btn-danger" @click.prevent="removeDone">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todoArr", "allCheck", "removeTodo"],
  data() {
    return {};
  },
  computed: {
    // 返回已完成事项
    getDone() {
      return this.todoArr.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
    // 获取全部事项
    totalTodo() {
      return this.todoArr.length;
    },
    // 单按钮影响全选按钮
    isAll() {
      return this.getDone == this.totalTodo && this.totalTodo > 0;
    },
  },
  methods: {
    // 全选全不选功能
    checkAll(el) {
      this.allCheck(el.target.checked);
    },
    // 删除选中
    removeDone() {
      if (confirm("确定删除吗？")) {
        this.removeTodo();
      }
    },
  },
};
</script>

<style lang="less" scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>