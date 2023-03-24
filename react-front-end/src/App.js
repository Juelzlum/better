import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Report from './components/report-totals/Report';
import HabitTracker from './components/HabitTracker';
import About from './components/About';

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
				<Navbar />
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/about' element={<About />} />
						<Route path='/dashboard' element={<Main />} />
						<Route path='/report' element={<Report />} />
						<Route path='/habittracker' element={<HabitTracker />}></Route>
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;
