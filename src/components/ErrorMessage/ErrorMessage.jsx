import React from "react";
import { StyledErrorMessage, ErrorIcon } from "./ErrorMessage.styled";

export default function ErrorMessage({ message }) {
	return (
		<StyledErrorMessage>
			<ErrorIcon />
			{message}
		</StyledErrorMessage>
	);
}
