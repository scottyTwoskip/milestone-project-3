import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import "../index.css";

// show determines whether the modal is visible, handleClose is a function to close the modal, and date represents the selected date for the workout.
function Tracker({ show, handleClose, date }) {
  // currentWorkout represents the details of the current workout being entered.
  const [currentWorkout, setCurrentWorkout] = useState({
    type: "",
    exercise: "",
    weight: "",
    reps: "",
    sets: "",
  });

  // workouts is an array that stores all the workouts.
  const [workouts, setWorkouts] = useState([]);

  const workoutTypeColors = {
    "Upper Body": "#ff7f7f",
    "Lower Body": "#7fbfff",
    Core: "#7fff7f",
    Misc: "#ffff7f",
  };

  // handleSelectType(type): Updates the workout type in the state.
  const handleSelectType = (type) => {
    setCurrentWorkout({ ...currentWorkout, type });
  };

  // handleInputChange(e): Updates the corresponding input field in the currentWorkout state.
  const handleInputChange = (e) => {
    setCurrentWorkout({ ...currentWorkout, [e.target.name]: e.target.value });
  };

  // handleSubmit(e): Handles the form submission. It sends a POST request to a server with the workout details and updates the state with the newly added workout.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentWorkout.type) {
      alert("Please select a workout type.");
      return;
    }

    // Create a new workout object that aligns with the schema
    const newWorkout = {
      ...currentWorkout,
      weight: currentWorkout.weight ? Number(currentWorkout.weight) : undefined, // Ensure weight is a number or undefined
      reps: Number(currentWorkout.reps), // Convert reps to a number
      sets: Number(currentWorkout.sets), // Convert sets to a number
      // Add owner ID if necessary. Example: owner: 'some_user_id'
    };

    try {
      const response = await fetch("http://localhost:3000/workouts", {
        // Adjust URL as necessary
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newWorkout),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const addedWorkout = await response.json();

      setWorkouts([...workouts, addedWorkout]);
      setCurrentWorkout({
        type: "",
        exercise: "",
        weight: "",
        reps: "",
        sets: "",
      });
    } catch (error) {
      alert("Failed to add workout: " + error.message);
    }
  };

  const handleDelete = (index) => {
    const newWorkouts = workouts.filter(
      (_, workoutIndex) => workoutIndex !== index
    );
    setWorkouts(newWorkouts);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Workout Tracker for {date.toDateString()}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="tracker-form">
          <Row>
            {/* Buttons for different workout types. Clicking a button updates the currentWorkout state with the selected type. */}
            {Object.keys(workoutTypeColors).map((type) => (
              <Col key={type} md={3}>
                <Button
                  style={{
                    backgroundColor: workoutTypeColors[type],
                    opacity: currentWorkout.type === type ? 1 : 0.5,
                  }}
                  onClick={() => handleSelectType(type)}
                >
                  {type}
                </Button>
              </Col>
            ))}
          </Row>

          {/* Input fields for exercise, weight, reps, and sets */}
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
            placeholder="Weight"
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
          <input
            name="sets"
            type="number"
            placeholder="Sets"
            value={currentWorkout.sets}
            onChange={handleInputChange}
          />

          <Button variant="success" type="submit">
            Add Workout
          </Button>
        </form>

        {/* Displays a table containing the list of workouts for the selected date. Provides an option to delete a workout.    */}
        <div className="workout-list">
          <table className="table">
            <thead>
              <tr>
                <th>Exercise</th>
                <th>Weight</th>
                <th>Reps</th>
                <th>Sets</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* Table Body: Maps over the filtered workouts for the selected date and renders a row for each workout */}
            <tbody>
              {workouts
                .filter(
                  (workout) => workout.date === date.toISOString().split("T")[0]
                )
                .map((workout, index) => (
                  <tr key={index}>
                    <td style={{ color: workoutTypeColors[workout.type] }}>
                      {workout.exercise}
                    </td>
                    <td>{workout.weight} lbs</td>
                    <td>{workout.reps}</td>
                    <td>{workout.sets}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(index)}
                        className="delete-button"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Modal.Body>
      {/* Closes the modal when the "Close" button is clicked. */}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Tracker;
