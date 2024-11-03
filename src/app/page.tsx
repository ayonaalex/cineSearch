import styles from "./page.module.css";
import Slider from "@/components/Slider/index";
import Recommendations from "@/components/Recommendations";

async function fetchMovies(apiKey: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false`,
    { next: { revalidate: 3600 } } // Revalidate every hour
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;
}

export default async function Home() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  let initialMovies = [];

  try {
    initialMovies = await fetchMovies(apiKey);
  } catch (error) {
    console.error("Failed to fetch movies:", error);
  }

  return (
    <div className={styles.page}>
      <Slider />
      <Recommendations />
    </div>
  );
}
