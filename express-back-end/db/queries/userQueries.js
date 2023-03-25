const createUserQuery = `
  INSERT INTO users ( email, password)
  VALUES ($1, $2)
  RETURNING user_id,  email;
`;

const getUserByEmailQuery = `
  SELECT user_id, email, password
  FROM users
  WHERE email = $1;
`;

const getUserByIdQuery = 'SELECT * FROM users WHERE user_id = $1';

module.exports = {
	createUserQuery,
	getUserByEmailQuery,
	getUserByIdQuery,
};
