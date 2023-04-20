import styled from "styled-components";

export const StyledImage = styled.img`
	border-radius: ${p => p.theme.radii.normal};
	border: ${p => p.theme.borders.bold} transparent;
	transition: border 0.3s ease 0s;
	cursor: pointer;
	:hover {
		border: ${p => p.theme.borders.bold} #bbbbbc;
	}
`;
