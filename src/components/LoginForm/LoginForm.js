import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Validator from 'validator';
import AuthService from '../../services/AuthService';
import GlobalMessage from '../Common/Messages/GlobalMessage';
import FormFieldMessage from '../Common/Messages/FormFieldMessage';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				email: '',
				password: ''
			},
			loggedIn: false,
			userInfo: null,
			errors: {}
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.validate = this.validate.bind(this);
	}

	handleInputChange(e) {
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value },
			errors: {}
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });

		if (Object.keys(errors).length === 0) {
			AuthService.login(this.state.data)
				.then((res) => {
					this.setState({ loggedIn: true, userInfo: res });
					this.props.updateUserInfo({
						userInfo: this.state.userInfo,
						loggedIn: this.state.loggedIn
					});
				})
				.catch((err) => {
					this.setState({ errors: err.response.data.errors });
				});
		}
	}

	validate(data) {
		const errors = {};
		if (!Validator.isEmail(data.email)) errors.email = 'Invalid Email';
		if (!data.password) errors.password = 'Cannot be blank.';
		return errors;
	}

	render() {
		const from = this.props.location.state ? this.props.location.state.from.pathname : '/';
		const { email, password } = this.state.data;
		const { errors, loggedIn } = this.state;
		return (
			<div>
				{loggedIn && (
					<Redirect to={from || '/dashboard'} />
				)}
				{errors.global && (
					<GlobalMessage
						message={errors.global}
						type="error"
					/>
				)}
				<form onSubmit={this.handleSubmit}>
					<div className="form-row">
						<label htmlFor="email"> Email</label>
						<input
							type="text"
							id="email"
							name="email"
							className="full-width"
							value={email}
							onChange={this.handleInputChange}
						/>
						<FormFieldMessage
							message={errors.email}
							type="error"
						/>
					</div>
					<div className="form-row">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							className="full-width"
							value={password}
							onChange={this.handleInputChange}
						/>
						<FormFieldMessage
							message={errors.password}
							type="error"
						/>
					</div>
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
