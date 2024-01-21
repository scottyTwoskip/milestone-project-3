import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Modal, Button } from "react-bootstrap";

function CalendarComponent() {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const onDateClick = (value, event) => {
    setDate(value);
    setShowModal(true);
  };

  return (
    <div>
      <Calendar onClickDay={onDateClick} />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Date Selected</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You clicked on {date.toDateString()}</p>
          {/* Here you will integrate your separate component */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CalendarComponent;
