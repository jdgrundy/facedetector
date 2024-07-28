import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
	return (
		<div className="tc">
			<p className="f3">{"Submit an image and the AI will detect faces..."}</p>
			<div className="center">
				<div className="pa4 br3 shadow-2 center form">
					<input
						className="f3 pa2 center w-60"
						type="text"
						placeholder="Add an image..."
					></input>
					<button className="w-30 f4 link ph3 pv2 dib black bg-lightest-blue pointer">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
