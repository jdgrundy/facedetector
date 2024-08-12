import React from "react";

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: "",
			signInPassword: "",
		};
	}

	onEmailChange = (event) => {
		this.setState({ signInEmail: event.target.value });
	};

	onPasswordChange = (event) => {
		this.setState({ signInPassword: event.target.value });
	};

	onSubmitSignIn = () => {
		//this is the same as making the POST request to :3000 using Postman...
		fetch("http://localhost:3000/Signin", {
			method: "post",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword,
			}),
		})
			.then((response) => response.json())
			.then((user) => {
				if (user.id) {
					this.props.loadUser(user);
					this.props.onRouteChange("Home");
				}
			});
	};

	render() {
		const { onRouteChange } = this.props;
		return (
			<article
				className="br3 shadow-2 mv4 w-70 center"
				style={{ backgroundColor: "#d9dfee" }}
			>
				<article className="pa4 black-80 w-70">
					<h1 className="pa0">Sign up to Face Detector</h1>
					<div>
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							<legend className="ph0 mh0 fw6 f1 clip">Sign Up</legend>
							<div className="mt3">
								<label className="db fw4 lh-copy f6" htmlFor="email-address">
									Email address
								</label>
								<input
									onChange={this.onEmailChange}
									className="pa2 input-reset ba br3 w-100 measure"
									type="email"
									name="email-address"
									id="email-address"
								/>
							</div>
							<div className="mt3">
								<label className="db fw4 lh-copy f6" htmlFor="password">
									Password
								</label>
								<input
									onChange={this.onPasswordChange}
									className="pa2 input-reset ba br3 w-100 measure"
									type="password"
									name="password"
									id="password"
								/>
							</div>
						</fieldset>
						<div className="mt3 flex justify-around">
							<input
								onClick={this.onSubmitSignIn}
								className="tc ph4 pa2 fw5 f4 br3 ba b--light-blue bg-lightest-blue ba dim pointer"
								type="submit"
								value={"Sign In"}
							/>
							<input
								onClick={() => onRouteChange("Register")}
								className="tc ph4 pa2 fw5 f4 br3 ba b--light-blue bg-lightest-blue ba dim pointer"
								type="submit"
								value={"Register"}
							/>
						</div>
					</div>
				</article>
			</article>
		);
	}
}

export default SignIn;
