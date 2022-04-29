import { Col, Form, Row } from "react-bootstrap";
import { addTask } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddTask = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const [colorTag, setColorTag] = useState("green");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      window.alert("Please enter a task");
      return;
    }

    dispatch(addTask({ task: value, colorCode: colorTag }));
    setValue("");
  };

  return (
    <label style={{ display: "block" }}>
      <Row className="d-flex align-items-center pt-3 mb-5 addTask">
        <Col xs={8}>
          <div className="addTaskStyle">
            <div
              style={{
                marginRight: "15px",
                color: "#CC634F",
                fontSize: "20px",
              }}
            >
              <i onClick={handleSubmit} className="fas fa-plus cursor-pointer"></i>
            </div>
            <div>
              <Form onSubmit={handleSubmit}>
                <input
                  style={{
                    background: "none",
                    border: "none",
                    outline: "none",
                  }}
                  type="text"
                  placeholder="Add a Task"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </Form>
            </div>
          </div>
        </Col>
        <Col xs={4} className="tagStyle">
          <div
            className="tagColor1 cursor-pointer"
            onClick={(e) => setColorTag("green")}
          ></div>
          <div
            className="tagColor2 cursor-pointer"
            onClick={(e) => setColorTag("purple")}
          ></div>
        </Col>
      </Row>
    </label>
  );
};

export default AddTask;
