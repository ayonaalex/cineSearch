import { searchMovies } from "./actions";
import Link from "next/link";
import MovieCard from "@/components/MovieCard";
import styles from "./search.module.css";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const query = searchParams.query ?? "";
  const movies = query ? await searchMovies(query) : [];

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
