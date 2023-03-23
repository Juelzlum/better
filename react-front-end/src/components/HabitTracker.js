import axios from "axios";
import React, { useEffect, useState } from "react";
import './habitTrack.css';

const HabitTracker = () => {

  const [track, setTrack] = useState([])

  const habitTrack = () => {
    
      return axios
        .put('/api/data', { track })
        .then((response) => {
          setTrack(response.data)
        })
  };


  // function bookInterview(id, interview) {
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: { ...interview }
  //   };
  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };

  //   return axios
  //   .put(`/api/appointments/${id}`,  { interview })
  //   .then(() => {
  //     setState({
  //       ...state,
  //       appointments,
  //       days: numOfSpots(state, appointments, id)
  //     });
  //   })
  // }

  return (
    <div className="HabitTracker">
      <h2>Did you drink enough water?</h2>
      <input type='checkbox' id='water' name='water' value='' />Yes
      <input type='checkbox' id='water' name='water' value='' />No
      <h2>Did you sleep enough?</h2>
      <input type='checkbox' id='water' name='water' value='' />Yes
      <input type='checkbox' id='water' name='water' value='' />No
      <h2>Are you Stress?</h2>
      <input type='checkbox' id='water' name='water' value='' />Yes
      <input type='checkbox' id='water' name='water' value='' />No
      <h2>Are you Tried right now?</h2>
      <input type='checkbox' id='water' name='water' value='' />Yes
      <input type='checkbox' id='water' name='water' value='' />No
      <br />
      <button type='submit' onClick={habitTrack}>Submit</button>
    </div>

  );
};

export default HabitTracker;
