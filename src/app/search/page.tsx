import { searchMovies } from "./actions";
import MovieCard from "@/components/MovieCard";
import styles from "./search.module.css";

interface Movie {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface SearchResults {
  results: Movie[];
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const query = searchParams.query ?? "";
  const movies: SearchResults = query
    ? await searchMovies(query)
    : { results: [] };

  return (
    <div className={styles.pageWrapper}>
      {movies?.results?.map((movie) => (
        <div className={styles.movieContainer}>
          <MovieCard movie={movie} key={movie.id} />
        </div>
      ))}
    </div>
  );
}
