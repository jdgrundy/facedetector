import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import ImageLinkForm from "./components/imagelinkform/ImageLinkForm";
import Logo from "./components/logo/Logo";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/facerecognition/FaceRecognition";
import ParticlesComponent from "./components/Particles/Particles";
import "./App.css";
import Register from "./components/Register/Register";

const MODEL_ID = "face-detection";
const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";
const returnClarifaiOptions = (imageURL) => {
	const PAT = "357155127ce84547bf0fb1d28053995c";
	const USER_ID = "jdgrundy";
	const APP_ID = "facedetector";

	// const IMAGE_URL = imageURL;

	const raw = JSON.stringify({
		user_app_id: {
			user_id: USER_ID,
			app_id: APP_ID,
		},
		inputs: [
			{
				data: {
					image: {
						url: imageURL,
					},
				},
			},
		],
	});

	const requestOptions = {
		method: "POST",
		headers: {
			Accept: "application/json",
			Authorization: "Key " + PAT,
		},
		body: raw,
	};

	return requestOptions;
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: "",
			imageURL: "",
			box: {},
			route: "SignIn",
			isSignedIn: false,
			user: {
				id: "",
				name: "",
				email: "",
				entries: 0,
				joined: "",
			},
		};
	}

	loadUser = (data) => {
		this.setState({
			user: {
				id: data.id,
				name: data.name,
				email: data.email,
				entries: data.entries,
				joined: data.joined,
			},
		});
	};

	// componentDidMount() {
	// 	fetch("http://localhost:3000").then((res) => res.json().then(console.log));
	// }

	getFaceBox = (data) => {
		// console.log(data);
		const boundingBox =
			data.outputs[0].data.regions[0].region_info.bounding_box;
		// const boxName = data.outputs[0].data.regions[0].data.concepts[0].name;
		// const boxValue = data.outputs[0].data.regions[0].data.concepts[0].value;
		// this.setState({ boxName });
		// console.log(this.state.boxLabel);
		const image = document.getElementById("inputImage");
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			leftCol: boundingBox.left_col * width,
			topRow: boundingBox.top_row * height,
			rightCol: width - boundingBox.right_col * width,
			bottomRow: height - boundingBox.bottom_row * height,
		};
	};

	displayFaceBox = (box) => {
		this.setState({ box: box });
	};

	onInputChange = (event) => {
		this.setState({ input: event.target.value });
	};

	// onButtonSubmit = () => {
	// 	this.setState({ imageURL: this.state.input }, () => {
	// 		fetch(
	// 			"https://api.clarifai.com/v2/models/" +
	// 				MODEL_ID +
	// 				"/versions/" +
	// 				MODEL_VERSION_ID +
	// 				"/outputs",
	// 			returnClarifaiOptions(this.state.imageURL)
	// 		)
	// 			.then((result) => {
	// 				this.displayFaceBox(this.getFaceBox(result));
	// 			})
	// 			.then((response) => {
	// 				if (response) {
	// 					fetch("http://localhost:3000/image", {
	// 						method: "put",
	// 						headers: { "content-type": "application/json" },
	// 						body: JSON.stringify({ id: this.state.user.id }),
	// 					})
	// 						.then((response) => response.json())
	// 						.then((count) => {
	// 							this.setState(
	// 								Object.assign(this.state.user, { entries: count })
	// 							);
	// 						});
	// 				}
	// 			})

	// 			.catch((error) => console.log("error...", error));
	// 	});
	// };

	onButtonSubmit = () => {
		this.setState({ imageURL: this.state.input }, () => {
			fetch(
				"https://api.clarifai.com/v2/models/" +
					MODEL_ID +
					"/versions/" +
					MODEL_VERSION_ID +
					"/outputs",
				returnClarifaiOptions(this.state.imageURL)
			)
				.then((response) => response.json())
				.then((result) => {
					if (result) {
						fetch("http://localhost:3000/image", {
							method: "put",
							headers: { "content-type": "application/json" },
							body: JSON.stringify({ id: this.state.user.id }),
						})
							.then((response) => response.json())
							.then((count) => {
								this.setState(
									Object.assign(this.state.user, { entries: count })
								);
							});
					}
					this.displayFaceBox(this.getFaceBox(result));
				})
				.catch((error) => console.log("error", error));
		});
	};

	onRouteChange = (route) => {
		this.setState({ route: route });
	};

	render() {
		return (
			<div className="App">
				<ParticlesComponent id="particles" />

				{this.state.route === "Home" ? (
					<div>
						<div className="navbar">
							<Logo />
							<Navigation onRouteChange={this.onRouteChange} />
						</div>
						<Rank
							name={this.state.user.name}
							entries={this.state.user.entries}
						/>
						<ImageLinkForm
							onInputChange={this.onInputChange}
							onButtonSubmit={this.onButtonSubmit}
						/>
						<FaceRecognition
							box={this.state.box}
							imageURL={this.state.imageURL}
						/>
					</div>
				) : this.state.route === "SignIn" ? (
					<div>
						<div className="navbar">
							<Logo />
							<div></div>
						</div>
						<SignIn
							loadUser={this.loadUser}
							onRouteChange={this.onRouteChange}
						/>
					</div>
				) : (
					<div>
						<div className="navbar">
							<Logo />
							<div></div>
						</div>
						<Register
							loadUser={this.loadUser}
							onRouteChange={this.onRouteChange}
						/>
					</div>
				)}
			</div>
		);
	}
}
export default App;
