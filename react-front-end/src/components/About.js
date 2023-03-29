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
					<h3>
						Welcome to Better! We are a Vancouver-based startup that is
						passionate about helping our users achieve their best. We believe
						that everyone has the potential to reach their goals, and we are
						dedicated to providing the tools and resources to make that happen.
						At Better, we understand that achieving success can be challenging,
						which is why we've created an app that makes goal-setting and
						progress-tracking simple and easy. Our user-friendly interface and
						advanced features make it easy for our users to track their progress
						and stay motivated on their journey to success.
					</h3>
					<h3>
						Community is important to us at Better. We believe that working
						together and supporting each other is the key to achieving our
						goals. That's why we've created a platform that allows our users to
						connect with other like-minded individuals, share their progress,
						and inspire each other to keep pushing forward. At Better, we also
						recognize the importance of protecting our environment. We believe
						that technology can be used for good, which is why we've made it a
						priority to minimize our environmental impact in everything we do.
						From reducing paper waste to sourcing sustainable materials, we are
						committed to doing our part in creating a better world.
					</h3>
					<h3>
						Thank you for choosing Better! We are thrilled to be a part of your
						journey to success.
					</h3>
				</div>
			</div>
		</div>
	);
};

export default About;
