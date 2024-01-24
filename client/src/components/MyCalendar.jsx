import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Tracker from "./Tracker";

function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showTracker, setShowTracker] = useState(false);

  const onDateClick = (date) => {
    setSelectedDate(date);
    setShowTracker(true);
  };

  const handleCloseTracker = () => {
    setShowTracker(false);
  };

  return (
    <div>
      <Calendar onClickDay={onDateClick} />
      <Tracker
        show={showTracker}
        handleClose={handleCloseTracker}
        date={selectedDate}
      />
    </div>
  );
}

export default MyCalendar;