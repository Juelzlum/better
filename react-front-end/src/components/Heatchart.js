import React, { Component } from 'react';
import Chart from 'react-apexcharts';

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
						max: 90,
					}),
				},
				{
					name: '',
					data: generateData(90, {
						min: 0,
						max: 90,
					}),
				},
				{
					name: '',
					data: generateData(90, {
						min: 0,
						max: 90,
					}),
				},
				{
					name: '',
					data: generateData(90, {
						min: 0,
						max: 90,
					}),
				},
				{
					name: '',
					data: generateData(90, {
						min: 0,
						max: 90,
					}),
				},
				{
					name: '',
					data: generateData(90, {
						min: 0,
						max: 90,
					}),
				},
				{
					name: '',
					data: generateData(90, {
						min: 0,
						max: 90,
					}),
				},
			],
			options: {
				chart: {
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
				colors: ['#008FFB'],
				title: {},
			},
		};
	}
	render() {
		return (
			<div className='mixed-chart'>
				<Chart
					options={this.state.options}
					series={this.state.series}
					type='heatmap'
					height={150}
				/>
			</div>
		);
	}
}

export default Heatchart;
