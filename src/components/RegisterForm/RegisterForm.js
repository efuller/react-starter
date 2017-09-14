import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Validator from 'validator';
import AuthService from '../../services/AuthService';
import GlobalMessage from '../Common/Messages/GlobalMessage';
import FormFieldMessage from '../Common/Messages/FormFieldMessage';

class RegisterForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				firstName: '',
				lastName: '',
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
			AuthService.register(this.state.data)
				.then(() => {
					this.setState({ loggedIn: true });
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
		if (!data.firstName) errors.firstName = 'Cannot be blank.';
		if (!data.lastName) errors.lastName = 'Cannot be blank.';
		if (!data.password) errors.password = 'Cannot be blank.';
		return errors;
	}

	render() {
		const { firstName, lastName, email, password } = this.state.data;
		const { errors, loggedIn } = this.state;
		return (
			<div>
				{loggedIn && (
					<Redirect to={'/dashboard'} />
				)}
				{errors.global && (
					<GlobalMessage
						message={errors.global}
						type="error"
					/>
				)}
				<form onSubmit={this.handleSubmit}>
					<div className="form-row">
						<label htmlFor="email"> First Name</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							className="full-width"
							value={firstName}
							onChange={this.handleInputChange}
						/>
						<FormFieldMessage
							message={errors.firstName}
							type="error"
						/>
					</div>
					<div className="form-row">
						<label htmlFor="email"> Last Name</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							className="full-width"
							value={lastName}
							onChange={this.handleInputChange}
						/>
						<FormFieldMessage
							message={errors.lastName}
							type="error"
						/>
					</div>
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
					<input type="submit" value="Register" />
				</form>
			</div>
		);
	}
}

RegisterForm.propTypes = {
	updateUserInfo: PropTypes.func
};

RegisterForm.defaultProps = {
	location: {},
	updateUserInfo: null
};

export default RegisterForm;
