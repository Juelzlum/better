const db = require('../connection');

const addStats = (value) => {
return db.query(`
INSERT INTO day(days_id, enough_water, enough_sleep, stress, tired)
Values ($1, $2, $3, $4, $5)
RETURNING *`, [days_id,enough_water, enough_sleep, stress, tired ]
.then((res) => {
  return res.rows;
})
.catch((err) => {
  console.log(err.message)
})
)
}

module.exports = {addStats}

