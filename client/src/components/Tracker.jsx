import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const fetchWorkouts = async () => {
      const token = localStorage.getItem("token"); // Retrieve token from local storage
      try {
        const response = await fetch("http://localhost:3000/workouts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const fetchedWorkouts = await response.json();
        setWorkouts(fetchedWorkouts);
      } catch (error) {
        alert("Failed to load workouts: " + error.message);
      }
    };

    fetchWorkouts();
  }, []);

  const handleSelectType = (type) => {
    setCurrentWorkout({ ...currentWorkout, type });
  };

  const handleInputChange = (e) => {
    setCurrentWorkout({ ...currentWorkout, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Retrieve token from local storage
    const newWorkout = {
      ...currentWorkout,
      weight: currentWorkout.weight ? Number(currentWorkout.weight) : undefined,
      reps: Number(currentWorkout.reps),
      sets: Number(currentWorkout.sets),
    };

    try {
      const response = await fetch("http://localhost:3000/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
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

  const handleDelete = async (workoutId) => {
    const token = localStorage.getItem("token"); // Retrieve token from local storage
    try {
      const response = await fetch(
        `http://localhost:3000/workouts/${workoutId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setWorkouts(workouts.filter((workout) => workout._id !== workoutId));
    } catch (error) {
      alert("Failed to delete workout: " + error.message);
    }
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
                        onClick={() => handleDelete(workout._id)}
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
