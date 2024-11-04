"use server";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
export async function filterMovies(genre: string, page: number = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();

  return {
    results: data.results,
  };
}
