import { filterMovies } from "./action";
import MovieCard from "@/components/MovieCard";
import styles from "../search/search.module.css";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { genre: string };
}) {
  const genre = searchParams.genre ?? "";
  const movies = genre ? await filterMovies(genre) : [];

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
