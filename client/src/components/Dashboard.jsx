import React from "react";
import MyCalendar from "./MyCalendar";
import { Container, Col, Row } from "react-bootstrap";

function Dashboard() {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3}>
          {/* Sidebar content here */}
        </Col>

        <Col md={9} className="mt-3">
          <h2>My Dashboard</h2>
          <MyCalendar />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
