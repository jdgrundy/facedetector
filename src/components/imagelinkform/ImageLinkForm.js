import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div className="tc">
			<p className="f3">{"Submit an image and the AI will detect faces..."}</p>
			<div className="center">
				<div className="pa4 br3 shadow-2 center form">
					<input
						className="f3 pa2 br3 center w-60"
						name="input"
						type="text"
						placeholder="Paste an image URL here..."
						onChange={onInputChange}
					></input>
					<button
						className="w-30 br3 f4 link ph3 pv2 dib black bg-lightest-blue pointer"
						onClick={onButtonSubmit}
					>
						Detect Faces!
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
