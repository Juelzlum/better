const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { calculateTotalPercentage } = require('../utils/goalsUtils');
const {
	getGoalsByUser,
	getGoalProgressByUser,
} = require('../db/queries/goalQueries');

router.get('/:userId/goals', async (req, res) => {
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

module.exports = router;
