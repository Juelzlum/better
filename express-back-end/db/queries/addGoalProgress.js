const addGoalProgress = `INSERT INTO goals_progress (goal_id, start_date, end_date, drank_water_goal, did_exercise_goal, did_sleep_goal, did_eat_goal)
VALUES ([user_id], '[start_date]', '[end_date]', [drank_water_goal], [did_exercise_goal], [did_sleep_goal], [did_eat_goal]);`;

module.exports = { addGoalProgress };
