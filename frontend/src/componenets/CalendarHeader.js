import React from "react";

function CalendarHeader({ onNext, onBack, dateDisplay, setClicked }) {
  let today = new Date().toLocaleDateString();
  return (
    <div id="container">
      <div id="header">
        <button onClick={setClicked}>+ Add</button>
        <div id="monthDisplay">{dateDisplay}</div>
        <div>
          <button onClick={onBack} id="backButton">
            Back
          </button>
          <button onClick={onNext} id="nextButton">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalendarHeader;
