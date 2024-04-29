import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import { fetchSearchMovies } from "../../services/apiSearchMovies.js";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
	const [value, setValue] = useState("");
	const [films, setfilms] = useState([]);
	// const [query, setQuery] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("query");

	const handleSubmit = event => {
		event.preventDefault();
		// setQuery(value);
		setSearchParams({ query: value });
	};

	const handleChange = event => {
		setValue(event.target.value);
	};

	useEffect(() => {
		if (!query) return;
		async function fetchMovies() {
			try {
				const response = await fetchSearchMovies(query);
				setfilms(response.results);
			} catch (error) {
				console.log(error);
			}
		}
		fetchMovies();
	}, [query]);

	return (
		<div>
			<form onSubmit={handleSubmit} className={css.SearchForm}>
				<input
					className={css.SearchFormInput}
					onChange={handleChange}
					type="text"
					autoComplete="off"
					autoFocus
				/>
				<button className={css.SearchFormButton} type="submit">
					Search
				</button>
			</form>
			<MovieList movies={films} />
		</div>
	);
};

export default MoviesPage;