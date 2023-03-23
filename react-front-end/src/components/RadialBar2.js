import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import './Heatcharts.css';

class RadialBar2 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: [75],
			options: {
				colors: ['#6F8FAF', '#141e30'],
				chart: {
					height: 350,
					type: 'radialBar',
				},
				plotOptions: {
					radialBar: {
						hollow: {
							size: '70%',
						},
					},
				},
				labels: ['Weekly Goals'],
			},
		};
	}

	render() {
		return (
			<div className='radialBar'>
				<Chart
					options={this.state.options}
					series={this.state.series}
					type='radialBar'
					height={350}
				/>
			</div>
		);
	}
}

export default RadialBar2;
