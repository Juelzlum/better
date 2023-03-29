
import React, { useState } from 'react';
import './Goals.css';

const Goals= () => {
  return (
    <div className="Goals">
      <h1>GOALS</h1>
    <h2>What are your goals</h2>
    <input type="text" id="name" name="name" required
       minLength="4" maxLength="8" size="10"></input>
    <h2>How do you want to achieve your goals</h2>
    <input type="text" id="name" name="name" required
       minLength="4" maxLength="8" size="10"></input>
      
    <button
				className='habit-tracker__submit-button'
				type='submit'>
				{/* // onClick={something} */}
				Submit
			</button>
    </div>
    
  
  )
}


export default Goals;