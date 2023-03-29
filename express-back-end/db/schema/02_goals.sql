DROP TABLE IF EXISTS goals CASCADE;

CREATE TABLE goals (
  goal_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
  start_date DATE,
  end_date DATE,
  drank_water_goal BOOLEAN,
  did_exercise_goal BOOLEAN,
  did_sleep_goal BOOLEAN,
  did_eat_goal BOOLEAN
);