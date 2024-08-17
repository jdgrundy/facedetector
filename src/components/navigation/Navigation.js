import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
	// console.log(isSignedIn);
	if (isSignedIn) {
		return (
			<nav className="flex justify-end">
				<p
					onClick={() => onRouteChange("SignIn")}
					className="tc pa0 ma4 fw3 f4 br3 ba b--light-blue bg-lightest-blue pa2 ba dim pointer"
				>
					Sign out
				</p>
			</nav>
		);
	}
};

export default Navigation;
