import React from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCompleted } from "../redux/todoSlice";

const TodoListItem = ({ id, task, completed, colorCode, index }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Col xs={10}>
        <div className="todoStyle">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={(e) => dispatch(setCompleted({ event: e, index }))}
              checked={completed}
            />
          </div>
          <p>{task}</p>
        </div>
      </Col>
      <Col xs={2}>
        <div className="d-flex flex-row align-items-center justify-content-end">
          <div
            className={
              colorCode === "green"
                ? "tagColor3"
                : colorCode === "purple"
                ? "tagColor4"
                : ""
            }
          ></div>
        </div>
      </Col>
    </>
  );
};

export default TodoListItem;
