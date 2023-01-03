import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({
	isLoggedIn: false,
	onLogout: () => {},
	onLogin: (email, password) => {},
});

export const AuthContextProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedUserLoggedinInfo = localStorage.getItem('isLoggedIn');
		if (storedUserLoggedinInfo === '1') {
			setIsLoggedIn(true);
		}
	}, []);

	const loginHandler = () => {
		localStorage.setItem('isLoggedIn', '1');
		setIsLoggedIn(true);
	};
	const logoutHandler = () => {
		localStorage.removeItem('isLoggedIn');
		setIsLoggedIn(false);
	};

	return (
		<AuthContext.Provider
			value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
