const getGoalsByUser = `
  SELECT * FROM goals
  WHERE user_id = $1;
`;

const getGoalProgressByUser = `
  SELECT * FROM goal_progress
  WHERE goal_id IN (
    SELECT goal_id FROM goals
    WHERE user_id = $1
  );
`;

const getGoalWeeklyProgressByUser = `
  SELECT * FROM goal_progress
  WHERE goal_id IN (
    SELECT goal_id FROM goals
    WHERE user_id = $1
  ) AND progress_date >= CURRENT_DATE - INTERVAL '1 week';
`;

const getGoalMonthlyProgressByUser = `
  SELECT * FROM goal_progress
  WHERE goal_id IN (
    SELECT goal_id FROM goals
    WHERE user_id = $1
  ) AND progress_date >= CURRENT_DATE - INTERVAL '1 month';
`;

module.exports = {
	getGoalsByUser,
	getGoalProgressByUser,
	getGoalWeeklyProgressByUser,
	getGoalMonthlyProgressByUser,
};
