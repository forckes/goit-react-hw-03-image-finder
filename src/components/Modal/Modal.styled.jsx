import styled from "styled-components";

export const ModalContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
	background: #2f2f35;
	padding: 20px;
	border-radius: 5px;
	max-width: 90%;
	max-height: 90%;
	overflow: auto;
`;

export const ImageContainer = styled.div`
	overflow: hidden;
`;

export const Image = styled.img`
	max-height: 700px;
`;
