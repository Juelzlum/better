import React from 'react';
import ReactCalendar from './calendar/Calendar';
import './Main.css';
import Heatmap from './Heatmap';
const Main = () => {
	return (
		<div className='main'>
			<h1 className='title'>Better</h1>
			<ReactCalendar />
			<Heatmap />
		</div>
	);
};

export default Main;
