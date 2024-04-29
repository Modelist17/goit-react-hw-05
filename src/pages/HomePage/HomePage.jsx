import MovieList from "../../components/MovieList/MovieList";
import { useTrandMovies } from "../../components/hooks/useTrandMovies";

const HomePage = () => {
	const films = useTrandMovies();
	return (
		<div>
			<MovieList movies={films} />
		</div>
	);
};

export default HomePage;