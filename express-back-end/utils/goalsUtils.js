function calculateTotalPercentage(goals, progress) {
	let totalCompleted = 0;
	let totalPossible = 0;

	goals.forEach((goal) => {
		const {
			drank_water_goal,
			is_stressed_goal,
			did_sleep_goal,
			is_tired_goal,
		} = goal;

		let completed = 0;
		let possible = 0;

		progress.forEach((p) => {
			const { drank_water, is_stressed, did_sleep, is_tired } = p;

			if (drank_water_goal) {
				possible++;
				if (drank_water) {
					completed++;
				}
			}

			if (is_stressed_goal) {
				possible++;
				if (is_stressed) {
					completed++;
				}
			}

			if (did_sleep_goal) {
				possible++;
				if (did_sleep) {
					completed++;
				}
			}

			if (is_tired_goal) {
				possible++;
				if (is_tired) {
					completed++;
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

	return totalPercentage;
}

module.exports = {
	calculateTotalPercentage,
};
