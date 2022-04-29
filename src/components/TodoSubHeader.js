import React from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/filterReducer";

const TodoSubHeader = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const _setFilter = (color) => {
    if (filter === color) {
      dispatch(setFilter({ filter: "both" }));
    } else {
      dispatch(setFilter({ filter: color }));
    }
  };

  return (
    <div style={{ background: "#f2f2f2" }}>
      <Row className="subHeader">
        <Col xs={6}>
          <p className="lead mt-2" style={{ color: "#CC634F" }}>
            Showing {todos.length} Tasks
          </p>
        </Col>
        <Col xs={6} className="tagStyle">
          <div
            className="tagColor1"
            style={{ cursor: "pointer" }}
            onClick={() => _setFilter("green")}
          ></div>
          <div
            className="tagColor2"
            style={{ cursor: "pointer" }}
            onClick={() => _setFilter("purple")}
          ></div>
        </Col>
      </Row>
    </div>
  );
};

export default TodoSubHeader;
