import React from "react";
import MyCalendar from "./MyCalendar";
import { Container, Col, Row } from "react-bootstrap";
import backgroundImage from "../assets/workout_gear.jpg";
import WorkoutBubbles from "./WorkoutBubbles";

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover", // Changed to 'cover' to ensure full coverage
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
};


function Dashboard() {
  // Default workout bubble values
  const workoutCounts = [0, 0, 0, 0];

  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3}>
          <h3>Workouts Logged</h3>
          <WorkoutBubbles workoutCounts={workoutCounts} />
        </Col>

        <Col md={9} className="mt-3">
          {/* <h2>My Dashboard</h2> */}
          <MyCalendar />
        </Col>
      </Row>
      <div className="container-fluid p-2 mt-3 text-light" style={backgroundStyle}>
        <img
          src={backgroundImage}
          alt="Tension cord and weights image by Kelly Sikkema on Unsplash"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
      </div>
    </Container>
  );
}

export default Dashboard;