import Card from "../UI/Card";
import classes from "./ToDoList.module.css";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <Card className={classes.list}>
      {props.todos.length === 0 && "Add your todos!"}
      <ul>
        {props.todos.map((todo) => (
          <ToDoItem onDelete={props.onDelete} key={todo.key} id={todo.key}>
            {todo.todo}
          </ToDoItem>
        ))}
      </ul>
    </Card>
  );
};

export default ToDoList;
