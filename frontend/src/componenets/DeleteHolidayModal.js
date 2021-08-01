import React from "react";

export default function DeleteHolidayModal({ onDelete, onClose, eventText }) {
  return (
    <>
      <div id="deleteEventModal">
        <h2>Holiday</h2>
        <p id="eventText">{eventText}</p>
        <button onClick={onDelete} id="deleteButton">
          Delete
        </button>
        <button onClick={onClose} id="closeButton">
          Close
        </button>
      </div>
      <div id="modalBackDrop"></div>
    </>
  );
}
