import { useEffect } from "react";
import { useState } from "react";
import { fetchTrandMovies } from "../../services/apiTrandMovies.js";

export const useTrandMovies = () => {
	const [films, setfilms] = useState([]);

	useEffect(() => {
		async function fetchMovies() {
			try {
				const response = await fetchTrandMovies();
				setfilms(response.results);
			} catch (error) {
				console.log(error);
			}
		}
		fetchMovies();
	}, []);

	return films;
};