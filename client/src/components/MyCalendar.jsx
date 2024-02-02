import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Ensure the default calendar styles are applied
import Tracker from "./Tracker";
import './MyCalendar.css'; // Import the custom CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';


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
    <div className="my-calendar-container">
      <Calendar 
        onClickDay={onDateClick} 
        className="react-calendar" // This class is for custom styling in MyCalendar.css
      />
      {showTracker && (
        <Tracker
          show={showTracker}
          handleClose={handleCloseTracker}
          date={selectedDate}
        />
      )}
    </div>
  );
}

export default MyCalendar;
