const getGoalsByUser = `
  SELECT * FROM goals
  WHERE user_id = $1
`;

const getGoalProgressByUser = `
  SELECT * FROM goal_progress
  WHERE goal_id IN (
    SELECT goal_id FROM goals WHERE user_id = $1
  )
`;

module.exports = {
	getGoalsByUser,
	getGoalProgressByUser,
};
