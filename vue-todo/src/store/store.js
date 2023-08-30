import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    } else {
      alert("typeSomething");
    }
    return arr;
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      console.log("received");
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    clearToDoAll(state) {
      localStorage.clear();
      state.todoItems = [];
    },

    toggleItem(state, payload) {
      console.log(state);
      console.log(payload.index);
      console.log(state.todoItems[payload.index]);
      state.todoItems[payload.index].completed = !state.todoItems[payload.index]
        .completed;
      //아이템 갱신
      localStorage.setItem(
        payload.todoItem.item,
        JSON.stringify(payload.todoItem)
      );
    }
  }
});
