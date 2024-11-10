import { searchMovies } from "./actions";
import MovieCard from "@/components/MovieCard";
import styles from "./search.module.css";
import { TMovie } from "../../movie";

export type TSearchResults = {
  results: TMovie[] | [];
  total_pages?: string;
};

export type TSearch = {
  searchParams: Promise<{ query: string }>;
};

export default async function SearchPage({ searchParams }: TSearch) {
  const { query } = await searchParams;
  const movies: TSearchResults = query
    ? await searchMovies(query)
    : { results: [] };

  return (
    <div className={styles.pageWrapper}>
      {movies?.results?.map((movie: TMovie) => (
        <div className={styles.movieContainer} key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}
