import "./App.css";
import { useState, useEffect } from "react";
import CalendarHeader from "./componenets/CalendarHeader";
import Day from "./componenets/Day";
import AddHolidayModal from "./componenets/AddHolidayModal";
import DeleteHolidayModal from "./componenets/DeleteHolidayModal";
import useDate from "./hooks/useDate";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000";
function App() {
  const [holidayList, setHolidayList] = useState();
  const [nav, setNav] = useState(0);
  const [clicked, setClicked] = useState();
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  async function getHolidays() {
    const result = await axios.get(`${API_BASE_URL}/`);
    const data = result.data;
    console.log("data", data);
    setHolidayList(data);
  }
  useEffect(() => {
    getHolidays();
  }, []);

  const eventForDate = (date) => events.find((e) => e.date === date);
  const { days, dateDisplay } = useDate(events, nav);
  return (
    <>
      <div id="container">
        <CalendarHeader
          setClicked={setClicked}
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)}
        />

        <div id="weekdays">
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>

        <div id="calendar">
          {days.map((d, index) => {
            let value;
            if (holidayList) {
              holidayList.map((item) => {
                let holiday = item.date.slice(0, 10);
                if (d.date === holiday) {
                  value = item.name;
                }
              });
              console.log(value);
            } else {
              value = "";
            }
            return (
              <Day
                key={index}
                day={d}
                holiday={value}
                onClick={() => {
                  if (d.value !== "padding") {
                    setClicked(d.date);
                  }
                }}
              />
            );
          })}
        </div>
      </div>
      {clicked && !eventForDate(clicked) && (
        <AddHolidayModal
          date={clicked}
          setDate={setClicked}
          onClose={() => setClicked(null)}
          onSave={(title) => {
            setEvents([...events, { title, date: clicked }]);
            setClicked(null);
          }}
        />
      )}
      {clicked && eventForDate(clicked) && (
        <DeleteHolidayModal
          eventText={eventForDate(clicked).title}
          onClose={() => setClicked(null)}
          onDelete={() => {
            setEvents(events.filter((e) => e.date !== clicked));
            setClicked(null);
          }}
        />
      )}
    </>
  );
}

export default App;
