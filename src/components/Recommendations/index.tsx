"use client";
import React, { useState } from "react";
import MovieCard from "../../components/MovieCard/index";
import styles from "./Recommendations.module.css";
import { FaChevronLeft, FaChevronRight, FaRegStar } from "react-icons/fa";
import useSWR from "swr";
import MovieList from "../list";

interface Movie {
  id: number;
  title: string;
  popularity: number;
}

export default function Recommendations({
  initialMovies,
}: {
  initialMovies: Movie[];
}) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/27205/recommendations?api_key=${apiKey}`,
    fetcher
  );

  const movies = data?.results.slice(0, 20);

  const [currentPage, setCurrentPage] = useState(0);
  const moviesPerPage = 6;

  const totalPages = Math.ceil(movies?.length / moviesPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const displayedMovies = movies?.slice(
    currentPage * moviesPerPage,
    (currentPage + 1) * moviesPerPage
  );

  return (
    <>
      <div className={styles.title}> Recommendations</div>
      <div className={styles.carouselWrapper}>
        <button
          className={styles.arrowButton}
          onClick={handlePrevious}
          disabled={currentPage === 0}>
          <FaChevronLeft />
        </button>
        <div className={styles.listWrapper}>
          {displayedMovies?.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        <button
          className={styles.arrowButton}
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}>
          <FaChevronRight />
        </button>
      </div>
    </>
  );
}
