import React from "react"


const HabitTracker = () => {
return (
<div className="HabitTracker">
  <h2>Did you drink enough water?</h2>
  <input type='checkbox' id='water' name='water' value=''/>Yes
  <input type='checkbox' id='water' name='water' value=''/>No
  <h2>Did you sleep enough?</h2>
  <input type='checkbox' id='water' name='water' value=''/>Yes
  <input type='checkbox' id='water' name='water' value=''/>No
  <h2>Are you Stress?</h2>
  <input type='checkbox' id='water' name='water' value=''/>Yes
  <input type='checkbox' id='water' name='water' value=''/>No
  <h2>Are you Tried right now?</h2>
  <input type='checkbox' id='water' name='water' value=''/>Yes
  <input type='checkbox' id='water' name='water' value=''/>No
  <br />
  <button type='submit'>Submit</button>
</div>
 
  )
}

export default HabitTracker
