import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import landing_image from './assets/mainImg.jpg';
import breathe_image from './assets/breathe.jpg';
import habit_image from './assets/habit.jpg';
import Landing from './components/Landing';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

const navbarLinks = [
	{ url: '#', title: 'Home' },
	{ url: '#', title: 'About' },
	{ url: '#', title: 'Login' },
	{ url: '#', title: 'Sign Up' },
	{ url: '#', title: 'Contact Us' },
];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'Better',
		};
	}

	fetchData = () => {
		axios
			.get('/api/data') // You can simply make your requests to "/api/whatever you want"
			.then((response) => {
				// handle success
				console.log(response.data); // The entire response from the Rails API

				console.log(response.data.message); // Just the message
				this.setState({
					message: response.data.message,
				});
			});
	};

	render() {
		return (
			<div className='App'>
				<Navbar navbarLinks={navbarLinks} />
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
	}
}

export default App;
