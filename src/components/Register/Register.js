import React from "react";

const Register = () => {
	return (
		<article
			className="br3 shadow-2 mv4 w-70 center"
			style={{ backgroundColor: "#d9dfee" }}
		>
			<article className="pa4 black-80 w-70">
				<h1 className="pa0">Register</h1>
				<h2 className="pa0">Create a new Face Detector account</h2>
				<form action="sign-up_submit" method="get" acceptCharset="utf-8">
					<fieldset id="register" className="ba b--transparent ph0 mh0">
						<legend className="ph0 mh0 fw6 f1 clip">Sign Up</legend>
						<div className="mt3">
							<label className="db fw4 lh-copy f6" htmlFor="name">
								Name
							</label>
							<input
								className="pa2 input-reset ba w-100 measure"
								type="text"
								name="name"
								id="reg-name"
							/>
						</div>
						<div className="mt3">
							<label className="db fw4 lh-copy f6" htmlFor="location">
								Country
							</label>
							<input
								className="pa2 input-reset ba w-100 measure"
								type="text"
								name="country"
								id="reg-country"
							/>
						</div>
						<div className="mt3">
							<label className="db fw4 lh-copy f6" htmlFor="email-address">
								Email address
							</label>
							<input
								className="pa2 input-reset ba w-100 measure"
								type="email"
								name="email-address"
								id="reg-email-address"
							/>
						</div>
						<div className="mt3">
							<label className="db fw4 lh-copy f6" htmlFor="password">
								Password
							</label>
							<input
								className="b pa2 input-reset ba w-100"
								type="password"
								name="password"
								id="reg-password"
							/>
						</div>
					</fieldset>
					<div className="mt3 flex justify-around">
						<input
							className="tc ph4 pa2 fw2 f4 br3 b--light-blue bg-lightest-blue ba dim pointer"
							type="submit"
							value={"Register"}
						/>
					</div>
				</form>
			</article>
		</article>
	);
};

export default Register;
