import { createContext } from 'react';

const UserContext = createContext({
	userID: null,
	token: null,
	setUserID: () => {},
	setToken: () => {}, // Add a setter for the token
});

export default UserContext;
