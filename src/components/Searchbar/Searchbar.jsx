import { useState } from "react";
import { Box } from "../Box/Box";
import {
	StyledForm,
	StyledHeader,
	StyledInput,
	StyledIcon
} from "./Searchbar.styled";
import { toast } from "react-toastify";
import IconButton from "../IconButton/IconButton";

export default function Searchbar({ onSubmit }) {
	const [imageName, setImageName] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (imageName.trim() === "") {
			toast.error("Write image name");
			return;
		}
		onSubmit(imageName);
		setImageName("");
	};
	const handleChange = e => {
		setImageName(e.currentTarget.value.toLowerCase());
	};

	return (
		<Box
			width='100%'
			display='flex'
			alignItems='center'
			justifyContent='center'
		>
			<StyledHeader>
				<StyledForm onSubmit={handleSubmit}>
					<StyledInput
						onChange={handleChange}
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
