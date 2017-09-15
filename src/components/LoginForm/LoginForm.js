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

class LoginForm extends Component {
	static validate(data) {
		const errors = {};
		if (!Validator.isEmail(data.email)) errors.email = 'Invalid Email';
		if (!data.password) errors.password = 'Cannot be blank.';
		return errors;
	}

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
	}

	handleInputChange(e) {
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value },
			errors: {}
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const errors = LoginForm.validate(this.state.data);
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

	render() {
		const { email, password } = this.state.data;
		const { errors, loggedIn } = this.state;
		return (
			<div>
				{loggedIn && (
					<Redirect to="/dashboard" />
				)}
				{errors.global && (
					<GlobalMessage
						message={errors.global}
						type="error"
					/>
				)}
				<Form onSubmit={this.handleSubmit} >
					<FormRow>
						<FormElement
							labelText="Email"
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
					</FormRow>
					<FormRow>
						<FormElement
							labelText="Password"
							id="password"
							type="password"
							name="password"
							className="full-width"
							value={password}
							onChange={this.handleInputChange}
						/>
						<FormFieldMessage
							message={errors.password}
							type="error"
						/>
					</FormRow>
					<input type="submit" value="Login" />
				</Form>
			</div>
		);
	}
}

LoginForm.propTypes = {
	updateUserInfo: PropTypes.func
};

LoginForm.defaultProps = {
	location: {},
	updateUserInfo: null
};

export default LoginForm;
