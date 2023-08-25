<template>
  <div>
    <ul>
      <li
        v-for="(todoItem, index) in propsData"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <i
          class="checkBtn fa fa-check"
          v-on:click="toggleComplete(todoItem, index)"
          v-bind:class="{ checkedButtonCompleted: todoItem.completed }"
        ></i>
        <span v-bind:class="{ textCompleted: todoItem.completed }">{{
          todoItem.item
        }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fa fa-trash"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["propsData"],
  methods: {
    removeTodo: function(todoItem, index) {
      this.$emit("removeItem", todoItem, index);
    },
    toggleComplete: function(todoItem, index) {
      console.log("moving");
      this.$emit("toggleItem", todoItem, index);
    }
  }
  // created는 인스턴스가 생성되자마자 실행되는 라이프사이클 훅
};
</script>

<style>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 55px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnComplete {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
