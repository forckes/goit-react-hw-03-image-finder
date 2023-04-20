import React from "react";
import { TailSpin } from "react-loader-spinner";

export default function Loader() {
	return (
		<div>
			<TailSpin
				height='80'
				width='80'
				color='#BBBBBC'
				ariaLabel='tail-spin-loading'
				radius='1'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
			/>
		</div>
	);
}
