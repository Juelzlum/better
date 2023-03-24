import React from 'react';
import mountainView from '../assets/mountainView1.jpg';
import './about.css';
const About = () => {
	return (
		<div className='aboutPage'>
			<img src={mountainView} alt='About Us' />
			<div className='aboutText'>
				<div className='headingTitle'>
					<h1>Who are we?</h1>
				</div>
				<div className='textblock'>
					<p>
						We are a team of passionate individuals dedicated to providing
						quality products/services to our customers.
					</p>
					<p>
						Our mission is to make a positive impact on the world and we do this
						by constantly innovating and striving for excellence in everything
						we do.
					</p>
					<p>
						Thank you for choosing us as your provider and we look forward to
						serving you.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
