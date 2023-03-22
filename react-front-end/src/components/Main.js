import React from 'react';
import ReactCalendar from './calendar/Calendar';
import './Main.css'

const Main = () => {
  return (
    <div className="main">
      <h1 className="title">Better</h1>
      <ReactCalendar />
    </div>
  )
}

export default Main;