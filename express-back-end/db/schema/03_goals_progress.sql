DROP TABLE IF EXISTS goal_progress CASCADE;

CREATE TABLE goal_progress (
  goal_id INT,
  progress_date DATE DEFAULT CURRENT_DATE,
  drank_water BOOLEAN,
  is_stressed BOOLEAN,
  did_sleep BOOLEAN,
  is_tired BOOLEAN,
  PRIMARY KEY (goal_id, progress_date),
  FOREIGN KEY (goal_id) REFERENCES goals(goal_id)
);