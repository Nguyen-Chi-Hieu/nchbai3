import React from "react";
import "./App.css";
import SubjectList from "./SubjectList";
function App() {
  const subjects = ["ReactJS", "NodeJS","Java","Database"];

  return (
    <div className="app-container">
      <h1>Ứng dụng ReactJS</h1>
      <SubjectList subjects={subjects} />
    </div>
  );
}
export default App;