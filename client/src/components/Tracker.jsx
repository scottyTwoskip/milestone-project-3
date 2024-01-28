import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import "../index.css";

function Tracker({ show, handleClose, date }) {
  const [currentWorkout, setCurrentWorkout] = useState({
    type: "",
    exercise: "",
    weight: "",
    reps: "",
    sets: "",
  });

  const [workouts, setWorkouts] = useState([]);

  const workoutTypeColors = {
    "Upper Body": "#ff7f7f",
    "Lower Body": "#7fbfff",
    Core: "#7fff7f",
    Misc: "#ffff7f",
  };

  const handleSelectType = (type) => {
    setCurrentWorkout({ ...currentWorkout, type });
  };

  const handleInputChange = (e) => {
    setCurrentWorkout({ ...currentWorkout, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentWorkout.type) {
      alert("Please select a workout type.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/workouts", {
        // Adjust the URL as per your server setup
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...currentWorkout,
          date: date.toISOString().split("T")[0],
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const addedWorkout = await response.json();

      // Add the newly added workout to the state
      setWorkouts([...workouts, addedWorkout]);
      // Reset the current workout form
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
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Tracker;
