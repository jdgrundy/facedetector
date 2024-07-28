import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import ImageLinkForm from "./components/imagelinkform/ImageLinkForm";
import Logo from "./components/logo/Logo";
import Rank from "./components/Rank/Rank";
import ParticlesComponent from "./components/Particles/Particles";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<ParticlesComponent id="particles" />
				<div className="navbar">
					<Navigation />
					<Logo />
				</div>

				<Rank />
				<ImageLinkForm />

				{/*
				<FaceRecognition />*/}
			</div>
		);
	}
}
export default App;
