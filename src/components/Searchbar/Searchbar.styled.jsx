import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const StyledHeader = styled.header`
	width: 335px;
	margin-top: ${p => p.theme.space[2]}px;
	margin-bottom: ${p => p.theme.space[4]}px;
`;

export const StyledIcon = styled(FaSearch)`
	color: #ffffff;
`;

export const StyledForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledInput = styled.input`
	background-color: #3d3d40;
	border-bottom-left-radius: ${p => p.theme.radii.normal};
	border-top-left-radius: ${p => p.theme.radii.normal};
	font-size: ${p => p.theme.fontSizes.m};
	font-weight: ${p => p.theme.fontWeights.bold};
	border: ${p => p.theme.borders.bold} #3d3d40;
	height: 40px;
	padding: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #bbbbbc;

	::placeholder {
		color: #bbbbbc;
	}
	:hover {
		border: ${p => p.theme.borders.bold} #58585a;
	}
`;
