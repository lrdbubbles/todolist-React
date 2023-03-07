const ToDoItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return <li onClick={deleteHandler}>{props.children}</li>;
};

export default ToDoItem;
