import React from "react";
import { Tilt } from "react-tilt";
import logo from "./logo.jpeg";

const Logo = () => {
	return (
		<div className="ma3">
			<Tilt
				className="br2 shadow-2"
				options={{ reverse: true, max: 55 }}
				style={{ height: 150, width: 150 }}
			>
				<img src={logo} alt="logo"></img>
			</Tilt>
		</div>
	);
};

export default Logo;
