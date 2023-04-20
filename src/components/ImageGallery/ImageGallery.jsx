import React, { Component } from "react";
import {
	StyledImagesContainer,
	IdleText,
	ArrowIcon
} from "./ImageGallery.styled";
import { toast } from "react-toastify";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import ShowMore from "../ShowMore/ShowMore";
import { fetchImages } from "../../services/PixabayApi/PixabayApi.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";

export default class ImageGallery extends Component {
	state = {
		images: null,
		error: null,
		status: "idle",
		showModal: false,
		selectedImageId: null
	};

	async componentDidUpdate(prevProps, prevState) {
		if (prevProps.imageName !== this.props.imageName) {
			this.setState({ status: "pending" });
			try {
				const images = await fetchImages(this.props.imageName);
				if (images.totalHits === 500) {
					toast.success(`Great! We found over then ${images.totalHits} images`);
				} else if (images.totalHits === 0) {
					throw new Error(`No image found with name ${this.props.imageName}`);
				} else {
					toast.success(`Great! We found ${images.totalHits} images`);
				}
				this.setState({ images, status: "resolved" });
			} catch (error) {
				this.setState({ error, status: "rejected" });
				toast.error("Something went wrong :(");
			}
		}
	}
	handleShowMore = async () => {
		const newImages = await fetchImages(this.props.imageName);
		this.setState(prevState => ({
			images: {
				...prevState.images,
				hits: [...prevState.images.hits, ...newImages.hits]
			}
		}));
	};
	handleImageClick = imageId => {
		this.setState({ showModal: true, selectedImageId: imageId });
	};

	handleCloseModal = () => {
		this.setState({ showModal: false, selectedImageId: null });
	};

	render() {
		const { images, error, status, showModal, selectedImageId } = this.state;
		if (status === "idle") {
			return (
				<IdleText>
					<ArrowIcon />
					Enter a image name
				</IdleText>
			);
		}
		if (status === "pending") {
			return <Loader />;
		}
		if (status === "resolved") {
			return (
				<>
					<StyledImagesContainer>
						{images.hits.map(image => (
							<ImageGalleryItem
								onClick={() => this.handleImageClick(image.id)}
								key={image.id}
								item={image}
							/>
						))}
					</StyledImagesContainer>
					<ShowMore onClick={this.handleShowMore} />
					{showModal && (
						<Modal
							items={{ hits: images.hits }}
							selectedImageId={selectedImageId}
							onClose={this.handleCloseModal}
						/>
					)}
				</>
			);
		}
		if (status === "rejected") {
			return <ErrorMessage message={error.message} />;
		}
		return <div>Image-Finder</div>;
	}
}
