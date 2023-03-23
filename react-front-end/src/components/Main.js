import React from 'react';
import ReactCalendar from './calendar/Calendar';
import './Main.css';
import Heatcharts from './Heatcharts';
import RadialBar from './RadialBar';
import RadialBar2 from './RadialBar2';
import RadialBar3 from './RadialBar3';

const Main = () => {
	return (
		<div className='main'>
			<h1 className='title'>Dashboard</h1>
			<ReactCalendar />
			<div className='heatchart'>
				<Heatcharts />
			</div>
			<div className='radialBar'>
				<RadialBar />
				<RadialBar2 />
				<RadialBar3 />
			</div>
		</div>
	);
};

export default Main;
