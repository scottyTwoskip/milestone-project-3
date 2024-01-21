import React from "react";
import MyCalendar from "./MyCalendar";
import Tracker from "./Tracker";

function Dashboard() {
  return (
    <>
        <section>
            <Tracker />
        </section>
        <MyCalendar />
    </>
  );
}

export default Dashboard;
