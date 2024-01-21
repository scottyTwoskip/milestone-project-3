import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Nav from "./components/Nav";
import Tracker from "./components/MyCalendar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Nav />
      <Dashboard />
    </>
  );
}

export default App;
