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

module.exports = {
	createUserQuery,
	getUserByEmailQuery,
};
