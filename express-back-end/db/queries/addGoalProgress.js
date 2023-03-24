const addGoalProgressQuery = `
  INSERT INTO goal_progress (goal_id, drank_water, did_sleep, is_stressed, is_tired)
  VALUES ($1, $2, $3, $4, $5);
`;

module.exports = {
	addGoalProgressQuery,
};
