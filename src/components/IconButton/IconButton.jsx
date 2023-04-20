import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	padding: 11px 16px;
	font-size: 18px;
	background-color: #2f2f35;
	color: #fff;
	border-bottom-right-radius: ${p => p.theme.radii.normal};
	border-top-right-radius: ${p => p.theme.radii.normal};
	border: 0;
	display: flex;
	align-items: center;
	gap: 8px;
	margin: 10px 0px;
	cursor: pointer;
	:hover {
		opacity: 0.9;
	}
	:active {
		opacity: 0.7;
	}
`;

export default function IconButton({ children, onClick, ...allyProps }) {
	return (
		<StyledButton type='button' onClick={onClick} {...allyProps}>
			{children}
		</StyledButton>
	);
}
IconButton.defaultProps = {
	onClick: () => null,
	children: null
};
