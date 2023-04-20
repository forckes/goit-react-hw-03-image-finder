import React from "react";
import IconButton from "../IconButton/IconButton";

export default function ShowMore({ onClick }) {
	return (
		<div>
			<IconButton onClick={onClick}>Show more</IconButton>
		</div>
	);
}
