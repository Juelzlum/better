DROP TABLE IF EXISTS goals_progress CASCADE;

CREATE TABLE goals_progress (
  progress_id SERIAL PRIMARY KEY,
  goal_id INTEGER REFERENCES goals(goal_id) ON DELETE CASCADE,
  progress_date DATE DEFAULT CURRENT_DATE,
  drank_water BOOLEAN,
  did_exercise BOOLEAN,
  did_sleep BOOLEAN,
  did_eat BOOLEAN
);