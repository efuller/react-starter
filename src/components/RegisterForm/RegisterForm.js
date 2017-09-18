import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Validator from 'validator';
import AuthService from '../../services/AuthService';
import GlobalMessage from '../Common/Messages/GlobalMessage';
import FormFieldMessage from '../Common/Messages/FormFieldMessage';
import Form from '../Common/Forms/Form';
import FormRow from '../Common/Forms/FormRow';
import FormElement from '../Common/Forms/FormElement';

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
			loading: false,
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
			this.setState({ loading: true });
			AuthService.register(this.state.data)
				.then(() => {
					this.setState({ loggedIn: true });
					this.props.updateUserInfo({
						userInfo: this.state.userInfo,
						loggedIn: this.state.loggedIn
					});
				})
				.catch((err) => {
					this.setState({ errors: err.response.data.errors, loading: false });
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
		const { errors, loggedIn, loading } = this.state;
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
				<Form onSubmit={this.handleSubmit} loading={loading}>
					<FormRow>
						<FormElement
							labelText="First Name"
							id="firstName"
							type="text"
							className="full-width"
							name="firstName"
							value={firstName}
							onChange={this.handleInputChange}
						/>
						<FormFieldMessage
							message={errors.firstName}
							type="error"
						/>
					</FormRow>
					<FormRow>
						<FormElement
							labelText="Last Name"
							id="lastName"
							type="text"
							className="full-width"
							name="lastName"
							value={lastName}
							onChange={this.handleInputChange}
						/>
						<FormFieldMessage
							message={errors.lastName}
							type="error"
						/>
					</FormRow>
					<FormRow>
						<FormElement
							labelText="Email"
							id="email"
							type="text"
							className="full-width"
							name="email"
							value={email}
							onChange={this.handleInputChange}
						/>
						<FormFieldMessage
							message={errors.email}
							type="error"
						/>
					</FormRow>
					<FormRow>
						<FormElement
							labelText="Password"
							id="password"
							type="text"
							className="full-width"
							name="password"
							value={password}
							onChange={this.handleInputChange}
						/>
						<FormFieldMessage
							message={errors.password}
							type="error"
						/>
					</FormRow>
					<input type="submit" value="Register" />
				</Form>
			</div>
		);
	}
}

RegisterForm.propTypes = {
	updateUserInfo: PropTypes.func
};

RegisterForm.defaultProps = {
	location: {},
	updateUserInfo: null,
	loading: false
};

export default RegisterForm;
