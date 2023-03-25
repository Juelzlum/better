
import React, { useState } from 'react';

const Goals= () => {
  return (
    <div>
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