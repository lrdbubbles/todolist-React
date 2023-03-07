import { useState } from "react";
import AddToDo from "./Todos/AddToDo";
import ToDoList from "./Todos/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addToDoHandler = (text) => {
    setTodos((prevState) => {
      return [
        { todo: text, key: new Date().getTime().toString() },
        ...prevState,
      ];
    });
  };

  const removeToDoHandler = (todoid) => {
    setTodos((prevtodos) => {
      const prevtds = prevtodos.filter((todo) => todo.key !== todoid);
      return prevtds;
    });
  };

  return (
    <div>
      <AddToDo onAddTodo={addToDoHandler}></AddToDo>
      <ToDoList onDelete={removeToDoHandler} todos={todos}></ToDoList>
    </div>
  );
}

export default App;
