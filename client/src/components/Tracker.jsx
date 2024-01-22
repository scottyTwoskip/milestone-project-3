// NEED TO ADD SETS TO WORKOUT ASAP also delete action form table!!!
//change drop down to workout type selector buttons and change buttons that arent clicked opcacity
import React, { useState } from "react";
import { Modal, Button, Dropdown } from "react-bootstrap";
import "../index.css";

function Tracker({ show, handleClose, date }) {
  const [currentWorkout, setCurrentWorkout] = useState({
    type: "",
    exercise: "",
    weight: "",
    reps: "",
  });
  const [workouts, setWorkouts] = useState([]);

  const workoutTypeColors = {
    "Upper Body": "#ff7f7f",
    "Lower Body": "#7fbfff",
    Core: "#7fff7f",
    Misc: "#ffff7f",
  };

  const handleSelect = (eventKey) => {
    setCurrentWorkout({ ...currentWorkout, type: eventKey });
  };

  const handleInputChange = (e) => {
    setCurrentWorkout({ ...currentWorkout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentWorkout.type) {
      alert("Please select a workout type.");
      return;
    }
    setWorkouts([
      ...workouts,
      { ...currentWorkout, date: date.toISOString().split("T")[0] },
    ]);
    setCurrentWorkout({
      type: currentWorkout.type,
      exercise: "",
      weight: "",
      reps: "",
    });
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
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Workout Type
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {Object.keys(workoutTypeColors).map((type) => (
                <Dropdown.Item
                  key={type}
                  eventKey={type}
                  style={{ color: workoutTypeColors[type] }}
                >
                  {type}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <div className="color-key">
            {Object.keys(workoutTypeColors).map((type) => (
              <div key={type} className="color-key-item">
                <span
                  className="color-box"
                  style={{ backgroundColor: workoutTypeColors[type] }}
                ></span>
                {type}
              </div>
            ))}
          </div>

          <input
            name="exercise"
            type="text"
            placeholder="Exercise"
            value={currentWorkout.exercise}
            onChange={handleInputChange}
            style={{
              borderColor: workoutTypeColors[currentWorkout.type],
              color: workoutTypeColors[currentWorkout.type],
            }}
          />
          <input
            name="weight"
            type="number"
            placeholder="Weight"
            value={currentWorkout.weight}
            onChange={handleInputChange}
            style={{
              borderColor: workoutTypeColors[currentWorkout.type],
              color: workoutTypeColors[currentWorkout.type],
            }}
          />
          <input
            name="reps"
            type="number"
            placeholder="Reps"
            value={currentWorkout.reps}
            onChange={handleInputChange}
            style={{
              borderColor: workoutTypeColors[currentWorkout.type],
              color: workoutTypeColors[currentWorkout.type],
            }}
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
                    <td>
                      <strong
                        style={{ color: workoutTypeColors[workout.type] }}
                      >
                        {workout.exercise}
                      </strong>
                    </td>
                    <td>{workout.weight} lbs</td>
                    <td>{workout.reps}</td>
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
