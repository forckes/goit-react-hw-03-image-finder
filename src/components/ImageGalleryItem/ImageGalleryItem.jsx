import React from "react";
import { StyledImage } from "./ImageGalleryItem.styled";

export default function ImageGalleryItem({ item, onClick }) {
	return (
		<div onClick={() => onClick(item.id)}>
			<StyledImage
				width='300'
				height='200'
				src={item.webformatURL}
				alt='Photo'
			/>
		</div>
	);
}
