import React, { Component } from "react";
import { Box } from "../Box/Box";
import {
	StyledForm,
	StyledHeader,
	StyledInput,
	StyledIcon
} from "./Searchbar.styled";
import { toast } from "react-toastify";
import IconButton from "../IconButton/IconButton";

export default class Searchbar extends Component {
	state = {
		imageName: ""
	};

	handleSubmit = e => {
		e.preventDefault();
		if (this.state.imageName.trim() === "") {
			toast.error("Write image name");
			return;
		}
		this.props.onSubmit(this.state.imageName);
		this.setState({ imageName: "" });
	};
	handleChange = e => {
		this.setState({ imageName: e.currentTarget.value.toLowerCase() });
	};
	render() {
		const { imageName } = this.state;
		return (
			<Box
				width='100%'
				display='flex'
				alignItems='center'
				justifyContent='center'
			>
				<StyledHeader>
					<StyledForm onSubmit={this.handleSubmit}>
						<StyledInput
							onChange={this.handleChange}
							value={imageName}
							type='text'
							autoComplete='off'
							autoFocus
							placeholder='Search images'
						/>
						<IconButton type='submit'>
							<StyledIcon />
						</IconButton>
					</StyledForm>
				</StyledHeader>
			</Box>
		);
	}
}
