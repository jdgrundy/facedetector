import React from "react";

const Rank = ({ name, entries }) => {
	return (
		<div>
			<div className="tc f3">{`${name}, you total entry count is:`}</div>
			<div className="tc f1">{`${entries}`}</div>
		</div>
	);
};

export default Rank;
