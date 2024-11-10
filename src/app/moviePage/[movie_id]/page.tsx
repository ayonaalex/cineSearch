import Image from "next/image";
import styles from "./page.module.css";
import { FaRegStar } from "react-icons/fa";

export type TCommonProps = {
  params: Promise<{ movie_id: string }>;
};
async function fetchMovies(apiKey: string, movieId: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default async function MovieDetailsPage({ params }: TCommonProps) {
  const { movie_id: movieId } = await params;
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  try {
    const movie = await fetchMovies(apiKey!, movieId);

    return (
      <div>
        <div
          className={styles.wrapper}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          }}></div>
        <div className={styles.parent}>
          <div className={styles.contentWrapper}>
            <Image
              height={513}
              width={342}
              alt={movie.title || "Movie backdrop"}
              className={styles.responsiveImage}
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            />
            <div className={styles.content}>
              <p className={styles.title}>{movie.title}</p>
              <p className={styles.deatail}>{movie.overview}</p>
              <p className={styles.rating}>
                Rating: {movie.vote_average.toFixed(2)} <FaRegStar size={13} />
              </p>
              <p className={styles.rating}>
                Release Date: {movie.release_date}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch movie:", error);
    return <div>Failed to load movie details</div>;
  }
}
