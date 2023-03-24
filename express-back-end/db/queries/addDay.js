const db = require('../connection');

const addDay = () => {
return db.query(`
INSERT INTO day()
Values ()
RETURNING *`, []
.then((res) => {
  return res.rows;
})
.catch((err) => {
  console.log(err.message)
})
)
}

module.exports = {addDay}

// return db.query(`
// INSERT INTO passwords (username, url, email, password, category)
// VALUES ($1, $2, $3, $4, $5)
// RETURNING *`, [val.username, val.url, val.email, val.password, val.category])
// .then((res) => {
//   return res.rows;
// })
// .catch((err) => {
//   console.log(err.message);
// });
// };
