DROP TABLE IF EXISTS stats CASCADE;

CREATE TABLE stats(
  days_id INTEGER REFERENCES days(id) on DELETE CASCADE
  enough_water BOOLEAN
  enough_water BOOLEAN
  stress BOOLEAN
  tired BOOLEAN
);



  