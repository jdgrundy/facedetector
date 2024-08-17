import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imageURL, box }) => {
	if (imageURL) {
		return (
			<div className="center ma ">
				<div className="absolute ma3 ">
					<img
						className="br3 shadow-2"
						id="inputImage"
						src={imageURL}
						alt="user supplied by url for face detection"
						width="500px"
						height="auto"
					/>

					<div
						className="bounding-box"
						style={{
							left: box.leftCol,
							top: box.topRow,
							right: box.rightCol,
							bottom: box.bottomRow,
						}}
					>
						{/* <div className="box-label"></div> */}
					</div>
				</div>
			</div>
		);
	}
};

export default FaceRecognition;
