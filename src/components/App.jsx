import React, { Component } from "react";
import { Box } from "./Box/Box";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

export default class App extends Component {
	state = {
		imageName: ""
	};
	handleInputSubmit = name => {
		this.setState({ imageName: name });
		console.log(name);
	};
	render() {
		return (
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
			>
				<Searchbar onSubmit={this.handleInputSubmit} />
				<ImageGallery imageName={this.state.imageName} />
				<ToastContainer theme='dark' autoClose={3000} />
			</Box>
		);
	}
}
