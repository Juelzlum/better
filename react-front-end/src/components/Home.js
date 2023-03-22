import React from 'react';
import landing_image from '../assets/mainImg.jpg';
import breathe_image from '../assets/breathe.jpg';
import habit_image from '../assets/habit.jpg';
import Landing from './Landing';
import Slider from './Slider';

const Home = () => {
	return (
		<div className='home'>
			<Landing imageSrc={landing_image} />
			<Slider
				imageSrc={habit_image}
				title={'One Day At A Time'}
				subtitle={
					'"Success is neither magical nor mysterious. Success is the natural consequence of consistently applying basic fundamentals." - Jim Rohn'
				}
			/>
			<Slider
				imageSrc={breathe_image}
				title={'Start Living The Life You Deserve'}
				subtitle={
					'Small habits lead to big results. By consistently making positive choices, you can create a life filled with joy, success, and fulfillment. So start today, and keep going - your future self will thank you!'
				}
				flipped
			/>
		</div>
	);
};

export default Home;
