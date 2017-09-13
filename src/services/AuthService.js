import Axios from 'axios';
import setAuthorizationToken from '../utils/SetAuthorizationToken';

const API_URL = process.env.API_URL;




class AuthService {
	static getAPIURL() {
		if (process.env.NODE_ENV === 'production') {
			return process.env.API_URL;
		}
		return 'http://localhost:3001';
	}
	static login(data) {
		return Axios.post(`${AuthService.getAPIURL()}/auth/login`, data).then((res) => {
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
		return Axios.get(`${AuthService.getAPIURL()}/api/v1/user/me`).then((res) => {
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
