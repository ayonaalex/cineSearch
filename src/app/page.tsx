import styles from "./page.module.css";
import Slider from "@/components/Slider/index";
import MovieList from "@/components/MovieList";
import { fetchMovies, Recommendations, topMovies } from "./movieActions";

export default async function Home() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  if (!apiKey) {
    throw new Error(
      "API key is missing. Please set NEXT_PUBLIC_TMDB_API_KEY in your environment variables."
    );
  }

  let initialMovies = [];
  let recommendedMovies = [];
  let topRatedMovies = [];

  try {
    initialMovies = await fetchMovies(apiKey);
  } catch (error) {
    console.error("Failed to fetch movies:", error);
  }

  try {
    recommendedMovies = await Recommendations(apiKey);
  } catch (error) {
    console.error("Failed to recommended Movies :", error);
  }

  try {
    topRatedMovies = await topMovies(apiKey);
  } catch (error) {
    console.error("Failed to topRatedMovies Movies :", error);
  }

  return (
    <div className={styles.page}>
      <Slider initialMovies={initialMovies} />
      <div className={styles.movieCards}>
        <MovieList
          initialMovies={topRatedMovies}
          title="Top Rated Movies Movies"
        />
      </div>
      <MovieList initialMovies={recommendedMovies} title="Recommendations" />;
    </div>
  );
}
