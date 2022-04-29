import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  return (
    <Row className="todoList d-flex align-items-center">
      {todos.map((todo, index) =>
        filter === todo.colorCode || filter === "both" ? (
          <TodoListItem
            id={todo.id}
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            colorCode={todo.colorCode}
            index={index}
          />
        ) : (
          <></>
        )
      )}
    </Row>
  );
};

export default TodoList;
