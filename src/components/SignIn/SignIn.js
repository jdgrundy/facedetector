import React from "react";

const SignIn = ({ onRouteChange }) => {
	return (
		<article
			className="br3 shadow-2 mv4 w-70 center"
			style={{ backgroundColor: "#d9dfee" }}
		>
			<article className="pa4 black-80 w-70">
				<h1 className="pa0">Sign up to Face Detector</h1>
				<div action="sign-up_submit" method="get" acceptCharset="utf-8">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						<legend className="ph0 mh0 fw6 f1 clip">Sign Up</legend>
						<div className="mt3">
							<label className="db fw4 lh-copy f6" htmlFor="email-address">
								Email address
							</label>
							<input
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
								className="pa2 input-reset ba br3 w-100 measure"
								type="password"
								name="password"
								id="password"
							/>
						</div>
					</fieldset>
					<div className="mt3 flex justify-around">
						<input
							onClick={() => onRouteChange("Home")}
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
};

export default SignIn;
