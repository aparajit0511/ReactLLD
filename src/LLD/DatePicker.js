import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function DatePicker() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const onClickDay = (clickedDate) => {
    alert("Clicked date is - " + clickedDate);
  };

  return (
    <div>
      <h1>DatePicker</h1>
      <Calendar value={date} onChange={onChange} onClickDay={onClickDay} />
    </div>
  );
}

export default DatePicker;
