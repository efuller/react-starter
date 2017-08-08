import Axios from 'axios';
import setAuthorizationToken from '../utils/SetAuthorizationToken';

class AuthService {
	static login(data) {
		return Axios.post('http://localhost:3001/auth/login', data).then((res) => {
			const token = res.data.token;
			localStorage.setItem('jwtToken', token);
			setAuthorizationToken(token);
			return res.data;
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
