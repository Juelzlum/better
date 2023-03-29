-- Insert 90 rows for User 1
INSERT INTO goals_progress (goal_id, progress_date, drank_water, did_exercise, did_sleep, did_eat)
SELECT 1, current_date - (n || ' days')::interval, (random() > 0.3), (random() > 0.2), (random() > 0.3), (random() > 0.2)
FROM generate_series(0, 89) n;

-- Insert 90 rows for User 2
INSERT INTO goals_progress (goal_id, progress_date, drank_water, did_exercise, did_sleep, did_eat)
SELECT 2, current_date - (n || ' days')::interval, (random() > 0.5), (random() > 0.5), (random() > 0.5), (random() > 0.5)
FROM generate_series(0, 89) n;

-- Insert 90 rows for User 3
INSERT INTO goals_progress (goal_id, progress_date, drank_water, did_exercise, did_sleep, did_eat)
SELECT 3, current_date - (n || ' days')::interval, (random() > 0.5), (random() > 0.5), (random() > 0.5), (random() > 0.5)
FROM generate_series(0, 89) n;

-- Insert 90 rows for User 4
INSERT INTO goals_progress (goal_id, progress_date, drank_water, did_exercise, did_sleep, did_eat)
SELECT 4, current_date - (n || ' days')::interval, (random() > 0.5), (random() > 0.5), (random() > 0.5), (random() > 0.5)
FROM generate_series(0, 89) n;

-- Insert 90 rows for User 5
INSERT INTO goals_progress (goal_id, progress_date, drank_water, did_exercise, did_sleep, did_eat)
SELECT 5, current_date - (n || ' days')::interval, (random() > 0.5), (random() > 0.5), (random() > 0.5), (random() > 0.5)
FROM generate_series(0, 89) n;