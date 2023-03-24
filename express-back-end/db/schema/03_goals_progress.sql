DROP TABLE IF EXISTS goal_progress CASCADE;

CREATE TABLE goal_progress (
  progress_id SERIAL PRIMARY KEY,
  goal_id INTEGER REFERENCES goals(goal_id) ON DELETE CASCADE,
  progress_date DATE DEFAULT CURRENT_DATE,
  drank_water BOOLEAN,
  is_stressed BOOLEAN,
  did_sleep BOOLEAN,
  is_tired BOOLEAN
);