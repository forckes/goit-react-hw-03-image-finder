import styled from "styled-components";
import { FaLongArrowAltUp } from "react-icons/fa";

export const StyledImagesContainer = styled.div`
	max-width: 1400px;
	display: grid;
	gap: ${p => p.theme.space[4]}px;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const IdleText = styled.div`
	font-size: ${p => p.theme.fontSizes.l};
	font-weight: ${p => p.theme.fontWeights.bold};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #bbbbbc;
`;

export const ArrowIcon = styled(FaLongArrowAltUp)`
	color: #bbbbbc;
	font-size: ${p => p.theme.fontSizes.xl};
	margin-top: -10px;
`;
