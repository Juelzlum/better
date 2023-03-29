const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { calculateTotalPercentage } = require('../utils/goalsUtils');
const {
	getGoalsByUser,
	getGoalProgressByUser,
	getGoalWeeklyProgressByUser,
	getGoalMonthlyProgressByUser,
} = require('../db/queries/goalQueries');

// Add an authentication middleware
const authenticate = require('../middleware/authenticate');

// Update the route to include the :userId parameter and the authenticate middleware
router.get('/:userId/progress/total', authenticate, async (req, res) => {
	try {
		const { userId } = req.params;

		const goals = await db.query(getGoalsByUser, [userId]);
		const progress = await db.query(getGoalProgressByUser, [userId]);

		const totalPercentage = calculateTotalPercentage(goals.rows, progress.rows);

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
		const progress = await db.query(getWeeklyGoalProgressByUser, [userId]);

		const totalPercentage = calculateTotalPercentage(goals.rows, progress.rows);

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
		const progress = await db.query(getMonthlyGoalProgressByUser, [userId]);

		const totalPercentage = calculateTotalPercentage(goals.rows, progress.rows);

		res.status(200).json({ totalPercentage });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Internal server error.' });
	}
});

module.exports = router;
