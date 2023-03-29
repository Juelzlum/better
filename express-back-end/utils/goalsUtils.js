function calculateFilteredPercentage(goals, progress, filter) {
	let totalCompleted = 0;
	let totalPossible = 0;

	goals.forEach((goal) => {
		const {
			drank_water_goal,
			did_exercise_goal,
			did_sleep_goal,
			did_eat_goal,
		} = goal;

		let completed = 0;
		let possible = 0;

		progress.forEach((p) => {
			const { drank_water, did_exercise, did_sleep, did_eat, progress_date } =
				p;

			if (filter(progress_date)) {
				if (drank_water_goal) {
					possible++;
					if (drank_water) {
						completed++;
					}
				}

				if (did_exercise_goal) {
					possible++;
					if (did_exercise) {
						completed++;
					}
				}

				if (did_sleep_goal) {
					possible++;
					if (did_sleep) {
						completed++;
					}
				}

				if (did_eat_goal) {
					possible++;
					if (did_eat) {
						completed++;
					}
				}
			}
		});

		if (possible > 0) {
			totalCompleted += (completed / possible) * 100;
			totalPossible += 100;
		}
	});

	const totalPercentage =
		totalPossible === 0 ? 0 : (totalCompleted / totalPossible) * 100;

	return Math.round(totalPercentage);
}

module.exports = {
	calculateFilteredPercentage,
};
