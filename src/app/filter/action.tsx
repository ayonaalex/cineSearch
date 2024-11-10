"use server";
import { TMovie } from "@/movie";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export type TSearchResults = {
  results: TMovie[];
};

export async function filterMovies(genre: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data: TSearchResults = await res.json();

  return {
    results: data.results,
  };
}
