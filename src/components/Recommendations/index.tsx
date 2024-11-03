"use client";
import React from "react";
import useSWR from "swr";
import MovieList from "../MovieList/index";

interface Movie {
  id: number;
  title: string;
  popularity: number;
}

export default function Recommendations() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/27205/recommendations?api_key=${apiKey}`,
    fetcher
  );

  const movies = data?.results.slice(0, 40);

  return <MovieList initialMovies={movies} title="Recommendations" />;
}
