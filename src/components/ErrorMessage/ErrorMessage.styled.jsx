import styled from "styled-components";
import { VscError } from "react-icons/vsc";

export const StyledErrorMessage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #bbbbbc;
	gap: ${p => p.theme.space[3]}px;
	font-size: ${p => p.theme.fontSizes.l};
	font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ErrorIcon = styled(VscError)`
	color: #e74c3c;
	font-size: ${p => p.theme.fontSizes.xl};
`;
