import Card from "../UI/Card";
import classes from "./AddToDo.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const AddToDo = (props) => {
  const [todo, setTodo] = useState("");
  const [isValid, setIsValid] = useState(true);

  const textChangeHandler = (e) => {
    setIsValid(true);
    setTodo(e.target.value);
  };

  const addToDoHandler = (e) => {
    e.preventDefault();
    if (todo.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTodo(todo);
    setTodo("");
  };

  return (
    <Card className={`${classes.input} ${!isValid && classes.invalid}`}>
      <form onSubmit={addToDoHandler}>
        <label>Your To-do-list:</label>
        <input type="text" onChange={textChangeHandler} value={todo}></input>
        <Button type="submit">Add Todo!</Button>
      </form>
    </Card>
  );
};

export default AddToDo;
