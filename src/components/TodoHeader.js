import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  const current = new Date();

  const months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const date = `${current.getDate()} ${
    months[current.getMonth() + 1]
  } ${current.getFullYear()}`;
  return (
    <Row className="mt-sm-0 mt-md-5 justify-content-center">
      <Col md={6} className="headerStyle">
        <h6 style={{ textAlign: "center", color: "#fff", fontSize: "20px" }}>
          Today, {date}
        </h6>
      </Col>
    </Row>
  );
};

export default Header;
