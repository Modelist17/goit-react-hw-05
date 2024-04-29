import axios from "axios";

export const fetchMovieCast = async movieId => {
	const options = {
		method: "GET",
		url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
		params: { language: "en-US" },
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjUyYTMyNTM0ZmMzMThhYTRiZWNiN2FkMDAzOTZhMiIsInN1YiI6IjY2MmU4NmYwYTgwNjczMDEyNWU4ZWVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Q4lW2U0kA2Gt1hGS8ogNU9tnWFoSryxV561Bm2p87g",
		},
	};

	const { data } = await axios.request(options);
	return data;
};