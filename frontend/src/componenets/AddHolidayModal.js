import React, { useState } from "react";

function AddHolidayModal({ onSave, onClose, date, setDate }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  let type = typeof date;
  return (
    <>
      <div id="newEventModal">
        <h2>Add Holiday</h2>
        <input
          className={error ? "error" : ""}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="holidayTitleInput"
          placeholder="Holiday Title"
        />
        <input
          className={error ? "error" : ""}
          value={type === "string" ? date : ""}
          onChange={(e) => setDate(e.target.value)}
          id="dateInput"
          placeholder="Date:yyyy/mm/dd"
        />
        <button
          onClick={() => {
            if (title) {
              setTitle(false);
              onSave(title);
            } else {
              setError(true);
            }
          }}
          id="saveButton"
        >
          Save
        </button>
        <button id="cancelButton" onClick={onClose}>
          Cancel
        </button>
      </div>
      <div id="modalBackDrop"></div>
    </>
  );
}

export default AddHolidayModal;
