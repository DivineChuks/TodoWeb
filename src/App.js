import React from "react";
import { Container } from "react-bootstrap";
import TodoHeader from "./components/TodoHeader";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  return (
    <Container>
      <TodoHeader />
      <TodoContainer />
    </Container>
  );
};

export default App;
