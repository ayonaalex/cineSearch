"use server";
const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
export async function searchMovies(query: string, page: number = 1) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}&page=${page}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();
  return {
    results: data.results,
    total_pages: data.total_pages,
  };
}
