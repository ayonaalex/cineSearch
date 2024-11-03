import { searchMovies } from "./actions";
import Link from "next/link";
import MovieCard from "@/components/movieCard";
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
        <Link href={`/moviePage/${movie.id}`}>
          <MovieCard movie={movie} key={movie.id} />
        </Link>
      ))}
    </div>
  );
}
