// Tracker.jsx
import React from "react";
import { Modal, Button } from "react-bootstrap";

function Tracker({ show, handleClose, date }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Date Selected</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You clicked on {date.toDateString()}</p>
        {/* You can expand this modal with more content related to the date */}
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
