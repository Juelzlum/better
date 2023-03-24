-- Insert 90 rows for User 1
INSERT INTO goal_progress (goal_id, progress_date, drank_water, is_stressed, did_sleep, is_tired)
SELECT 1, current_date - (n || ' days')::interval, (random() > 0.5), (random() > 0.5), (random() > 0.5), (random() > 0.5)
FROM generate_series(0, 89) n;

-- Insert 90 rows for User 2
INSERT INTO goal_progress (goal_id, progress_date, drank_water, is_stressed, did_sleep, is_tired)
SELECT 2, current_date - (n || ' days')::interval, (random() > 0.5), (random() > 0.5), (random() > 0.5), (random() > 0.5)
FROM generate_series(0, 89) n;

-- Insert 90 rows for User 3
INSERT INTO goal_progress (goal_id, progress_date, drank_water, is_stressed, did_sleep, is_tired)
SELECT 3, current_date - (n || ' days')::interval, (random() > 0.5), (random() > 0.5), (random() > 0.5), (random() > 0.5)
FROM generate_series(0, 89) n;

-- Insert 90 rows for User 4
INSERT INTO goal_progress (goal_id, progress_date, drank_water, is_stressed, did_sleep, is_tired)
SELECT 4, current_date - (n || ' days')::interval, (random() > 0.5), (random() > 0.5), (random() > 0.5), (random() > 0.5)
FROM generate_series(0, 89) n;

-- Insert 90 rows for User 5
INSERT INTO goal_progress (goal_id, progress_date, drank_water, is_stressed, did_sleep, is_tired)
SELECT 5, current_date - (n || ' days')::interval, (random() > 0.5), (random() > 0.5), (random() > 0.5), (random() > 0.5)
FROM generate_series(0, 89) n;