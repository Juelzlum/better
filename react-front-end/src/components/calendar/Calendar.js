import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
  <div className='calendar'>
    <Calendar
      onChange={onChange}
      value={date}
    />
  </div>
  );
};


export default ReactCalendar;