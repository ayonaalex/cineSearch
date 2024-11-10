import { filterMovies } from "./action";
import MovieCard from "@/components/MovieCard";
import styles from "../search/search.module.css";
import { TMovie } from "@/movie";

export type TGenreResults = {
  results: TMovie[];
};

export type TGenre = {
  searchParams: Promise<{ genre: string }>;
};

export default async function GenreSearchPage({ searchParams }: TGenre) {
  const { genre } = await searchParams;
  const movies: TGenreResults = genre
    ? await filterMovies(genre)
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
