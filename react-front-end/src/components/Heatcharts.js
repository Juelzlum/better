import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import './Heatcharts.css';

class Heatchart extends Component {
	constructor(props) {
		super(props);

		function generateData(count, yrange) {
			var i = 0;
			var series = [];
			while (i < count) {
				var x = (i + 1).toString();
				var y =
					Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
					yrange.min;

				series.push({
					x: x,
					y: y,
				});
				i++;
			}
			return series;
		}

		this.state = {
			series: [
				{
					name: '',
					data: generateData(90, {
						min: 0,
						max: 100,
					}),
				},
				{
					name: '',
					data: generateData(90, {
						min: 0,
						max: 100,
					}),
				},
				{
					name: '',
					data: generateData(90, {
						min: 0,
						max: 100,
					}),
				},
				{
					name: '',
					data: generateData(90, {
						min: 0,
						max: 100,
					}),
				},
				{
					name: '',
					data: generateData(90, {
						min: 0,
						max: 100,
					}),
				},
				{
					name: '',
					data: generateData(90, {
						min: 0,
						max: 100,
					}),
				},
				{
					name: '',
					data: generateData(90, {
						min: 0,
						max: 100,
					}),
				},
			],
			options: {
				chart: {
					toolbar: { show: false },
					height: 200,
					type: 'heatmap',
				},
				xaxis: {
					labels: {
						show: false,
					},
				},
				dataLabels: {
					enabled: false,
				},
				plotOptions: {
					heatmap: {
						radius: 3,
					},
				},
				colors: ['#0C4160'],
				title: {},
			},
		};
	}
	render() {
		return (
			<div className='heatchart'>
				<Chart
					options={this.state.options}
					series={this.state.series}
					type='heatmap'
					height={164}
				/>
			</div>
		);
	}
}

export default Heatchart;
