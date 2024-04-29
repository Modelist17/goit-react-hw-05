import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/apiMovieReviews";

const MovieReviews = () => {
	const { movieId } = useParams();
	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		async function fetchMovies() {
			try {
				const response = await fetchMovieReviews(movieId);
				setReviews(response.results);
			} catch (error) {
				console.log(error);
			}
		}
		fetchMovies();
	}, [movieId]);
	
	return (
		<div>
			{reviews.length > 0 ? (
				<ul>
					{reviews.map(el => (
						<li key={el.id}>
							<p>Author: {el.author}</p>
							<p>{el.content}</p>
						</li>
					))}
				</ul>
			) : (
				<p>Sorry! No reviews</p>
			)}
		</div>
	);
};

export default MovieReviews;