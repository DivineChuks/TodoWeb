import React from "react";
import { Alert } from "react-bootstrap";

const TodoAlert = ({ children }) => {
  return <Alert variant="danger">{children}</Alert>;
};

export default TodoAlert;
