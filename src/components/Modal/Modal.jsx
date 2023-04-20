import React, { Component } from "react";
import { createPortal } from "react-dom";
import {
	ModalContainer,
	ModalContent,
	ImageContainer,
	Image
} from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
	handleKeydown = e => {
		if (e.code === "Escape") {
			console.log("ESC");
			this.props.onClose();
		}
	};
	handleBackdropClick = e => {
		if (e.currentTarget === e.target) {
			this.props.onClose();
		}
	};
	componentDidMount() {
		window.addEventListener("keydown", this.handleKeydown);
	}
	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeydown);
	}

	render() {
		const { items, selectedImageId } = this.props;
		const selectedImage = items.hits.find(
			image => image.id === selectedImageId
		);
		return createPortal(
			<ModalContainer onClick={this.handleBackdropClick}>
				<ModalContent>
					<ImageContainer>
						{selectedImage && (
							<Image
								src={selectedImage.largeImageURL}
								alt={selectedImage.tags}
							/>
						)}
					</ImageContainer>
				</ModalContent>
			</ModalContainer>,
			modalRoot
		);
	}
}
