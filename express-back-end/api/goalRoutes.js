const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { calculateFilteredPercentage } = require('../utils/goalsUtils');
const {
	getGoalsByUser,
	getGoalProgressByUser,
} = require('../db/queries/goalQueries');

// Add an authentication middleware
const authenticate = require('../middleware/authenticate');

// Filters
const totalFilter = () => true;
const weeklyFilter = (date) => {
	const oneWeekAgo = new Date();
	oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
	return date >= oneWeekAgo;
};
const monthlyFilter = (date) => {
	const oneMonthAgo = new Date();
	oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
	return date >= oneMonthAgo;
};

// Update the route to include the :userId parameter and the authenticate middleware
router.get('/:userId/progress/total', authenticate, async (req, res) => {
	try {
		const { userId } = req.params;

		const goals = await db.query(getGoalsByUser, [userId]);
		const progress = await db.query(getGoalProgressByUser, [userId]);

		const totalPercentage = calculateFilteredPercentage(
			goals.rows,
			progress.rows,
			totalFilter
		);

		res.status(200).json({ totalPercentage });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Internal server error.' });
	}
});

// Weekly progress endpoint
router.get('/:userId/progress/weekly', authenticate, async (req, res) => {
	try {
		const { userId } = req.params;

		const goals = await db.query(getGoalsByUser, [userId]);
		const progress = await db.query(getGoalProgressByUser, [userId]);

		const totalPercentage = calculateFilteredPercentage(
			goals.rows,
			progress.rows,
			weeklyFilter
		);

		res.status(200).json({ totalPercentage });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Internal server error.' });
	}
});

// Monthly progress endpoint
router.get('/:userId/progress/monthly', authenticate, async (req, res) => {
	try {
		const { userId } = req.params;

		const goals = await db.query(getGoalsByUser, [userId]);
		const progress = await db.query(getGoalProgressByUser, [userId]);

		const totalPercentage = calculateFilteredPercentage(
			goals.rows,
			progress.rows,
			monthlyFilter
		);

		res.status(200).json({ totalPercentage });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Internal server error.' });
	}
});

// Add a goal
router.post('/:userId/add-goal', authenticate, async (req, res) => {
	try {
		const {
			start_date,
			end_date,
			drank_water_goal,
			did_sleep_goal,
			is_stressed_goal,
			is_tired_goal,
		} = req.body;

		// Get the user ID from req.params
		const userId = req.params.userId;

		// Delete the user's previous goal
		await db.query('DELETE FROM goals WHERE user_id = $1', [userId]);

		// Add the new goal
		const result = await db.query(
			'INSERT INTO goals (user_id, start_date, end_date, drank_water_goal, did_sleep_goal, is_stressed_goal, is_tired_goal) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
			[
				userId,
				start_date,
				end_date,
				drank_water_goal,
				did_sleep_goal,
				is_stressed_goal,
				is_tired_goal,
			]
		);

		res.status(201).json(result.rows[0]);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});
module.exports = router;
