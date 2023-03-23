DROP TABLE IF EXISTS stats CASCADE;

CREATE TABLE stats(
  days_id  SERIAL PRIMARY KEY NOT NULL,
  enough_water BOOLEAN,
  enough_sleep BOOLEAN,
  stress BOOLEAN,
  tired BOOLEAN
);



  