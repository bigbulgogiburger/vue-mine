<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:하위컴포넌트에서 발생시킨 이벤트이름="현재컴포넌트의 메소드명"></TodoInput> -->
    <TodoInput></TodoInput>
    <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성"></TodoList> -->
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoFooter from "./components/TodoFooter.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  // data() {
  //   return {
  //     todoItems: []
  //   };
  // },

  // created: function() {
  //   if (localStorage.length > 0) {
  //     for (let i = 0; i < localStorage.length; i++) {
  //       if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
  //         this.todoItems.push(
  //           JSON.parse(localStorage.getItem(localStorage.key(i)))
  //         );
  //         //   this.todoItems.push(localStorage.key(i));
  //       }

  //       // console.log(localStorage.key(i));
  //     }
  //   } else {
  //     alert("typeSomething");
  //   }
  // },
  components: {
    TodoFooter,
    TodoHeader,
    TodoInput,
    TodoList
  }
  // methods: {
  //   //store의 mutation과 같음.
  //   // addOneItem(todoItem) {
  //   //   const obj = { completed: false, item: todoItem };
  //   //   localStorage.setItem(todoItem, JSON.stringify(obj));
  //   //   this.todoItems.push(obj);
  //   // },
  //   // removeOneItem(todoItem, index) {
  //   //   localStorage.removeItem(todoItem.item);
  //   //   this.todoItems.splice(index, 1);
  //   // },
  //   // clearAll() {
  //   //   localStorage.clear();
  //   //   this.todoItems = [];
  //   //   // this.todoItems.unshift;
  //   // },
  //   // toggleOneItem(todoItem, index) {
  //   //   // todoItem.completed = !todoItem.completed;
  //   //   this.todoItems[index].completed = !this.todoItems[index].completed;
  //   //   //아이템 갱신
  //   //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  //   // }
  // }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
