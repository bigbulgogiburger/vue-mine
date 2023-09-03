const addOneItem = (state, todoItem) =>{
    console.log("received");
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  }
 const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
  }
 const clearToDoAll=(state) => {
    localStorage.clear();
    state.todoItems = [];
  }

 const toggleItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index]
      .completed;
    //아이템 갱신
    localStorage.setItem(
      payload.todoItem.item,
      JSON.stringify(payload.todoItem)
    );
  }

  export { addOneItem,removeOneItem,toggleItem,clearToDoAll}