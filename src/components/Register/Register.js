import React from "react";

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			password: "",
		};
	}

	onNameChange = (event) => {
		this.setState({ name: event.target.value });
	};

	onEmailChange = (event) => {
		this.setState({ email: event.target.value });
	};

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value });
	};

	onSubmitRegister = () => {
		fetch("http://localhost:3000/Register", {
			method: "post",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
			}),
		})
			.then((response) => response.json())
			.then((user) => {
				if (user.id) {
					this.props.loadUser(user);
					this.props.onRouteChange("Home");
				}
			});
		// this.props.onRouteChange("SignIn");
	};

	// TODO: onSubmitRegister now console.logs the Register component's state as entered by the user,
	//and changes route back to the SignIn page. The function needs to send the details to the server
	//where a new user will be created. The user will then be able to login.

	render() {
		const { onRouteChange } = this.props;
		return (
			<article
				className="br3 shadow-2 mv4 w-70 center"
				style={{ backgroundColor: "#d9dfee" }}
			>
				<article className="pa4 black-80 w-70">
					<h1 className="pa0">Register</h1>
					<h2 className="pa0">Create a new Face Detector account</h2>
					{/* Do I need this method=get?  */}
					<div>
						<fieldset id="register" className="ba b--transparent ph0 mh0">
							<legend className="ph0 mh0 fw6 f1 clip">Sign Up</legend>
							<div className="mt3">
								{/* NAME LABEL */}
								<label className="db fw4 lh-copy f6" htmlFor="reg-name">
									Name
								</label>
								{/* NAME INPUT */}
								<input
									onChange={this.onNameChange}
									className="pa2 input-reset br3 ba w-100 measure"
									type="text"
									name="reg-name"
									id="reg-name"
								/>
							</div>

							<div className="mt3">
								{/* EMAIL LABEL */}
								<label
									className="db fw4 lh-copy f6"
									htmlFor="reg-email-address"
								>
									Email address
								</label>
								{/* EMAIL INPUT */}
								<input
									onChange={this.onEmailChange}
									className="pa2 input-reset br3 ba w-100 measure"
									type="email"
									name="reg-email-address"
									id="reg-email-address"
								/>
							</div>

							<div className="mt3">
								{/* PASSWORD LABEL */}
								<label className="db fw4 lh-copy f6" htmlFor="reg-password">
									Password
								</label>
								{/* PASSWORD INPUT */}
								<input
									onChange={this.onPasswordChange}
									className="b pa2 input-reset br3 ba w-100 measure"
									type="password"
									name="reg-password"
									id="reg-password"
								/>
							</div>
						</fieldset>
						<div className="mt3 flex justify-around">
							{/* Successful registration shoud route to Signin */}
							<input
								className="tc ph4 pa2 fw2 f4 br3 b--light-blue bg-lightest-blue ba dim pointer"
								type="submit"
								onClick={this.onSubmitRegister}
								value={"Register"}
							/>
							{/* CANCEL */}
							<input
								className="tc ph4 pa2 fw2 f4 w-30 br3 b--light-blue bg-lightest-gray ba dim pointer"
								type="cancel"
								onClick={() => onRouteChange("SignIn")}
								value={"Cancel"}
							/>
						</div>
					</div>
				</article>
			</article>
		);
	}
}

export default Register;
