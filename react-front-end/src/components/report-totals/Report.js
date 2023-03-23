import React from 'react';
import './Report.css';

const Report = () => {
  return (
    <div className='box'>
      <h1 className="title-text"> Progress Bar</h1>

      <div className='skill-box'>
        <span className='title'>Water</span>
        <div className='skill-bar'>
          <span className='skill-per water'>
            <span className='tooltip'>5</span>
          </span>
        </div>
      </div>
      <div className='skill-box'>
        <span className='title'>Stress</span>
        <div className='skill-bar'>
          <span className='skill-per stress'>
            <span className='tooltip'>6</span>
          </span>
        </div>
      </div>
      <div className='skill-box'>
        <span className='title'>Tired</span>
        <div className='skill-bar'>
          <span className='skill-per tired'>
            <span className='tooltip'>3</span>
          </span>
        </div>
      </div>
      <div className='skill-box'>
        <span className='title'>Sleep</span>
        <div className='skill-bar'>
          <span className='skill-per sleep'>
            <span className='tooltip'>2</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Report;