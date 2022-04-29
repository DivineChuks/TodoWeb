import React from "react";
import { Row, Col } from "react-bootstrap";
import TodoSubHeader from "./TodoSubHeader";
import TodoList from "./TodoList";
import AddTask from "./AddTask";

const Todo = () => {
  return (
    <Row className="justify-content-md-center">
      <Col md={6} className="containerStyle mb-sm-0 mb-md-5">
        <TodoSubHeader />
          <TodoList />   
        <AddTask />
      </Col>
    </Row>
  );
};

export default Todo;
