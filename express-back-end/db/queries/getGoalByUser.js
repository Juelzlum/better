const getGoalByUser = `
  SELECT * FROM goals
  WHERE user_id = $1
  LIMIT 1;
`;

module.exports = {
	getGoalByUser,
};
