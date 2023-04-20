const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "33988247-485686e7226228f73d1e4aa27";
let pageCount = 1;

export const fetchImages = async imageName => {
	try {
		const response = await fetch(
			`${BASE_URL}?q=${imageName}&page=${pageCount}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
		);
		if (response.ok) {
			const images = await response.json();
			pageCount += 1;
			return images;
		}
	} catch (error) {
		throw new Error(error);
	}
};
