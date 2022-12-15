import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
	const auth = useContext(AuthContext);
	return (
		<>
			<MainHeader isAuthenticated={auth.isLoggedIn} onLogout={auth.onLogout} />
			<main>
				{!auth.isLoggedIn && <Login onLogin={auth.onLogin} />}
				{auth.isLoggedIn && <Home onLogout={auth.onLogout} />}
			</main>
		</>
	);
}

export default App;
