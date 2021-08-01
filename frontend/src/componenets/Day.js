import React from "react";

function Day({ day, onClick, holiday }) {
  console.log(holiday);
  const className = `day ${day.value === "padding" ? "padding" : ""} ${
    day.isCurrentDay ? "currentDay" : ""
  }`;
  return (
    <div onClick={onClick} className={className}>
      {day.value === "padding" ? "" : day.value}
      {holiday ? <p className="holiday">{holiday}</p> : null}
      {day.event && <div className="event">{day.event.title}</div>}
    </div>
  );
}

export default Day;
