import React from 'react';
import './Landing.css';

//component that holds landingpage main image and slogan
const Landing = ({ imageSrc }) => {
	return (
		<div className='landing'>
			<img src={imageSrc} alt='Climb' className='landing__image' />
			<h1 className='landing__title'>
				Discover a <i>Better</i>&nbsp; Way of Living
			</h1>
		</div>
	);
};

export default Landing;
