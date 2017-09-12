import Axios from 'axios';
import setAuthorizationToken from '../utils/SetAuthorizationToken';

const API_URL = process.env.API_URL || 'http://localhost:3001';

class AuthService {
	static login(data) {
		return Axios.post(`${API_URL}/auth/login`, data).then((res) => {
			// Extract out the token.
			const token = res.data.user.token;

			// Save it to local storage.
			localStorage.setItem('jwtToken', token);

			// Set Authorization header.
			setAuthorizationToken(token);

			// Return user data.
			return res.data;
		});
	}

	static getUserInfo(token) {
		setAuthorizationToken(token);
		return Axios.get(`${API_URL}/api/v1/user/me`).then((res) => {
			return res.data.user;
		});
	}

	static authenticateUser(token) {
		localStorage.setItem('jwtToken', token);
	}

	static isUserAuthenticated() {
		return localStorage.getItem('jwtToken') !== null;
	}

	static deauthenticateUser() {
		localStorage.removeItem('jwtToken');
	}

	static getToken() {
		return localStorage.getItem('jwtToken');
	}
}

export default AuthService;
