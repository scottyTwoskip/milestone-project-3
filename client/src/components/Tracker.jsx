//date modal is here, named it Tracker.
// MyCalendar.jsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Tracker from "./Tracker"; // Updated import

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const onDateClick = (value) => {
    setDate(value);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Calendar onClickDay={onDateClick} />
      <Tracker show={showModal} handleClose={handleCloseModal} date={date} />
    </div>
  );
}

export default MyCalendar;
