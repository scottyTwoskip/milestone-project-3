// Tracker.jsx
import React, { useState } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";

function Tracker({ show, handleClose, date }) {
  const [workoutType, setWorkoutType] = useState("");

  const handleSelect = (eventKey) => {
    setWorkoutType(eventKey);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Workout Tracker for {date.toDateString()}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Dropdown onSelect={handleSelect}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Workout Type
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="upper-body">Upper Body</Dropdown.Item>
            <Dropdown.Item eventKey="lower-body">Lower Body</Dropdown.Item>
            <Dropdown.Item eventKey="core">Core</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {workoutType && (
          <div className="workout-inputs">
            <h5>Details for {workoutType.replace("-", " ")} Workout</h5>
            <div className="form-group">
              <label>Exercise:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter exercise"
              />
            </div>
            <div className="form-group">
              <label>Weight:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Weight in lbs or kg"
              />
            </div>
            <div className="form-group">
              <label>Reps:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Number of reps"
              />
            </div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Tracker;
