import React, { useState } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";

function Tracker({ show, handleClose, date }) {
  // State to keep track of the current workout being entered
  const [currentWorkout, setCurrentWorkout] = useState({
    type: "",
    exercise: "",
    weight: "",
    reps: "",
  });

  // State to store the list of all entered workouts
  const [workouts, setWorkouts] = useState([]);

  // Handler for dropdown selection
  const handleSelect = (eventKey) => {
    setCurrentWorkout({ ...currentWorkout, type: eventKey });
  };

  // Handler for input changes
  const handleInputChange = (e) => {
    setCurrentWorkout({ ...currentWorkout, [e.target.name]: e.target.value });
  };

  // Handler for submitting the form
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submit action
    setWorkouts([...workouts, currentWorkout]);
    setCurrentWorkout({
      type: currentWorkout.type,
      exercise: "",
      weight: "",
      reps: "",
    }); // Reset the input fields
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Workout Tracker for {date.toDateString()}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          {/* Dropdown for selecting workout type */}
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Workout Type
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Upper Body">Upper Body</Dropdown.Item>
              <Dropdown.Item eventKey="Lower Body">Lower Body</Dropdown.Item>
              <Dropdown.Item eventKey="Core">Core</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Input fields for exercise details */}
          <input
            name="exercise"
            type="text"
            placeholder="Exercise"
            value={currentWorkout.exercise}
            onChange={handleInputChange}
          />
          <input
            name="weight"
            type="number"
            placeholder="Weight in LBS"
            value={currentWorkout.weight}
            onChange={handleInputChange}
          />
          <input
            name="reps"
            type="number"
            placeholder="Reps"
            value={currentWorkout.reps}
            onChange={handleInputChange}
          />

          {/* Button to submit the form */}
          <button type="submit">Add Workout</button>
        </form>

        {/* Displaying the list of entered workouts */}
        <div>
          {workouts.map((workout, index) => (
            <div key={index}>
              {workout.type}: {workout.exercise}, {workout.weight} lbs,{" "}
              {workout.reps} reps
            </div>
          ))}
        </div>
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
