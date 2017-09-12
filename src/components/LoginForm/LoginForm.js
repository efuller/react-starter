import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import AuthService from '../../services/AuthService';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			loggedIn: false,
			userInfo: null
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		AuthService.login(this.state)
			.then((res) => {
				this.setState({ loggedIn: true, userInfo: res });
				this.props.updateUserInfo({
					userInfo: this.state.userInfo,
					loggedIn: this.state.loggedIn
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		const from = this.props.location.state ? this.props.location.state.from.pathname : '/';
		const { email, password, loggedIn } = this.state;
		return (
			<div>
				{loggedIn && (
					<Redirect to={from || '/dashboard'} />
				)}
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="email"> Email
						<input type="text" id="email" name="email" className="full-width" value={email} onChange={this.handleInputChange} />
					</label>
					<label htmlFor="password"> Password
						<input type="password" id="password" name="password" className="full-width" value={password} onChange={this.handleInputChange} />
					</label>
					<input type="submit" value="Login" />
				</form>
			</div>
		);
	}
}

LoginForm.propTypes = {
	location: PropTypes.shape({
		state: PropTypes.shape({
			from: PropTypes.shape({
				pathname: PropTypes.string
			})
		})
	}),
	updateUserInfo: PropTypes.func
};

LoginForm.defaultProps = {
	location: {},
	updateUserInfo: null
};

export default LoginForm;
