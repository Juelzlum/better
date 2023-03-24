import React, { useState } from 'react';
import './HabitTracker.css';

const HabitTracker = () => {
	const [water, setWater] = useState(null);
	const [sleep, setSleep] = useState(null);
	const [stress, setStress] = useState(null);
	const [tired, setTired] = useState(null);

	const handleWater = (value) => {
		setWater(value);
	};

	const handleSleep = (value) => {
		setSleep(value);
	};

	const handleStress = (value) => {
		setStress(value);
	};

	const handleTired = (value) => {
		setTired(value);
	};

	return (
		<div className='habit-tracker'>
			<h2>Did you drink enough water?</h2>
			<div className='habit-tracker__toggle'>
				<button
					className={`habit-tracker__toggle__button ${
						water === true && 'selected'
					}`}
					onClick={() => handleWater(true)}>
					Yes
				</button>
				<button
					className={`habit-tracker__toggle__button ${
						water === false && 'selected'
					}`}
					onClick={() => handleWater(false)}>
					No
				</button>
			</div>
			<h2>Did you sleep enough?</h2>
			<div className='habit-tracker__toggle'>
				<button
					className={`habit-tracker__toggle__button ${
						sleep === true && 'selected'
					}`}
					onClick={() => handleSleep(true)}>
					Yes
				</button>
				<button
					className={`habit-tracker__toggle__button ${
						sleep === false && 'selected'
					}`}
					onClick={() => handleSleep(false)}>
					No
				</button>
			</div>
			<h2>Are you stressed?</h2>
			<div className='habit-tracker__toggle'>
				<button
					className={`habit-tracker__toggle__button ${
						stress === true && 'selected'
					}`}
					onClick={() => handleStress(true)}>
					Yes
				</button>
				<button
					className={`habit-tracker__toggle__button ${
						stress === false && 'selected'
					}`}
					onClick={() => handleStress(false)}>
					No
				</button>
			</div>
			<h2>Are you tired right now?</h2>
			<div className='habit-tracker__toggle'>
				<button
					className={`habit-tracker__toggle__button ${
						tired === true && 'selected'
					}`}
					onClick={() => handleTired(true)}>
					Yes
				</button>
				<button
					className={`habit-tracker__toggle__button ${
						tired === false && 'selected'
					}`}
					onClick={() => handleTired(false)}>
					No
				</button>
			</div>
			<button className='habit-tracker__submit-button' type='submit'>
				Submit
			</button>
		</div>
	);
};

export default HabitTracker;
